import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import store from './store/store';
import './styles/index.scss'
import HomePage from './pages/home/Home';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <HomePage />
    </Provider>
  </StrictMode>,
)
