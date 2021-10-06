/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Head from 'next/head'
import TopBar from 'components/top-bar'
import LogoBlock from 'components/logo-block'
import Navbar from 'components/navbar'
import UncagedNavbar from 'components/navbar/uncaged-navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>detikcom - clone</title>
        <meta content='Generated by create next app' name='description' />
        <link href='/favicon.ico' rel='icon' />
      </Head>
      <div>
        <TopBar />
        <main
          css={css`
            height: calc(100vh - 46px);
            overflow-y: auto;
          `}
        >
          <div
            css={css`
              max-width: 1100px;
              margin-left: auto;
              margin-right: auto;
              padding: 38px 10px;
            `}
          >
            <LogoBlock />
            <Navbar />
            <UncagedNavbar />
            Grandong
          </div>
        </main>
      </div>
    </div>
  )
}
