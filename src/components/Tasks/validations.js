import * as yup from "yup";


const validations = yup.object({
    summary:yup.string().required("This field is required."),
    description:yup.string().required("This field is required."),
    customerid:yup.string().required("This field is required."),
});


export default validations;