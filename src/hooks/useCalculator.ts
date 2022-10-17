import { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";

type calculatorFormValues = {
  bill: number;
  people: number;
  percent: number;
};

const useCalculator = () => {
  const {
    register,
    formState: { errors, dirtyFields },
    control,
    handleSubmit,
  } = useForm<calculatorFormValues>({
    mode: "onChange",
  });
  const bill = useWatch({ control, name: "bill" });
  const people = useWatch({ control, name: "people" });
  const percent = useWatch({ control, name: "percent" });

  useEffect(() => {
    if (bill && people && percent) {
      handleSubmit((data) => {})();
    }
  }, [bill, people, percent, handleSubmit]);

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

  const peopleValidations = {
    required: "Can’t be empty",
    min: {
      value: 1,
      message: "min is 1",
    },
    max: {
      value: 1000,
      message: "max is 1000",
    },
  };

  const percentValidation = {
    required: "Can’t be empty",
    min: {
      value: 1,
      message: "min is 1",
    },
    max: {
      value: 100,
      message: "max is 1000",
    },
  };

  const billError =
    (errors.bill && dirtyFields.bill && errors.bill.message) || "";
  const peopleError =
    (errors.people && dirtyFields.people && errors.people.message) || "";
  const percentError = errors.percent && dirtyFields.percent;
  return {
    register,
    billValidations,
    billError,
    peopleValidations,
    peopleError,
    percentValidation,
    percent,
    percentError,
  };
};

export default useCalculator;
