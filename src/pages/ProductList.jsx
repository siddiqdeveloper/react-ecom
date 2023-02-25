import { useEffect, useState } from "react"
import ApiService from "../ApiService";

const ProductList = ()=>{
  const [list,setList] = useState([]);


  useEffect( ()=>{

    getOur1();

  },[]);

  function getOur1(){
    ApiService.get('products').then((res)=>{

      console.log(res);
      setList(res.data);
    } )
  }

  const deleteData = (item)=>{
    console.log(item.id);
    ApiService.delete('products/'+item.id).then( (e)=>{
      getOur1();
    });

  }

    return <>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    { list.map( (pro)=>{

      return  <>
       <tr>
      <th scope="row">{pro.id}</th>
      <td>{pro.product_name}</td>
      <td>{pro.product_price}</td>
      <td> <button onClick={ (e)=>{
        
                        deleteData(pro);
      
      } } >Delete</button> </td>
    </tr>
  
      </>
    }) }
   
   
  </tbody>
</table></>

}

export default ProductList