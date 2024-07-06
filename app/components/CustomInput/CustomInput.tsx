import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { InputWrapper, Label, ErrorMessage, Input } from './CustomInput.styled';

interface CustomInputProps {
  name: string;
  label: string;
  type?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  name,
  label,
  type = 'text',
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <InputWrapper>
      <Label htmlFor={name}>{label}</Label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => <Input id={name} type={type} {...field} />}
      />
      {errors[name] && (
        <ErrorMessage>{(errors as any)[name]?.message}</ErrorMessage>
      )}
    </InputWrapper>
  );
};

export default CustomInput;
