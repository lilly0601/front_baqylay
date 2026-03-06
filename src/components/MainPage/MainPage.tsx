import { Navbar } from "./ui/Navbar.tsx"
import { Menu } from "./ui/Menu.tsx"
import { End } from "./ui/End.tsx"

export const MainPage = () => {
  return (
    <div className="min-h-screen bg-white sm:px-6 lg:px-8">
      <Navbar />  
      <Menu/>
      <End/>
    </div>
  )
}