import React from 'react';
import styles from './Cards.module.css';

const Cards = ({results}) => {
    //console.log(results);
    let display;
    console.log(results);

    if(results) {
      display = results.map((x) => {
        let {id, name, image, created,status,species,origin,location} =x;
        return (
           <div key ={id} className="col-lg-3 col-md-6 col-12 mb-4 position-relative">
            <div className= {`${styles.cards} d-flex flex-column justify-content-center`}>
                
                <img src = {image} alt="" className={'${styles.img} img-fluid'} />
                <div style={{ padding:"10px"}} className="content">
                    <div className="fs-6 fw-bold mb-5">{name}</div>
                    <div className="">
                    <div className="fs-8">ID-{id}- created:{created}</div>
                    <div className="fs-8 fw-bold">STATUS:   {status}</div>
                    <div className="fs-8 fw-bold">SPECIES: {species}</div>
                    <div className="fs-8 fw-bold">ORIGIN: {origin.name}</div>
                    <div className="fs-8 fw-bold">LAST LOCATION: {location.name}</div>
                    </div>
                    
                </div>
                </div>
            </div>
       );
    });
    } else {
        display = "No Character Found:/";

    }

  return <>{display}</>;
  
};

export default Cards;
