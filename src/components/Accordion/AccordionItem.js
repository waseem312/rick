import FilterForm from './FilterForm';
import styles from './AccordionItem.module.css';
import { useState } from 'react';

function AccordionItem({ filterName, options }) {
    const [active, setActive] = useState(true);
    function toggleActive(){
        setActive(!active)
    }

    return (
        <div className={`${styles['accordion-item']} ${active ? styles.active : ''}`}>
            <div 
                className={styles['accordion-item-btn']}
                onClick={toggleActive}
            >{filterName[0].toUpperCase() + filterName.substring(1)}</div>
            <div className={styles['accordion-item-body']}>
                <FilterForm 
                    filterName={filterName}
                    options={options}
                />
            </div>
        </div>
    );
}

export default AccordionItem;