import './App.css';
import HappyEaster from './components/HappyEaster';
import { Routes, Route } from "react-router-dom";
import Spinner1 from './components/Spinner1';
import DivTransformation from './components/DivTransformation';
import JellyButton from './components/JellyButton';
import FlipCard from './components/FlipCard';
import TryComponent from './components/TryComponent';
import CardHover from './components/CardHover';
import HoverRainBowButton from './components/HoverRainBowButton';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        {/* <HappyEaster /> */}
        {/* <Spinner1/> */}
        {/* <DivTransformation/> */}
        <JellyButton/>
        {/* <FlipCard/> */}
        {/* <TryComponent/> */}
        {/* <CardHover/> */}
        {/* <HoverRainBowButton/> */}
      </div>
    </div>
  );
}

export default App;
