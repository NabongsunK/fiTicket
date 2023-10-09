import styles from "./popup.module.css";

const PopUp = function (props) {
  return (
    <div
      className={
        props.isActive
          ? `toast toast-3s fade show ${styles.toastPosition}`
          : `toast toast-3s fade hide ${styles.toastPosition}`
      }
      role="alert"
      aria-live="assertive"
      data-delay="2000"
      aria-atomic="true"
    >
      <div className="toast-header" style={{ backgroundColor: "#22b3c1" }}>
        <img
          src="assets/images/logo2.png"
          alt=""
          className={`img-fluid m-r-5 ${styles.logoStyle}`}
        />
        <strong className="mr-auto"></strong>
        <small className="text-muted"></small>
      </div>
      <div className="toast-body">
        <strong className="mr-auto">{props.body}</strong>
      </div>
    </div>
  );
};
export default PopUp;
