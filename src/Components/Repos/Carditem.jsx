import { Box, Tag, Text, HStack ,IconButton,Icon} from '@chakra-ui/react'
import React from 'react'
import Carousel from './Cursor'
import { AiOutlineLink,AiFillGithub} from "react-icons/ai";
import {MdSlowMotionVideo } from "react-icons/md";
export default function Carditem({name,html_url,homepage,topics,images,description,id}) {
    
  return (
    <div>
        <Box height={"410px"} bg='whiteAlpha.800' boxShadow='md' p='2px' rounded='md' borderColor='#C7AE92'_hover={{
                  bg: 'whiteAlpha.800',
                  boxShadow:'2xl',
                  p:'3px',
                  
                }}>
            
            <Carousel images={images}/>
            <Text fontWeight={'bold'}>{name}</Text>
            <Text w='80%' m='auto' color={'gray.500'}>{description}</Text>
            
            <HStack justifyContent={'center'} mt='10px'>
            {  topics.map((el,i)=>(<Tag key={i} size='sm' 
                variant='outline'
                color='black' p='5px' >{el}</Tag>))

            }
            </HStack>
            <HStack justifyContent={'center'} columnGap='8px' mt='10px'>
            <IconButton onClick={()=>{ document.location.href=html_url}} bg='#C7AE92' size={'sm'} icon={<Icon as={AiFillGithub}  />} />
            <IconButton onClick={()=>{ document.location.href=homepage}} bg='#C7AE92' size={'sm'} icon={<Icon as={id===577832607?MdSlowMotionVideo:AiOutlineLink}  />} />
            </HStack>
        </Box>

    </div>
  )
}

