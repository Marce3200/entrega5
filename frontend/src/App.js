// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import './App.css';

import {
  Switch,
  Route,
  BrowserRouter as Router
} from 'react-router-dom'

import Home from './components/Home'
import Header from './components/Layout/Header'

import Profile from './components/Profile';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <>

        <Router>

          <Header />

          <Switch>
            
            {/* RUTAS PRIVADAS */}
            <Route path="/perfil" component={Profile} />

            {/* RUTAS DE AUTENTICACIÓN */}
            <Route path="/registro" component={Register} />
            <Route path="/iniciar-sesion" component={Login} />

            {/* RUTAS PÚBLICAS */}
            <Route path="/" component={Home} />
            

          </Switch>
        </Router>

    </>
  );
}

export default App;