import { StoredData } from "./VirtualTour/Context";
import { useContext, useState } from "react";
import App from "./App";

const Wrapper = () => {
    const [ data, setData ] = useState({dropPhysics: false, RenderSpace: "CloudSpace"});

    const updateDropPhysics = (newValue) => {
        setData((prevState) => ({ ...prevState, dropPhysics: newValue }));
      };
    
      const updateRenderingSpace = (newValue) => {
        setData((prevState) => ({ ...prevState, RenderSpace: newValue }));
      };

    return (
        <StoredData.Provider value={{data, updateDropPhysics, updateRenderingSpace}}>
                <App></App>
            </StoredData.Provider>
    );
}

export default Wrapper;