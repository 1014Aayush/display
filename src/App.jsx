import React  from 'react'
import { ReactDOM } from 'react-dom/client'
import './index.css'
import Jobs from './jobs';


export default function App()
{
  return(
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
            <h2>Location</h2>
            <input type="radio" id="html" name="fav_language" value="HTML"></input>
            <label for="html">Rsx</label><br></br>
            <input type="radio" id="css" name="fav_language" value="CSS"></input>
            <label for="css">Rsx</label><br></br>
            <input type="radio" id="javascript" name="fav_language" value="JavaScript"></input>
            <label for="javascript">Rsx</label><br></br>
          </form>
          
      </div>
      <div className="right">
        <div className='text'>Jobss</div>
          <Jobs/>
          <Jobs/>
          
      </div>
      </div>

  );
}