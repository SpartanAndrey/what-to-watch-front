import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Setting = {
  PromoTitle: 'The Grand Budapest Hotel',
  PromoGenre: 'Drama',
  PromoYear: 2014
} as const;

root.render(
  <React.StrictMode>
    <App
      promoTitle = {Setting.PromoTitle}
      promoGenre = {Setting.PromoGenre}
      promoYear = {Setting.PromoYear}
    />
  </React.StrictMode>,
);
