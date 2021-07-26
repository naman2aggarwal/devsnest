import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialVal) {
  const [value, setValue] = useState(() => {
    const val = localStorage.getItem(key);
    if (val !== null) {
      return JSON.parse(val);
    }
    return initialVal;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}
