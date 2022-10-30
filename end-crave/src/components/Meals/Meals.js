import { Fragment } from 'react';

import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';

const Meals = () => {
    return (
        <Fragment>
            <MealsSummary />
            <AvailableMeals />
        </Fragment>
    );
};

export default Meals;



// import AvailableMeals from "./AvailableMeals";
// import MealsSummary from "./MealsSummary";

// const meals = (props) => {
//     return (
//         <section>
//             <AvailableMeals />
//             {/* <MealsSummary /> */}
//         </section>

//     );
// }
// export default meals;