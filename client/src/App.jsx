import './App.css';
import { Button, CircularProgress } from '@mui/material';

function App() {
  return (
    <>
      <Button variant="contained">Contained</Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" href="#contained-buttons">
        Link
      </Button>
      <CircularProgress />
    </>
  );
}

export default App;
