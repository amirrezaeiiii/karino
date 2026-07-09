import { HiOutlineBriefcase, HiOutlineCog6Tooth, HiOutlineFolder, HiOutlineHome } from "react-icons/hi2";
import AppLayout from "../../ui/AppLayout";
import CustomNavLink from "../../ui/CustomNavLink";
import Sidebar from "../../ui/Sidebar";

function OwnerLayout() {
  return (
    <AppLayout>
      <Sidebar>
        <CustomNavLink to="/">
          <HiOutlineHome />
          <span>صفحه اصلی</span>
        </CustomNavLink>
        <CustomNavLink to="dashboard">
          <HiOutlineBriefcase />
          <span>داشبورد</span>
        </CustomNavLink>
        <CustomNavLink to="projects">
          <HiOutlineFolder/>
          <span>پروژه ها</span>
        </CustomNavLink>
           <CustomNavLink to="setting">
          <HiOutlineCog6Tooth/>
          <span>تنظیمات</span>
        </CustomNavLink>
      </Sidebar>
    </AppLayout>
  );
}
export default OwnerLayout;
