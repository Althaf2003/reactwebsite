import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const MyProduct = () =>{
    const allproduct = useSelector(state=>state.Productlist);
    let[pname, pickName] = useState("");
    let[pprice, pickPrice] = useState("");
    let[pqty, pickQty] = useState("");

    const dispatch = useDispatch();
    const save = () =>{
        let newproduct = {name:pname, price:pprice, qty:pqty};
        let dataForDispatch = {pinfo:newproduct, type:"saveproduct"};
        dispatch(dataForDispatch);
        pickName(""); pickPrice(""); pickQty("");
    }

    const delproduct = (index) =>{
        let pinfo = {productindex:index, type:"deleteproduct"};
        dispatch(pinfo);
    }

    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h3> Manage Product : {allproduct.length} </h3>
                    <p> 
                       <input type="text" className="m-3" placeholder="Name" value={pname}
                       onChange={obj=>pickName(obj.target.value)}/>

                       <input type="text" className="m-3" placeholder="Price" value={pprice}
                       onChange={obj=>pickPrice(obj.target.value)}/>

                       <input type="text" className="m-3" placeholder="Quantity" value={pqty}
                       onChange={obj=>pickQty(obj.target.value)}/> 

                        <button className="btn btn-primary m-3" onClick={save}> Save </button>
                    </p>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-lg-12">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th> Sl No </th>
                                <th> Product Name </th>
                                <th> Price </th>
                                <th> Quantity </th>
                                <th> Action </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allproduct.map((product, index)=>{
                                    return(
                                        <tr key={index}>
                                            <td> {index} </td>
                                            <td> {product.name} </td>
                                            <td> {product.price} </td>
                                            <td> {product.qty} </td>
                                            <td>
                                                <button 
                                                    className="btn btn-danger btn-sm"
                                                    onClick={delproduct.bind(this, index)}> Delete 
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default MyProduct;