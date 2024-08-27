import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required!";
    if (!formData.email) {
      errors.name = "Email is required!";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is required";
    }
    if (!formData.message) errors.name = "Message is required!";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateErrors = validate();
    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
    } else {
      setErrors({});
      setIsSending(true);

      emailjs
        .send(
          "service_np9yqpl",
          "template_u6waph4",
          formData,
          "dowcufuMDilHTNIPj"
        )
        .then((res) => {
          toast.success("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          console.log("Failed...", error);
          toast.error("Failed to send message. Please try again later.");
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
    <section className="bg-stone-50 p-4" id="contact">
      <Toaster />
      <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">
        Let's Connect
      </h2>
      <form action="" onSubmit={handleSubmit}></form>
    </section>
  );
};

export default Contact;
