const GridRow = (props) => {
  const { count, align } = props;
  const rowLength = Array.apply(null, Array(count));

  let btnClass = 'grid-row';

  if (align) {
    btnClass += ` ${align}`
  }

  return <div className={btnClass}>
    {rowLength.map(() => {
      return <button className='grid-button' />
    })}
  </div>
}

export default GridRow;