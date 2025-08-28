import Row from './Row';
import { DIRECTION } from '../utils';
import '../Styles/GridView.css';

const GridView = () => {
  return <div className='grid'>
    <Row className='grid-row' count={3} />
    <Row className='grid-row' count={1} align={DIRECTION.RIGHT} />
    <Row className='grid-row' count={3} />
  </div>
}

export default GridView;