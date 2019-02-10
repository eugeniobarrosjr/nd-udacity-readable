import styled from 'styled-components';

const Container = styled.div`
  background-color: #f8f6f4;
  margin: 20px;
  padding: 50px;
  border-radius: 5px;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 5px;
  margin-left: 40px;
  margin-right: 40px;
  margin-bottom: 10px;
`;

const Body = styled.p`
  color: #5e625d;
  font-size: 16px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const PostInfo = styled.p`
  font-size: 12px;
  color: #5e625d;
  font-weight: bold;
  margin-bottom: 5px;
`;

const PostInfoLink = styled.a`
  color: #db8c6c;
  font-size: 14px;
  outline: 0;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: rgba(219, 140, 108, 0.49);
  }
`;

const HeaderTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
`;

const HeaderBar = styled.div`
  background-color: #3d403c;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
  height: 100px;
`;

const Header = styled.h2`
  color: #db8c6c;
  text-align: center;
  margin-bottom: 20px;
`;

export {
  Body,
  Container,
  Header,
  HeaderBar,
  HeaderTitle,
  PostInfo,
  PostInfoLink,
};
