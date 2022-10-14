import {connect} from "react-redux";
import {useEffect} from "react";
import { loadUnits } from "../../actions/appActionCreators";

function Home(props:any) {
    console.log('homeProps', props);
    useEffect(() => {
        // Update the document title using the browser API
        props.dispatch(loadUnits());    
      }, []);

      const randomUnit = props.app.units[Math.floor(Math.random() * props.app.units.length)];
      console.log('randomUnit', randomUnit);

    return (
        <div>
            {randomUnit.name}
            {randomUnit.id}

