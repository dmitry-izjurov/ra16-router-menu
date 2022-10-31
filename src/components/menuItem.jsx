import { Link } from "react-router-dom";

function MenuItem({ path, name, clName, click }) {
  return (
    <Link className={clName} to={path} onClick={click} >{name}</Link>
  );
}

export default MenuItem;
