import React from 'react';
import styles from './Sort.css';

const Sort = () => {
  return (
    <div className={styles.sortContainer}>
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Sort By ID
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li><a className="dropdown-item" href="/">Ascending</a></li>
          <li><a className="dropdown-item" href="/">Descending</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Sort;
