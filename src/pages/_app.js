import '../styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-D77C7MGYV8`}
        strategy="afterInteractive"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D77C7MGYV8', { page_path: window.location.pathname });
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp