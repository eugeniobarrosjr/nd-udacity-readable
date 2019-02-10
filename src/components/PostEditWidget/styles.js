import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.p`
  font-size: 14px;
  margin-top: 5px;
`;

const Button = styled(Link)`
  color: #db8c6c;
  font-size: 12px;
  display: inline-block;
  margin-right: 20px;
  outline: 0;
  text-decoration: underline;

  &:hover {
    color: rgba(219, 140, 108, 0.49);
  }
`;

export { Button, Container };
