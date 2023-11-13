import { DashboardNav, Sidebar } from '../components';
import "../css/scrollbar.css"

const DashboardLayout = ({ children, current }: any) => {


  return (
    <div className="w-full flex flex-col bg-white relative">
      <div className="w-full h-full bg-[#fff] relative md:flex flex lg:flex-row flex-col pb-20">
        <div className="hidden lg:w-3/12 max-w-[350px] lg:flex h-screen">
          <Sidebar current={current} />
        </div>

        <div className="w-full lg:w-9/12 flex flex-col flex-grow relative  flow-hide relate lg:min-h-screen">
          <DashboardNav />
          <main className="w-full bg-white  p-4 pr-20">{children}</main>

        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;