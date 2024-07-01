import { Button, Container, Heading, Input, VStack,Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'} >
        <form>
            <VStack
            alignItems={'stretch'}
            spacing={'8'}
            w={['full','96']}
            m={'auto'}
            my={'16'}
            >
                <Heading>Welcome Back</Heading>
                <Input placeholder={'Email'} type={'email'} required />
                <Input placeholder={'Password'} type={'password'} required />

                <Button variant={'link'} alignSelf={'flex-end'}>
                    <Link to={'/forgetpassword'}>Forget Password?</Link>
                </Button>

                <Button colorScheme='teal' type='submit'>Log In</Button>

                <Text textAlign={'right'}>New User?{'   '}
                <Button variant={'link'} alignSelf={'flex-end'}>
                    <Link to={'/signup'} style={{color:'teal'}}>  Sign Up</Link>
                </Button>
                </Text>
                
            </VStack>
        </form>
    </Container>
  )
}

export default Login