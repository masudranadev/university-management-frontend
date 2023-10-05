"use client";

import { Select } from "antd";
import { Controller, useFormContext } from "react-hook-form";
type SelectOptions = {
  label: string;
  value: string;
};

interface ISelectFieldProps {
  options: SelectOptions[];
  name: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  placeholder?: string;
  label?: string;
  defaultValue?: SelectOptions;
}
const FormSelectField = ({
  options,
  name,
  size,
  value,
  placeholder,
  label,
  defaultValue,
}: ISelectFieldProps) => {
  const { control } = useFormContext();
  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select
            onChange={onChange}
            options={options}
            value={value}
            size={size}
            placeholder={placeholder}
            style={{
              width: "100%",
            }}
          />
        )}
      />
    </>
  );
};

export default FormSelectField;
