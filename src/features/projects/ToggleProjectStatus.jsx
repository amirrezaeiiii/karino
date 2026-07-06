import Loading from "../../ui/Loading";
import Toggle from "../../ui/Toggle";
import useToggleProjectStatus from "./useToggleprojectStatus";

function ToggleProjectStatus({ project }) {
  const { status } = project;
  const { isUpdating, toggleProjectStatus } = useToggleProjectStatus();

  const toggleHandler = () => {
    const newStatus = status === "OPEN" ? "CLOSED" : "OPEN";
    toggleProjectStatus({
      id: project._id,
      data: { status: newStatus },
    });
  };

  return (
    <div className="w-20">
      {isUpdating ? (
        <Loading height={20} width={30} />
      ) : (
        <Toggle
          enabled={status === "OPEN" ? true : false}
          label={status === "OPEN" ? "باز" : "بسته"}
          onChange={toggleHandler}
        />
      )}
    </div>
  );
}
export default ToggleProjectStatus;
