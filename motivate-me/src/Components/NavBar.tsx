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
import { FaBrain, FaCalendarCheck, FaMoon, FaSun, FaVideo } from 'react-icons/fa';

const Links = [
    { id: 1, label: 'Video Generator', icon: <FaVideo /> },
    { id: 2, label: 'Affirmations', icon: <FaBrain /> },
    { id: 3, label: 'Todo List', icon: <FaCalendarCheck /> }
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

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
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
                                <><Button key={link.id} leftIcon={link.icon} colorScheme='teal' variant='solid'>
                                    {link.label}
                                </Button></>
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
                                <><Button key={link.id} leftIcon={link.icon} colorScheme='teal' variant='solid'>
                                    {link.label}
                                </Button></>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}
