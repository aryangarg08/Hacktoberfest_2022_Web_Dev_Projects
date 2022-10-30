import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Jalebi-Fafda',
        description: 'Authentic Gujarati snack',
        price: 50.00,
    },
    {
        id: 'm2',

        name: 'Momos',
        description: 'That special South Delhi taste',
        price: 20.00,
    },
    {
        id: 'm3',
        name: 'Burger',
        description: 'Ultimate stop for fast food crave',
        price: 65.00,
    },
    {
        id: 'm4',
        name: 'Grilled Sandwich',
        description: 'Healthy...and delicious...',
        price: 25.00,
    },
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => (
        <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ));

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;

// import classes from './AvailableMeals.module.css';
// import Card from '../UI/Card'
// import MealItem from './MealItem/MealItem';

// const dummyMeals = [
//     {
//         id: 'm1',
//         name: 'Daal Baati',
//         description: 'A Rajasthani traditional meal!!!',
//         price: '70'
//     },
//     {
//         id: 'm2',
//         name: 'Jalebi-fafda',
//         description: 'Authentic Gujarati snack!!!',
//         price: '35'
//     },
//     {
//         id: 'm3',
//         name: 'momos',
//         description: 'Nepali quick food!!!',
//         price: '40'
//     },
//     {
//         id: 'm4',
//         name: 'Vada Pav',
//         description: 'A Mumbai street food!!!',
//         price: '15'
//     }
// ];

// const AvailableMeals = (props) => {
//     return (
//         <section className={classes.meal}>
//             <Card>
//                 <ul>
//                     {dummyMeals.map(meal => (<MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price} />))}
//                 </ul>
//             </Card>
//         </section>
//     );
// }

// export default AvailableMeals;