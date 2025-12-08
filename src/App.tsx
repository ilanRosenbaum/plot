import './App.css';

function GridBoard() {
    const rows = 100;
    const cols = 100;
    
    document.documentElement.style.setProperty("--cols", String(cols));
    document.documentElement.style.setProperty("--rows", String(rows));
    let grid = []; 
    
    for (let col = 0; col < cols; col++) {
      for (let row = 0; row < rows; row++) {
        grid.push(<GridSquare key={`${col}${row}`} color="1"/>) 
      }
    }

    return (
        <div className='grid-board'>
            {grid}
        </div>
    )
}

interface GridSquareProps {
  color: string,
  key: string,
}

function GridSquare(props: GridSquareProps) {
  const classes = `grid-square color-${props.color}`
  return <div id={props.key} className={classes} />
}

function App() {
  return (
    <div className="App">
      <GridBoard />
    </div>
  );
}

export default App;
