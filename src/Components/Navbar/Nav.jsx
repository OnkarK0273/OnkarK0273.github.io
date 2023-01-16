
import {
  Box,
  Flex,
  
  HStack,
  Link,
  IconButton,
  
  Menu,
  
  useDisclosure,
  useColorModeValue,
  Stack,
 
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = ['Home', 'About', 'Skills',"Projects","Contact"];

const NavLink = ({ children }) => (
  <Link
    px={5}
    py={1}
    fontWeight="semibold"
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={`#${children}`}>
    {children}
  </Link>
);

export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div  style={{position:'sticky',top:0,zIndex:2}}>
      <Box bg="#C7AE92" px={4} >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
         
          <Flex alignItems={'center'}>
            <Menu>
                <Image w="25%" src='/images/signature.png'></Image>
            </Menu>
          </Flex>
        
          <HStack spacing={8} alignItems={'center'}>
            
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />

        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      
    </div>
  );
}
