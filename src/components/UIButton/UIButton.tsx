import { ButtonContainer } from './UIButton.styled'

interface UIButtonProps {
  onClick: any
  id?: string
  style?: any
}

function UIButton({ onClick, id, style }: UIButtonProps) {
  return (
    <ButtonContainer style={style} type="button" onClick={onClick} id={id}>
      Добавить задачу
    </ButtonContainer>
  )
}

export default UIButton
