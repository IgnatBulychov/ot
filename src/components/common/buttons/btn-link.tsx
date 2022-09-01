import { Link } from "react-router-dom";

type ButtonsProps = {
  children: JSX.Element | string;
  to: string;
  color?: string;
  type?: string;
};

function BtnLink({ children, to, color = "blue-400", type }: ButtonsProps) {
  let btnClass = `hover:brightness-110 hover:text-blue-200 transition-all bg-${color} text-white h-10`;

  switch (type) {
    case "icon":
      btnClass +=
        " w-[42px] h-[42px] flex justify-center items-center rounded-full";
      break;
    default:
      btnClass += " flex justify-center items-center rounded px-4 py-2";
      break;
  }

  return (
    <Link className={btnClass} to={to}>
      {children}
    </Link>
  );
}

export default BtnLink;
