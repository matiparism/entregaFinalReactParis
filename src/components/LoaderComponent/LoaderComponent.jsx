import React from "react";
import { BarLoader } from "react-spinners";

export const LoaderComponent = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <BarLoader color="white" loading={true} width={200} height={5} />
    </div>
  );
};
