import './App.css'
import Grid from './components/Grid/Grid'

function App() {
 

  return (
    <>
    <h1 className='nav'>Tic Tac Toe Game</h1>
    <Grid numberOfCards={9} />
    </>
  )
}

export default App
