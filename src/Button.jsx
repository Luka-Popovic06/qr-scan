const Button = ({
  children,
  variation,
  btnType,
  disabledState,
  clickAction,
}) => {
  let btnStyle;
  if (disabledState === true) btnStyle = "rgb(174, 174, 174)";
  else btnStyle = "#4cf568";
  return (
    <button
      onClick={clickAction}
      disabled={variation === "trigger" ? disabledState : false}
      type={btnType}
      className={variation === "trigger" ? "generate-btn" : "download-btn"}
      style={
        variation === "trigger"
          ? { backgroundColor: btnStyle }
          : { backgroundColor: "#f54c4c" }
      }
    >
      {children}
    </button>
  );
};
export default Button;
