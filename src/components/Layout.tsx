import { Header } from './Header';
import { Footer } from './Footer';
import styled from 'styled-components';

const Main = styled.main`
  min-height: calc(100vh - 140px); 
`;

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </>
);