import * as yup from "yup";

const schema = yup.object().shape({
  bill: yup
    .number()
    .transform((v: number) => (isNaN(v) ? undefined : v))
    .min(1, "Can’t be less then 1")
    .max(10000, "Can’t be more then 10000")
    .required("Can’t be empty"),
  people: yup
    .number()
    .transform((v: number) => (isNaN(v) ? undefined : v))
    .min(1, "Min is 1")
    .max(1000, "Max is 1000")
    .required("Can’t be empty"),
  percent: yup
    .number()
    .integer()
    .transform((v: number) => (isNaN(v) ? undefined : v))
    .min(1)
    .max(100)
    .required(),
});

export default schema;
