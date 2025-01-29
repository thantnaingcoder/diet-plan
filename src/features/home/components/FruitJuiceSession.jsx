import React from 'react'
import JuicePng from "../../../assets/home-images/Group 6.png"
import Image from 'next/image'
import Container from '@/components/Container'
const FruitJuiceSession = () => {
  return (
    <Container className={" py-10"}>
        <Image src={JuicePng} width={1920} priority height={300} alt="hero" />
    </Container>
  )
}

export default FruitJuiceSession