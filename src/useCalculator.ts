import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "validationSchema";

type calculatorFormValues = {
  bill: number;
  people: number;
  percent: number;
};

const useCalculator = () => {
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const {
    register,
    formState: { errors, dirtyFields, isDirty },
    control,
    setValue,
    trigger,
    handleSubmit,
    reset,
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
        const tip = (data.bill * (data.percent / 100)) / data.people;
        const total =
          (data.bill + data.bill * (data.percent / 100)) / data.people;
        setTipAmount(tip);
        setTotalAmount(total);
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
    trigger,
    isDirty,
    reset,
    tipAmount,
    setTipAmount,
    totalAmount,
    setTotalAmount,
  };
};

export default useCalculator;
