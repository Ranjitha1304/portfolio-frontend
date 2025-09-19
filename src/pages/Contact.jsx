import React, { useState } from "react";

// Inline backend URL
const BASE_URL = import.meta.env.VITE_API_URL || "https://portfolio-backend-0m52.onrender.com";

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  // Validation function
  const validate = () => {
    const e = {};

    // First Name: required, 3-20 letters, letters only
    if (!form.firstName) {
      e.firstName = "First name is required";
    } else if (!/^[A-Za-z]{3,20}$/.test(form.firstName)) {
      e.firstName = "First name must be 3-20 letters";
    }

    // Last Name: optional, letters only
    if (form.lastName && !/^[A-Za-z]+$/.test(form.lastName)) {
      e.lastName = "Last name can only contain letters";
    }

    // Email: required, valid
    if (!form.email) {
      e.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      e.email = "Enter a valid email";
    }

    // Message: required, min 10 chars
    if (!form.message) {
      e.message = "Message is required";
    } else if (form.message.length < 10) {
      e.message = "Message must be at least 10 characters";
    }

    return e;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    try {
      const res = await fetch(`${BASE_URL}/contact/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus({ type: "success", msg: "Message sent successfully!" });
        setForm({ firstName: "", lastName: "", email: "", message: "" });

        // Hide success after 3 seconds
        setTimeout(() => setStatus(null), 3000);
      } else {
        const data = await res.json();
        setStatus({ type: "error", msg: data.message || "Something went wrong" });
        setTimeout(() => setStatus(null), 3000);
      }
    } catch (err) {
      setStatus({ type: "error", msg: "Something went wrong. Please try later." });
      setTimeout(() => setStatus(null), 3000);
    }
  };

  return (
    <main className="pt-28 px-4 max-w-3xl mx-auto pb-20">
      <section className="mb-6 text-center">
        <h1 className="text-3xl font-bold">Let's Connect</h1>
        <p className="text-slate-600">Have a project or question? Send me a message.</p>
      </section>

      <div className="bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* First Name */}
            <div>
              <label className="block text-sm font-medium">First name*</label>
              <input
                value={form.firstName}
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                className="mt-1 block w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
              {errors.firstName && <p className="text-sm text-red-600 mt-1">{errors.firstName}</p>}
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-medium">Last name</label>
              <input
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                className="mt-1 block w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
              {errors.lastName && <p className="text-sm text-red-600 mt-1">{errors.lastName}</p>}
            </div>
          </div>

          {/* Email */}
          <div className="mt-4">
            <label className="block text-sm font-medium">Email*</label>
            <input
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="mt-1 block w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
          </div>

          {/* Message */}
          <div className="mt-4">
            <label className="block text-sm font-medium">Message*</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows="5"
              className="mt-1 block w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message}</p>}
          </div>

          {/* Submit */}
          <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
            <div className="text-sm text-slate-600">
              Or email:{" "}
              <a
                href="mailto:ranjithapython@vetritechnologysolutions.in"
                className="text-blue-600"
              >
                ranjithapython@vetritechnologysolutions.in
              </a>
            </div>
          </div>

          {/* Status Message */}
          {status && (
            <div
              className={`mt-4 p-3 rounded ${
                status.type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
              }`}
            >
              {status.msg}
            </div>
          )}
        </form>
      </div>
    </main>
  );
};

export default Contact;
