import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import QRCode from "react-qr-code";
import './CodeView.css'

import { decryptString } from "../Global/crypto";

function CodeView() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/");
        }
    });

    return (

        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div
                        id="qr"
                        className="d-flex align-items-center justify-content-center"
                    >
                        <div className="row">
                            <div>
                                <QRCode value={JSON.stringify(location.state.data)} />

                            </div>
                            <div className="row">
                                {/* {JSON.stringify(location.state.data)} */}
                                {location.state.student_number}
                            </div>
                        </div>


                    </div>

                </div>
                <div className="col-md-4"></div>
            </div>
        </div>

    );

}

export default CodeView;