import styled from 'styled-components';

export const ButtonReset = styled.button`
  font-weight: 700;
  font-size: 14px;
  color: azure;
  margin-top: 25px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: blue;
  border: none;
  border-radius: 25px;
  padding: 6px 12px;
  box-shadow: 0 3px 15px 0 rgba(11, 99, 246, 1);
  transition: 0.7s;

  &:hover {
    transform: translate(0, -3px);
    box-shadow: 0 5px 30px 10px rgba(11, 99, 246, 1);
  }
`;
