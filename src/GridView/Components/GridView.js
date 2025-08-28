import GridRow from './GridRow';
import { DIRECTION } from '../utils';
import '../Styles/GridView.css';

const GridView = () => {
  return <div className='grid'>
    <GridRow className='grid-row' count={3} />
    <GridRow className='grid-row' count={1} align={DIRECTION.RIGHT} />
    <GridRow className='grid-row' count={3} />
  </div>
}

export default GridView;