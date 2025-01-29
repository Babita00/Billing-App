import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

const LoginPage = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const validateForm = () => {
    let isValid = true;
    let newErrors = { email: "", password: "" };

    if (!data.email) {
      newErrors.email = "Email is required";
      isValid = false;
    }

    if (!data.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (data.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
      isValid = false;
    } else if (!/\d/.test(data.password) || !/[a-zA-Z]/.test(data.password)) {
      newErrors.password = "Password must contain both letters and numbers";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const onclickLogin = (e) => {
    e.preventDefault(); // Prevent the default form submission

    if (validateForm()) {
      navigate("/home");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-5xl relative">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Illustration Section */}
          <div className="hidden md:block">
            <img
              src="https://thememarch.com/demo/html/posing/assets/img/about_img_1.png"
              alt="Payment illustration"
              className="w-full h-auto max-w-md mx-auto"
            />
          </div>

          {/* Login Form Section */}
          <div className="max-w-md mx-auto w-full">
            {/* Close button */}
            <button
              onClick={() => navigate("/")}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
            >
              <span className="text-2xl">&times;</span>
            </button>

            <div className="space-y-6">
              <h1 className="text-2xl font-bold text-center text-gray-900">
                Login in to your posing account
              </h1>

              <form className="space-y-4">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={data.email}
                    onChange={onInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={data.password}
                    onChange={onInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.password}
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 rounded border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-600">
                      Remember me
                    </span>
                  </label>
                  <Link
                    to="#"
                    className="text-sm text-blue-500 hover:text-blue-600"
                  >
                    Forgot Password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
                  onClick={onclickLogin}
                >
                  Login
                </button>
              </form>

              <div className="text-center text-sm text-gray-600">
                Don`t have an account?{" "}
                <a href="#" className="text-blue-500 hover:text-blue-600">
                  Register
                </a>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">or</span>
                </div>
              </div>

              {/* Social Login Buttons */}
              <div className="grid grid-cols-4 gap-4">
                <button className="flex items-center justify-center p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <img
                    src="/api/placeholder/24/24"
                    alt="Google"
                    className="w-6 h-6"
                  />
                </button>
                <button className="flex items-center justify-center p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <img
                    src="/api/placeholder/24/24"
                    alt="GitHub"
                    className="w-6 h-6"
                  />
                </button>
                <button className="flex items-center justify-center p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <img
                    src="/api/placeholder/24/24"
                    alt="Facebook"
                    className="w-6 h-6"
                  />
                </button>
                <button className="flex items-center justify-center p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <img
                    src="/api/placeholder/24/24"
                    alt="LinkedIn"
                    className="w-6 h-6"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
