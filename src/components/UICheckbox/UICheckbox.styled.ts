import styled from 'styled-components'

export const CheckboxContainer = styled.div<{ isDone: boolean }>`
  width: 16px;
  height: 16px;

  background-color: ${(props) => (props.isDone ? 'palevioletred' : 'white')};

  border: 1px solid black;
  border-radius: 4px;

  cursor: pointer;
`
