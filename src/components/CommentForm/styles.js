import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: row;
`;

const Button = styled.input`
  margin-left: 10px;
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
  margin-right: 10px;
  margin-left: 10px;
`;

const Input = styled.input`
  height: 25px;
  width: 200px;
  border-radius: 5px;
  border: 1px solid #e9e5e1;
`;

export { Input, Button, Label, Form };
