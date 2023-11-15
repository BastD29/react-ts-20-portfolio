import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useRegister } from "../../../hooks/useRegister";
import { RegisterFormValues } from "../../../models/Register";
import { Form } from "../../shared/Form/Form";
import { Input } from "../../shared/Input/Input";

import styles from "./Register.module.scss";
import { Button } from "../../shared/Button/Button";

const Register: FC = () => {
  const formStructure = useRegister();
  const initialRegisterFormState: RegisterFormValues = {
    email: "",
    password: "",
  };
  const [registerFormValues, setRegisterFormValues] =
    useState<RegisterFormValues>(initialRegisterFormState);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("submitted data:", registerFormValues);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRegisterFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <Form onSubmit={handleSubmit} className={styles["register-form"]}>
      {formStructure.map((field) => (
        <div key={field.name} className={styles["register-form__field"]}>
          <label>{field.label}</label>
          {field.inputType === "input" && (
            <Input
              type="text"
              name={field.name as string}
              placeholder={field.placeholder as string}
              value={(registerFormValues[field.name] as string) || ""}
              onChange={handleInputChange}
            />
          )}
        </div>
      ))}

      <Button
        type="button"
        text="Submit"
        className={styles["register-form__button"]}
      />
    </Form>
  );
};

export { Register };
