import logo from './logo.svg';
import './App.css';
import { auth,googleProvider } from './firebase';
import {signInWithPopup,signOut} from 'firebase/auth';

function App() {
  return (
    <div className="App">
    <button onClick={()=> signInWithPopup(auth,googleProvider)}>Sign in</button>
    <button onClick={()=> signOut(auth)}>Sign out</button>
    <h1>Hello again</h1>
    </div>
  );
}

export default App;
