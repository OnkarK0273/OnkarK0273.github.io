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
      <Stack id="home" minH={'100vh'} direction={{ base: 'column',sm:'column', md: 'column',lg:"row" }}>
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
                id="user-detail-name"
                >
                Onkar Kalsannawar
              </Text>
              <br />{''}
              <Text className="subtitle" color="#C7AE92" as={'span'}>
              Full Stack Web Developer
              </Text>{' '}
            </Heading>
            <Text  id="user-detail-intro" fontSize={{ base: 'md',sm:"xl", lg: '2xl' }} color={'gray.500'}>
            Full stack developer with experience in developing full-stack web applications using MongoDB, Express, React, and Node.js.
              </Text>
            <Stack>
              <Button
                w={{ base: '150px', md: '100px', lg: '100px' }}
                m="auto"
                onClick={()=>{window.open('https://drive.google.com/file/d/10caKf20AnU9VYco2-Nj4q6VsuQqDUbjc/view?usp=share_link',"_blank")}}
                borderColor="#C7AE92"
                variant='outline'
                color='#C7AE92'
                id="resume-button-2"
                _hover={{
                  bg: '#C7AE92',
                  color:'white'
                }}>
                  <a  id="resume-link-2" href='/fp06_227-Onkar-Kalsannawar-Resume.pdf' download>Resume {'>'}</a>
              </Button>
            </Stack>
          

            
          </Stack>
        </Flex>
        <Flex flex={1} border='0px'>
          <Image
            p={{ base: '10px', md: '10px', lg: '10px' }}
            alt={'Login Image'}
            objectFit={'cover'}
            className='home-img'
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