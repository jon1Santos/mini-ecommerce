import type { NextPage } from 'next';
import Navigation from '../components/Navigation';
import Layout from '../components/Layout';
import ProductList from '../components/ProductList';
import { FormatedShoppingBagIcon } from '../components/ShoppingBag';
import BagModal from '../components/ShoppingBag';
import ProductModal from '../components/ProductModal';

const Home: NextPage = () => {
    return (
        <Layout
            navigation={
                <Navigation>
                    {[
                        { content: 'cadastrar-se', link: 'signup' },
                        {
                            content: <FormatedShoppingBagIcon />,
                        },
                    ]}
                </Navigation>
            }
        >
            <ProductList />
            <ProductModal />
            <BagModal />
        </Layout>
    );
};

export default Home;
