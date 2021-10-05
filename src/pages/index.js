import Head from 'next/head'
import TopBar from 'components/top-bar'

export default function Home() {
  return (
    <div style={{ height: 4000 }}>
      <Head>
        <title>detikcom - clone</title>
        <meta content='Generated by create next app' name='description' />
        <link href='/favicon.ico' rel='icon' />
      </Head>
      <TopBar />
    </div>
  )
}
