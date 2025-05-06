import * as Yup from "yup";

export const onboardingValidationSchema = Yup.object({
  fullName: Yup.string().required("Full Name is required"),
  username: Yup.string().required("Username is required"),
  niche: Yup.string().required("Preferred Niche is required"),
  bio: Yup.string().required("Bio is required"),
});
