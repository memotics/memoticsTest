import { Canvas } from "@react-three/fiber";
import { CardScrolling } from "./CardScrolling";

const Main = () => {
    
    return (<>
        <Canvas camera={{
            far:100, fov: 75,
            }}>
            <CardScrolling></CardScrolling>
        </Canvas>
    </>);
}

export default Main;