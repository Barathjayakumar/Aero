import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Signin from './components/Signin';
import Booking from './components/Booking';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <Main/>
      <Signup/>
      {/* 
      <Booking/> */}
      {/* <Signin/> */}
    </div>
  );
}

export default App;
