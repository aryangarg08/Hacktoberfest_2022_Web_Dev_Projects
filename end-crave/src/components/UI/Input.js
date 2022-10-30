import React from 'react';

import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input} />
        </div>
    );
});

export default Input;

// import classes from './Input.module.css'
// import React from 'react';

// const Inp = React.forwardRef((props, ref) => {
//     return (
//         <div className={classes.input}>
//             <label htmlFor={props.input.id}>{props.label}</label>
//             <input ref={ref} {...props.input} />
//         </div>
//     );
// });

// export default Inp;