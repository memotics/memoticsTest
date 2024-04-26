import { createContext } from "react";

export const StoredData = createContext({
  dropPhysics: false, // Default for dropPhysics
  RenderingSpace: "CloudSpace", // Default for RenderingSpace
});