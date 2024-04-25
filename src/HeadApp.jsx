import {
  UseCanvas,
  ScrollScene,
  useScrollRig,
  useImageAsTexture,
  styles,
} from "@14islands/r3f-scroll-rig";
import { ParallaxScrollScene } from "@14islands/r3f-scroll-rig/powerups";

import * as THREE from 'three'
import { useRef, useReducer, useMemo, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, MeshTransmissionMaterial, Environment, Lightformer, Html } from '@react-three/drei'
import { CuboidCollider, BallCollider, Physics, RigidBody } from '@react-three/rapier'
import { EffectComposer, N8AO } from '@react-three/postprocessing'
import { easing } from 'maath'
import { useInView } from "react-intersection-observer";

const accents = ['#ff4060', '#20ffa0', '#ffcc00']
const shuffle = (accent = 0) => [
  { color: '#444', roughness: 0.1 },
  { color: '#444', roughness: 0.75 },
  { color: '#444', roughness: 0.75 },
  { color: 'white', roughness: 0.1 },
  { color: 'white', roughness: 0.75 },
  { color: 'white', roughness: 0.1 },
  { color: accents[accent], roughness: 0.1, accent: true },
  { color: accents[accent], roughness: 0.75, accent: true },
  { color: accents[accent], roughness: 0.1, accent: true }
]

const HeadApp = () => {
  return <HeadScene style={{ borderRadius: 30, width: '100%', height: '65vh' }} />
}
export default HeadApp;

function HeadScene(props) {
  const [accent, click] = useReducer((state) => ++state % accents.length, 0);
  const connectors = useMemo(() => shuffle(accent), [accent]);
  const { ref, inView } = useInView();
  const boxRef = useRef();

  return (
    <Canvas ref={ref} onClick={click} shadows dpr={[1, 1.5]} gl={{ antialias: false }} camera={{ position: [0, 0, 15], fov: 17.5, near: 1, far: 20 }} frameloop={inView ? 'always' : 'never'} {...props}>
      <color attach="background" args={['#000000']} />
      <ambientLight intensity={0.4} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <RotatePhysics boxRef={boxRef} />
      <Physics gravity={[1, 0, 0]}>
        <Pointer boxRef={boxRef} />
        <group ref={boxRef}>
          {connectors.map((props, i) => <Connector key={i} {...props} />)}
          <Connector position={[10, 10, 5]}>
            <Model>
              <MeshTransmissionMaterial clearcoat={1} thickness={0.1} anisotropicBlur={0.1} chromaticAberration={0.1} samples={8} resolution={0} />
            </Model>
          </Connector>
        </group>
      </Physics>
      <EffectComposer disableNormalPass multisampling={8}>
        <N8AO distanceFalloff={1} aoRadius={1} intensity={4} />
      </EffectComposer>
      <Environment resolution={256}>
        <group rotation={[-Math.PI / 3, 0, 1]}>
          <Lightformer form="circle" intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={2} />
          <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={2} />
          <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={2} />
          <Lightformer form="circle" intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={8} />
        </group>
      </Environment>

      {/* Add the text */}
      <Html style={{ zIndex: -1 }}>
        <div className="text-container">
          <p id="aBrift">A brief pause for a little fun ...</p>
          <p> <i>and perhaps we can design </i></p>
          <p> <i>a personal touch just for you too </i></p>
        </div>
      </Html>
    </Canvas>
  );
}

function RotatePhysics({ boxRef }) {
  useFrame((state, delta) => {
    boxRef.current.rotation.y -= 0.002;
    if (boxRef.current.rotation.y <= -(Math.PI * 2)) {
      boxRef.current.rotation.y = 0;
    }
  });
}

var headMovement = 0;

function Connector({ position, children, vec = new THREE.Vector3(), scale, r = THREE.MathUtils.randFloatSpread, accent, ...props }) {
  const api = useRef();
  const pos = useMemo(() => position || [r(10), r(10), r(10)], []);
  useFrame((state, delta) => {
    delta = Math.min(0.1, delta)

    headMovement += 0.0002;
    if (headMovement >= (Math.PI * 2)) headMovement = 0;
    api.current?.applyImpulse(vec.copy(api.current.translation()).add(new THREE.Vector3(Math.sin(headMovement), 0.5 * Math.cos(headMovement), 0)).negate().multiplyScalar(0.2));
  })
  return (
    <RigidBody linearDamping={4} angularDamping={1} friction={0.1} position={pos} ref={api} colliders={false}>
      {/* <CuboidCollider args={[0.38, 1.27, 0.38]} />
    <CuboidCollider args={[1.27, 0.38, 0.38]} />
    <CuboidCollider args={[0.38, 0.38, 1.27]} /> */}
      <CuboidCollider args={[0.295, 0.9625, 0.295]} />
      <CuboidCollider args={[0.9625, 0.295, 0.295]} />
      <CuboidCollider args={[0.295, 0.295, 0.9625]} />
      {children ? children : <Model {...props} />}
      {accent && <pointLight intensity={4} distance={2.5} color={props.color} />}
    </RigidBody>
  )
}

function Pointer({ vec = new THREE.Vector3(), boxRef }) {
  const ref = useRef()
  useFrame(({ mouse, viewport }) => {
    var vecX = (mouse.x * viewport.width) / 2;
    var vecY = (mouse.y * viewport.height) / 2;
    var vecZ = 0;


    ref.current?.setNextKinematicTranslation(vec.set(vecX * Math.cos(boxRef.current.rotation.y), (mouse.y * viewport.height) / 2, -vecX * Math.cos(boxRef.current.rotation.y)))
  })
  return (
    <RigidBody position={[0, 0, 0]} type="kinematicPosition" colliders={false} ref={ref}>
      <BallCollider args={[1]} />
    </RigidBody>
  )
}

function Model({ children, color = 'white', roughness = 0, ...props }) {
  const ref = useRef()
  const { nodes, materials } = useGLTF('/glb/Homie_Jath.glb')
  useFrame((state, delta) => {
    easing.dampC(ref.current.material.color, color, 0.3, delta)
  })
  return (

    <mesh ref={ref} castShadow receiveShadow scale={2} geometry={nodes.connector.geometry}>
      <meshStandardMaterial metalness={0.5} roughness={roughness} material={materials.base} />
      {children}
    </mesh>
  )
}