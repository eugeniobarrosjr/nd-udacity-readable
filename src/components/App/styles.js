import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
  color: #ffffffaa;
  margin-top: 30px;
  margin-bottom: 50px;
`;

const ListItem = styled.li`
  text-align: center;
  margin-top: 5px;
  a {
    text-decoration: none;
    font-weight: bold;
    color: #fff;
    font-size: 18px;

    &:hover {
      color: #ffffffaa;
    }
  }
`;

const Container = styled.div`
  display: flex;
  height: 100% !important;
`;

const Sidebar = styled.div`
  background-color: #db8c6c;
  min-width: 300px;
  position: fixed;
  height: 100%;
`;

const Content = styled.div`
  width: 100%;
  margin-left: 300px;
  flex: 5;
`;

export { Container, Title, ListItem, Content, Sidebar };
