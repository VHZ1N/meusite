import styles from './home.module.scss';

const SectionThree = () => {
    return (
        <section className={styles.conteiner}>
            <div className={styles.content}>
                <div className={styles.Image}>
                    <img src="/warning.svg" />
                    <img src="/warning.svg" />
                    <img src="/warning.svg" />
                </div>
                <div className={styles.bottom}>
                    <h2>Área em construção</h2>
                    <p>
                        Pedimos desculpas pelo transtorno, mas estamos
                        organizando todos os pequenos detalhes para trazer a
                        melhor experiência para você!
                    </p>
                </div>
                <div className={styles.tape}>
                    <img src="warningTape.svg" />
                </div>
            </div>
        </section>
    );
};

export default SectionThree;
