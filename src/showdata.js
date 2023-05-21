import { useSelector } from "react-redux";

const Showdata = () => {
  const user = useSelector((state) => state.user);
  const { username, password, email } = user || {};

  return (
    <div>
      Username: {username} <br />
      Password : {password} <br />
      Email: {email}
    </div>
  );
};

export default Showdata;
