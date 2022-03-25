import styled from 'styled-components'

export const TaskItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 8px;
  padding: 10px 15px;

  width: 200px;

  border: 1px solid transparent;

  &:hover {
    border: 1px solid;
    border-radius: 8px;
  }
`

export const TaskItemTitle = styled.span<{ isDone: boolean }>`
  margin-left: 6px;

  color: black;
  text-decoration: ${(props) => (props.isDone ? 'line-through' : 'none')};
`
