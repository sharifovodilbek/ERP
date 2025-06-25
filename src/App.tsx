import { useContext } from 'react'
import { Context } from './context/Context'
import DashboardRoute from './routes/DashboardRoute'
import AuthRoutes from './routes/AuthRoutes'

function App() {

  const { token } = useContext(Context)
  return token ? <DashboardRoute /> : <AuthRoutes />


}

export default App
