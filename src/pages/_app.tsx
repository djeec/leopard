import '@/styles/globals.css'

import type { AppProps } from 'next/app'

// Component is top level react component that wraps all pages in the app
// can be used to keep state  

// https://nextjs.org/docs/advanced-features/custom-app
// The Component prop is the active page, so whenever you navigate between routes, Component will change to the new page. 
// Therefore, any props you send to Component will be received by the page
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
