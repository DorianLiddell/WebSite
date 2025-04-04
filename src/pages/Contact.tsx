import { Layout } from '../components/Layout';
import { Form, Input, Button, FormProps } from 'antd';
import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const ContactSection = styled.section`
  padding: 2rem;
  border: 1px solid #d9d9d9;
  background-color: #f5f5f5;
  border-radius: 4px;
`;

const StyledForm = styled(Form)<FormProps<FormValues>>`
  max-width: 600px;
  margin: 0 auto;
  .ant-form-item {
    margin-bottom: 1.5rem;
  }
`;

const StyledInput = styled(Input)`
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  padding: 8px 12px;
  transition: all 0.3s ease;
  &:hover { border-color: #40a9ff; }
  &:focus { border-color: #1890ff; box-shadow: 0 0 5px rgba(24, 144, 255, 0.5); outline: none; }
  &.ant-input-status-error { border-color: #ff4d4f; &:focus { box-shadow: 0 0 5px rgba(255, 77, 79, 0.5); } }
`;

const StyledTextArea = styled(Input.TextArea)`
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  padding: 8px 12px;
  transition: all 0.3s ease;
  &:hover { border-color: #40a9ff; }
  &:focus { border-color: #1890ff; box-shadow: 0 0 5px rgba(24, 144, 255, 0.5); outline: none; }
  &.ant-textarea-status-error { border-color: #ff4d4f; &:focus { box-shadow: 0 0 5px rgba(255, 77, 79, 0.5); } }
`;

export const Contact: React.FC = () => {
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const [form] = Form.useForm<FormValues>();
  const navigate = useNavigate();

  const onFinish = async (values: FormValues) => {
    try {
      const res = await axios.post('https://website-backend-7wze.onrender.com/api/submit', values);
      form.resetFields();
      navigate('/success', { state: { message: res.data.message } });
    } catch {
      setResponseMessage('Ошибка при отправке формы');
    }
  };

  return (
    <Layout>
      <Helmet>
        <title> Contact | Website</title>
        <meta name="description" content="Свяжитесь с нами через форму!" />
        <meta property="og:title" content="Contact | website" />
        <meta property="og:description" content="Свяжитесь с нами через форму!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://localhost:5173/contact" />
        <meta property="og:image" content="../img/main.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact | website" />
        <meta name="twitter:description" content="Свяжитесь с нами через форму!" />
        <meta name="twitter:image" content="../img/main.png" />
      </Helmet>
      <ContactSection>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Свяжитесь с нами</h2>
        <StyledForm
          form={form}
          onFinish={onFinish as (values: FormValues) => void}
          layout="vertical"
        >
          <Form.Item label="Имя" name="name" rules={[{ required: true, message: 'Введите имя!' }]}>
            <StyledInput placeholder="Ваше имя" />
          </Form.Item>
          <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Введите email!' }]}>
            <StyledInput type="email" placeholder="Ваш email" />
          </Form.Item>
          <Form.Item label="Сообщение" name="message" rules={[{ required: true, message: 'Введите сообщение!' }]}>
            <StyledTextArea rows={4} placeholder="Ваше сообщение" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Отправить
            </Button>
          </Form.Item>
        </StyledForm>
        {responseMessage && <p style={{ textAlign: 'center', color: '#ff4d4f' }}>{responseMessage}</p>}
      </ContactSection>
    </Layout>
  );
};