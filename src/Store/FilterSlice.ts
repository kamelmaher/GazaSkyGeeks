import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type Product = {
    name: string , 
    price: number,
    category: string
}

type FilterState = {
    products: Product[]
} 
const products =  [
    { name: "Product 1", price: 20, category: "Electronics" },
    { name: "Product 2", price: 50, category: "Electronics" },
    { name: "Product 3", price: 10, category: "Clothing" },
    { name: "Product 4", price: 30, category: "Electronics" },
    { name: "Product 5", price: 20, category: "Clothing" },
    { name: "Product 6", price: 40, category: "Electronics" },
    { name: "Product 7", price: 50, category: "Clothing" },
    { name: "Product 8", price: 10, category: "Electronics" },
] 
const initialState: FilterState = {
    products: products 
}
export const FilterSlice = createSlice({
    name: "ProductSlice",
    initialState,
    reducers: {
        filterData: (state , action: PayloadAction<string>) => {
            let data:Product[] = products
            if(action.payload == "All"){
                data = products
            }else {
                data = products.filter(e => {
                    return e.category == action.payload
                })
            }
            state.products = data
        }
    }
})

export default FilterSlice.reducer
export const {filterData } = FilterSlice.actions;
