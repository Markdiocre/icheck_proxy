import Navigation from "../components/Navigation";
import Button from "../components/Button";

import "./MenuView.css";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  });

  return (
    <div>
      <Navigation />
      <div className="container-fluid">
        <div className="pt-5">
          <div className="pt-3">
            <div className="row">
              <div className="col-md-12">
                <h5 className="h4 text-center red mx-5">
                  Your current health check is monitored everyday by iCheck. The
                  inquiries should be honestly and regularly answered.
                </h5>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-lg-1"></div>
              <div className="col-lg-10">
                <h4 className="h4">I am currently expiriencing:</h4>
                <div className="row">
                  <div className="col-md-2 col-sm-6 pt-2">
                    <Button text="Fever" />
                  </div>
                  <div className="col-md-2 col-sm-6 pt-2 ">
                    <Button text="Cough" />
                  </div>
                  <div className="col-md-2 col-sm-6 pt-2">
                    <Button text="Body Pain" />
                  </div>
                  <div className="col-md-2 col-sm-6 pt-2">
                    <Button text="Sore Throat" />
                  </div>
                  <div className="col-md-2 col-sm-6 pt-2">
                    <Button text="Tiredness" />
                  </div>
                  <div className="col-md-2 col-sm-6 pt-2">
                    <Button text="Headache" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-2 col-sm-6 pt-2">
                    <Button />
                  </div>
                  <div className="col-md-2 col-sm-6 pt-2 ">
                    <Button />
                  </div>
                  <div className="col-md-2 col-sm-6 pt-2">
                    <Button />
                  </div>
                  <div className="col-md-2 col-sm-6 pt-2">
                    <Button />
                  </div>
                  <div className="col-md-2 col-sm-6 pt-2">
                    <Button />
                  </div>
                  <div className="col-md-2 col-sm-6 pt-2">
                    <Button />
                  </div>
                </div>
                <div className="row pt-2">
                  <div className="col-md-12">
                    <Button />
                  </div>
                </div>
                <div className="row pt-2">
                  <div className="col-md-12">
                    <Button />
                  </div>
                </div>
                <div className="row pt-2">
                  <div className="col-md-12">
                    <Button />
                  </div>
                </div>
              </div>
              <div className="col-lg-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
