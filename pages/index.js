import Head from 'next/head'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Comong</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
<h1>main</h1>
      </main>

      <footer className={styles.footer}>
        <h1>footer</h1>
      </footer>
    </div>
  )
}
