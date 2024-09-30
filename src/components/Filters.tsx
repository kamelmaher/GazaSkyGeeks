import { useState } from "react"
import { filterData } from "../Store/FilterSlice"
import { useAppDispatch } from "../Store/Store"
const filters: string[] = ["All", "Electronics", "Clothing", "Category 3"]
const Filters = () => {
    const [activeButton, setActiveButton] = useState(0)
    const dispatch = useAppDispatch()
    return (
        <div className="row w-75 m-auto mb-4 justify-content-around">
            {
                filters.map((e, i) => {
                    return <div className="col-md-3 col-sm-6 text-center mb-3 filter" key={i}>
                        <button className={activeButton == i ? "w-75  btn btn-outline-primary active" :
                            "w-75  btn btn-outline-primary"
                        }
                        onClick={() => {
                            setActiveButton(i)
                            dispatch(filterData(e))
                        }}
                        >{e}</button>
                    </div>
                })
            }
        </div>
    )
}

export default Filters
