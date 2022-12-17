import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Flex, Heading, IconButton, VStack, useColorMode } from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa';

export default function Home() {
  const {colorMode, toggleColorMode} = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <VStack>
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">MotivateMe</Heading>
      </Flex>
      <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound={true} onClick={toggleColorMode} aria-label="Toggle Color Mode"></IconButton>
    </VStack>
  )
}
