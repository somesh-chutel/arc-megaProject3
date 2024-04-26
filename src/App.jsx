import {Routes,Route} from 'react-router-dom';
import Home from './component/Home';
import Jobs  from './component/Jobs';
import Login from './component/Login';
import NotFound from './component/NotFound';
import Protectedroute from './component/protectedRoute';
import DisplayJobsitemDetails from './component/jobsItemsDetails';


const App = ()=> (
  <Routes>

          <Route path="/" element={<Protectedroute Component={Home}/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/jobs" element={<Protectedroute Component={Jobs}/>}></Route>
          <Route path="/jobs/:id" element={<Protectedroute Component={DisplayJobsitemDetails}/>}></Route>
          <Route path="/*" element={<NotFound/>}></Route>

  </Routes>
)




export default App;