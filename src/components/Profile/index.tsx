import styles from './home.module.scss';

const Profile = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.leftSide}>
                    <h1>
                        Mas afinal de contas, quem é <span>Vitor Hermano</span>?
                    </h1>
                    <h2>Caso você não me conheça, aqui vai um breve resumo:</h2>
                    <p>
                        A quase 1 ano no mercado de programação, busco trazer
                        soluções tecnológicas e inovadoras para negócios físicos
                        que ainda não se posicionaram na internet, formando em
                        Análise e Desenvolvimento de Sistemas, busquei fazer
                        mais cursos por fora para me especializar na{' '}
                        <span>Criação de Sites</span> e hoje possou conhecimento
                        nas liguagens de JavaScipt, React.Js, Sass, HTML, CSS e
                        TailwindCSS.
                    </p>
                    <div className={styles.button}>
                        <a
                            href="https://wa.me/message/RNFBTEUFKR2NJ1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.buttonLink}
                        >
                            <p>Quero fazer meu site!</p>
                        </a>
                    </div>
                </div>
                <div className={styles.rightSide}>
                    <img src="hermano.png" alt="Imagem1" />
                    <img src="html.svg" alt="Imagem2" />
                    <img src="css.svg" alt="Imagem3" />
                    <img src="javascript.svg" alt="Imagem4" />
                </div>
            </div>
        </section>
    );
};

export default Profile;
