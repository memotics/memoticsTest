import { useRef, useState, useEffect } from 'react'
import { useThree } from '@react-three/fiber'
import { Loader, Float, useGLTF, PresentationControls, Environment, Html,useAnimations } from '@react-three/drei'
import { GlobalCanvas, ScrollScene, UseCanvas, SmoothScrollbar } from '@14islands/r3f-scroll-rig'
import { BodyCopy, Headline, Subtitle } from "./Text";
import { useFrame } from '@react-three/fiber'
// Need to start preloading assets to make sure Loader
// is not removed before the canvas children mounts
useGLTF.preload('/glb/watch-v1.glb')



const FloatBoy = () => {
  const el = useRef()
  return (
    <section>
      <div ref={el} className="Placeholder ScrollScene"></div>
      <UseCanvas>
        <ScrollScene track={el}>{(props) => <Boy {...props} />}</ScrollScene>
        </UseCanvas>
    </section>
  )
}

function SpinningBoxWebGL({ scale, scrollState }) {
  const mesh = useRef()
  useFrame(() => {
    mesh.current.rotation.y = scrollState.progress * Math.PI * 2
  })
  return (
    <group scale={scale.xy.min() * 0.5}>
      <mesh ref={mesh}>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </group>
  )
}



function Boy({props,scrollState}) {
const group = useRef()
const { nodes, materials, animations } = useGLTF('/glb/boy_float.glb')
const { actions, ref, names } = useAnimations(animations, group)

function playAnims(actionArray) {
  actions[actionArray].timeScale = 1.2;
  actions[actionArray].reset().fadeIn(0.5).play();
}
  //  useFrame(() => {
  //   group.current.rotation.x = scrollState.progress * Math.PI * 1
  // })

useEffect(() => {
  names.forEach(playAnims)
}, []);
return (
  <group ref={group} {...props}  position={[2, -2.5, 10]}dispose={null}>
    <group name="Scene">
      <group name="BezierCircle">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.025}>
        <skinnedMesh
            name="Ch09"
            geometry={nodes.Ch09.geometry}
            material={materials['Ch09_body.001']}
            skeleton={nodes.Ch09.skeleton}
          />
          <primitive object={nodes.mixamorig6Hips} />
        </group>
      </group>
    </group>
  </group>
)
}

export default FloatBoy;
useGLTF.preload('/glb/boy_float.glb')