import Link from 'next/link';
import React from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

interface NavigationOjectProps {
    content: string | JSX.Element;
    link?: string;
}

interface NavigationProps {
    children?: NavigationOjectProps[];
}

export default function Navigation(props: NavigationProps) {
    const { toggleShoppingBagModal } = useActions();
    const { display } = useTypedSelector((data) => data.shoppingBag);

    const renderContent = () => {
        return props.children?.map((element, index) => {
            if (typeof element.link !== 'string') {
                return (
                    <a
                        key={index}
                        onClick={() => {
                            toggleShoppingBagModal(!display);
                        }}
                    >
                        {element.content}
                    </a>
                );
            } else {
                return (
                    <Link key={index} href={`/${element.link}`}>
                        <a className="link">{element.content}</a>
                    </Link>
                );
            }
        });
    };

    return (
        <nav className="navigation">
            <Link href="/">
                <a className="link">Início</a>
            </Link>
            {renderContent()}
        </nav>
    );
}
