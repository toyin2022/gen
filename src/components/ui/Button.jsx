import { toast } from "react-toastify";

const Button = ({ icon, bg, text }) => {
  function handleShowToastQuickNotification() {
    toast("this should be yellow", {
      position: "top-right",
      icon: icon,
      closeButton: true,
      draggable: true,
      hideProgressBar: true,
      style: {
        background: bg,
        color: "white",
      },
      autoClose: false,
    });
  }

  console.log(name, "is", icon);
  return (
    <button
      style={{
        padding: "1rem",
        borderRadius: "10px",
        backgroundColor: bg,
        border: "none",
        margin: "10px",
      }}
      onClick={handleShowToastQuickNotification}
    >
      {text}
    </button>
  );
};

export default Button;
