import styled from 'styled-components';

export const Button = styled.button`
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--lightSalmon);
  border-color: ${props => props.cart ? "var(--lightSeaGreen)" : "var(--lightSalmon)"};
  color: ${props => props.cart ? "var(--lightSeaGreen)" : "var(--lightSalmon)"};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover{
    background: ${props => props.cart ? "var(--lightSeaGreen)" : "var(--lightSalmon)"};
    color: var(--white);
  }
  &:focus{
    outline: none;
  }
`;