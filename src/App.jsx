import React  from 'react'
import { ReactDOM } from 'react-dom/client'
import Jobs from './components/jobs';
import Profile from './components/profile';
import RadioButtons from './components/radioButtons';


export default function App()
{
  return(
    <div className='files'>
      <div className='contain'>
        <div class="left">
          <h1>Filter</h1>
            <RadioButtons title="Location" value1="Butwal" value2="Kathmandu" value3="Dhulikhel"/>
            <RadioButtons title="Salary" value1="Rs:x" value2="Rs:x" value3="Rs:x"/>

        </div>
        <div className="right">
          <form className='SearchTab'>
            <input className='Jobname' type="text" />
            <input className='locn' type="text" />
          </form>
            <Jobs organization="Organization Name" job_Title="Job Name" Address="Address" Salary="Salary" Time="Time" Description="Description Here"/>
            <Jobs organization="Organization Name" job_Title="Job Name" Address="Address" Salary="Salary" Time="Time" Description="Description Here"/>
            <Jobs organization="Organization Name" job_Title="Job Name" Address="Address" Salary="Salary" Time="Time" Description="Description Here"/>
            
      </div>
      </div>
      <Profile/>
    </div>
      

  );
}