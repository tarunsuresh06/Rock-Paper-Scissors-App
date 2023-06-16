import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #223a5f;
  color: #ffffff;
  font-family: 'Roboto';
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 25px 40px;
`

export const ChoicesList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 500px;
`

export const ScoreBoard = styled.div`
  max-width: 800px;
  width: 100%;
  border: 3px solid #ffffff;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`

export const ScoreBoardText = styled.h1`
  font-size: 20px;
  font-weight: 400;
  font-family: 'Bree Serif';
`

export const ScoreBox = styled.div`
  background-color: #ffffff;
  padding: 10px;
  width: 200px;
  border-radius: 15px;
  font-family: 'Bree Serif';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ScoreText = styled.p`
  font-size: 27px;
  font-weight: 500;
  font-family: 'Bree Serif';
  color: #223a5f;
  margin: 10px;
`

export const Score = styled(ScoreText)`
  font-size: 35px;
  font-weight: 900;
  font-family: 'Roboto';
  margin: 10px;
`

export const GameOverContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const PlayersContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 500px;
`
export const PlayerItem = styled(GameOverContainer)``

export const PlayerText = styled.p`
  font-size: 20px;
  font-weight: 500;
  font-family: 'Roboto';
`

export const PlayerImage = styled.img`
  width: 180px;
`

export const MatchResultText = styled(PlayerText)`
  font-size: 27px;
`

export const CustomBtn = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  padding: 8px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  font-family: 'Bree Serif';
`

export const CloseBtn = styled.button`
  padding: 8px;
  cursor: pointer;
  align-self: flex-end;
`

export const RulesContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  width: 800px;

  @media screen and (max-width: 768px) {
    width: 300px;
  }
`

export const RulesImage = styled.img`
  width: 600px;

  @media screen and (max-width: 768px) {
    width: 250px;
  }
`
export const PopupContainer = styled.div`
  align-self: flex-end;
`
