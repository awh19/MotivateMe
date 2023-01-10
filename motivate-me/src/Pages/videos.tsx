import { Heading, VStack } from "@chakra-ui/react";
import NavBar from '../Components/NavBar'

export default function Video() {

    return (
        <><NavBar /><VStack p={4}>
            <Heading
                mb="8"
                fontWeight="extrabold"
                size="2xl"
                bgColor="teal.300"
                bgClip="text">
                Video Player
            </Heading>
        </VStack></>

    )
}
