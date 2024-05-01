import React, { useState } from "react";
import { FaX } from "react-icons/fa6";
import { toast } from "react-toastify";

const HireForm = ({
  showFormPopup,
  setShowFormPopup,
}: {
  showFormPopup: boolean;
  setShowFormPopup: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    details: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    fetch("https://formsubmit.co/ajax/c15224f69ae9eb24749a4e1febcf8fee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        phoneNumber: formData.phone,
        email: formData.email,
        message: formData.details,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        toast("Thank you for joining us!", { type: "success" });
        setFormData({
          name: "",
          email: "",
          phone: "",
          details: "",
        });
        setShowFormPopup(false);
      })
      .catch(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          details: "",
        });
        toast("Sorry, an error occured!", { type: "error" });
        setShowFormPopup(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      {showFormPopup && (
        <div className="flex fixed top-0 left-0 z-50 justify-center items-center w-screen h-screen bg-black opacity-95">
          <div className="p-4 w-3/4 bg-white rounded-2xl min-h-3/4 md:w-1/2">
            <div className="flex justify-end items-center text-red-700">
              <span
                className="p-1.5 text-xl rounded-full cursor-pointer hover:bg-gray-400"
                onClick={() => {
                  setShowFormPopup(false);
                  setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    details: "",
                  });
                }}
              >
                <FaX />
              </span>
            </div>
            <div className="my-2">
              <h3 className="font-bold text-center">
                Tell us more about your project
              </h3>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <label htmlFor="name" className="text-sm">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData((formData) => {
                      return { ...formData, name: e.target.value };
                    });
                  }}
                  required
                  placeholder="John Doe"
                  className="p-2 w-full text-black bg-transparent bg-gray-200 rounded-xl border-2 border-gray-700 shadow-sm outline-none focus:border-green focus:border-2 focus:shadow-light-green"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email@email.com"
                  required
                  value={formData.email}
                  onChange={(e) => {
                    setFormData((formData) => {
                      return { ...formData, email: e.target.value };
                    });
                  }}
                  id="email"
                  className="p-2 w-full text-black bg-transparent bg-gray-200 rounded-xl border-2 border-gray-700 shadow-sm outline-none focus:border-green focus:border-2 focus:shadow-light-green"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="phone">Phone Number:</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="+234XXXXXXXXXX"
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData((formData) => {
                      return { ...formData, phone: e.target.value };
                    });
                  }}
                  required
                  inputMode="numeric"
                  className="p-2 w-full text-black bg-transparent bg-gray-200 rounded-xl border-2 border-gray-700 shadow-sm outline-none focus:border-green focus:border-2 focus:shadow-light-green"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.details}
                  onChange={(e) => {
                    setFormData((formData) => {
                      return { ...formData, details: e.target.value };
                    });
                  }}
                  className="p-2 w-full h-36 text-black bg-transparent bg-gray-200 rounded-xl border-2 border-gray-700 shadow-sm outline-none resize-none focus:border-green focus:border-2 focus:shadow-light-green"
                  placeholder="Give us details about yout project"
                ></textarea>
              </div>
              <div className="mb-2">
                <button
                  type="submit"
                  disabled={loading}
                  className={`block p-2 w-full text-white rounded-xl bg-brand-green ${
                    loading ? "cursor-not-allowed" : "cursor-pointer"
                  }`}
                >
                  Send Email
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default HireForm;
