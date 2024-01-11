import "../styles.css"
import Form from "./Components/Form"
import NetflixLogo from "./Components/NetflixLogo"
import YoutubeLogo from "./Components/YoutubeLogo"

function App() {
  return(
    <div className="AppContainer">
      <Form/>
      <NetflixLogo/>
      <YoutubeLogo/>
    </div>
  )
}

export default App