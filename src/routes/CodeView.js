import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import QRCode from "react-qr-code";
import './CodeView.css'

import Navigation from "../components/Navigation";

function CodeView() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/");
        }
    });

    return (
        <div><Navigation />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <div
                            id="qr"
                            className="d-flex align-items-center justify-content-center"
                        >
                            <div className="row">
                                <div className="row">
                                    <p className="text-center"><QRCode value={JSON.stringify(location.state.data)}/></p>

                                </div>
                                <div className="row pt-3">
                                    <p className="text-center">{new Date().toUTCString()}</p>
                                </div>
                                <div className="row pt-3">

                                    <h4 className="text-center h4"><strong>{location.state.student_name}</strong></h4>

                                </div>
                                <div className="row text-center">
                                    <h5 className="text-center h5">{location.state.student_number}</h5>
                                </div>
                            </div>


                        </div>

                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </div>
    );

}

export default CodeView;