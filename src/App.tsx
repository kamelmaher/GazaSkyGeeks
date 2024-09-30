import './App.css'
import Filters from './components/Filters'
import Product from './components/Product'
import { useAppSelector } from "./Store/Store"

function App() {
  const products = useAppSelector(state => state.products.products)
  return (
    <div className='p-3 m-3'>
      <Filters />
      <div className="row justify-content-around mt-4">
        {
          products.length > 0 ?
          products.map((e, i) => <div className="col-md-4" key={i}>
            <Product key={i} name={e.name} price={e.price} category={e.category}></Product>
          </div>)
        :
        <h3 className='text-danger text-center'> No Products Under This Category</h3>
      }
      </div>
    </div>
  )
}


export default App