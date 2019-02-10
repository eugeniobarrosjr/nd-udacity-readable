import { Link } from 'react-router-dom';

import styled from 'styled-components';

const NotFound = styled.h1`
  width: 210px;
  border-radius: 20px;
  padding: 20px;
  display: block;
  margin: 50px auto;
  background-color: #edeae7;
  color: #a0a19f;
  margin-top: 50px;
`;

const AddButton = styled(Link)`
  background-color: #db8c6c;
  border-radius: 15px;
  border: none;
  color: #fff;
  cursor: pointer;
  display: block;
  font-size: 14px;
  font-weight: bold;
  height: 30px;
  line-height: 1.2;
  min-width: 140px;
  outline: none;
  padding-top: 14px;
  text-align: center;
  text-decoration: none;
  &:hover {
    background-color: #d48166;
  }
`;

const Container = styled.div`
  border-bottom: 1px solid #db8c6c;
  border-left: 1px solid #db8c6c;
  max-width: 400px;
  margin: 20px auto;
`;

const HeaderTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
`;

const Header = styled.div`
  background-color: #3d403c;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
  height: 100px;
`;

const Spotlight = styled.span`
  background-color: #d48166;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  padding: 5px;
  display: block;
`;

const Button = styled.button`
  color: #db8c6c;
  background-color: #fff;
  height: 30px;
  min-width: 100px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  border: 0;
  border-right: 1px solid #db8c6c;
  outline: 0;

  &:hover {
    background-color: #d48166;
    color: #fff;
    text-decoration: underline;
  }
`;

export {
  Header,
  NotFound,
  HeaderTitle,
  AddButton,
  Button,
  Spotlight,
  Container,
};
