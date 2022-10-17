import { connect } from 'react-redux';
import { useEffect } from 'react';
import { loadUnits } from '../../actions/appActionCreators';
import Header from '../../components/header';

function Home(props: any) {
  console.log('homeProps', props);
  useEffect(() => {
    // Update the document title using the browser API
    props.dispatch(loadUnits());
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <div className="body-container">
          <img
            src="https://picsum.photos/800"
            alt="age of empires 2"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </>
  );
}

export default connect((state) => state, null)(Home);
