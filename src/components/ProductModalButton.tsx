import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import styles from '../styles/ProductModal.module.css';

export default function ProductModalButton() {
    const { product, amount, amountFromShoppingBag } = useTypedSelector(
        (data) => data.productModal,
    );
    const { products } = useTypedSelector((data) => data.shoppingBag);
    const {
        addProductInShoppingBagByAmount,
        removeProductInShoppingBagByAmount,
        toggleProductModal,
    } = useActions();

    return typeof amountFromShoppingBag !== 'number' ? (
        <div className={styles.button}>
            <button
                className="button confirm-button"
                onClick={() => {
                    addProductInShoppingBagByAmount(
                        product.id,
                        amount,
                        product.price,
                        product.description,
                    );
                }}
            >
                Adicionar Produto
            </button>
        </div>
    ) : (
        <div className={styles.button}>
            <button
                className="button danger-button"
                onClick={() => {
                    removeProductInShoppingBagByAmount(product.id, amount);
                    if (amount >= products[product.id].amount)
                        toggleProductModal(false);

                    if (
                        amount !== 0 &&
                        amount - products[product.id].amount !== 0
                    ) {
                        toggleProductModal(
                            true,
                            products[product.id].amount - amount,
                        );
                    }
                }}
            >
                Remover Produto
            </button>
        </div>
    );
}
