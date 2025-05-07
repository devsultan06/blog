'use client';
import { useUser } from "@clerk/nextjs";
import { useFormik } from "formik";
import InputField from "@components/ui/InputField";
import * as Yup from "yup";
import SelectInput from "@components/register/SelectInput";
import { onboardingValidationSchema } from "@/schemas/onboardingSchema";
import ReactSelectInput from "@components/register/SelectInput";
import { nicheOptions } from "@/data/tabs";
import { useState } from "react";
import { toast } from "react-toastify";


export default function RegisterPage() {
    const { user, isLoaded } = useUser();

    if (!isLoaded) {
        return <div className="text-white p-4">Loading....</div>;
    }

    return (
        <div className="register h-[100vh] flex flex-col justify-center text-white bg-deepblack">
            <h1 className="text-3xl font-bold text-center pt-16 font-kumbh max-700:text-2xl">Welcome to the AI Blogger Onboarding</h1>
            <OnboardingForm user={user} />
        </div>
    );
}

function OnboardingForm({ user }: { user: any }) {
    const [submitting, setSubmitting] = useState(false);

    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
        resetForm
    } = useFormik({
        initialValues: {
            fullName: "",
            lastName: "",
            username: user.username || "",
            niche: "",
            bio: "",
        },
        validationSchema: onboardingValidationSchema,
        onSubmit: async (values) => {
            setSubmitting(true);
            try {
                const response = await fetch("/api/onboarding", {
                    method: "POST",
                    body: JSON.stringify({ ...values, userId: user.id }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log("✅ Profile updated successfully:", data);
                    toast.success("Profile updated successfully");
                    resetForm({
                        values: {
                            fullName: "",
                            lastName: "",
                            username: "",
                            niche: "",
                            bio: "",
                        },
                    });
                } else {
                    const errorData = await response.json();
                    console.error("❌ Failed to update profile:", errorData.message || errorData);
                    if (errorData.message === "Username already taken") {
                        toast.error("Username already taken")
                    } else if (errorData.message === "User already exists") {
                        toast.error("User already exists")
                    } else
                        toast.error("Something went wrong")
                }
            } catch (error) {
                console.error("⚠️ Error during onboarding submission:", error);
                toast.error("⚠️ Error during onboarding submission")
            } finally {
                setSubmitting(false);
            }
        }

    });

    const handleChangeWithFormik = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        handleChange(e);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 mt-[40px] bg-zinc-900 text-white rounded-xl space-y-4">
            <h2 className="text-2xl font-bold font-kumbh">Complete Your Blogger Profile</h2>

            <InputField
                type="text"
                label="Full Name"
                name="fullName"
                id="fullName"
                value={values.fullName}
                handleInputChange={handleChangeWithFormik}
                handleBlur={handleBlur}
                error={!!(errors.fullName && touched.fullName)}
                helperText={errors.fullName}
            />

            <InputField
                type="text"
                label="Username"
                name="username"
                id="username"
                value={values.username}
                handleInputChange={handleChangeWithFormik}
                handleBlur={handleBlur}
                error={!!(errors.username && touched.username)}
                helperText={typeof errors.username === "string" ? errors.username : undefined} />

            <ReactSelectInput
                label="Preferred Niche"
                name="niche"
                value={values.niche}
                options={nicheOptions}
                onChange={setFieldValue}
                onBlur={handleBlur}
                error={!!(errors.niche && touched.niche)}
                helperText={typeof errors.niche === "string" ? errors.niche : undefined}
            />

            <InputField
                type="text"
                label="Short Bio"
                name="bio"
                id="bio"
                value={values.bio}
                handleInputChange={handleChangeWithFormik}
                handleBlur={handleBlur}
                error={!!(errors.bio && touched.bio)}
                helperText={errors.bio}
                rows={4}
            />

            <button
                type="submit"
                className={`bg-yellow text-black px-4 py-2 rounded font-medium transition-all duration-300 ${submitting ? "animate-pulse opacity-60 cursor-not-allowed" : "hover:opacity-80"
                    }`}
                disabled={submitting}
            >
                {submitting ? "Submitting..." : "Finish Registration"}
            </button>

        </form>
    );
}
