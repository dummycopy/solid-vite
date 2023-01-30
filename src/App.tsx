import { Router,useRoutes } from '@solidjs/router'
import routes from './router'

const App = () => {

  const Routes  = useRoutes(routes);

  return (
    <Router>
      <Routes />
    </Router>
  )
};

export default App
