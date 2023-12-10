import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/squestion");
  }, [navigate]);

  return (
    <div>
      <h1>Index View</h1>
    </div>
  );
}