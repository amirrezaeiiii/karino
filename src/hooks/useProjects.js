import { useQuery } from "@tanstack/react-query";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { getProjectsApi } from "../services/projectService";

export default function useProjects() {
  const { search } = useLocation();

  const queryObject = queryString.parse(search);

  const { isLoading, data } = useQuery({
    queryFn: () => getProjectsApi(search),
    queryKey: ["projects", queryObject],
  });

  const { projects } = data || {};

  return { projects, isLoading };
}
