import { useState } from "react";
const Myuser = () =>{

    let[userlist, setUser] = useState([]);
    let[newuser, pickUser] = useState("");

    const save = () =>{
        setUser( [...userlist, newuser] );
        pickUser("");
    }

    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-12 text-center mb-4">
                    <h3> Manage User : {userlist.length} </h3>
                    <p> 
                        Enter Full Name : 
                        <input 
                            type="text" 
                            className="m-3" 
                            onChange={obj=>pickUser(obj.target.value)}
                            value={newuser}/> 
                        <button className="btn btn-primary m-3" onClick={save}> Save </button>
                    </p>
                </div>
                {
                    userlist.map((fullname, index)=>{
                        return(
                            <div className="col-lg-3 mb-4" key={index}>
                                <p className="text-center p-4 rounded border"> {fullname} </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Myuser;