import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>First Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>This is Medium 2.0</h1>

      <Header />

    </div>
  )
}

export default Home
