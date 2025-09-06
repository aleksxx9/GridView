import GridRow from './GridRow';
import { DIRECTION } from '../constants';
import '../Styles/GridView.css';
import { useEffect } from 'react';

let timerId = null;
const buttonNodes = [];

const timer = () => {
  timerId = setTimeout(() => {
    let delay = 1000;

    buttonNodes?.reverse().forEach(button => {
      delay += 1000;

      setTimeout(() => {
        button.classList.remove('active');
      }, delay)
    })
  }, 1000);
}

const buttonClick = (e) => {
  if (e.target.className.includes('grid-button')) {
    if (!e.target.className.includes('active')) {
      e.target.classList.add('active');
      buttonNodes.push(e.target);
    }

    clearTimeout(timerId);
    timer();
  }
}

const GridView = () => {
  useEffect(() => {
    document.addEventListener('click', buttonClick);

    return () => {
      document.removeEventListener("click", buttonClick);
    }
  }, [])

  return <div className='grid'>
    <GridRow className='grid-row' count={3} />
    <GridRow className='grid-row' count={1} align={DIRECTION.RIGHT} />
    <GridRow className='grid-row' count={3} />
  </div>
}

export default GridView;