import useWeb3Forms from "@web3forms/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const ContactPageForm = () => {
  const { register, reset, handleSubmit } = useForm();
  const [_isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const accessKey = "df4405ac-48bb-4908-b47a-7d143889b4b9";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "drnisar.org",
      subject: "New Contact Message from your Website",
    },
    onSuccess: (msg) => {
      setIsSuccess: true;
      setResult(msg);
      reset();
    },
    onError: (msg) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-10 col-md-6 col-lg-6 border p-5 m-3 shadow rounded-3">
          <h4 className="mb-3">Write to us here...</h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                {...register("message", { required: true })}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <button className="btn btn-outline-success">Submit</button>
            </div>
          </form>
          <div>{result}</div>
        </div>
      </div>
    </>
  );
};

export default ContactPageForm;
