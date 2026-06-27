import { NavLink } from "react-router-dom";
import {
  HiOutlineHome,
  HiOutlineBriefcase,
  HiOutlineUserGroup,
  HiOutlineChatBubbleLeftEllipsis,
  HiOutlineCog6Tooth,
  HiOutlineFolder 
} from "react-icons/hi2";

const navItems = [
  { to: "/", icon: HiOutlineHome, label: "صفحه اصلی" },
  { to: "/owner/dashboard", icon: HiOutlineBriefcase, label: "داشبورد" },
  { to: "/owner/projects", icon: HiOutlineFolder, label: "پروژه ها" },
  { to: "/owner/team", icon: HiOutlineUserGroup, label: "تیم" },
  {
    to: "/owner/messages",
    icon: HiOutlineChatBubbleLeftEllipsis,
    label: "پیام ها",
  },
  { to: "/owner/settings", icon: HiOutlineCog6Tooth, label: "تنظیمات" },
];

function Sidebar() {
  return (
    <div className="bg-secondary-0 row-start-1 row-span-2 border-l border-gray-200 p-4">
      <aside className="flex flex-col gap-2">
        <nav className="flex flex-col gap-1 mt-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  isActive
                    ? "bg-primary-500/20 text-primary-900 font-medium"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`
              }
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </div>
  );
}

export default Sidebar;
