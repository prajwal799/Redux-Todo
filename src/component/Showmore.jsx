import { useEffect } from "react";
import { useParams } from "react-router"



const Showmore = () => {
    const [data , setData] = ("");
    const {id} =  useParams();
    const showid = id[1];
    console.log(showid);
    
    useEffect(() => {
     fetch(`https://pratice-heroku-server.herokuapp.com/posts`)
     .then((res) => {
         res.json()
        console.log(res) 
     })
     .then((res) => {
         console.log(res)
     })
     .catch((err) => {
         console.log(err)
     })
    },[])
    // console.log(setData,"dsf",id,showid)
    return(
        <div>
         
        </div>
    )
}
export default Showmore