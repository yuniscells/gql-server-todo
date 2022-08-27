import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ApolloProvider} from "@apollo/client"
import client from './client'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  // 하위 컴포넌트들이 Apollo Client를 사용할 수 있도록 감싸주기
  <ApolloProvider client = {client}>
    <Component {...pageProps} />
  </ApolloProvider>
  )
}

export default MyApp
