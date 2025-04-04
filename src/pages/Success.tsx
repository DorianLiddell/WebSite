import { Layout } from '../components/Layout';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const Message = styled.p`
  text-align: center;
  color: #52c41a; 
  font-size: 1.2rem;
  margin: 2rem 0;
`;

const SuccessSection = styled.section`
  min-height: 100vh;
  padding-top: 6rem;
  border: 1px solid #d9d9d9;
  background-color: #f5f5f5;
  border-radius: 4px;
  
`;

export const Success: React.FC = () => {
  const location = useLocation();
  const message = (location.state as { message: string } | undefined)?.message || 'Спасибо за ваш запрос!';

  return (
    <Layout>
      <Helmet>
  <title> Success | Website</title>
  <meta name="description" content="Свяжитесь с нами через форму!" />
  <meta property="og:title" content="Success | website" />
  <meta property="og:description" content="Свяжитесь с нами через форму!" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="http://localhost:5173/contact" />
  <meta property="og:image" content="../img/main.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Success | website" />
  <meta name="twitter:description" content="Свяжитесь с нами через форму!" />
  <meta name="twitter:image" content="../img/main.png" />
</Helmet>
      <SuccessSection>
      <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>Успешная отправка</h2>
      <Message>{message}</Message>
      <div style={{ textAlign: 'center' }}>
        <Link to="/contact">
          <Button type="primary">Отправить ещё одно сообщение</Button>
        </Link>
      </div>
      </SuccessSection>
    </Layout>
  );
};