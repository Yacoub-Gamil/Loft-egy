import { Link } from "react-router-dom";

function Button({ to, target, children }) {
  return (
    <Link
      to={to}
      target={target ? "blank" : null}
      className=" text-[.9rem] font-semibold hover:scale-105 hover:bg-black bg-white hover:text-white duration-300 uppercase px-[2rem] py-[.6rem] rounded-full shadow-[0px_0px_10px_5px_#d5d5d7]"
    >
      {children}
    </Link>
  );
}

export default Button;
