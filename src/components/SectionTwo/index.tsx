import styles from './home.module.scss';

const SectionTwo = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.title}>
                    <h2>
                        A disparidade impressionante entre o que você{' '}
                        <span>ganhará tendo um site e</span> o que você está
                        deixando para trás é simplesmente inacreditável...
                    </h2>
                    <div className={styles.Bottom}>
                        <div className={styles.leftBox}>
                            <div className={styles.titleBox}>
                                <h5>Negócio sem site</h5>
                            </div>
                            <div className={styles.topics}>
                                <img src="/redX.svg" />
                                <p>Sem posicionamento online</p>
                            </div>
                            <div className={styles.topics}>
                                <img src="/redX.svg" />
                                <p>Não passa credibilidade</p>
                            </div>
                            <div className={styles.topics}>
                                <img src="/redX.svg" />
                                <p>Perde pra concorrência</p>
                            </div>
                            <div className={styles.topics}>
                                <img src="/redX.svg" />
                                <p>Só funciona das 8 as 18</p>
                            </div>
                            <div className={styles.topics}>
                                <img src="/redX.svg" />
                                <p>Sem conexão com cliente</p>
                            </div>
                        </div>
                        <div className={styles.rightBox}>
                            <div className={styles.titleBox}>
                                <h5>
                                    Negócio <span>COM SITE</span>
                                </h5>
                            </div>
                            <div className={styles.pros}>
                                <img src="/correct.svg" />
                                <p>Está posicionado na internet</p>
                            </div>
                            <div className={styles.pros}>
                                <img src="/correct.svg" />
                                <p>Passa muita credibilidade</p>
                            </div>
                            <div className={styles.pros}>
                                <img src="/correct.svg" />
                                <p>Deixa a concorrência no chinelo</p>
                            </div>
                            <div className={styles.pros}>
                                <img src="/correct.svg" />
                                <p>Fuciona todos os dias, o dia todo</p>
                            </div>
                            <div className={styles.pros}>
                                <img src="/correct.svg" />
                                <p>Gera conexão com cliente</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.button}>
                        <a
                            href="https://wa.me/message/RNFBTEUFKR2NJ1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.buttonLink}
                        >
                            quero meu site agora
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionTwo;
