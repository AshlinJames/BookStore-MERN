import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';


function App() {

  return (
    <>
      <h1>bookstore</h1>
      <FontAwesomeIcon icon={faSquareInstagram} />
      <Button variant="success">Success</Button>
    </>
  )
}

export default App
