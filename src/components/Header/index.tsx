import styles from './home.module.scss';

const Header = () => {
    return (
        <header>
            <div className={styles.container}>
                <div className={styles.content}>
                    <p>
                        Saiba como pequenos negócios
                        <strong>triplicaram seu faturamento </strong>
                        tendo apenas um site!
                    </p>
                </div>
            </div>
        </header>
    );
};

export default Header;
