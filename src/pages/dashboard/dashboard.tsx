import { Outlet } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";
import BtnLink from "../../components/common/buttons/btn-link";

function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="container mx-auto p-2 lg:px-8 flex flex-col md:flex-row">
        <div className="bg-gradient-to-r from-cyan-400 to-blue-400 m-2 p-2 rounded-lg">
          <ul>
            <li>
              <BtnLink to="/dashboard/posts" color="blue">
                Мои записи
              </BtnLink>
            </li>
            <li>
              <BtnLink to="/dashboard/add" color="blue">
                Добавить запись
              </BtnLink>
            </li>
          </ul>
        </div>
        <div className="bg-gray-100 m-2 p-2 rounded-lg flex-1 ">
          <Outlet />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default DashboardPage;
