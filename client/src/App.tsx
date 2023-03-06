
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import MainPage from './pages/main/main';
import Status from './pages/status/status';
import History from './pages/history/history';
import Signin from './pages/signin/signin';
import MainLog from './pages/main/mainxlog';
import Signup from './pages/signup/signup';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainLog/>} />      
        <Route path="/" element={<MainPage />}  />
        <Route path="/status" element={<Status />} />
        <Route path="/history" element={<History />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
