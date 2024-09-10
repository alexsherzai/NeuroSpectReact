import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import VisualEncoding from './components/VisualEncoding';
import VisualMemory from './components/VisualMemory';
import Score from './components/Score';
import './components/stylesheet.css';

function App() {
  const [count, setCount] = useState(0)
  const [stage, nextStage] = useState('temp');

  const [shapesVisMem, setShapesVisMem] = useState([])
    const shapesToMem = (shapes) => {
        setShapesVisMem(shapes);
    }
  
  const [chosen, setChosen] = useState([]);

    const shapes = [
        <svg width="50" height="50" viewBox = "0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <polygon points="50,15 61,35 85,35 66,50 75,75 50,55 25,75 34,50 15,35 39,35" stroke="none" fill="none" stroke-width="2"/>
        </svg>,



        <svg width="100" height="100" viewBox = "0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <polygon points="50,15 61,35 85,35 66,50 75,75 50,55 25,75 34,50 15,35 39,35" stroke="black" fill="none" stroke-width="2"/>
        </svg>,
        <svg width="100" height="100" viewBox = "0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <path d="M10,50 Q25,10 40,50 T70,50 T100,50" stroke="black" fill="none" stroke-width="2"/>
        </svg>,
        <svg width="100" height="100" viewBox = "0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <path d="M50,50 m-25,0 a25,25 0 1,1 50,0 a25,25 0 1,1 -50,0" stroke="black" fill="none" stroke-width="2"/>
        </svg>,
        <svg width="100" height="100" viewBox = "0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="50" r="20" stroke="black" fill="none" stroke-width="2"/>
            <circle cx="70" cy="50" r="20" stroke="black" fill="none" stroke-width="2"/>
        </svg>,
        <svg width="100" height="100" viewBox = "0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" stroke="black" fill="none" stroke-width="2"/>
            <polygon points="50,20 70,70 30,70" stroke="black" fill="none" stroke-width="2"/>
        </svg>,
        <svg width="100" height="100" viewBox = "0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <polyline points="10,90 30,10 50,90 70,10 90,90" stroke="black" fill="none" stroke-width="2"/>
        </svg>,
        <svg width="100" height="100" viewBox = "0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <path d="M10,30 Q25,10 40,30 T70,30 T100,30 M10,70 Q25,50 40,70 T70,70 T100,70" stroke="black" fill="none" stroke-width="2"/>
        </svg>,
        <svg width="100" height="100" viewBox = "0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="40" height="40" stroke="black" fill="none" stroke-width="2"/>
            <rect x="40" y="40" width="40" height="40" stroke="black" fill="none" stroke-width="2"/>
        </svg>,
        <svg width="100" height="100" viewBox = "0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <path d="M20,20 Q50,50 80,20 M20,80 Q50,50 80,80" stroke="black" fill="none" stroke-width="2"/>
        </svg>,
        <svg width="100" height="100" viewBox = "-5 -5 110 110" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="10" stroke="black" fill="none" stroke-width="2"/>
            <circle cx="50" cy="50" r="30" stroke="black" fill="none" stroke-width="2"/>
            <circle cx="50" cy="50" r="50" stroke="black" fill="none" stroke-width="2"/>
        </svg>,
        <svg width="100" height="100" viewBox = "-15 -15 130 130" xmlns="http://www.w3.org/2000/svg">
            <path d="M50,10 Q65,30 80,10 Q95,30 110,10 Q95,70 80,50 Q65,70 50,50 Q35,70 20,50 Q5,70 -10,50 Q5,30 20,10 Q35,30 50,10" stroke="black" fill="none" stroke-width="2"/>
        </svg>,
        <svg width="100" height="100" viewBox = "10 0 100 65" xmlns="http://www.w3.org/2000/svg">
            <polygon points="30,20 40,10 60,10 70,20 60,30 40,30" stroke="black" fill="none" stroke-width="2"/>
            <polygon points="50,40 60,30 80,30 90,40 80,50 60,50" stroke="black" fill="none" stroke-width="2"/>
        </svg>,
        <svg width="100" height="100" viewBox = "0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <path d="M10,10 L90,10 L90,90 L10,90 L10,30 L70,30 L70,70 L30,70 L30,50 L50,50" stroke="black" fill="none" stroke-width="2"/>
        </svg>,
        <svg width="100" height="100" viewBox = "0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <line x1="50" y1="10" x2="50" y2="90" stroke="black" stroke-width="2"/>
            <line x1="10" y1="50" x2="90" y2="50" stroke="black" stroke-width="2"/>
            <line x1="20" y1="20" x2="80" y2="80" stroke="black" stroke-width="2"/>
            <line x1="80" y1="20" x2="20" y2="80" stroke="black" stroke-width="2"/>
        </svg>,
        <svg width="100" height="100" viewBox="0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <polygon points="50,10 90,40 70,90 30,90 10,40" stroke="black" fill="none" stroke-width="2"/>
        </svg>,
        <svg width="100" height="100" viewBox="0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <path d="M20,20 C40,10 60,10 80,20 C70,40 60,80 50,100 C40,80 30,40 20,20" stroke="black" fill="none" stroke-width="2"/>
        </svg>,
        <svg width="100" height="100" viewBox="0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="60" height="60" stroke="black" fill="none" stroke-width="2" transform="rotate(45, 50, 50)"/>
        </svg>,
        <svg width="100" height="100" viewBox="0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" stroke="black" fill="none" stroke-width="2"/>
            <circle cx="50" cy="50" r="20" stroke="black" fill="none" stroke-width="2"/>
        </svg>,
        <svg width="100" height="100" viewBox="0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <polygon points="50,5 95,50 50,95 5,50" stroke="black" fill="none" stroke-width="2"/>
        </svg>,
        <svg width="100" height="100" viewBox="0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <path d="M50,10 Q75,25 50,40 Q25,25 50,10 M50,40 Q75,55 50,70 Q25,55 50,40 M50,70 Q75,85 50,100 Q25,85 50,70" stroke="black" fill="none" stroke-width="2"/>
        </svg>,
        <svg width="100" height="100" viewBox="0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <polygon points="50,20 70,50 50,80 30,50" stroke="black" fill="none" stroke-width="2"/>
            <circle cx="50" cy="50" r="10" stroke="black" fill="none" stroke-width="2"/>
        </svg>,
        <svg width="100" height="100" viewBox="0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="85" height="85" stroke="black" fill="none" stroke-width="2" rx="15"/>
        </svg>,
        <svg width="100" height="100" viewBox="0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="50" cy="50" rx="40" ry="20" stroke="black" fill="none" stroke-width="2"/>
        </svg>,
        <svg width="100" height="100" viewBox="0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <path d="M50,5 L85,40 L50,75 L15,40 Z" stroke="black" fill="none" stroke-width="2"/>
            <circle cx="50" cy="40" r="5" fill="black"/>
        </svg>,
        <svg width="100" height="100" viewBox="0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <path d="M50,10 C65,20 85,50 50,90 C15,50 35,20 50,10 Z" stroke="black" fill="none" stroke-width="2"/>
        </svg>,
        <svg width="100" height="100" viewBox="0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="85" height="85" stroke="black" fill="none" stroke-width="2" transform="rotate(45, 50, 50)"/>
        </svg>,
        <svg width="100" height="100" viewBox="0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <path d="M50,5 L70,40 L95,40 L75,60 L85,95 L50,75 L15,95 L25,60 L5,40 L30,40 Z" stroke="black" fill="none" stroke-width="2"/>
        </svg>,
        <svg width="100" height="100" viewBox="0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" stroke="black" fill="none" stroke-width="2"/>
            <path d="M50,10 L50,90 M10,50 L90,50" stroke="black" fill="none" stroke-width="2"/>
        </svg>,
        <svg width="100" height="100" viewBox="0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <path d="M50,5 Q70,25 90,50 Q70,75 50,95 Q30,75 10,50 Q30,25 50,5" stroke="black" fill="none" stroke-width="2"/>
        </svg>,
        <svg width="100" height="100" viewBox="0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <path d="M10,50 L30,20 L50,50 L70,20 L90,50 L70,80 L50,50 L30,80 Z" stroke="black" fill="none" stroke-width="2"/>
        </svg>,
        <svg width="100" height="100" viewBox="0 0 105 105" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" stroke="black" fill="none" stroke-width="2"/>
            <polygon points="50,10 70,40 50,70 30,40" stroke="black" fill="none" stroke-width="2"/>
        </svg>
    ];

  return (
      <>
          {stage === 'temp' && <VisualEncoding shapes={shapes} shapesToMem={shapesToMem} onTimeEnd={() => nextStage('temp2')} />}
          {stage === 'temp2' && <VisualMemory shapes={shapes} shapesToMem={shapesVisMem} chosen={setChosen} onTimeEnd={() => nextStage('score')}  />}
          {stage === 'score' && <Score correct={shapesVisMem} chosen={chosen} />}
      </>
  )
}

export default App
