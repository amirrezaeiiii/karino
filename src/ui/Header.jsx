import { HiOutlineBars3 } from "react-icons/hi2";
import UserAvatar from "../features/authentication/UserAvatar";
import useUser from "../features/authentication/useUser";
import HeaderMenue from "./HeaderMenue";

function Header({ onToggleSidebar }) {
  const { isLoading } = useUser();

  return (
    <div className="bg-secondary-0 py-4 px-8 border-b border-secondary-200">
      <div
        className={`container xl:max-w-5xl flex items-center justify-between gap-x-8 ${
          isLoading ? "blur-sm opacity-50" : ""
        }`}
      >
        <button
          onClick={onToggleSidebar}
          className="flex lg:hidden items-center justify-center p-2 rounded-lg hover:bg-secondary-100 transition-colors"
          aria-label="باز کردن منو"
        >
          <HiOutlineBars3 className="w-6 h-6 text-secondary-900" />
        </button>
        <div className="flex items-center justify-end gap-x-8 flex-1">
          <UserAvatar />
          <HeaderMenue />
        </div>
      </div>
    </div>
  );
}
export default Header;