import { ReactNode } from 'react';
import {
    Box,
    Flex,
    HStack,
    Link,
    IconButton,
    Button,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { FaBrain, FaCalendarCheck, FaHome, FaMoon, FaSun, FaVideo } from 'react-icons/fa';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

const Links = [
    { label: 'Home', icon: <FaHome />, path: '/' },
    { label: 'Video Generator', icon: <FaVideo />, path: '/videos' },
    { label: 'Affirmations', icon: <FaBrain />, path: '/affirms' },
    { label: 'Todo List', icon: <FaCalendarCheck />, path: '/todo' }
];

const NavLink = ({ children }: { children: ReactNode }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'#'}>
        {children}
    </Link>
);

export default function Simple() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    const router = useRouter();

    const bgColor = {
        light: 'teal',
        dark: 'teal'
    }


    return (
        <>
            <Box bg='gray.900' px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Box>MotivateMe</Box>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <Link as={NextLink} href={link.path}><Button key={link.path} leftIcon={link.icon} colorScheme={router.pathname === link.path ? bgColor[colorMode] : 'gray'} variant='solid'>
                                    {link.label}
                                </Button></Link>
                            ))}
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <IconButton icon={colorMode === 'light' ? <FaSun /> : <FaMoon />} aria-label="Change Color Mode" isRound={true} size="lg" alignSelf="flex-end" onClick={toggleColorMode}></IconButton>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <Link as={NextLink} href={link.path}><Button key={link.path} leftIcon={link.icon} colorScheme={router.pathname === link.path ? bgColor[colorMode] : 'gray'} variant='solid'>
                                    {link.label}
                                </Button></Link>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}
