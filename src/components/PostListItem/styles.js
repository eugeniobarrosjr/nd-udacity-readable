import styled from 'styled-components';

import { Link } from 'react-router-dom';

const Container = styled.div`
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

const HeaderLink = styled(Link)`
  color: #5e625d;
  text-decoration: none;
  padding-bottom: 0;
  margin-top: 10px;

  &:hover {
    color: #3d403c;
  }
`;

const PostInfo = styled.p`
  font-size: 12px;
  color: #5e625d;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Comments = styled.p`
  font-size: 12px;
  color: #5e625d;
  font-weight: bold;
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

export { Container, HeaderLink, Comments, Body, PostInfo, PostInfoLink };
