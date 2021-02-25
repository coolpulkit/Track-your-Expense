import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';
import { Provider } from './context/context'; 
import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId="891bc4f2-85a7-4c52-b202-8bd175f28ba6" language="en-US">
      <Provider>
        <App />
      </Provider>
    </SpeechProvider>,
    document.getElementById('root'),
);