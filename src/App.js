import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import image from './images/dotalogo.png'

function App() {
  return (
    <div style={{fontFamily:"roboto"}}>
      <header className="App-header">
        <img src={image} style={{width:"100px"}} alt="logo" />
      </header>
    </div>
  );
}

export default App;
