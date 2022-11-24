import Navigation from "../components/Navigation";

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
    </div>
  );
}

export default Menu;
