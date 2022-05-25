import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MainSection from './components/MainSection';

function App() {
  return (
    <div className="App">
      <section className="glasses-app bg-dark" style={{ height: '100vh'}}>
        <Header />
        <MainSection />
      </section>
    </div>
  );
}

export default App;
