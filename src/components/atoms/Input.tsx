import { TextFieldProps, TextField } from "@mui/material";
import { FC } from "react";

const Input: FC<TextFieldProps> = (props) => {
  return <TextField {...props} />;
};

export default Input;
