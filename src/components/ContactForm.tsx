import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const [showMessage, setShowMessage] = useState(false);

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    setShowMessage(true);
    reset();
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      setShowMessage(true);
      const timer = setTimeout(() => setShowMessage(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitSuccessful]);

  return (
    <div className=" mx-auto w-full">
      <h2 className="text-2xl font-semibold text-white mb-6">What’s on Your Mind?</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-white mb-1">Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="w-full px-4 py-2 h-12  bg-white/10 text-white border-1 rounded-full md:rounded-xl border-white/20 focus:outline-none focus:ring-2 focus:ring-[#C9E651]"
          />
          {errors.name && <p className="text-red-400 text-sm">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-white mb-1">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Enter a valid email",
              },
            })}
            className="w-full px-4 py-2 rounded-full md:rounded-xl h-12 bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#C9E651]"
          />
          {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}
        </div>

        {/* Comment */}
        <div>
          <label className="block text-white mb-1">Comment</label>
          <textarea
            {...register("comment", { required: "Comment is required" })}
            rows={4}
            className="w-full px-4 py-2 rounded-xl bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#C9E651]"
          ></textarea>
          {errors.comment && <p className="text-red-400 text-sm">{errors.comment.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[#C9E651] h-12 rounded-full md:rounded-xl text-black px-6 py-2 w-full hover:bg-lime-400 transition-colors"
        >
          Submit
        </button>

        {showMessage && (
          <p className="text-[#c9e651] text-sm mt-2">Your message made my day! 😊 I’ll get back to you with ❤️.</p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
