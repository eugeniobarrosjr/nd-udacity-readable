import styled from 'styled-components';

const PostInfo = styled.p`
  font-size: 12px;
  color: #5e625d;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Container = styled.div`
  padding-top: 5px;
  margin-top: 10px;
  border-top: 1px solid #e9e5e1;
`;

const Body = styled.p`
  margin-top: 20px;
  color: #5e625d;
  font-size: 16px;
  margin-bottom: 20px;
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

export { Container, Body, PostInfoLink, PostInfo };
