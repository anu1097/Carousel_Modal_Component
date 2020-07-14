import { useDebugValue, useState } from "react";
import { ALLOWED_MIME_TYPES, MAX_FILE_SIZE } from "./Constants";

export const useStateWithLabel = (initialValue, name) => {
  const [value, setValue] = useState(initialValue);
  useDebugValue(`${name}: ${value}`);
  return [value, setValue];
}

export const checkMimeType = (file) => {
  if (file && !ALLOWED_MIME_TYPES.includes(file.type)) {
    return false;
  };
  return true;
}

export const checkFileSize = (file) => {
  if (file && file.size > MAX_FILE_SIZE) {
    return false;
  };
  return true;
}