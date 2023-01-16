import React, { useState } from 'react'
import { Button, AspectRatio, VStack } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import NavBar from '../Components/NavBar'
import { FaUndo } from 'react-icons/fa'

//TODO: Make a database with a list of video URLS (Possibly local db or even a server). Include the different settings (Religious, Tate, etc.)
const videoUrls = [
    "https://www.youtube.com/embed/ERClHCOF14c",
    "https://www.youtube.com/embed/BX1WpL2VlhM",
    "https://www.youtube.com/embed/KPUA05Mr1m8",
    "https://www.youtube.com/embed/tlYiqOSeCCI",
]

export default function Videos() {
    const initialIdx = Math.floor(Math.random() * videoUrls.length);
    const [url, setUrl] = useState(videoUrls[initialIdx]);

    const handleClick = () => {
        const randomIndex = Math.floor(Math.random() * videoUrls.length);
        setUrl(videoUrls[randomIndex]);
    }

    return (
        <>
            <NavBar />
            <VStack p={4}>
                <AspectRatio width="50%" ratio={16 / 9}>
                    <Box
                        borderRadius="lg"
                        as="iframe"
                        title="Random Video"
                        src={url}
                        allowFullScreen
                    ></Box>
                </AspectRatio>
                <Button leftIcon={<FaUndo />} onClick={handleClick}>Generate Random Video</Button>
            </VStack>
        </>
    )
}