import img from "../../img/mainImg.jpg"
type ProductProps = {
  name: string,
  price: number,
  category: string
}
const Product = ({name , price , category}:ProductProps) => {
  return (
    <div className='card mb-3'>
      <div className="card-img-top">
        <img src={img}  className='img-fluid'/>
      </div>
      <div className="card-body">
        <h3 className='mb-2'>{name}</h3>
        <h5 className="text-primary">{category}</h5>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum nostrum at deserunt?</p>
        <h6 className="text-danger fw-bold">{price}$</h6> 
        <button className="btn btn-primary">Add To Cart</button>
      </div>
    </div>
  )
}

export default Product
