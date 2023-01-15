import React, { useState } from 'react'
import { Button, AspectRatio, VStack } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import NavBar from '../Components/NavBar'


const videoUrls = [
    "https://www.youtube.com/embed/ERClHCOF14c",
    "https://www.youtube.com/embed/tgbNymZ7vqY",
    "https://www.youtube.com/embed/ktvTqknDobU"
]

export default function Videos() {
    const [url, setUrl] = useState(videoUrls[0])

    const handleClick = () => {
        const randomIndex = Math.floor(Math.random() * videoUrls.length)
        setUrl(videoUrls[randomIndex])
    }

    return (
        <>
            <NavBar />
            <VStack p={4}>
                <AspectRatio width="50%" ratio={16 / 9}>
                    <Box
                        as="iframe"
                        title="Random Video"
                        src={url}
                        allowFullScreen
                    ></Box>
                </AspectRatio>
                <Button onClick={handleClick}>Generate Random Video</Button>
            </VStack>
        </>
    )
}