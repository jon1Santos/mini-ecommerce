import Product from './Product';
import styles from '../styles/Product-list.module.css';
import { useTypedSelector } from '../hooks/useTypedSelector';

export default function ProductList() {
    const { products } = useTypedSelector((data) => data.products);

    function renderProductList() {
        if (!products) return;

        return products.map((product, id) => {
            return <Product key={id} productID={product.id} />;
        });
    }

    return (
        <section className={styles.product_list}>{renderProductList()}</section>
    );
}
