import {useState,useEffect} from "react";
import MainContent from "./MainContent"
import { Nav } from "./Nav"


function App() {
  const [Theme, setTheme] = useState("light");

  useEffect(() => {
    if (Theme === "dark") {
      document.documentElement.classList.add('dark')
    }
    else {
      document.documentElement.classList.remove('dark')
    }
  }, [Theme])

  const ThemeSwitcher = () => {
    setTheme(
      Theme === "dark" ? "light" : "dark"
    );
  }

  return (
    <div className="dark:bg-slate-800">
      <Nav Theme={Theme} ThemeSwitcher={ThemeSwitcher} />
      <MainContent />
    </div>
  )
}

export default App
