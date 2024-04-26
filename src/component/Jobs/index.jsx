import { useEffect, useState } from "react";
import Cookies from 'js-cookies';
import Header from "../Header";
import DisplayAllJobs from "../DisplayAllJobs";
import FilterSection from "../FilterSection";

import './index.css';



const Jobs = ()=>{
    const [allValues,setValues] = useState({
        alljobsList:[],
        showErrorMsg:false,
        empType:[],
        minPakage:"",
        searchInput:""
    })

    const token = Cookies.getItem("jwtToken");

    useEffect(()=>{

      console.log(allValues.empType);
        
        const fetchJobsData = async()=>{

        const url = `https://apis.ccbp.in/jobs?employment_type=${allValues.empType}&minimum_package=${allValues.minPakage}&search=${allValues.searchInput}`;

        const options = {
            method: 'GET',
            headers : {
                Authorization : `Bearer ${token}`
            }
          }

          const response = await fetch(url,options);
          const fetchData = await response.json();
          if(response.ok===true){
            setValues({...allValues,alljobsList:fetchData.jobs,showErrorMsg:false})
          }
          else{
            setValues({...allValues,showErrorMsg:true})
          }

        }

        fetchJobsData();

    },[allValues.searchInput,allValues.empType])

    const onChangeSearchInput = (event)=>{

      if(event.key==="Enter"){
        setValues({...allValues,searchInput:event.target.value});
      }
    }

    const onChangeEmpType = (value,isCheked)=>{
      if(isCheked===true){
        setValues({...allValues,empType:[...allValues.empType,value]})
      }
      else{
        setValues({...allValues,empType:allValues.empType.filter(each=>each!==value)})
      }
      //------>[1]--->1,value--->[1,value,value2,value3]
    }

    return (
            <div className="jobs-cont">
                <Header/>

                {allValues.showErrorMsg?(<h1>Its Not You Its Us!!!!</h1>):(

                      <div className="jobs-section">

                        <div className="filter-section">
                            <FilterSection onChangeEmpType={onChangeEmpType}/>
                        </div>
                        <div className="all-jobs-section">
                          <input onKeyDown={onChangeSearchInput} type="search" className="form-control w-50" />
                          <ul className="w-100">
                              {
                                allValues.alljobsList.map(each=>
                                  
                                  <DisplayAllJobs jobsItem={each} key={each.id}/>
                                  
                                )
                              }

                          </ul>
                            
                        </div>

                      </div>


                )}

                
            
            
            </div>

    )
}




export default Jobs;