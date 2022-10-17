import { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";

type calculatorFormValues = {
  bill: number;
  people: number;
  // percent: number;
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

  useEffect(() => {
    const billIsValid = bill && bill > 0;
    const peopleIsValid = people && people > 0;
    if (billIsValid && peopleIsValid) {
      handleSubmit((data) => console.log("data", data))();
    }
  }, [bill,people, handleSubmit]);

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

  const billError =
    (errors.bill && dirtyFields.bill && errors.bill.message) || "";
  const peopleError =
    (errors.people && dirtyFields.people && errors.people.message) || "";

  return {
    register,
    errors,
    billValidations,
    billError,
    peopleError,
  };
};

export default useCalculator;
