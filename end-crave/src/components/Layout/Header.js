import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/mealsImage.jpg';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>End-Crave</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='A table full of delicious food!' />
            </div>
        </Fragment>
    );
};

export default Header;

// import { Fragment } from "react";

// import mealsImage from "../../assets/mealsImage.jpg";
// import classes from './Header.module.css';
// import HeaderCartButton from "./HeaderCartButton";

// const Headerr = (props) => {
//     return (
//         <Fragment>
//             <header className={classes.header}>
//                 <h1>YUP-MEALS</h1>
//                 <HeaderCartButton onClick={props.sCart} />
//             </header>
//             <div className={classes['main-image']}>
//                 <img src={mealsImage} alt="A delcicious food table" />
//             </div>
//         </Fragment>
//     );
// };

// export default Headerr;