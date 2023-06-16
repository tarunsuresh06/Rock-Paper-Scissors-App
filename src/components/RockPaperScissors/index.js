import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import {
  MainContainer,
  ChoicesList,
  ScoreBoard,
  ScoreBoardText,
  ScoreBox,
  ScoreText,
  Score,
  GameOverContainer,
  PlayersContainer,
  PlayerItem,
  PlayerText,
  PlayerImage,
  MatchResultText,
  CustomBtn,
  CloseBtn,
  RulesContainer,
  RulesImage,
  PopupContainer,
} from './styledComponents'

import ChoiceItem from '../ChoiceItem'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class RockPaperScissors extends Component {
  state = {
    gameOver: false,
    matchResult: '',
    score: 0,
    player: {},
    opponent: {},
  }

  renderRulesView = () => (
    <PopupContainer>
      <Popup modal trigger={<CustomBtn type="button">Rules</CustomBtn>}>
        {close => (
          <RulesContainer>
            <CloseBtn type="button" onClick={() => close()}>
              <RiCloseLine width={20} height={20} color="#223a5f" />
            </CloseBtn>
            <RulesImage
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
            />
          </RulesContainer>
        )}
      </Popup>
    </PopupContainer>
  )

  handleChoiceBtn = playerChoice => {
    const randomChoice = choicesList[Math.floor(Math.random() * 3)]

    this.setState({
      gameOver: true,
      player: playerChoice,
      opponent: randomChoice,
    })

    if (randomChoice.id === playerChoice.id) {
      return this.setState({matchResult: 'IT IS DRAW'})
    }
    if (
      (playerChoice.id === 'ROCK' && randomChoice.id === 'SCISSORS') ||
      (playerChoice.id === 'SCISSORS' && randomChoice.id === 'PAPER') ||
      (playerChoice.id === 'PAPER' && randomChoice.id === 'ROCK')
    ) {
      return this.setState(prevState => ({
        matchResult: 'YOU WON',
        score: prevState.score + 1,
      }))
    }

    return this.setState(prevState => ({
      matchResult: 'YOU LOSE',
      score: prevState.score - 1,
    }))
  }

  renderStartingGameView = () => (
    <ChoicesList>
      {choicesList.map(eachChoice => (
        <ChoiceItem
          key={eachChoice.id}
          choiceDetails={eachChoice}
          handleChoiceBtn={this.handleChoiceBtn}
        />
      ))}
    </ChoicesList>
  )

  onClickPlayAgain = () => {
    this.setState({gameOver: false})
  }

  renderGameOverView = () => {
    const {player, opponent, matchResult} = this.state

    return (
      <GameOverContainer>
        <PlayersContainer>
          <PlayerItem>
            <PlayerText>You</PlayerText>
            <PlayerImage src={player.imageUrl} alt="your choice" />
          </PlayerItem>
          <PlayerItem>
            <PlayerText>OPPONENT</PlayerText>
            <PlayerImage src={opponent.imageUrl} alt="opponent choice" />
          </PlayerItem>
        </PlayersContainer>
        <MatchResultText>{matchResult}</MatchResultText>
        <CustomBtn type="button" onClick={this.onClickPlayAgain}>
          Play Again
        </CustomBtn>
      </GameOverContainer>
    )
  }

  renderScoreBoard = () => {
    const {score} = this.state
    return (
      <ScoreBoard>
        <div>
          <ScoreBoardText>
            ROCK <br /> PAPER <br /> SCISSORS
          </ScoreBoardText>
        </div>
        <ScoreBox>
          <ScoreText>Score</ScoreText>
          <Score>{score}</Score>
        </ScoreBox>
      </ScoreBoard>
    )
  }

  render() {
    const {gameOver} = this.state

    return (
      <MainContainer>
        {this.renderScoreBoard()}

        {gameOver ? this.renderGameOverView() : this.renderStartingGameView()}

        {this.renderRulesView()}
      </MainContainer>
    )
  }
}

export default RockPaperScissors
