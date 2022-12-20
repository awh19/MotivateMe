import { Box, Heading, IconButton, VStack, useColorMode } from "@chakra-ui/react";
import TodoList from '../Components/TodoList'
import { FaSun, FaMoon } from 'react-icons/fa'

export default function Home() {

  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <VStack p={4}>
      <IconButton icon={colorMode === 'light' ? <FaSun /> : <FaMoon />} aria-label="Change Color Mode" isRound={true} size="lg" alignSelf="flex-end" onClick={toggleColorMode}></IconButton>
      <Heading mb="8" fontWeight="extrabold" size="2xl" bgColor="teal.300" bgClip="text">MotivateMe</Heading>
    </VStack >

  )
}
