import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { loadUnits } from '../../actions/appActionCreators';
import { Unit } from '../../reducers/appReducer';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import '../../styles/units.scss';
import Header from '../../components/header';
import { Link } from 'react-router-dom';

function Units(props: any) {
  const [formValues, setFormValues] = useState({
    ages: 'all'
  });

  useEffect(() => {
    // Update the document title using the browser API
    props.dispatch(loadUnits());
  }, []);

  const getFilteredUnits = (units: Unit[], filter: any) => {
    console.log('filter', filter);

    if (filter.ages !== `all`) {
      units = units.filter((x: Unit) =>
        x.age?.toLowerCase().includes(filter.ages?.toLowerCase())
      );
    }

    if (filter.food_filter) {
      units = units.filter((x: Unit) => {
        if (x.cost !== null) {
          if (typeof x.cost.Food !== `undefined`) {
            return x.cost.Food <= filter.food;
          }

          return false;
        }
        return false;
      });
    }

    if (filter.wood_filter) {
      units = units.filter((x: Unit) => {
        if (x.cost !== null) {
          if (typeof x.cost.Wood !== `undefined`) {
            return x.cost.Wood <= filter.wood;
          }

          return false;
        }
        return false;
      });
    }

    if (filter.gold_filter) {
      units = units.filter((x: Unit) => {
        if (x.cost !== null) {
          if (typeof x.cost.Gold !== `undefined`) {
            return x.cost.Gold <= filter.gold;
          }

          return false;
        }
        return false;
      });
    }

    return units;
  };

  const formSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj);

    setFormValues(formDataObj as any);
  };

  return (
    <>
      <Header />
      <Container>
        <Form onSubmit={(e) => formSubmit(e)}>
          <Row>
            <Col>
              <Form.Label>Ages</Form.Label>
              <Form.Group className="mb-3" controlId="formBasicAgeFilter">
                <Form.Check
                  type={'radio'}
                  id={`default-radio-all`}
                  label={`all`}
                  name="ages"
                  value="all"
                  defaultChecked
                />
                <Form.Check
                  type={'radio'}
                  id={`default-radio-dark`}
                  label={`dark`}
                  name="ages"
                  value={`dark`}
                />
                <Form.Check
                  type={'radio'}
                  id={`default-radio-feudal`}
                  name="ages"
                  value={`feudal`}
                  label={`feudal`}
                />
                <Form.Check
                  type={'radio'}
                  id={`default-radio-castle`}
                  name="ages"
                  value={`castle`}
                  label={`castle`}
                />

                <Form.Check
                  type={'radio'}
                  name="ages"
                  value={`imperial`}
                  id={`default-radio-imperial`}
                  label={`imperial`}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label>Costs</Form.Label>

              <Form.Group className="mb-3" controlId="cost">
                <Form.Text>Wood</Form.Text>
                <Form.Check type={'checkbox'} name="wood_filter" />
                <Form.Range name="wood" title="Wood" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="cost">
                <Form.Text>Food</Form.Text>
                <Form.Check type={'checkbox'} name="food_filter" />
                <Form.Range name="food" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="cost">
                <Form.Text>Gold</Form.Text>
                <Form.Check type={'checkbox'} name="gold_filter" />
                <Form.Range name="gold" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Search
              </Button>
            </Col>
          </Row>
        </Form>

        <Row>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Costs</th>
                </tr>
              </thead>
              <tbody>
                {getFilteredUnits(props.app.units, formValues).map(
                  (unit: Unit, index: number) => {
                    return (
                      <tr key={`table-row-` + index}>
                        <td>{unit.id}</td>
                        <td>
                          <Link to={'/units/' + unit.id}>{unit.name}</Link>
                        </td>
                        <td>{unit.age}</td>
                        <td>{JSON.stringify(unit.cost)}</td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default connect((state) => state, null)(Units);
