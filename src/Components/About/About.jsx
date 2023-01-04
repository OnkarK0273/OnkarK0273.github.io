import './about.css'
import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    
  } from '@chakra-ui/react';
  
  export default function About() {
    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'} >
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
               <Text fontSize={{ base: 'md',sm:"xl", lg: '2xl' }} color={'gray.500'}>
               Hi, my name is
              </Text>
              <Text
                as={'span'}
                position={'relative'}
                >
                Onkar Kalsannawar
              </Text>
              <br />{''}
              <Text color="#C7AE92" as={'span'}>
               I am a M_E_R_N stack developer
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md',sm:"xl", lg: '2xl' }} color={'gray.500'}>
            MERN stack developer with experience in developing full-stack web applications using MongoDB, Express, React, and Node.js.
              </Text>
            <Stack>
              <Button
                w={{ base: '150px', md: '100px', lg: '100px' }}
                m="auto"
                rounded={'full'}
                bg={'blue.500'}
                color={'white'}
                _hover={{
                  bg: 'blue.300',
                }}>
                Resume {'>'}
              </Button>
            </Stack>
          

            
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            p={{ base: '15px', md: '100px', lg: '50px' }}
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              '/images/profile-frame2.png'
            }
          />
        </Flex>
      </Stack>
    );
  }