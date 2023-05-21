import { useSelector } from "react-redux";
function CheckData() {
  const mydata = useSelector((state) => state);
  return <div>Showdata{mydata.Name}</div>;
}
export default CheckData;
