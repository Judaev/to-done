import { CheckboxContainer } from './UICheckbox.styled'

interface UICheckboxProps {
  isDone: boolean
  onClick: any
  isDisabled?: boolean
}

function UICheckbox({ isDone, onClick, isDisabled }: UICheckboxProps) {
  return <CheckboxContainer isDone={isDone} onClick={onClick} />
}

export default UICheckbox
