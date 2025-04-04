import styled from 'styled-components';

const StyledFooter = styled.footer`
  background: #fff;
  color: black;
  padding: 1rem;
  text-align: center;
`;

export const Footer: React.FC = () => (
  <StyledFooter>
    <p>© 2025 Мой сайт. Все права защищены.</p>
  </StyledFooter>
);