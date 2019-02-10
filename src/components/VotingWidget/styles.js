import styled from 'styled-components';

const Container = styled.p`
  font-size: 16px;
  margin-top: 20px;
`;

const Vote = styled.span`
  color: #373a36;
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  margin-left: 10px;
  margin-right: 10px;
  width: 20;
`;

const Button = styled.button`
  background-color: #db8c6c;
  border-radius: 15px;
  border: none;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  height: 30px;
  line-height: 1.2;
  min-width: 100px;
  outline: none;
  text-align: center;
  &:hover {
    background-color: #d48166;
  }
`;

export { Container, Button, Vote };
