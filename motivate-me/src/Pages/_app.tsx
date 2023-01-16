import type { AppProps } from 'next/app'
import { ChakraProvider, background, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        transitionProperty: "all",
        transitionDuration: "normal",
        background: "gray.900"
      }
    }
  },
  config: {
    disableTransitionOnChange: false
  },
  fonts: {
    heading: `'Outfit', sans-serif`
  }
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
