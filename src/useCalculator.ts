import { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "validationSchema";

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
    setValue,
    trigger,
    handleSubmit,
  } = useForm<calculatorFormValues>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const bill = useWatch({ control, name: "bill" });
  const people = useWatch({ control, name: "people" });
  const percent = useWatch({ control, name: "percent" });

  useEffect(() => {
    if (bill && people && percent) {
      handleSubmit((data) => {
        console.log("done");
      })();
    }
  }, [bill, people, percent, handleSubmit]);


  const billError =
    (errors.bill && dirtyFields.bill && errors.bill.message) || "";
  const peopleError =
    (errors.people && dirtyFields.people && errors.people.message) || "";
  const percentError = errors.percent && dirtyFields.percent;
  return {
    register, 
    billError,
    peopleError,
    percent,
    percentError,
    setValue,
    trigger
  };
};

export default useCalculator;
