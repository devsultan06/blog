/* eslint-disable react/prop-types */
import TextField from "@mui/material/TextField";
import EndAdorment from "./EndAdorment";

interface InputFieldProps {
  label: string;
  name: string;
  type: string;
  id?: string;
  value: string;
  handleBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  showPassword?: boolean;
  setShowPassword?: (show: boolean) => void;
  error?: boolean;
  helperText?: string;
  inputRef?: React.Ref<HTMLInputElement>;
  rows?: number;
}

const InputField = ({
  label,
  name,
  type,
  id,
  value,
  handleInputChange,
  showPassword,
  setShowPassword,
  error,
  helperText,
  inputRef,
  rows,
}: InputFieldProps) => {
  return (
    <TextField
      type={name === "password" && showPassword ? "text" : type}
      label={label}
      variant="outlined"
      name={name}
      id={id}
      value={value}
      onChange={handleInputChange}
      multiline={name === "message"}
      rows={rows}
      fullWidth={name === "message"}
      autoComplete="off"
      error={error}
      inputRef={inputRef}
      helperText={error ? helperText : ""}
      // InputProps={{
      //   endAdornment: name === "password" && (
      //     <EndAdorment
      //       showPassword={showPassword}
      //       setShowPassword={setShowPassword}
      //     />
      //   ),
      // }}
      sx={{
        width: "100%",
        marginBottom: "16px",
        position: "relative",
        zIndex:10,
        "& .MuiOutlinedInput-root": {
          color: "white",
          "& fieldset": {
            borderColor: error ? "#FF0000" : "#333333",
          },
          "&:hover fieldset": {
            borderColor: error ? "#FF0000" : "#333333",
          },
          "&.Mui-focused fieldset": {
            borderColor: error ? "#FF0000" : "#333333",
          },
        },
        "& .MuiInputLabel-root": {
          color: error ? "#FF0000" : "white",
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: error ? "#FF0000" : "white",
        },
      }}
    />
  );
};

export default InputField;
