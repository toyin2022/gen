import { toast } from "react-toastify";

const Green = () => {
  const notify = () => toast("this is green button!");
  return <button onClick={notify}>Green</button>;
};

export default Green;
