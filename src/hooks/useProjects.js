import { useQuery } from "@tanstack/react-query";
import { getProjectsApi } from "../services/projectService";

export default function useProjects() {
  const { isLoading, data } = useQuery({
    queryFn: getProjectsApi,
    queryKey: ["projects"],
  });

  const { projects } = data || {};

  return { projects, isLoading };
}
