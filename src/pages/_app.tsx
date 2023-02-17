import '@/styles/globals.css'

import type { AppProps } from 'next/app'

// Component is top level react component that wraps all pages in the app
// can be used to keep state  
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
