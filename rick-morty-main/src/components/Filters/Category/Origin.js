import React from 'react'


const Origin = () => {
  return (

           <div className="card" style={{width: '14rem',margin:'20px'}}>
                <div className="card-body">
                        <h4 className="card-title">Origin</h4>
                        <input type="checkbox" id="speciesCheckbox1" />
                        <label htmlFor="speciesCheckbox1"> Unknown</label><br/>
                        <input type="checkbox" id="speciesCheckbox2" />
                        <label htmlFor="speciesCheckbox2"> Post-Apocalyptic Earth</label><br/>
                        <input type="checkbox" id="speciesCheckbox1" />
                        <label htmlFor="speciesCheckbox1"> Nuptia 4</label><br/>
                        <input type="checkbox" id="speciesCheckbox2" />
                        <label htmlFor="speciesCheckbox2"> Other Origins</label>
           
                 </div>
                 
            </div>
  )
}
export default Origin;

