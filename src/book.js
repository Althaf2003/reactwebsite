import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const MyBook = () =>{

    let[newbook, setBook] = useState("");
    const dispatch = useDispatch();

    const save = () =>{
        let bookinfo = {bookname:newbook, type:"addbook"};
        dispatch(bookinfo);
        setBook("");
    }

    const delbook = (index) =>{
        let bookinfo = {bookindex:index, type:"deletebook"};
        dispatch(bookinfo); // dispatch request to store in redux
    }

    const allbook = useSelector(state=>state.Booklist); // fetch data from store

    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h3> Manage Book : {allbook.length} </h3>
                    <p> 
                        Enter Book Name : <input type="text" className="m-3"
                        onChange={obj=>setBook(obj.target.value)}  value={newbook}/> 

                        <button className="btn btn-primary m-3" onClick={save}> Save </button>
                    </p>
                </div>
            </div>
            <div className="row mt-4">
                {
                    allbook.map((bookname, index)=>{
                        return(
                            <div className="col-lg-2 mb-4" key={index}>
                                <div className="p-3 rounded text-white bg-info">
                                    <p> {bookname} </p>
                                    <button 
                                        onClick={delbook.bind(this, index)} 
                                        className="btn btn-danger btn-sm"> Delete 
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MyBook;