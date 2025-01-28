export const RegisterDialogue = ({ showD, onHide }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity ${
        showD
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="min-h-screen min-w-md bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-5xl relative">
          <button
            onClick={() => onHide(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl"
          >
            ✕
          </button>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Illustration Section */}
            <div className="hidden md:block">
              <img
                src="https://thememarch.com/demo/html/posing/assets/img/retail-store.png"
                alt="Payment illustration"
                className="w-full h-auto max-w-md mx-auto"
              />
            </div>

            {/* Register Form Section */}
            <div className="max-w-md mx-auto w-full">
              <div className="space-y-6">
                <h1 className="text-2xl font-bold text-center text-gray-900">
                  Create new account
                </h1>

                <form className="space-y-4">
                  <div>
                    <input
                      type="name"
                      placeholder="Your name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Email address"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                  </div>

                  <div>
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 rounded border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-600">
                        I agree to the terms of service
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
                  >
                    Register
                  </button>
                </form>

                <div className="text-center text-sm text-gray-600">
                  Already have an account?{" "}
                  <a href="#" className="text-blue-500 hover:text-blue-600">
                    Login
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
