import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import { loadUnits } from "../../actions/appActionCreators";
import {useEffect} from "react";
function UnitDetails(props:any) {
    console.log('unitDetailsProps', props);
    const {id} = useParams();
    useEffect(() => {
        // Update the document title using the browser API
        props.dispatch(loadUnits());    
        console.log('id', id);
      }, []);



      const unit = props.app.units.filter((x:any)=>x.id == id);


      if(unit.length == 0){
        return (<div>unit not found</div>)
    }

    const unitData = unit[0];

    return (
        <div>{unitData.name}</div>
        
    )
}

export default connect(state=> state)(UnitDetails);
