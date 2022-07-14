import { CloseIcon } from './Icons';
import styles from '../styles/Bagmodal.module.css';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { BagIcon } from './Icons';
import useCurrency from '../hooks/useCurrency';
import { useEffect, useState } from 'react';
import { useActions } from '../hooks/useActions';
import { ProductState } from '../state/reducers/ProductsReducer';

export default function BagModal() {
    const [brazilianCurrency] = useCurrency();
    const { display, totalValue, products } = useTypedSelector(
        (data) => data.shoppingBag,
    );
    const { products: productsFromProductsState } = useTypedSelector(
        (data) => data.products,
    );

    const {
        toggleShoppingBagModal,
        toggleProductModal,
        addProductInProductModal,
    } = useActions();

    const renderModalProducts = () => {
        const productList = [];

        for (const index in products) {
            productList.push(
                <tr
                    onClick={() => {
                        toggleProductModal(true, products[index].amount);
                        addProductInProductModal(
                            productsFromProductsState.find(
                                (product) => product.id === index,
                            ) as ProductState,
                        );
                    }}
                    key={index}
                    className={styles.bag_modal_product}
                >
                    <td>{products[index].amount}</td>
                    <td>{products[index].productName}</td>
                    <td>{brazilianCurrency.format(products[index].price)}</td>
                </tr>,
            );
        }
        if (productList.length !== 0) {
            return (
                <table className={styles.product_table}>
                    <thead>
                        <tr className={styles.head_of_product_table}>
                            <th>Qtd</th>
                            <th>Descrição</th>
                            <th>Preço</th>
                        </tr>
                    </thead>
                    <tbody>{productList}</tbody>
                    <tfoot></tfoot>
                </table>
            );
        } else {
            return null;
        }
    };

    return (
        <div
            className={`show_bag_modal ${display ? '' : 'close_bag_modal'}`}
            onClick={() => toggleShoppingBagModal(false)}
        >
            <section
                onClick={(e) => e.stopPropagation()}
                className={styles.bag_modal}
            >
                <div
                    className={styles.bag_modal_close_icon}
                    onClick={() => toggleShoppingBagModal(false)}
                >
                    {CloseIcon}
                </div>
                {renderModalProducts()}
                <div className={styles.total_price_box_bag_modal}>
                    <div>
                        <span>Total: </span>{' '}
                        <span>
                            {brazilianCurrency.format(
                                totalValue < 0 ? 0 : totalValue,
                            )}
                        </span>
                    </div>
                    <button className="button confirm-button">
                        Finalizar Pedido
                    </button>
                </div>
            </section>
        </div>
    );
}

export const FormatedShoppingBagIcon: React.FC = () => {
    const [brazilianCurrency] = useCurrency();
    const [displayIcon, setDisplayIcon] = useState(false);
    const { display, totalValue } = useTypedSelector(
        (data) => data.shoppingBag,
    );

    useEffect(() => {
        setDisplayIcon(true);
        const onChangeState = setTimeout(() => {
            setDisplayIcon(false);
        }, 1500);

        return () => clearTimeout(onChangeState);
    }, [totalValue]);

    return (
        <div
            className={`navigation_bag_icon ${
                displayIcon || display ? 'navigation_bag_icon_active' : ''
            }`}
        >
            <span>{BagIcon}</span>
            <p className={`navigation_bag_value`}>
                {brazilianCurrency.format(totalValue < 0 ? 0 : totalValue)}
            </p>
        </div>
    );
};
