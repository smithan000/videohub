import { Button, Container, Heading, Input, VStack,Text, Avatar } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'} >
        <form>
            <VStack
            alignItems={'stretch'}
            spacing={'5'}
            w={['full','96']}
            m={'auto'}
            my={'5'}
            >
                <Heading alignSelf={'center'}>VIDEO HUB</Heading>
                <Avatar alignSelf={'center'} boxSize={'32'}/>
                <Input placeholder={'Name'} type={'text'} required />
                <Input placeholder={'Email'} type={'email'} required />
                <Input placeholder={'Password'} type={'password'} required />
                <Button colorScheme='teal' type='submit'>Sign Up</Button>

                <Text  textAlign={'right'}>Already Signed Up?
                <Button variant={'link'}>
                    <Link to={'/login'} style={{color:'teal'}}>  Login</Link>
                </Button>
                </Text>
                
            </VStack>
        </form>
    </Container>
  )
}

export default Signup