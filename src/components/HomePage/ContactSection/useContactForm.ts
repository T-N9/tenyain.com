import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Resolver, useForm } from "react-hook-form";
import * as yup from "yup";

import { toast } from "sonner";

export interface IFormValues {
  name: string;
  email: string;
  message?: string;
}

const schema = yup.object({
  name: yup.string().required("Please enter your name"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter your email"),
  message: yup.string().required("Please enter your message"),
});

const useContactForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<IFormValues>({
    resolver: yupResolver(schema) as Resolver<IFormValues>,
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = form;

  const postContactMessage = async (data: IFormValues) => {
    setIsLoading(true);
    try {
      const emailPostData = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      setIsLoading(false);
      return emailPostData;
    } catch (error) {
      setIsLoading(false);
      console.log({ error });
    }
  };

  const onSubmit = async (data: IFormValues) => {
    console.log("Form Submit Success");
    const res = await postContactMessage(data);
    if (res?.status === 200) {
      toast.success("Successfully sent email to TeNyain");
      reset();
    } else {
      toast.error("Something went wrong!");
    }
  };

  return { handleSubmit, register, errors, isLoading, onSubmit };
};

export default useContactForm;
