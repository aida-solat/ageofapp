import {connect} from "react-redux";
import {useEffect} from "react";
import { loadUnits } from "../../actions/appActionCreators";

function Units(props:any) {
    console.log('unitsProps', props);
    useEffect(() => {
        // Update the document title using the browser API
        props.dispatch(loadUnits());    
      }, []);


    const units = props.app.units.map((x:any)=>{
        return (
            <div>{x.name} {}</div>
        )
    })

    return (
        <div>
{units}
        </div>
    )
}

export default connect(state=>state,null)(Units);
