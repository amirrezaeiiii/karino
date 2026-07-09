import { useState } from "react";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ConfirmLogOut from "../../ui/ConfirmLogOut";
import Loading from "../../ui/Loading";
import Modal from "../../ui/Modal";
import useLogout from "./useLogOut";

function Logout() {
  const { isPending, logOut } = useLogout();
  const [isLogOut, setIsLogOut] = useState(false);

  return isPending ? (
    <Loading />
  ) : (
    <>
      <button onClick={()=>setIsLogOut(true)}>
        <HiArrowRightOnRectangle className="w-5 h-5 text-secondary-500 hover:text-error" />
      </button>
      <Modal
        title="آیا مایل به خروج از حساب کاربری خود هستید؟"
        open={isLogOut}
        onClose={() => setIsLogOut(false)}
      >
        <ConfirmLogOut
          onClose={() => setIsLogOut(false)}
          onConfirm={logOut}
          disabled={false}
        />
      </Modal>
    </>
  );
}
export default Logout;
