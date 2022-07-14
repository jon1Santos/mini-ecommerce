import styles from '../styles/Form.module.css';

interface FormProps {
    children: JSX.Element[];
}

export default function Form({ children }: FormProps) {
    function renderInput() {
        return children.map((element, index) => {
            if (element.props.children[0].type !== 'label') {
                return (
                    <div key={index} className={styles.form_buttons_content}>
                        {element}
                    </div>
                );
            } else {
                return (
                    <div key={index} className={styles.form_inputs_content}>
                        {element}
                    </div>
                );
            }
        });
    }

    return (
        <form className={styles.form}>
            <div className={styles.form_contents}>{renderInput()}</div>
        </form>
    );
}
