import { useState } from "react"
import ApiService from "../ApiService";

const AddProduct = ()=>{
    const [form,setForm] = useState({product_name:'',product_price:''});
    return (
        <>
        <form>
        <div class="mb-3">
            <label class="form-label">Product Name</label>
            <input type="text" onKeyUp={ 

                (inputacce)=>{

                    setForm((state)=>{
                        return {...state,product_name:inputacce.target.value};
                    })


                }

             } name="product_name" class="form-control"   />
            </div>
            <div class="mb-3">
            <label  class="form-label">Product Price</label>
            <input onKeyUp={ 

            (inputacce)=>{
                setForm((state)=>{
                    return {...state,product_price:inputacce.target.value};
                })
            }

                } type="text" name="product_price" class="form-control"   />
            </div>

            <button onClick={ (e)=>{
                e.preventDefault();
                console.log(form);

                ApiService.post('products',form).then( (e)=>{

                })
            } }>Save</button>
        </form>
        </>
    )

}

export default AddProduct