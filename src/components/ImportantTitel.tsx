import styled from 'styled-components';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const ImportantTitleSection = styled.section`
  padding: 2rem;
  text-align: center;
`;

const ImportantTitleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 столбца */
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* На мобильных — 1 столбец */
  }
`;

const ImportantTitleCard = styled.div`
  padding: 1rem;
  border: 1px solid #d9d9d9;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const ButtonWrapper = styled.div`
  margin-top: 1.5rem; /* Отступ сверху для кнопки */
`;

const cardTexts = [
  'Управляйте своим бизнесом легко и удобно.',
  'Получайте аналитику в режиме реального времени.',
  'Интеграция с популярными сервисами.',
  'Безопасность данных на первом месте.',
  'Персонализированная поддержка клиентов.',
  'Гибкие тарифы под любой бизнес.'
];

export const ImportantTitle: React.FC = () => (
  <ImportantTitleSection>
    <h2>Наши возможности</h2>
    <ImportantTitleGrid>
      {cardTexts.map((text, index) => (
        <ImportantTitleCard key={index}>
          <p>{text}</p>
        </ImportantTitleCard>
      ))}
    </ImportantTitleGrid>
    <ButtonWrapper>
      <Link to="/contact">
        <Button type="primary">Связаться с нами</Button>
      </Link>
    </ButtonWrapper>
  </ImportantTitleSection>
);

