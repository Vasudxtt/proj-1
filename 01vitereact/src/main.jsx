import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// function React(){
//   return(
//   <div>
//     <h1>
//       Fuck Off
//     </h1>
//   </div>
//   )
// }

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
