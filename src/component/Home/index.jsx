import {Link} from 'react-router-dom';
import Header from "../Header";


import './index.css'

const Home = ()=>{




    return(

        <>
            <Header/>

            <div className="home-cont">

                <Link to="/jobs">
                <button className="btn btn-primary">All Jobs</button>
                </Link>
            </div>
        
        
        </>

    )
}




export default Home;