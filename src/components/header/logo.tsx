import { MdOutlineHistoryEdu } from "react-icons/md";

function Logo() {
  return (
    <div className="box-content flex items-center ">
      <MdOutlineHistoryEdu className="text-5xl mt-2 text-white" />
      <div className="flex flex-col ml-2">
        <h1 className="text-2xl text-white font-extralight">Ot</h1>
        <h1 className="text-xs text-white font-extralight">old things</h1>
      </div>
    </div>
  );
}

export default Logo;
