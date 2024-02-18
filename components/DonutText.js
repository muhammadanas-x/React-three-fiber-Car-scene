import { Scroll, ScrollControls } from '@react-three/drei'
import React from 'react'

const DonutText = () => {
  return (
    <>
    <ScrollControls pages={0}>
        <Scroll html>
            <div className='absolute'>
                hello
            </div>
        </Scroll>
    </ScrollControls>
    </>
  )
}

export default DonutText