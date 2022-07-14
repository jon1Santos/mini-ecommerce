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
                    <label>Nome: </label>
                    <input type="text" className="input" />
                </Fragment>
                <Fragment>
                    <label>Email: </label>
                    <input type="email" className="input" />
                </Fragment>
                <Fragment>
                    <label>Senha: </label>
                    <input type="password" className="input" />
                </Fragment>
                <Fragment>
                    <label>Repita a senha: </label>
                    <input type="password" className="input" />
                </Fragment>
                <Fragment>
                    <Link href="/signin">
                        <button className="button primary-button">
                            Já sou cadastrado
                        </button>
                    </Link>
                    <button className="button confirm-button">Enviar</button>
                </Fragment>
            </Form>
        </Layout>
    );
};

export default signUp;
