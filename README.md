## Технологии

### Фронтенд
- **React** + **TypeScript**: Основной фреймворк и язык.
- **Vite**: Сборка и разработка.
- **Styled-components**: Стилизация компонентов.
- **Ant Design (antd)**: UI-компоненты (кнопки, формы).
- **React Helmet**: SEO и мета-теги (Open Graph, Twitter Cards).
- **React Router**: Навигация между страницами.
- **Axios**: Отправка запросов на бэкенд.

### Бэкенд
- **Node.js** + **Express**: Простой сервер для обработки POST-запросов.
- **CORS**: Поддержка кросс-доменных запросов.


## Установка

### Предварительные требования
- Node.js (версия 16+)
- npm (или yarn)

### Фронтенд
1. Склонируйте репозиторий: `git clone https://github.com/DorianLiddell/WebSite.git`
2. Перейдите в папку `my-website`: `cd my-website`
3. Установите зависимости: `npm install`
4. Запустите: `npm run dev`

### Бэкенд
1. Перейдите в папку `backend`: `cd backend`
2. Установите зависимости: `npm install`
3. Запустите: `npm start`

## Страницы
- `/` — главная с видео.
- `/contact` — форма с кастомными полями.
- `/success` — ответ сервера.

## Предупреждения
- `UNSAFE_componentWillMount` от `antd` в `StrictMode`.
- `[Violation]` от YouTube-скриптов.
