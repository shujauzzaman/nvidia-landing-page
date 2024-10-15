import { Canvas } from '@react-three/fiber'
import React from 'react'
import Mesh from './Mesh'
import { Environment, OrbitControls } from '@react-three/drei'

const Landing = () => {
  return (
    <div className='flex items-center justify-between'>
        <div className='flex flex-col gap-5 h-[30rem] justify-center'>
            <h1 className='tag text-4xl font-bold'>GeForce RTX <br /> 3080 Family</h1>
            <h2 className='tag text-2xl font-bold'>The Ultimate Play</h2>
            <p className='w-[30rem] font-medium'>The GeForce RTXTM 3080 Ti and RTX 3080 graphics cards deliver the performance that gamers crave, powered by Ampere—NVIDIA’s 2nd gen RTX architecture. They are built with dedicated 2nd gen RT Cores and 3rd gen Tensor Cores, streaming multiprocessors, and G6X memory for an amazing gaming experience.</p>
            <button className='btn w-max flex gap-3 items-center'>
                <svg className='h-5 w-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                See All Buying Options
            </button>
        </div>
        {/* 3d model */}
        <div className='h-[30rem]'>
            <Canvas camera={{ fov:60, position:[0,0,-30] }}>
              <directionalLight position={[0, 10, 0]} intensity={30} />
              <OrbitControls enableZoom={false} rotateSpeed={0.2} autoRotate={true} enablePan={false}/>
              <Mesh />
              <Environment files={['./goegap_road_4k.hdr']} />
            </Canvas>
        </div>
    </div>
  )
}

export default Landing