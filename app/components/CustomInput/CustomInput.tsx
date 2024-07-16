import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { ICustomInputProps } from './CustomInput.types';
import { InputWrapper, Label, ErrorMessage, Input } from './CustomInput.styled';

const CustomInput: React.FC<ICustomInputProps> = ({
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
