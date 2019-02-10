import styled from 'styled-components';

const Container = styled.p`
  font-size: 14px;
  margin-top: 10px;
  margin-top: 10px;
`;

const Button = styled.button`
  color: #db8c6c;
  font-size: 12px;
  display: inline-block;
  margin-right: 20px;
  outline: 0;
  border: none;
  cursor: pointer;
  background-color: transparent;
  text-decoration: underline;

  &:hover {
    color: rgba(219, 140, 108, 0.49);
  }
`;

export { Button, Container };
