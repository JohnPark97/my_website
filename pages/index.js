import Head from 'next/head'
import styles from '../styles/Home.module.css'
import FadeInAnimation from "../components/fadeIn";
import MenuBar from "../components/menuBar";

export default function Home() {
    return (
        <FadeInAnimation wrapperElement="div" direction="left">
            <div>
                <Head>
                    <title>Create Next App</title>
                </Head>

                <div className={styles.navbar}>
                    <MenuBar/>
                </div>
                <main className={styles.main}>
                    <FadeInAnimation wrapperElement="h1" direction="up" delay={1}>
                        <h1 className={styles.title}>
                            Nice to Meet You!
                        </h1>
                    </FadeInAnimation>

                    <FadeInAnimation wrapperElement="h1" direction="up" delay={2}>
                        <h1 className={styles.description}>
                            Welcome to My Website
                        </h1>
                    </FadeInAnimation>

                    <div className={styles.grid}>
                        <a href="https://nextjs.org/docs" className={styles.card}>
                            <h3>Introduction &rarr;</h3>
                            <ul>
                                <li>Brief Self-Introduction</li>
                                <li>Education</li>
                            </ul>
                        </a>

                        <a href="https://nextjs.org/learn" className={styles.card}>
                            <h3>Learn &rarr;</h3>
                            <p>Learn about Next.js in an interactive course with quizzes!</p>
                        </a>

                        <a
                            href="https://github.com/vercel/next.js/tree/master/examples"
                            className={styles.card}
                        >
                            <h3>Examples &rarr;</h3>
                            <p>Discover and deploy boilerplate example Next.js projects.</p>
                        </a>

                        <a
                            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                            className={styles.card}
                        >
                            <h3>Deploy &rarr;</h3>
                            <p>
                                Instantly deploy your Next.js site to a public URL with Vercel.
                            </p>
                        </a>
                    </div>
                </main>
            </div>
        </FadeInAnimation>
    )
}
