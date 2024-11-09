import BgHeading from "./components/BgHeading"
import Container from "./components/Container"
import Footer from "./components/Footer"
import Main from "./components/Main"

function App() {
   console.log("I am from app")
   return (
      <Container>
         <BgHeading />
         <Main />
         <Footer />
      </Container>
   )
}

export default App
