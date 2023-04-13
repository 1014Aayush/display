import React  from 'react'
import { ReactDOM } from 'react-dom/client'
import Jobs from './components/jobs';
import Profile from './components/profile';


export default function App()
{
  return(
    <div className='files'>
      <div className='contain'>
        <div class="left">
          <h1>Filter</h1>
            <form className="Location">
              <h2>Location</h2>
              <input type="radio" id="html" name="fav_language" value="HTML"></input>
              <label for="html">Butwal</label><br></br>
              <input type="radio" id="css" name="fav_language" value="CSS"></input>
              <label for="css">Kathmandu</label><br></br>
              <input type="radio" id="javascript" name="fav_language" value="JavaScript"></input>
              <label for="javascript">Dhulikhel</label><br></br>
            </form>
        
            <form className="Salary">
              <h2>Salary</h2>
              <input type="radio" id="html" name="fav_language" value="HTML"></input>
              <label for="html">Rsx</label><br></br>
              <input type="radio" id="css" name="fav_language" value="CSS"></input>
              <label for="css">Rsx</label><br></br>
              <input type="radio" id="javascript" name="fav_language" value="JavaScript"></input>
              <label for="javascript">Rsx</label><br></br>
            </form>
            
        </div>
        <div className="right">
          <form className='SearchTab'>
            <input className='Jobname' type="text" />
            <input className='locn' type="text" />
          </form>
            <Jobs/>
            <Jobs/>
            <Jobs/>
            
      </div>
      </div>
      <Profile/>
    </div>
      

  );
}