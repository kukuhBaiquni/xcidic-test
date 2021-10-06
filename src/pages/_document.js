/* eslint-disable @next/next/no-document-import-in-page */
import React from 'react'
import Document, {
  Html, Main, NextScript, Head,
} from 'next/document'
import createEmotionServer from '@emotion/server/create-instance'
import createEmotionCache from '../createEmotionCache'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link href='https://fonts.googleapis.com' rel='preconnect' />
          <link href='https://fonts.gstatic.com' rel='preconnect' />
          <link href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700;800&display=swap' rel='stylesheet' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage

  const cache = createEmotionCache()
  const { extractCriticalToChunks } = createEmotionServer(cache)

  ctx.renderPage = () => originalRenderPage({
    // eslint-disable-next-line react/display-name
    enhanceApp: (App) => (props) => <App emotionCache={cache} {...props} />,
  })

  const initialProps = await Document.getInitialProps(ctx)
  const emotionStyles = extractCriticalToChunks(initialProps.html)
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
    />
  ))

  return {
    ...initialProps,
    styles: [...React.Children.toArray(initialProps.styles), ...emotionStyleTags],
  }
}
