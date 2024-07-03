import React from 'react'
import Gender from '../Filters/Category/Gender';
import Origin from '../Filters/Category/Origin';
import Species from './Category/Species';

const Filters = () => {
  return (
    <div className="col-lg-3 col-12 mb-5">
        <div >
        <h4 className= "left fw-bold">Filters </h4>
        </div>

<Species/>
<Gender/>
<Origin/>

    </div>
  )
}

export default Filters
