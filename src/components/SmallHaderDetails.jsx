/* eslint-disable react/prop-types */
function SmallHaderDetails({ children, icon }) {
  return (
    <div className=" cursor-pointer flex items-center gap-1 text-[.8rem] ">
      <span className=" text-[1.2rem]">{icon}</span>
      <span>{children}</span>
    </div>
  );
}

export default SmallHaderDetails;
