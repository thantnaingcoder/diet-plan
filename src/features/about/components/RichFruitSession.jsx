import React from 'react'
import Rf from "../../../assets/about-images/rich-session.png"
import Image from 'next/image'
const RichFruitSession = () => {
  return (
    <div>
        <Image src={Rf} priority width={1920} height={600} alt="Rich Fruit Session" />
    </div>
  )
}

export default RichFruitSession