import styles from './home.module.scss';

const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.LeftSide}>
                    <h1>
                        Entenda como ter um site pode
                        <span> potencializar o crescimento </span>
                        da sua empresa como você nunca viu.
                    </h1>
                    <h5>
                        Com um site seu negócio físico ganha presença online,
                        alcançando mais clientes e destacando-se da
                        concorrência, resultando em mais vendas e um crescimento
                        expressivo no faturamento.
                    </h5>
                    <div className={styles.button}>
                        <a
                            href="https://wa.me/message/RNFBTEUFKR2NJ1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.buttonLink}
                        >
                            <p>Farei um orçamento agora</p>
                        </a>
                    </div>
                </div>
                <div className={styles.RightSide}>
                    <div className={styles.BackgroundImages}>
                        <img src="html.svg" alt="Imagem1" />
                        <img src="css.svg" alt="Imagem2" />
                        <img src="javascript.svg" alt="Imagem3" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
