import { Box, Button, HStack, Heading, Input, Stack, VStack,Text } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend} from 'react-icons/ai'
const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} color={'white'} minH={'40'} p={'12'}>
        <Stack direction={['column','row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'2'} py={['8']} >
            <Heading textTransform={'uppercase'} size={'md'} textAlign={['center','left']}>Subscribe to get updates</Heading>
            <HStack borderBottom={'2px solid white'} py={'2'}>
                <Input placeholder='Enter Email here...' border={'none'} borderRadius={'none'} outline={'none'} focusBorderColor='none'/>
                <Button  borderRadius={'0 20px 20px 0'} p={'0'} colorScheme='teal' variant={'ghost'}>
                    <AiOutlineSend/>
                </Button>
            </HStack>
        </VStack>
<VStack w={'full'}
borderLeft={['none','1px solid white']}
borderRight={['none','1px solid white']} py={['8']} >
<Heading textTransform={'uppercase'} textAlign={'center'}>Video Hub</Heading>
<Text>All rights received</Text>
</VStack>
<VStack w={'full'} py={['8']} >
    <Heading size={'md'} textTransform={'uppercase'}>
    Social Media
    </Heading>
    <Button variant={'link'} color={'white'}>
    <a target='blank' href='https://www.instagram.com/smithan000/'>Instagram</a>
    </Button>
    <Button variant={'link'} color={'white'}>
    <a target='blank' href='https://www.linkedin.com/in/smitha-n-b100a8252/'>LinkedIn</a>
    </Button>
    
</VStack>
        </Stack>
    </Box>
  )
}

export default Footer