import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Entries from './Entries';
import LogIn from './LogIn';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path={'/'}  element={<LogIn/>} exact/>
          <Route path={"/entries"} element={<Entries/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
