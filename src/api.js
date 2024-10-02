import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

const MyApi = () =>{
    let[bloglist, setBlog] = useState( [] );
    const getBlog = () =>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response=>response.json())
        .then(blogArray=>{
            setBlog(blogArray);
        })
    }

    useEffect(()=>{
        getBlog();
    }, []);

    const dispatch = useDispatch();
    const save = () =>{
        let dispatchData = {type:"saveblog", blogdata:bloglist};
        dispatch(dispatchData);
        alert("Records Sent To Store !");
    }

    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-12 text-center mb-4">
                    <h3> Manage Api Data : { bloglist.length } </h3>
                    <button className="btn btn-danger m-4" onClick={ save }> Send To Redux </button>
                </div>

                {
                    bloglist.map((blog, index)=>{
                        return(
                            <div className="col-lg-4 mb-4" key={index}>
                                <p className="p-4 shadow-lg"> {blog.body} </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MyApi;