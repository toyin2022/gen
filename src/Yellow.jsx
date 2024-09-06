import { toast } from "react-toastify";
import { FaWandMagicSparkles } from "react-icons/fa6";

const Yellow = () => {
  function handleShowToastQuickNotification() {
    toast("this should be yellow", {
      position: "bottom-center",
      icon: <FaWandMagicSparkles />,
      closeButton: true,
      draggable: true,
      hideProgressBar: true,
      style: {
        background: "yellow",
        color: "blue",
      },
      autoClose: true,
    });
  }
  return (
    <button
      style={{
        padding: "1rem",
        borderRadius: "10px",
        backgroundColor: "yellow",
        border: "none",
      }}
      onClick={handleShowToastQuickNotification}
    >
      Yellow
    </button>
  );
};

export default Yellow;
