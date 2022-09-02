import React from "react";
import Mission from "../../components/Mission/Mission";
import useData from "../../hooks/useData";
import Spinner from "react-bootstrap/Spinner";
import "./Missions.css";

export default function Missions() {
  const [data, loading] = useData();
  console.log(data);
  const showAllMissions = () => {
    return data.map((data) => {
      return <Mission key={data.name} data={{ ...data }} />;
    });
  };

  return (
    <div className="mission-page-container">
      <h1 className="title">SpaceX Launches</h1>
      <div>
        {loading ? (
          showAllMissions()
        ) : (
          <div>
            <Spinner animation="border" />
          </div>
        )}
      </div>
    </div>
  );
}
