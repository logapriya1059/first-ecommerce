import { useEffect,useState } from "react";
import axios from "axios";

function useFetch(url){
    let [products,setProducts]=useState([]);
    let [error,setError]=useState("");
    let [isLoading,setIsLoading]=useState(true);

useEffect(()=>{
    let fetchApi=async()=>{
        try{
            let response=await axios.get(url)
            setProducts(response.data);
        }catch(error){
            setError(error.message);

        }finally{
            setIsLoading(false);
        }
    };
    fetchApi();
    
},[])

return {products,error,isLoading}

}
export default useFetch;