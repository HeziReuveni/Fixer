import { useState, useEffect } from "react";

const useFormattedDate = (createdAt) => {
  const [formattedDate, setFormattedDate] = useState(null);

  useEffect(() => {
    if (createdAt && typeof createdAt === "string" && createdAt.length > 0) {
      const dateString = createdAt.slice(0, 10);
      const date = new Date(dateString);
      const formattedDate = date.toLocaleDateString("he-IL", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
      const dateArray = formattedDate.split("");
      for (let i = 0; i < dateArray.length; i++) {
        if (dateArray[i] === ".") {
          dateArray[i] = "/";
        }
      }
      const dateFix = dateArray.join("");
      setFormattedDate(dateFix);
    } else {
      return;
    }
  }, [createdAt]);

  return formattedDate;
};

export { useFormattedDate };
