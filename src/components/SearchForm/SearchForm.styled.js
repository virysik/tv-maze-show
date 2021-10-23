import styled from '@emotion/styled'

export const Input = styled.input`
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 8px;
  padding-right: 8px;
  margin-right: 10px;

  font-weight: 700;

  border: none;
  border-radius: 4px;
`

export const Btn = styled.button`
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 8px;
  padding-right: 8px;
  margin-right: 10px;

  font-weight: 700;

  color: var(--dark-color);
  border: none;
  border-radius: 4px;
  transform: scale(1);
  transition: all 0.2s ease-in-out;

  :hover,
  :focus {
    transform: scale(1.1);
  }
`
