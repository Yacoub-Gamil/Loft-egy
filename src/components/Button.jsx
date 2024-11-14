import { Link } from "react-router-dom";

function Button({ to, children }) {
  return (
    <Link
      className=" px-4 py-2 text-white uppercase duration-300 text-[.8rem] text-center tracking-[.1rem] rounded-full font-bold hover:text-black hover:bg-white"
      to={to}
    >
      {children}
    </Link>
  );
}

export default Button;
