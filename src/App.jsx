import React  from 'react'
import { ReactDOM } from 'react-dom/client'
import Jobs from './components/jobs';
import Profile from './pages/profile';
import RadioButtons from './components/radioButtons';
import JobAppliedList from './pages/jobAppliedList';
import Jobpage from './pages/jobpage';


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