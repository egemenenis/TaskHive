import * as yup from "yup";


const validations = yup.object({
    firstname:yup.string().required("This field is required."),
    lastname:yup.string().required("This field is required."),
    phone:yup.string().required("This field is required."),
    email:yup.string().required("This field is required.").email("Please enter a valid email address.")
});


export default validations;