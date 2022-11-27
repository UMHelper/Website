import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>UMHelper Offcial Website</title>
        <meta name="description" content="Designed and built by the UMHelper Dev Team" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://umhelper.com">UMHelper</a> Dev Team
        </h1>

        <p className={styles.description}>
          Learn more on {' '}
          <a style={{
            color:'#0070f3',
          }} href="https://github.com/UMHelper">Github &rarr;</a> 
        </p>

        {/* <p className={styles.description} style={{
          margin:0
        }}>
          Our Products
        </p> */}

        <div className={styles.grid}>
          <a href="https://umeh.top" className={styles.card}>
            <h2>What2REG @UM &rarr;</h2>
            <p>Course review platform for University of Macau. </p>
          </a>

          <a href="https://umbbs.xyz" className={styles.card}>
            <h2>Whole @UM &rarr;</h2>
            <p>Whole community at the University of Macau!</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://umhelper.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Designed and built by the UMHelper Dev Team
        </a>
      </footer>
    </div>
  )
}
