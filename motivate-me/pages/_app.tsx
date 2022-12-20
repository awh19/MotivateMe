import type { AppProps } from 'next/app'
import { ChakraProvider, ColorModeProvider, useColorMode } from '@chakra-ui/react'
import '../styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
