import {ChoiceListItem, ChoiceImage, ChoiceBtn} from './styledComponents'

const ChoiceItem = props => {
  const {choiceDetails, handleChoiceBtn} = props

  const {imageUrl, id} = choiceDetails

  const onClickChoiceBtn = () => {
    handleChoiceBtn(choiceDetails)
  }

  const testId = id.toLowerCase()

  return (
    <ChoiceListItem>
      <ChoiceBtn
        data-testid={`${testId}Button`}
        type="button"
        onClick={onClickChoiceBtn}
      >
        <ChoiceImage src={imageUrl} alt={id} />
      </ChoiceBtn>
    </ChoiceListItem>
  )
}

export default ChoiceItem
