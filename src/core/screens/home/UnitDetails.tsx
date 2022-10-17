import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadUnits } from '../../actions/appActionCreators';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Header from '../../components/header';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';

function UnitDetails(props: any) {
  const { id } = useParams();
  useEffect(() => {
    // Update the document title using the browser API
    props.dispatch(loadUnits());
  }, []);

  const units = props.app.units.filter((x: any) => x.id == id);

  if (units.length == 0) {
    return <div>unit not found</div>;
  }

  const unit = units[0];
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Min. Required Age</th>
                <th>Wood Cost</th>
                <th>Food Cost</th>
                <th>Gold Cost</th>
                <th>Build Time</th>
                <th>Reload Time</th>
                <th>Hit Points</th>
                <th>Attack</th>
                <th>Accuracy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{unit.id}</td>
                <td>{unit.name}</td>
                <td>{unit.description}</td>
                <td>{unit.age}</td>
                <td>{unit.cost?.Wood}</td>
                <td>{unit.cost?.Food}</td>
                <td>{unit.cost?.Gold}</td>
                <td>{unit.build_time}</td>
                <td>{unit.reload_time}</td>
                <td>{unit.hit_points}</td>
                <td>{unit.attack}</td>
                <td>{unit.accuracy}</td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </Container>
    </>
  );
}

export default connect((state) => state)(UnitDetails);
