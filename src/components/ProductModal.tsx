import Image from 'next/image';
import useCurrency from '../hooks/useCurrency';
import styles from '../styles/ProductModal.module.css';
import ProductModalQuantifier from './ProductModalQuantifier';
import ProductModalButton from './ProductModalButton';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const ProductModal = () => {
    const [brazilianCurrency] = useCurrency();
    const { display, product } = useTypedSelector((data) => data.productModal);
    const { toggleProductModal } = useActions();

    if (product) {
        return (
            <section
                onClick={() => toggleProductModal(false)}
                className={`show_product_modal ${
                    display ? '' : 'close_product_modal'
                }`}
            >
                <div
                    className={styles.product}
                    onClick={(e) => e.stopPropagation()}
                >
                    <Image
                        alt={product.description}
                        src={product.image}
                        width={450}
                        height={450}
                        priority
                    />
                    <p className="card-description">{product.description}</p>
                    <div className="card-price">
                        {brazilianCurrency.format(product.price)}
                    </div>
                    <ProductModalQuantifier />
                    <ProductModalButton />
                </div>
            </section>
        );
    } else {
        return null;
    }
};

export default ProductModal;
