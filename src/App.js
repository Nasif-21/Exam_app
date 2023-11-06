//import logo from './logo.svg';
import './App.css';
import ImgGrid from './components/ImgGrid';

function App() {
  return (
   <div>
    <p>Selected Images: </p>
    <button type="button" className="btn btn-danger">Delete Image</button>

    <ImgGrid/>
    </div>
  );
}

export default App;
