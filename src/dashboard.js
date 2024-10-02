
import { useSelector } from "react-redux";

const Mydashboard = () =>{
    const allbook = useSelector(state=>state.Booklist);
    const allproduct = useSelector(state=>state.Productlist);
    const allapi = useSelector(state=>state.Apilist);

    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h1> React & Redux Dashboard </h1>
                </div>
            </div>

            <div className="row mt-5 text-center">
                <div className="col-lg-4">
                    <div className="p-4 rounded shadow-lg">
                        <h4> Total Book in Store <br/> {allbook.length} </h4>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="p-4 rounded shadow-lg">
                        <h4> Total Product in Store <br/> {allproduct.length} </h4>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="p-4 rounded shadow-lg">
                        <h4> Total Api Data in Store <br/> {allapi.length} </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mydashboard;