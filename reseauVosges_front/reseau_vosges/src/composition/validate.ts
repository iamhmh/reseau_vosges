import { ComputedVariable, ReactiveVariable } from "vue/macros";
import useVuelidate from "@vuelidate/core";

export const isInvalid = (vuelidateProp: any) => vuelidateProp.$invalid && vuelidateProp.$dirty;

export const useV = (data: ReactiveVariable<any>, rules: ComputedVariable<any>) => {
  const v = useVuelidate(rules, data);

  const validate = async () => {
    await v.value.$validate();
  };

  const isValid = async () => {
    await validate();
    return !v.value.$invalid;
  };

  return { validate, isValid, v };
};
