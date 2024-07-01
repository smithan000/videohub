import { Box, Container, Heading,Text ,Image, Stack} from '@chakra-ui/react'
import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from "../assets/watch.jpg"
import img2 from "../assets/bake.jpg"
import img3 from "../assets/qq.png"
import img4 from "../assets/frnd.jpg"
import img5 from "../assets/game.jpg"
import img6 from "../assets/travel.jpg"

const headingOptions={
  pos:"absolute",
  left:"50%",
  top:"50%",
  transform:"translate(-50%,-50%)",
  textTransform:"uppercase",
  p:"4",
  size:"4xl"
}

const Home = () => {
  return (
    <Box >
    <MyCarousel/>
    <Container maxW={'container.xl'} minH={'100vh'} p={'20'}>
        <Heading  textTransform={'uppercase'} py={'2'} w={'fit-content'} borderBottom={'2px solid'} m={'auto'}>Services</Heading>
        <Stack h={'full'}
        p={'4'}
        alignItems={'center'}
        direction={
          ['column','row']
        }
        >
        <Image src={img3} h={['40','400']}  filter={'hue-rotate(-130deg)'}/>
        <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={'center'}>
        Websites offering comprehensive video services are invaluable in today's digital landscape. They host a vast array of videos, spanning movies, TV shows, music, education, and user-generated content. These platforms prioritize user experience, offering intuitive interfaces, personalized recommendations, and versatile device compatibility. They often provide both free and premium subscription options, granting exclusive access and ad-free viewing. These services are essential hubs for entertainment and information consumption, serving as one-stop destinations for diverse video content needs.
        </Text>
        </Stack>
    </Container>
    </Box>
  )
}
const MyCarousel=()=>(
    <Carousel  interval={1000} autoPlay infiniteLoop showStatus={false} showThumbs={false} showArrows={false}>
<Box w={'full'} >
<Image src={img1}/>
<Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>Watch The Future</Heading>
</Box>

<Box w={'full'} >
<Image src={img4}/>
<Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>Friends</Heading>
</Box>

<Box w={'full'}>
<Image src={img5}/>
<Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>Games</Heading>
</Box>

<Box w={'full'} >
<Image src={img6}/>
<Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>Travelling</Heading>
</Box>

<Box w={'full'}>
<Image src={img2}/>
<Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>Bake</Heading>
</Box>
    </Carousel>
)

export default Home