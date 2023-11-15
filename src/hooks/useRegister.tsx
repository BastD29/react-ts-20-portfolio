import { useMemo } from "react";
import { IFormStructure } from "../models/Form";
import { RegisterFormValues } from "../models/Register";

export const useRegister = () => {
  const formStructure = useMemo<IFormStructure<RegisterFormValues>[]>(
    () => [
      {
        inputType: "input",
        name: "email",
        placeholder: "johndoe@gmail.com",
        label: "Email",
      },
      {
        inputType: "input",
        name: "password",
        placeholder: "abc123ABC$",
        label: "Password",
      },
    ],
    []
  );

  return formStructure;
};
