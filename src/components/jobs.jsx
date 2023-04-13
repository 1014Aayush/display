import React  from 'react';
import { ReactDOM } from 'react-dom/client';


export default function Jobs(props){
    return(
    
        <div className='innerbox'>
            <div class="innerflex">
                <div className='logo'></div>
                <div className='texxt'>
                    <div className='Org'>Organization</div>
                    <div className='JobTitle'>Job Title</div>
                    <div className="icons">
                        <div className='Address'>Address</div>
                        <div className='Salary'>Salary</div>
                        <div className='Time'>Time</div>
                    </div>
                    <div className="Description">Description</div>
                </div>
            </div>
        </div>
    
    );
}