import PropTypes from "prop-types";

const RegisterDialog = ({ showD, onHide }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity ${
        showD
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={() => onHide(false)}
      ></div>

      {/* Modal */}
      <div className="bg-white rounded-lg shadow-xl p-6 relative z-10 w-full max-w-4xl mx-4 flex">
        {/* Close Button */}
        <button
          onClick={() => onHide(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Left Side - Illustration (hidden on small screens) */}
        <div className="hidden md:block w-1/2 pr-8">
          <img
            src="https://thememarch.com/demo/html/posing/assets/img/retail-store.png"
            alt="Payment Terminal Illustration"
            className="w-full h-auto"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            Create your new account
          </h2>

          {/* Registration Form */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />

            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />

            {/* Terms Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                I agree to the terms of service
              </label>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
            >
              Register
            </button>
          </form>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">or</span>
            </div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-4 gap-4">
            {["#EA4335", "#181717", "#1877F2", "#0A66C2"].map(
              (color, index) => (
                <button
                  key={index}
                  className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200"
                >
                  <svg
                    className="w-6 h-6 mx-auto"
                    viewBox="0 0 24 24"
                    fill={color}
                  >
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                  </svg>
                </button>
              )
            )}
          </div>

          {/* Login Link */}
          <div className="text-center text-sm">
            Already have an account?{" "}
            <a
              href="#"
              className="text-blue-500 hover:text-blue-600 font-medium"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

RegisterDialog.propTypes = {
  showD: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
};

export default RegisterDialog;
