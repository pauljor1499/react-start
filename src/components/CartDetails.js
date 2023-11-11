import React from "react";
import styles from "./styles.module.css";
//store
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeProduct } from "../redux/slices/ProductSlice";

const CartDetails = () => {
    const products = useSelector((state) => state.Products); //state from store
    const dispatch = useDispatch();

    return (
        <>
            <div className={styles.cartDetails}>
                <h3>Total Products: {products.length}</h3>
                {products.map((item, index) => (
                    <div key={index} className={styles.itemCartProduct}>
                        <div>{item.title}</div>
                        <button
                            className={styles.itemProductButton}
                            onClick={() => {
                                dispatch(removeProduct(index));
                            }}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default CartDetails;
