import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import React from 'react'
import { useFrame } from '@react-three/fiber'

const Mesh = () => {

    const model = useGLTF('./rtx-3080.glb');

    let meshes = {};
    model.scene.traverse(e => {
        if (e instanceof THREE.Mesh || e instanceof THREE.Group) {
            meshes[e.name] = e;
        }
    });

    useFrame(() => {
        meshes.fan_RTX_3080_0.rotation.z += 5
        meshes.fan_2_RTX_3080_0.rotation.z += 5

    });

  return <group rotation={[0,45,0]}>
    <primitive object={model.scene} />
  </group>
}

export default Mesh