import { Heading, VStack } from "@chakra-ui/react";
import NavBar from '../Components/NavBar'

export default function Home() {

  return (
    <><NavBar /><VStack p={4}>
      <Heading
        mb="8"
        fontWeight="extrabold"
        size="2xl"
        bgColor="teal.300"
        bgClip="text">
        MotivateMe
      </Heading>
    </VStack></>

  )
}
