import logo from './logo.svg';
import './App.css';

// Goes in ChatRoom page
// const style = {
//   button: {
//       fontSize: '2rem',
//       border: '1px solid black',
//       backgroundColor: 'white',
//       padding: '.5em',
//       marginLeft: '.5em',
//       borderRadius: "5px"
//   }
// }

// Goes in LandingPage page
// const style = {
//   wrapper: {
//       margin: "0 auto",
//       marginTop: '12em',
//       width: '50em',
//       textAlign: 'center'
//   },
//   h1Title: {
//       fontSize: '100px',
//       fontWeight: 200,
//       border: "3px solid #c88b96",
//       borderRadius: '3px',
//       marginBottom: '.25em',
//       backgroundColor: '#252830',
//       color: '#c88b96'
//   },
//   input: {
//       fontSize: '2rem',
//       borderRadius: '5px',
//       border: '1px solid #c88b96'
//   }
// };

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
