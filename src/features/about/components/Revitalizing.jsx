import React from 'react'
import Re1 from "../../../assets/about-images/revitalizing.png"
import Image from 'next/image'
import Container from '@/components/Container'
const Revitalizing = () => {
  return (
    <Container>
        <div className=' grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className=' col-span-1' >
        <Image src={Re1} priority alt="Revitalizing" />
        </div>
        <div className=' col-span-1'>
            test
        </div>
    </div>
    </Container>
  )
}

export default Revitalizing