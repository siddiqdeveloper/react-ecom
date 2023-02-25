import { Routes,Route} from 'react-router-dom'
import AddProduct from './AddProduct'
import Layout from './Layout'
import ProductView from './ProductView'
import ProductList from './ProductList'
const App = ()=>{

    return <>
    
        <Routes>

            <Route  path=''  element={<Layout/>} >
                <Route  index  element={<AddProduct/>} ></Route>
                <Route  path='/product-list' element={<ProductList/>} />
                <Route  path='product/view' element={<ProductView/>} />
            
            </Route>

        </Routes>
    </>

}

export default App