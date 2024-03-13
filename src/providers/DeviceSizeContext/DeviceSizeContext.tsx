import { useWindowSize } from "@/hooks/useWindowSize/useWindowSize";
import { ReactElement, createContext } from "react";

export type DeviceType = "Desktop" | "Large Desktop" | "Tablet" | "Large Tablet" | "Mobile" | "Large Mobile";
export type SizeType =  "xl" | "lg" | "md" | "sm";

export type DeviceTypeContextProps = {
  deviceType: DeviceType;
  size: SizeType;
}

const getDeviceSize = (deviceWidth: number) => {
  if (deviceWidth === null) {
    throw new Error("'deviceWidth' can't be null");
  };
  let deviceType: DeviceType;
  let deviceSize: SizeType;
  deviceType = "Desktop";
  deviceSize = "xl";

  if (deviceWidth < 768) {
    deviceType = "Large Tablet";
    deviceSize = "lg";
  }
  if (deviceWidth < 480) {
    deviceType = "Tablet";
    deviceSize = "md";
  }
  if (deviceWidth < 320) {
    deviceSize = "sm";
    deviceType = "Mobile";
  }
  return { deviceSize, deviceType };
};

const { deviceSize, deviceType } = getDeviceSize(window.innerWidth);

const initialState = {
  deviceType,
  deviceSize,
};

const DeviceSizeContext = createContext(initialState);

export const DeviceSizeContextProvider = ({ children } : { children: ReactElement }) => {
  const { width, height } = useWindowSize();
  const deviceSize = getDeviceSize(width);
  console.log(deviceSize);
  return (
    <DeviceSizeContext.Provider value={deviceSize} >
      { children }
    </DeviceSizeContext.Provider>
  );
}