import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// importando as dependecias para criar as rotas
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Aluno from './routes/Aluno.jsx'
import Sobre from './routes/Sobre.jsx'


//Criando a função CreateBrowserRouter

const router =createBrowserRouter([
  {
    //Criando as rotas pai com rotas
    path:'/',element:<App/>,
    errorElement:<Error/>,

    //Criando rotas filhos com rotas
    children:[
      {path:'/',element:<Home/>},
      {path:'/Aluno',element:<Aluno/>},
      {path:'/Sobre',element:<Sobre/>},
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Criando o DESESTRUCT ROUTER para ser renderizado */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
