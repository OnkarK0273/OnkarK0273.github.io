import { Box, Grid, Heading, IconButton,Icon } from '@chakra-ui/react'
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
    <Box id='Skills'>
        <Heading color='#C7AE92' p='20px' mb='30px'>SKILLS</Heading>
        <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(6, 1fr)'}} w='80%'  m='auto' rowGap={'20px'} columnGap='20px'>

        <IconButton  bg='#C7AE92' size={'lg'} icon={<Icon as={FaHtml5} boxSize={8} />} />
        <IconButton  bg='#C7AE92' size={'lg'} icon={<Icon as={FaCss3Alt} boxSize={8} />} />
        <IconButton  bg='#C7AE92' size={'lg'} icon={<Icon as={SiJavascript} boxSize={8} />} />
        <IconButton  bg='#C7AE92' size={'lg'} icon={<Icon as={SiTypescript} boxSize={8} />} />
        <IconButton  bg='#C7AE92' size={'lg'} icon={<Icon as={FaReact} boxSize={8} />} />
        <IconButton  bg='#C7AE92' size={'lg'} icon={<Icon as={SiRedux} boxSize={8} />} />

        <IconButton  bg='#C7AE92' size={'lg'} icon={<Icon as={SiChakraui} boxSize={8} />} />
        <IconButton  bg='#C7AE92' size={'lg'} icon={<Icon as={FaBootstrap} boxSize={8} />} />
        <IconButton  bg='#C7AE92' size={'lg'} icon={<Icon as={FaNode} boxSize={8} />} />
        <IconButton  bg='#C7AE92' size={'lg'} icon={<Icon as={DiMongodb} boxSize={8} />} />
        <IconButton  bg='#C7AE92' size={'lg'} icon={<Icon as={TbBrandNextjs} boxSize={8} />} />
        <IconButton  bg='#C7AE92' size={'lg'} icon={<Icon as={SiExpress} boxSize={8} />} />

        <IconButton  bg='#C7AE92' size={'lg'} icon={<Icon as={SiVercel} boxSize={8} />} />
        <IconButton  bg='#C7AE92' size={'lg'} icon={<Icon as={SiNetlify} boxSize={8} />} />
        <IconButton  bg='#C7AE92' size={'lg'} icon={<Icon as={SiPostman} boxSize={8} />} />
        <IconButton  bg='#C7AE92' size={'lg'} icon={<Icon as={FaGithub} boxSize={8} />} />
        <IconButton  bg='#C7AE92' size={'lg'} icon={<Icon as={SiVisualstudiocode} boxSize={8} />} />
        <IconButton  bg='#C7AE92' size={'lg'} icon={<Icon as={SiCanva} boxSize={8} />} />
          

        </Grid>

    </Box>
  )
}
