import { toast } from "react-toastify";

const Red = () => {
  const notify = () => toast("This is the red button!");
  return <button onClick={notify}>Red</button>;
};

export default Red;
