import {Routes,Route} from 'react-router-dom';
import Home from './component/Home';
import Jobs  from './component/Jobs';
import Login from './component/Login';
import NotFound from './component/NotFound';

const App = ()=> (
  <Routes>

          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/jobs" element={<Jobs/>}></Route>
          <Route path="/*" element={<NotFound/>}></Route>

  </Routes>
)




export default App;