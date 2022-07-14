interface LayoutProps {
    navigation?: JSX.Element;
    children: JSX.Element[] | JSX.Element;
}

const Layout: React.FC<LayoutProps> = (props) => {
    return (
        <div className="layout">
            {props.navigation ?? null}
            {props.children}
        </div>
    );
};

export default Layout;
