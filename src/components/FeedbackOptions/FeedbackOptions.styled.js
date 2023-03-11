import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  height: auto;
  padding: 10px 15px;
  margin-right: 20px;
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  line-height: 1.5;
  text-transform: capitalize;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
  &:hover,
  &:focus {
    background-color: rgba(120, 124, 177, 0.701);
    transform: translateY(-2px);
    transition: cubic-bezier(0.075, 0.82, 0.165, 1);
    box-shadow: 1px 1px 6px rgba(107, 107, 107, 0.778);
  }
`;
