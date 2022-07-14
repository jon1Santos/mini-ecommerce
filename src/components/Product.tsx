import Image from 'next/image';
import Link from 'next/link';
import { useActions } from '../hooks/useActions';
import useCurrency from '../hooks/useCurrency';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { ProductState } from '../state/reducers/ProductsReducer';
import { PlusOutlinedIcon } from './Icons';

export interface DisplayProduct {
    productID: string;
}

export default function Product({ productID }: DisplayProduct) {
    const [brazilianCurrency] = useCurrency();
    const {
        toggleProductModal,
        addProductInProductModal,
        addProductInShoppingBag,
    } = useActions();
    const { products } = useTypedSelector((data) => data.products);
    const product = products.find(
        (product) => product.id === productID,
    ) as ProductState;

    return (
        <Link href="/" passHref>
            <a
                className="card"
                onClick={() => {
                    addProductInProductModal(product);
                    toggleProductModal(true, undefined);
                }}
            >
                <div
                    onClick={(e) => {
                        addProductInShoppingBag(
                            product.id,
                            product.price,
                            product.description,
                        );
                        e.stopPropagation();
                        e.preventDefault();
                    }}
                    className="card-plus-icon"
                >
                    {PlusOutlinedIcon}
                </div>
                <div className="card-content">
                    <Image
                        alt={product.description}
                        src={product.image}
                        width={150}
                        height={150}
                        priority
                    />
                    <p className="card-description">{product.description}</p>
                    <div className="card-price">
                        {brazilianCurrency.format(product.price)}
                    </div>
                </div>
            </a>
        </Link>
    );
}
