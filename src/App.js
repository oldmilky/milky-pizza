import './App.css';
import Categories from './components/Categories/Categories';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Categories />
      <Main />
    </div>
  );
}

export default App;
