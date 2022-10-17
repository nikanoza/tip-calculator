import { useForm } from "react-hook-form";

type calculatorFormValues = {
  bill: number;
  peopleAmount: number;
  percent: number;
};

const useCalculator = () => {
  const {
    register,
    formState: { errors },
  } = useForm<calculatorFormValues>();

  const billValidations = {
    required: "Can’t be empty",
    min: {
      value: 1,
      message: "Can’t be less then 1",
    },
    max: {
      value: 10000,
      message: "Can’t be more then 10000",
    },
  };

  const billError = (errors.bill && errors.bill.message) || "";

  return { register, errors, billValidations, billError };
};

export default useCalculator;
