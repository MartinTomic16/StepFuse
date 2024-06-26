const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => (
  <button
    className={`flex justify-center items-center gap-2 px-7 py-4 border font-raleway text-lg leading-none
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-turq-blue text-white border-turq-blue"
      } rounded-full ${fullWidth && "w-full"}`}
  >
    {label}

    {iconURL && (
      <img
        src={iconURL}
        alt="arrow right icon"
        className="ml-2 rounded-full bg-white w-5 h-5"
      />
    )}
  </button>
);

export default Button;
