 import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/index.ts';
import { loadTokenFromStorage } from './services/tokenService.ts';

if (localStorage.token) {
  loadTokenFromStorage();
}
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);