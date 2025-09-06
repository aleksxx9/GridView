const GridRow = (props) => {
  const { count, align } = props;

  const rowLength = Array.apply(null, Array(count));
  let btnClass = 'grid-row';

  if (align) {
    btnClass += ` ${align}`
  }

  return <div className={btnClass}>
    {
      rowLength.map(() => {
        return <Button />
      })
    }
  </div>
}

const Button = () => {
  return (
    <button className={`grid-button`} />
  )
}

export default GridRow;