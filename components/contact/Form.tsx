"use client"
import { useFormik } from "formik";
import ClipLoader from "react-spinners/ClipLoader";
import { getSupportSchema } from "@/schemas/supportSchema";
import useSendEmail from "@/hooks/useSendEmail";
import Modal from "@components/layout/Modal";
import InputField from "@components/ui/InputField";

const Form = () => {
  const validationSchema = getSupportSchema();

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
      agreeToTerms: false,
    },
    validationSchema,
    onSubmit: async (values) => {
      const formData = {
        to_name: "Support Team",
        from_name: `${values.firstName} ${values.lastName}`,
        from_email: values.email,
        message: values.message,
        phoneNumber: values.phoneNumber,
      };

      await sendEmail(formData);
    },
  });

  const { sendEmail, isLoading, isSuccess, error, resetStatus } =
    useSendEmail(resetForm);

  return (
    <>
      <Modal
        open={isSuccess}
        title="Success"
        message="Your message has been sent successfully!"
        onClose={resetStatus}
      />

      <Modal
        open={!!error}
        title="Error"
        message={error}
        onClose={resetStatus}
      />
      <form
        action=""
        onSubmit={handleSubmit}
        className="w-full"
      >
        <div className="form-controls grid grid-cols-2 gap-[30px] max-800:grid-cols-1">
          <div className="form-control">
            <InputField
              type="text"
              label="First Name"
              name="firstName"
              id="firstName"
              value={values.firstName}
              handleInputChange={handleChange}
              handleBlur={handleBlur}
              error={!!(errors.firstName && touched.firstName)}
              helperText={errors.firstName}
            />
          </div>
          <div className="form-control">
            <InputField
              type="text"
              label="Last Name"
              name="lastName"
              id="lastName"
              value={values.lastName}
              handleInputChange={handleChange}
              handleBlur={handleBlur}
              error={!!(errors.lastName && touched.lastName)}
              helperText={errors.lastName}
            />
          </div>

          <div className="form-control">
            <InputField
              label="Email"
              type="email"
              name="email"
              id="email"
              value={values.email}
              handleInputChange={handleChange}
              handleBlur={handleBlur}
              error={!!(errors.email && touched.email)}
              helperText={errors.email}
            />
          </div>
          <div className="form-control">
            <InputField
              label="Phone Number"
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              value={values.phoneNumber}
              handleInputChange={handleChange}
              handleBlur={handleBlur}
              error={!!(errors.phoneNumber && touched.phoneNumber)}
              helperText={errors.phoneNumber}
            />
          </div>
          <div className="">
            <InputField
              label="Message"
              type="text"
              name="message"
              id="message"
              value={values.message}
              handleInputChange={handleChange}
              handleBlur={handleBlur}
              error={!!(errors.message && touched.message)}
              helperText={errors.message}
              rows={4}

            />
          </div>
        </div>
        <div className="align-center mt-[20px] flex justify-between max-900:block">
          <div className="terms1">
            <div className="terms flex items-center gap-[8px] max-900:mb-[20px]">
              <input
                type="checkbox"
                name="agreeToTerms"
                id="agreeToTerms"
                checked={values.agreeToTerms}
                onChange={handleChange}
                onBlur={handleBlur}
                className="cursor-pointer appearance-none h-5 w-5 border border-lightgrey rounded-[100px] bg-gray-800 
               checked:border-yellow checked:ring-2 checked:ring-yellow transition-all"
              />
              <p className="text-white">I agree with Terms of Use and Privacy Policy</p>
            </div>

            {errors.agreeToTerms && touched.agreeToTerms && (
              <p className=" max-900:mt-[-20px] max-900:mb-[30px] text-[12px] text-[#e50000]">
                {errors.agreeToTerms}
              </p>
            )}
          </div>

          <div className="send">
            <button
              type="submit"
              disabled={isLoading}
              className="text-[15px cursor-pointer max-900:w-full rounded-[5px]  border-none bg-yellow p-[10px] text-black outline-none"
            >
              {isLoading ? (
                <ClipLoader
                  color="white"
                  loading={true}
                  size={20}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              ) : (
                "Send Message"
              )}
            </button>{" "}
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
