import type { AppProps } from 'next/app'
// @ts-ignore
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
