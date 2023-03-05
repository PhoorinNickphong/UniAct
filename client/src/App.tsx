
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import MainPage from './pages/main';
import Status from './pages/status';
import Register from './pages/register';
import History from './pages/history';
import Signin from './pages/signin';
import MainLog from './pages/mainxlog';
import Signup from './pages/signup';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainLog/>} />      
        <Route path="/main" element={<MainPage />}  />
        {/* <Route path="/signin" element={ <Signin />} />
        <Route path="/register" element={<Register />} /> */}
        <Route path="/status" element={<Status />} />
        <Route path="/history" element={<History />} />
        <Route path="/sigin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
