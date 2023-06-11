import { useContext, useEffect } from "react";
import { getEmployees } from "../../../apis/table";
import { UserContext } from "../../../context/context";

const useFetchEmployee = (id) => {
  const { setEmployees, employees } = useContext(UserContext);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getEmployees();
      setEmployees(response);
    };
    fetchData();
  }, [id]);
  return employees;
};

export { useFetchEmployee };
