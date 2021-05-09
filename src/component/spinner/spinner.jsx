import React from 'react';
import classes from './spinner.module.css'

const Spinner = () => {
    return(
        <div className={classes.spinner}>
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
};

export default Spinner;
