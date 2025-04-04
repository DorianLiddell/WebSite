import { Button } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  background: #fff;
  color: black;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HomeIcon = styled(HomeOutlined)`
  font-size: 24px;
  color: #1890ff;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #40a9ff;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0;
  line-height: 1;
  display: flex;
  align-items: center;
`;

export const Header: React.FC = () => (
  <StyledHeader>
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <Link to="/">
        <HomeIcon />
      </Link>
      <Title>Website</Title>
    </div>
    <Link to="/contact">
      <Button type="primary">Связаться с нами</Button>
    </Link>
  </StyledHeader>
);