import { Layout } from '../components/Layout';
import styled from 'styled-components';
import { LazyYouTube } from '../components/LazyYouTube';
import { ImportantTitle } from '../components/ImportantTitel';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const HeroSection = styled.section`
  display: flex;
  padding: 2rem;
  gap: 2rem;
  border: 1px solid #d9d9d9; /* Границы */
  background-color: #f5f5f5; /* Серый фон */
  border-radius: 4px; /* Скругленные углы */
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextBlock = styled.div`
  flex: 1;
`;

const VideoBlock = styled.div`
  flex: 1;
`;

const LessImportantTitleSection = styled.section`
  padding: 2rem;
  border: 1px solid #d9d9d9; /* Границы */
  background-color: #f5f5f5; /* Серый фон */
  border-radius: 4px; /* Скругленные углы */
  text-align: center; /* Центрируем содержимое */
  margin-top: 2rem; /* Отступ сверху от ImportantTitle */
`;

export const Home: React.FC = () => (
  <Layout>
    <Helmet>
      <title> Home | Website</title>
      <meta name="description" content="Свяжитесь с нами через форму!" />
      <meta property="og:title" content="Home | website" />
      <meta property="og:description" content="Свяжитесь с нами через форму!" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://localhost:5173/contact" />
      <meta property="og:image" content="../img/main.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Home | website" />
      <meta name="twitter:description" content="Свяжитесь с нами через форму!" />
      <meta name="twitter:image" content="../img/main.png"  />
    </Helmet>
    <HeroSection>
      <TextBlock>
        <h2>Добро пожаловать!</h2>
        <p>Это пример сайта с видео и формой обратной связи.</p>
      </TextBlock>
      <VideoBlock>
        <LazyYouTube videoId="dQw4w9WgXcQ" />
      </VideoBlock>
    </HeroSection>
    <ImportantTitle />
    <LessImportantTitleSection>
      <h2>Готовы связаться?</h2>
      <Link to="/contact">
        <Button type="primary">Перейти к контактам</Button>
      </Link>
    </LessImportantTitleSection>
  </Layout>
);