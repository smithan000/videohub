import { Container, HStack, Input, VStack,Button } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'

const Upload = () => {
  return <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
    <VStack color={'teal.500'} h={'full'} justifyContent={'center'}>
        <AiOutlineCloudUpload size={'10vmax'}/>
        <form>
            <HStack>
                <Input required type='file' css={{
                    '&::file-selector-button':{
                        border:'none',
                        width:'calc(100% + 36px)',
                        height:'100%',
                        marginLeft:'-18px',
                        color:'teal',
                        backgroundColor:'white',
                        cursor:'pointer'
                    }
                }}/>
                <Button colorScheme={'teal'} type={'submit'}>Upload</Button>
            </HStack>
        </form>
    </VStack>
  </Container>
}

export default Upload