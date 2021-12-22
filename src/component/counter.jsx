import { useDispatch, useSelector } from "react-redux"
import { addcounter, reducecounter } from "../Redux/action";

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter);
    
      const handleAdd = () => {
          dispatch(addcounter(1))
      }
      const handleReduce = () => {
          dispatch(reducecounter(1));
      }
    return(
        <div>
            {counter}<br />
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}
export default Counter