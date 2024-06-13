import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Options } from "../../types/option";

export function useStates() {
  return useQuery({
    queryKey: ["states"],
    queryFn: () =>
      axios
        .get<Options[]>("http://localhost:8080/states")
        .then((res) => res.data),
  });
}
