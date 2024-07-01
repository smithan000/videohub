import React from 'react'
import {Button, Drawer,DrawerOverlay,DrawerContent, useDisclosure ,DrawerCloseButton, DrawerHeader, DrawerBody, VStack, HStack} from '@chakra-ui/react'
import {BiMenuAltLeft} from 'react-icons/bi'
import { Link } from 'react-router-dom'
const Header = () => {
    const {isOpen,onOpen,onClose}=useDisclosure()
  return (
   <>
   <Button m={1}
    pos={'fixed'}
    top={4} left={4}
    colorScheme='teal'
  
p={'0'}
   w={'10'}
   h={'10'}
   borderRadius={'full'}
   onClick={onOpen}
   zIndex={'overlay'}>
    <BiMenuAltLeft />
   </Button>

   <Drawer isOpen={isOpen} placement='left' onClose={onClose} >

    <DrawerOverlay/>
    <DrawerContent>
        <DrawerCloseButton/>
        <DrawerHeader>VIDEO HUB</DrawerHeader>
        <DrawerBody>
            <VStack alignItems={'flex-start'}>
                <Button onClick={onClose} variant={'ghost'} color={'#319795'}>
                    <Link to={"/"}>Home</Link>
                </Button>

                <Button onClick={onClose} variant={'ghost'} color={'#319795'}>
                    <Link to={"/videos"}>Videos</Link>
                </Button>

                <Button onClick={onClose} variant={'ghost'} color={'#319795'}>
                    <Link to={"/videos?category=free"}>Free Videos</Link>
                </Button>

                <Button onClick={onClose} variant={'ghost'} color={'#319795'}>
                    <Link to={"upload"}>Upload Videos</Link>
                </Button>
            </VStack>

            <HStack pos={'absolute'} bottom={'10'} left={'-2'}
            w={'full'}
            justifyContent={'space-evenly'}
            >
                <Button onClick={onClose} variant={'outline'} bg={'#319795'} color={'white'}>
                    <Link to={'/login'}>Log In</Link>
                </Button>

                <Button onClick={onClose} variant={'outline'} bg={'#319795'} color={'white'}>
                    <Link to={'/signup'}>Sign Up</Link>
                </Button>
            </HStack>
        </DrawerBody>
    </DrawerContent>
   </Drawer>
   </>
  )
}

export default Header