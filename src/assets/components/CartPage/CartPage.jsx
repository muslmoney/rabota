import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../../../CartSlice';
import styles from './CartPage.module.css';

const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleRemove = (id) => {
    dispatch(removeItem({ id }));
  };

  const handleUpdateQuantity = (id, delta) => {
    const item = cart.items.find(item => item.id === id);

    if (item.quantity === 1 && delta === -1) {
      return;
    }

    dispatch(updateQuantity({ id, delta }));
  };

  return (
    <div className={styles.container}>
      <h2>Корзина</h2>
      {cart.items.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <div className={styles.cartItems}>
          {cart.items.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <img src={item.img} alt={item.name} />
              <span>{item.name} - {item.price}$ x {item.quantity}</span>
                <p>Тип:{item.category}</p>
              <div className={styles.cartControls}>
                <button
                  onClick={() => handleUpdateQuantity(item.id, 1)}
                  className={styles.cartButton}
                >
                  +
                </button>
                <button
                  onClick={() => handleUpdateQuantity(item.id, -1)}
                  className={styles.cartButton}
                  >
                  -
                </button>
                <button
                  onClick={() => handleRemove(item.id)}
                  className={`${styles.cartButton} ${styles.remove}`}
                  >
                  Удалить
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className={styles.cartSummary}>
        <p>Общее количество: {cart.totalQuantity}</p>
        <p>Общая стоимость: {cart.totalPrice}$</p>
        <button className={styles.order}>
        <h4 >
          Оформить заказ
        </h4>
        </button>
      </div>
        
    </div>
  );
};

export default CartPage;
