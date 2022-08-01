import Table from 'react-bootstrap/Table';
import {BsPencilFill, BsTrashFill} from "react-icons/bs";

const TutorialList = () => {
  return (
    <div>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#id</th>
          <th>title</th>
          <th>desc</th>
          
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          
          <BsPencilFill/>
          <BsTrashFill/>

        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
         
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          
        </tr>
      </tbody>
    </Table>

    </div>
  )
}

export default TutorialList