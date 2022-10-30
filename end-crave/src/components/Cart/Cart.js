
import { useContext } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };

    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
        </ul>
    );

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>
                    Close
                </button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;



































// import classes from './Cart.module.css'
// import Modal from '../UI/Modal';
// import { useContext } from 'react';
// import CartContext from '../../store/cart-context';
// import CartItem from './CartItem';

// //const demoArray = [{ id: '1', name1: 'Kachori', amount: 10, price: '100' }];


// const Cart = (props) => {

//     const cartCtx = useContext(CartContext);

//     const totalAmount = cartCtx.totalAmount;

//     const hasItems = cartCtx.items.length > 0;

//     const cartItemAddHandler = (item) => {

//     };

//     const cartItemRemoveHandler = (id) => {

//     };

//     const cartItems = () => {
//         <ul className={classes['cart-items']}>
//             {cartCtx.items.map((item) => (
//                 <CartItem
//                     key={item.id}
//                     name={item.name}
//                     amount={item.amount}
//                     price={item.price}
//                     onRemove={cartItemRemoveHandler.bind(null, item.id)}
//                     onAdd={cartItemAddHandler.bind(null, item)}
//                 />
//             ))}
//         </ul>
//     };

//     return (
//         <Modal onClose={props.onClose} >
//             {cartItems}
//             {/* {
//                 <ul className={classes['cart-items']}>
//                     {
//                         cartCtx.items.map((item) => (
//                             <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} />
//                         ))
//                     }
//                 </ul>
//             } */}

//             <div className={classes.total}>
//                 <span>Total Amount: </span>
//                 <span>{totalAmount}</span>
//             </div>
//             <div className={classes.actions}>
//                 <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
//                 {hasItems && <button className={classes.action}>Order</button>}
//             </div>
//         </Modal>
//     );
// }

// export default Cart;