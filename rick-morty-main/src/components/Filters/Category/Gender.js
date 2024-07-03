import React from 'react'


const Gender = () => {
  return (

           <div className="card" style={{width: '14rem', margin:'20px'}}>
                <div className="card-body">
                        <h4 className="card-title">Gender</h4>
                        <input type="checkbox" id="speciesCheckbox1" />
                        <label htmlFor="speciesCheckbox1"> Male</label><br/>
                        <input type="checkbox" id="speciesCheckbox2" />
                        <label htmlFor="speciesCheckbox2"> Female</label>
    
    
                 </div>
                 
            </div>



  )
}

export default Gender;

