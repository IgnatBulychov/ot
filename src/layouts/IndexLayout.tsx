import Header from "../components/header/header";

type Props = {
  children: JSX.Element;
};

function IndexLayout({ children }: Props) {
  return (
    <div className="min-w-[320px]">
      <Header />
      <div className="container mx-auto">{children}</div>
    </div>
  );
}

export default IndexLayout;
