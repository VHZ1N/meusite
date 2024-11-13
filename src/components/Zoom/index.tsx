/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect } from 'react';
import styles from './styles.module.scss';

const Zoom = () => {
    useEffect(() => {
        // Declara uma variável para armazenar instancia
        let scrollTriggerInstance: typeof ScrollTrigger | null = null;

        //Criando função assíncrona para carregar dinamicamente o módulo GSAP

        const loadGSAP = async () => {
            const gsapModule = await import('gsap');
            const ScrollTriggerModule = await import('gsap/ScrollTrigger');
            scrollTriggerInstance = ScrollTriggerModule.ScrollTrigger;

            if (scrollTriggerInstance)
                gsapModule.default.registerPlugin(scrollTriggerInstance);

            const isMobile = window.innerWidth <= 768;
            const isSmallMobile =
                window.innerWidth <= 480 && window.innerWidth >= 449;
            const isLittleMobile =
                window.innerWidth <= 448 && window.innerWidth >= 420;

            let scale, xPercent, yPercent;

            if (isSmallMobile) {
                (scale = 400), (xPercent = 0), (yPercent = -1500);
            } else if (isMobile) {
                (scale = 170), (xPercent = -500), (yPercent = -4500);
            } else if (isLittleMobile) {
                (scale = 1000), (xPercent = -800), (yPercent = -15000);
            } else {
                (scale = 700), (xPercent = -4300), (yPercent = -50);
            }

            scrollTriggerInstance
                ?.getAll()
                .forEach((trigger: any) => trigger.kill());

            gsapModule.default.to('#zoom-text', {
                scale3d: 100,
                scale,
                duration: 3,
                xPercent,
                yPercent,
                transformOrigin: 'center center',
                scrollTrigger: {
                    trigger: '#zoom-in',
                    pin: true,
                    end: `+=${innerHeight / 2}`,
                    scrub: 0.5,
                },
            });

            gsapModule.default.fromTo(
                '#next-text',
                { y: '1300%', opacity: 0 },
                {
                    y: '0%',
                    opacity: 1,
                    scrollTrigger: {
                        trigger: '#zoom-in',
                        start: 'top 20%',
                        end: 'top -20%',
                        scrub: true,
                    },
                    ease: 'power3.out',
                }
            );

            gsapModule.default.fromTo(
                '#next-text span',
                { opacity: 0.3, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    stragger: 0.1,
                    scrollTrigger: {
                        trigger: '#zoom-in',
                        start: 'top 0%',
                        end: 'bottom -10%',
                        scrub: true,
                    },
                    ease: 'power3.out',
                }
            );
        };

        loadGSAP();
        return () => {
            if (scrollTriggerInstance) {
                scrollTriggerInstance
                    .getAll()
                    .forEach((trigger: any) => trigger.kill());
            }
        };
    }, []);

    const splitText = (text: string) => {
        return text.split(' ').map((word, i) => {
            if (word.includes('<br/>')) {
                return (
                    <React.Fragment key={i}>
                        <br />
                        <span style={{ opacity: 0.3 }}>
                            {' '}
                            {word.replace('<br/>', '')}&nbsp;{' '}
                        </span>
                    </React.Fragment>
                );
            } else {
                return (
                    <span key={i} style={{ opacity: 0.3 }}>
                        {' '}
                        {word}&nbsp;{' '}
                    </span>
                );
            }
        });
    };

    return (
        <section id="zoom-in" className={styles.zoomSection}>
            <h2 id="zoom-text" className={styles.zoomText}>
                Esse é o <span>NÍVEL</span> que o seu site vai ter
            </h2>
            <div className={styles.textWrap}>
                <p id="next-text" className={styles.nextText}>
                    {splitText(
                        'Animações marcantes que <br/>te destacam da concorrência <br/>elevando o nível do seu negócio.'
                    )}
                </p>
            </div>
        </section>
    );
};

export default Zoom;
