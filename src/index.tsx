import { FormProvider } from 'context/FormState';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <FormProvider>
      <App />
    </FormProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
