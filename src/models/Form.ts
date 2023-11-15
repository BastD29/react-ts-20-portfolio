export interface IFormStructure<T> {
  id?: string | number;
  inputType: "input";
  name: keyof T;
  placeholder?: string;
  label?: string;
}
