import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../config/firebase";

const View = () => {
  const { username } = useParams();

  useEffect(() => {
    console.log(username);
  }, []);

  return <div>View</div>;
};

export default View;
