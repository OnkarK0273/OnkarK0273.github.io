import './about.css'
import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    
  } from '@chakra-ui/react';
  
  export default function Home() {
    return (
      <Stack id='Home' minH={'100vh'} direction={{ base: 'column',sm:'column', md: 'column',lg:"row" }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'} >
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
               <Text fontSize={{ base: 'md',sm:"xl", lg: '2xl' }} color={'gray.500'}>
               Hi, my name is
              </Text>
              <Text
                as={'span'}
                position={'relative'}
                className="h1"
                >
                Onkar Kalsannawar
              </Text>
              <br />{''}
              <Text className="subtitle" color="#C7AE92" as={'span'}>
              Full Stack Web Developer
              </Text>{' '}
            </Heading>
            <Text  fontSize={{ base: 'md',sm:"xl", lg: '2xl' }} color={'gray.500'}>
            Full stack developer with experience in developing full-stack web applications using MongoDB, Express, React, and Node.js.
              </Text>
            <Stack>
              <Button
                w={{ base: '150px', md: '100px', lg: '100px' }}
                m="auto"
                
                borderColor="#C7AE92"
                variant='outline'
                color='#C7AE92'
                _hover={{
                  bg: '#C7AE92',
                  color:'white'
                }}>
                Resume {'>'}
              </Button>
            </Stack>
          

            
          </Stack>
        </Flex>
        <Flex flex={1} border='0px'>
          <Image
            p={{ base: '10px', md: '10px', lg: '10px' }}
            alt={'Login Image'}
            objectFit={'cover'}
            w="80%"
            m="auto"
            src={
              '/images/rrr.png'
            }
          />
        </Flex>
      </Stack>
    );
  }