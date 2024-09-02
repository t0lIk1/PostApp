import {createContext, StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './components/App/App.jsx'
import './style/normalize.css'
import './style/index.css'
import Store from "./store/store.js";

const store = new Store();
export const Context = createContext({
  store,
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Context.Provider value={{store}}>
      <App/>
    </Context.Provider>
  </StrictMode>,
)
