import Navigation from "../components/Navigation";
import Button from "../components/Button";

import "./MenuView.css";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { encryptData, decryptString } from "../Global/crypto";

function Menu() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  });

  const submitButton = () => {
    if (!temp) {
      Swal.fire({
        icon: "error",
        title: "No temperature",
        text: "Please input a temperature in Celcius"
      })
    } else {
      Swal.fire({
        text: 'By clicking Submit, I hereby authorize Gordon College , to collect and process the data indicated herein for the purpose of contact tracing effecting control of the COVID 19 transmission. I understand that my personal information is protected by RA 10173 or the data privacy act of 2012.',
        confirmButtonText: 'Submit',
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          navigate('/qr', {
            state: {
              data:{
                m: encryptData({
                  token: localStorage.getItem("token")
                })
              },
              student_number: decryptString(localStorage.getItem('student_name'))
            }
          })
        }
      })
    }
  }



  const [coughs, setCough] = useState(false)
  const [sore, setSore] = useState(false)
  const [fatigue, setFatigue] = useState(false)
  const [headaches, setHeadache] = useState(false)
  const [body_pain, setBodyPain] = useState(false)
  const [dizziness, setDizziness] = useState(false)
  const [fever, setFever] = useState(false)
  const [diarrhea, setDiarrhea] = useState(false)
  const [taste, setTaste] = useState(false)
  const [breathing, setBreathing] = useState(false)
  const [interaction, setInteraction] = useState(false)
  const [symptoms, setSymptoms] = useState(false)
  const [caring, setCaring] = useState(false)
  const [temp, setTemp] = useState()

  return (
    <div>
      <Navigation />
      <div className="container-fluid">
        <div className="pt-5">
          <div className="pt-5">
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
                  <div className="col-md col-sm-4 pt-3">
                    <Button text="Coughs or Colds" onUpdate={() => setCough(!coughs)} status={coughs} />
                  </div>
                  <div className="col-md col-sm-4 pt-3 ">
                    <Button text="Sore Throat" onUpdate={() => setSore(!sore)} status={sore} />
                  </div>
                  <div className="col-md col-sm-4 pt-3">
                    <Button text="Fatigue or Tiredness" onUpdate={() => setFatigue(!fatigue)} status={fatigue} />
                  </div>
                  <div className="col-md col-sm-6 pt-3">
                    <Button text="Headaches" onUpdate={() => setHeadache(!headaches)} status={headaches} />
                  </div>
                  <div className="col-md col-sm-6 pt-3">
                    <Button text="Body Pain" onUpdate={() => setBodyPain(!body_pain)} status={body_pain} />
                  </div>

                </div>
                <div className="row">
                  <div className="col-md col-sm-4 pt-3">
                    <Button text="Dizziness" onUpdate={() => setDizziness(!dizziness)} status={dizziness} />
                  </div>
                  <div className="col-md col-sm-4 pt-3 ">
                    <Button text="Fever" onUpdate={() => setFever(!fever)} status={fever} />
                  </div>
                  <div className="col-md col-sm-4 pt-3">
                    <Button text="Diarrhea" onUpdate={() => setDiarrhea(!diarrhea)} status={diarrhea} />
                  </div>
                  <div className="col-md col-sm-6 pt-3">
                    <Button text="Loss of Tase or Smell" onUpdate={() => setTaste(!taste)} status={taste} />
                  </div>
                  <div className="col-md col-sm-6 pt-3">
                    <Button text="Difficulty of breathing" onUpdate={() => setBreathing(!breathing)} status={breathing} />
                  </div>
                </div>
                <div className="row pt-3">
                  <div className="col-md-12">
                    <Button text="I had face-to-face contact with a probable or confirmed Covid 19 case within 1 meter and for more than 15 minutes for the past 14 days" onUpdate={() => setInteraction(!interaction)} status={interaction} />
                  </div>
                </div>
                <div className="row pt-3">
                  <div className="col-md-12">
                    <Button text="I provided direct care for a patient with a probable or confirmed COVID 19 case without using proper personal protective equipment for the past 14 days
" onUpdate={() => setCaring(!caring)} status={caring} />
                  </div>
                </div>
                <div className="row pt-3">
                  <div className="col-md-12">
                    <Button text="I have any of the symptoms above in the last 3 days" onUpdate={() => setSymptoms(!symptoms)} status={symptoms} />
                  </div>
                </div>
                <div className="row py-3">
                  <div className="col-md-8 pt-2">
                    <div className="input-group">
                      <span className="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#fff" className="bi bi-thermometer-half" viewBox="0 0 16 16">
                        <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V6.5a.5.5 0 0 1 1 0v4.585a1.5 1.5 0 0 1 1 1.415z" />
                        <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z" />
                      </svg></span>
                      <input type="number" className="form-control form-control-lg" placeholder="In Celcius" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => setTemp(e.target.value)} />
                    </div>
                  </div>
                  <div className="col-md-4 pt-2">
                    <button className="btn submit" onClick={submitButton}>Submit</button>
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
