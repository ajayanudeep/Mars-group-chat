import './App.css';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import TopHosts from './components/TopHosts'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className='main'>
        <div className='box1'>
          <Sidebar></Sidebar>
        </div>
        <div className='box2'>
          <Content></Content>
        </div>
        <div className='box3'>
          <TopHosts></TopHosts>
        </div>
      </div>
    </div>
  );
}

export default App;
