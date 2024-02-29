import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
// import { RoutesMain } from './routes/RoutesMain.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <RoutesMain> */}
        <App /> 
      {/* </RoutesMain> */}
    </BrowserRouter>
  </React.StrictMode>,
)
