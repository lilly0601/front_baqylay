import { About } from "./ui/About.tsx"
import { Card } from "./ui/Card.tsx"
import {Navbar} from "./ui/Navbar.tsx"
import { Text } from "./ui/Text.tsx"

export const Main=()=>{
    return(
        <div className="min-h-screen bg-black">
            <Navbar />
            <Text/>
            <About />
            <Card/>
        </div>
    )
}