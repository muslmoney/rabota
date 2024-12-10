import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../../CartSlice';
import styles from './ProductList.module.css';
import '../../../index.css';

const products = [
  { id: 1, name: 'Фикус', price: 70, category: 'Комнатные', img: 'https://api.cabinet.smart-market.uz/uploads/images/8a8386023720a1dedb0cb1fa' },
  { id: 2, name: 'Кактус', price: 50, category: 'Суккуленты', img: 'https://masterpiecer-images.s3.yandex.net/485e9828883e11ee941dbadf81d486ab:upscaled' },
  { id: 3, name: 'Монстера', price: 30, category: 'Комнатные', img: 'https://cdn.botanichka.ru/wp-content/uploads/2024/04/encziklopediya-komnatnyh-rastenij-monstera-1-640x482.jpg' },
  { id: 4, name: 'Орхидея', price: 20, category: 'Цветущие', img: 'https://lh7-us.googleusercontent.com/56rQRMmNbxd_D09P5TfanaZyONYri0wmRhmp79sjxJwino9SEAkd3lUAtstJWMUgR6UW-PZgvCJVY-ojeVfMLvmM-Q5C3M6AXp8vJa3L9mo2_cu0AkAW2kUg0WW9TNFMj0oXHujyyU2z' },
  { id: 5, name: 'Папоротник', price: 100, category: 'Зелёные', img: 'https://aogarden.ru/upload/resize_cache/webp/upload/medialibrary/d3e/a8hb0yzapxgelc72qm8mplo036izo39r.webp  ' },
  { id: 6, name: 'Сансевиерия', price: 60, category: 'Суккуленты', img: 'https://cdn.botanichka.ru/wp-content/uploads/2023/04/kak-vyrastit-bolshuyu-sansevieriyu-sovety-dlya-domashnego-giganta-1.jpg' },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  const isProductInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  return (
    <div>
      <div className={styles.hero}>
        <div className="container">
          <div className={styles.wrap}>
            <h1>Доставка цветов</h1>
            <h2>Ташкент</h2>
            <a href="#1">
              <button>Купить</button>
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={styles.catalog}>
          <h2 id="1">Каталог товаров</h2>
          <div className={styles.productGrid}>
            {products.map((product) => (
              <div key={product.id} className={styles.productCard}>
                <img
                  src={product.img}
                  alt={product.name}
                  className={styles.productImage}
                />
                <h3>{product.name}</h3>
                <p>Цена: {product.price}$</p>
                  <p>Тип:{product.category}</p>

                <button
                  onClick={() => handleAddToCart(product)}
                  className={`${styles.productButton} ${isProductInCart(product.id) ? styles.added : ''}`}
                >
                  {isProductInCart(product.id) ? 'Добавлено в корзину' : 'Добавить в корзину'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
