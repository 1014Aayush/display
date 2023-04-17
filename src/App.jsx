import React  from 'react'
import { ReactDOM } from 'react-dom/client'
import Jobs from './components/jobs';
import Profile from './components/profile';
import RadioButtons from './components/radioButtons';
import JobAppliedList from './components/jobAppliedList';
import Jobpage from './components/jobpage';


export default function App()
{
  return(
    <div className='files'>
      <Jobpage/>
      <Profile/>
      <JobAppliedList/>
    </div>
      

  );
}