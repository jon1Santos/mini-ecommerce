import { PlusIcon, MinusIcon } from './Icons';
import styles from '../styles/ProductModal.module.css';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const ProductModalQuantifier = () => {
    const {
        addAmountOfProductInProductModal,
        subtractAmountOfProductInProductModal,
    } = useActions();
    const { amount } = useTypedSelector((data) => data.productModal);

    return (
        <div className={styles.product_amount}>
            <div
                onClick={() => addAmountOfProductInProductModal()}
                className={styles.plus_icon}
            >
                {PlusIcon}
            </div>
            <div className={styles.counter}>{amount}</div>
            <div
                onClick={() => subtractAmountOfProductInProductModal()}
                className={styles.minus_icon}
            >
                {MinusIcon}
            </div>
        </div>
    );
};

export default ProductModalQuantifier;
