import React from "react";
import FlashMessage from "react-native-flash-message";
import Navigations from "./src/navigation";

const App: React.FC = () => {
  return (
    <>
      <Navigations />
      <FlashMessage position="top" duration={4000} />
    </>
  );
};

export default App;
