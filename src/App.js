import logo from './logo.svg';
import './App.css';
import Todo from './Todo/Todo';
import Counter from './component/counter';
import Navbar from './component/Navbar.jsx';
import AllRoute from './router/AllRouter.jsx';




function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoute />
    </div>
  );
}

export default App;
