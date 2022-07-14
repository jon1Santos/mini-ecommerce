import { NextPage } from 'next';
import Navigation from '../components/Navigation';
import Layout from '../components/Layout';
import Form from '../components/Form';
import { Fragment } from 'react';
import Link from 'next/link';

const signUp: NextPage = () => {
    return (
        <Layout navigation={<Navigation />}>
            <Form>
                <Fragment>
                    <label>Email: </label>
                    <input type="email" className="input" />
                </Fragment>
                <Fragment>
                    <label>Senha: </label>
                    <input type="password" className="input" />
                </Fragment>
                <Fragment>
                    <Link href="/signup">
                        <button className="button primary-button">
                            Cadastrar-se
                        </button>
                    </Link>
                    <button className="button confirm-button">Entrar</button>
                </Fragment>
            </Form>
        </Layout>
    );
};

export default signUp;
