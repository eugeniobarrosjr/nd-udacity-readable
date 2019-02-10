import styled from 'styled-components';

const HeaderTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
`;

const Button = styled.input`
  margin-left: 10px;
  margin-top: 10px;
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

const Label = styled.label`
  color: #5e625d;
  font-size: 14px;
  margin-top: 10px;
  margin-right: 10px;
  margin-left: 10px;
`;

const Input = styled.input`
  height: 25px;
  width: 300px;
  text-align: center;
  padding: 5px;
  margin-top: 10px;
  border-radius: 5px;
  border: 1px solid #e9e5e1;
`;

const Select = styled.select`
  height: 30px;
  background: #fff;
  width: 300px;
  text-align: center;
  padding: 5px;
  margin-top: 10px;
  border-radius: 5px;
  border: 1px solid #e9e5e1;
`;

const TextBox = styled.textarea`
  width: 300px;
  text-align: center;
  padding: 5px;
  margin-top: 10px;
  border-radius: 5px;
  border: 1px solid #e9e5e1;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  background-color: 'red';
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

const HeaderBar = styled.div`
  background-color: #3d403c;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
  height: 100px;
`;

export {
  Button,
  Container,
  HeaderBar,
  HeaderTitle,
  Input,
  Label,
  Select,
  TextBox,
};
