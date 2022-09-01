import { AiOutlineLoading3Quarters } from "react-icons/ai";

type ButtonsProps = {
  children: JSX.Element | string;
  color?: string;
  icon?: boolean;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
  processing?: boolean;
};

function Btn({
  children,
  color = "blue-400",
  icon,
  type = "button",
  onClick,
  processing,
}: ButtonsProps) {
  let btnClass = `hover:brightness-110 hover:text-blue-200 transition-all bg-${color} text-white flex justify-center items-center`;

  if (icon) {
    btnClass += " w-[42px] h-[42px] rounded-full";
  } else {
    btnClass += " rounded px-4 py-2 h-10";
  }

  return (
    <button className={btnClass} type={type} onClick={onClick}>
      {processing ? (
        <div className="animate-spin">
          <AiOutlineLoading3Quarters />
        </div>
      ) : (
        children
      )}
    </button>
  );
}

export default Btn;
