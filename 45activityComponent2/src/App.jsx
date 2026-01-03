import Home from "./components/Home";
import TabButton from "./components/TabButton";
import Contact from "./components/Contact";
import { Activity, useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState("contact");
  return (
    <>
      <TabButton
        isActive={activeTab === "home"}
        onClick={() => setActiveTab("home")}
      >
        Home
      </TabButton>

      <TabButton
        isActive={activeTab === "contact"}
        onClick={() => setActiveTab("contact")}
      >
        Contact
      </TabButton>

      <hr />

      <Activity mode={activeTab === "home" ? "visible" : "hidden"}>
        <Home />
      </Activity>
      <Activity mode={activeTab === "contact" ? "visible" : "hidden"}>
        <Contact />
      </Activity>
    </>
  );
}

export default App;
