import { Box, Grid, Heading, IconButton,Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { FaHtml5,
FaCss3Alt,
FaReact,
FaBootstrap,
FaNode,
FaGithub } from 'react-icons/fa'
import { SiJavascript,
SiTypescript,
SiRedux,
SiChakraui,
SiExpress,
SiVercel,
SiNetlify,
SiPostman,
SiVisualstudiocode,
SiCanva } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { DiMongodb } from 'react-icons/di'

export default function Skills() {
  return (
    <Box id="skills">
        <Heading color='#C7AE92' p='30px' mb='20px'>SKILLS</Heading>
        <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(6, 1fr)'}} w='80%'  m='auto' rowGap={'20px'} columnGap='20px'>

        <Box  bg='#C7AE92' p='5px' borderRadius={'md'}  _hover={{ bg:'#E2E8F0' }}>
          <Icon className='skills-card-img' as={FaHtml5} boxSize={8} />
          <Text className='skills-card-name' fontWeight={'bold'}>HTML</Text>
        </Box>
      
        <Box className='skills-card' bg='#C7AE92' p='5px' _hover={{ bg:'#E2E8F0' }} borderRadius={'md'}>
          <Icon className='skills-card-img' as={FaCss3Alt} boxSize={8} /> 
          <Text className='skills-card-name' fontWeight={'bold'}>CSS</Text>
        </Box>

        <Box className='skills-card' bg='#C7AE92' p='5px' _hover={{ bg:'#E2E8F0' }} borderRadius={'md'}>
          <Icon className='skills-card-img' as={SiJavascript} boxSize={8} /> 
          <Text className='skills-card-name' fontWeight={'bold'}>JavaScript</Text>
        </Box>

        <Box className='skills-card' bg='#C7AE92' p='5px' _hover={{ bg:'#E2E8F0' }} borderRadius={'md'}>
          <Icon className='skills-card-img' as={SiTypescript} boxSize={8} /> 
          <Text className='skills-card-name' fontWeight={'bold'}>TypeScript</Text>
        </Box>

        <Box className='skills-card' bg='#C7AE92' p='5px' _hover={{ bg:'#E2E8F0' }} borderRadius={'md'}>
         <Icon className='skills-card-img' as={FaReact} boxSize={8} /> 
          <Text className='skills-card-name' fontWeight={'bold'}>React</Text>
        </Box>

        <Box className='skills-card' bg='#C7AE92' p='5px' _hover={{ bg:'#E2E8F0' }} borderRadius={'md'}>
         <Icon className='skills-card-img' as={SiRedux} boxSize={8} /> 
          <Text className='skills-card-name' fontWeight={'bold'}>Redux</Text>
        </Box>

      {/*  */}

        <Box className='skills-card' bg='#C7AE92' p='5px' _hover={{ bg:'#E2E8F0' }} borderRadius={'md'}>
          <Icon className='skills-card-img' as={SiChakraui} boxSize={8} />
          <Text className='skills-card-name' fontWeight={'bold'}>Chakra</Text>
        </Box>
      
        <Box className='skills-card' bg='#C7AE92' p='5px' _hover={{ bg:'#E2E8F0' }} borderRadius={'md'}>
          <Icon className='skills-card-img' as={FaBootstrap} boxSize={8} /> 
          <Text className='skills-card-name' fontWeight={'bold'}>Bootstrap</Text>
        </Box>

        <Box className='skills-card' bg='#C7AE92' p='5px' _hover={{ bg:'#E2E8F0' }} borderRadius={'md'}>
          <Icon className='skills-card-img' as={FaNode} boxSize={8} /> 
          <Text className='skills-card-name' fontWeight={'bold'}>Nodejs</Text>
        </Box>

        <Box className='skills-card' bg='#C7AE92' p='5px' _hover={{ bg:'#E2E8F0' }} borderRadius={'md'}>
          <Icon className='skills-card-img' as={DiMongodb} boxSize={8} /> 
          <Text className='skills-card-name' fontWeight={'bold'}>Mongodb</Text>
        </Box>

        <Box className='skills-card' bg='#C7AE92' p='5px' _hover={{ bg:'#E2E8F0' }} borderRadius={'md'}>
         <Icon className='skills-card-img' as={TbBrandNextjs} boxSize={8} /> 
          <Text className='skills-card-name' fontWeight={'bold'}>Nextjs</Text>
        </Box>

        <Box className='skills-card' bg='#C7AE92' p='5px' _hover={{ bg:'#E2E8F0' }} borderRadius={'md'}>
         <Icon className='skills-card-img' as={SiExpress} boxSize={8} /> 
          <Text  className='skills-card-name' fontWeight={'bold'}>Express</Text>
        </Box>
         
         {/*  */}

         <Box className='skills-card' bg='#C7AE92' p='5px' _hover={{ bg:'#E2E8F0' }} borderRadius={'md'}>
         <Icon className='skills-card-img' as={SiVercel} boxSize={8} />
          <Text className='skills-card-name' fontWeight={'bold'}>Vercel</Text>
        </Box>
      
        <Box className='skills-card' bg='#C7AE92' p='5px' _hover={{ bg:'#E2E8F0' }} borderRadius={'md'}>
         <Icon className='skills-card-img' as={SiNetlify} boxSize={8} /> 
          <Text className='skills-card-name' fontWeight={'bold'}>Netlify</Text>
        </Box>

        <Box className='skills-card' bg='#C7AE92' p='5px' _hover={{ bg:'#E2E8F0' }} borderRadius={'md'}>
         <Icon className='skills-card-img' as={SiPostman} boxSize={8} /> 
          <Text className='skills-card-name' fontWeight={'bold'}>Postman</Text>
        </Box>

        <Box className='skills-card' bg='#C7AE92' p='5px' _hover={{ bg:'#E2E8F0' }} borderRadius={'md'}>
         <Icon className='skills-card-img' as={FaGithub} boxSize={8} /> 
          <Text className='skills-card-name' fontWeight={'bold'}>Github</Text>
        </Box>

        <Box className='skills-card' bg='#C7AE92' p='5px' _hover={{ bg:'#E2E8F0' }} borderRadius={'md'}>
        <Icon className='skills-card-img' as={SiVisualstudiocode} boxSize={8} /> 
          <Text className='skills-card-name' fontWeight={'bold'}>VScode</Text>
        </Box>

        <Box className='skills-card' bg='#C7AE92' p='5px' _hover={{ bg:'#E2E8F0' }} borderRadius={'md'}>
        <Icon className='skills-card-img' as={SiCanva} boxSize={8} /> 
          <Text className='skills-card-name' fontWeight={'bold'}>Canva</Text>
        </Box>

        </Grid>

    </Box>
  )
}
