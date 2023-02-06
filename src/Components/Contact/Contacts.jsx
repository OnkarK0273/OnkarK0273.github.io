import { Flex, Heading, IconButton,Icon, Box, VStack, Menu, Image, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { AiTwotoneMail,AiFillGithub,AiFillTwitterCircle,AiFillLinkedin} from "react-icons/ai";
import { ImLocation2} from "react-icons/im";
import {MdCall} from "react-icons/md";
export default function Contacts() {
  return (
    <Box  id="contact">

        <Heading color={'#C7AE92'}  pt='40px' pb='40px'>CONTACT ME</Heading>
        <Box bg='#C7AE92' pt='20px' m='auto'>

        
            <VStack w='280px' m='auto' border={'0px'} alignItems={'center'} pb='10px'>
                <VStack   alignItems={'flex-start'} >
                    <HStack columnGap={'10px'}>
                        <Icon as={ImLocation2} boxSize={8} />
                        <Text fontWeight={'bold'}>Kolhapur, Maharashtra</Text>
                    </HStack>
                    <HStack columnGap={'10px'}>
                        <Icon as={MdCall} boxSize={8} />
                        <Text  id="contact-phone" fontWeight={'bold'}>
                            +91-9503504241
                        </Text>
                    </HStack>
                    <HStack columnGap={'10px'}>
                        <Icon as={AiTwotoneMail} boxSize={8} />
                        <Text  id="contact-email" fontWeight={'bold'}>onkarok0273.1@gmail.com</Text>
                    </HStack>
                </VStack>
            </VStack>
            <Box  m='auto'p='10px'>
                <Flex border={'0px'}  justifyContent='space-between' alignItems={'center'} flexDirection={{base:'column',md:'row'}} >
                        <Menu >
                            <Image w='100px' src='/images/signature.png'></Image>
                        </Menu>
                        <Flex border={'0px'}  justifyContent='space-around' alignItems={'center'} w='30%' >
                        
                            <IconButton id="contact-github" onClick={()=>{document.location.href='https://github.com/OnkarK0273' }} bg='#C7AE92' size={'lg'} icon={<Icon as={AiFillGithub} boxSize={8} />} />
                            <IconButton onClick={()=>{document.location.href='https://twitter.com/iOnkar_K' }} bg='#C7AE92' size={'lg'} icon={<Icon as={AiFillTwitterCircle} boxSize={8} />} />
                            <IconButton id="contact-linkedin" onClick={()=>{ document.location.href='https://www.linkedin.com/in/onkar-k-557a421a4/'}} bg='#C7AE92' size={'lg'} icon={<Icon as={AiFillLinkedin} boxSize={8} />} />
                        </Flex>

                </Flex>
                
            </Box>
        </Box>
        
    </Box>
  )
}
//document.location.href=#
//email - AiTwotoneMail
// linkdin - AiFillLinkedin
// github - AiFillGithub
// twitter - AiFillTwitterCircle
// location = ImLocation2
// call - IoCallSharp