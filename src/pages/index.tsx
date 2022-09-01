import { useEffect } from "react";
import IndexLayout from "../layouts/IndexLayout";
// import { useAppDispatch } from "../hooks/redux"

function IndexPage() {
  // const dispatch = useAppDispatch()

  useEffect(() => {
    // dispatch(fetchAirports())
  });
  return (
    <IndexLayout>
      <div className="container mx-auto p-2 lg:px-8 flex items-center">
        Главная
      </div>
    </IndexLayout>
  );
}

export default IndexPage;
