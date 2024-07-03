import React from 'react'


const Species = () => {
  return (

           <div className="card" style={{width: '14rem', margin:'20px'}}>
                <div className="card-body">
                        <h4 className="card-title">Species</h4>
                        <input type="checkbox" id="speciesCheckbox1" />
                        <label htmlFor="speciesCheckbox1"> Human</label><br/>
                        <input type="checkbox" id="speciesCheckbox2" />
                        <label htmlFor="speciesCheckbox2"> Mythology</label><br/>
                        
                        <input type="checkbox" id="speciesCheckbox3" />
                        <label htmlFor="speciesCheckbox3"> Other Species</label>
    
    
                 </div>
                 
            </div>



  )
}

export default Species;

