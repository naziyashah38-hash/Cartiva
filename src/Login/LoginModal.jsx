import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function LoginModal({ onClose }) {
  const { login } = useAuth();
  const [isSignup, setIsSignup] = useState(false);
  const [form, setForm] = useState({ firstName: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, email, password } = form;

    if (!email.trim() || !password.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    if (isSignup && !firstName.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (isSignup) {
      // save user to localStorage "database" (demo only — no backend yet)
      const users = JSON.parse(localStorage.getItem("users") || "{}");
      if (users[email]) {
        setError("Account already exists — please log in.");
        return;
      }
      users[email] = { firstName: firstName.trim(), password };
      localStorage.setItem("users", JSON.stringify(users));
      login(firstName.trim(), email);
    } else {
      // login: check stored users
      const users = JSON.parse(localStorage.getItem("users") || "{}");
      const u = users[email];
      if (!u || u.password !== password) {
        setError("Invalid email or password.");
        return;
      }
      login(u.firstName, email);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      onClick={onClose}>
      <div className="bg-white rounded-2xl p-8 w-full max-w-sm"
        onClick={(e) => e.stopPropagation()}>

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-serif font-bold text-[#722F37]">
            {isSignup ? "Create Account" : "Welcome Back"}
          </h2>
          <button onClick={onClose}
            className="w-8 h-8 rounded-full bg-amber-50 text-[#722F37] cursor-pointer border-none">
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {isSignup && (
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={form.firstName}
              onChange={handleChange}
              className="w-full border border-[#722F37]/30 rounded-xl px-4 py-2.5 mb-3
                         text-sm text-[#722F37] outline-none
                         focus:border-[#722F37] transition-colors"
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-[#722F37]/30 rounded-xl px-4 py-2.5 mb-3
                       text-sm text-[#722F37] outline-none
                       focus:border-[#722F37] transition-colors"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full border border-[#722F37]/30 rounded-xl px-4 py-2.5 mb-3
                       text-sm text-[#722F37] outline-none
                       focus:border-[#722F37] transition-colors"
          />

          {error && <p className="text-xs text-[#a71e2e] mb-3">{error}</p>}

          <button type="submit"
            className="w-full bg-[#722F37] text-white py-3 rounded-full font-semibold
                       cursor-pointer border-none hover:bg-[#a71e2e] transition-colors">
            {isSignup ? "Sign Up" : "Log In"}
          </button>
        </form>

        <p className="text-center text-sm text-[#722F37]/60 mt-4">
          {isSignup ? "Already have an account? " : "New to Cartiva? "}
          <button onClick={() => { setIsSignup(!isSignup); setError(""); }}
            className="text-[#a71e2e] font-semibold cursor-pointer bg-none border-none underline">
            {isSignup ? "Log in" : "Create one"}
          </button>
        </p>
      </div>
    </div>
  );
}