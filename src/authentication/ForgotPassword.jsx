import React from "react";

const ForgotPassword = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-300 dark:bg-gray-900">
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white text-center">
            Forgot Password
          </h1>
          <form className="space-y-4" action="#">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 text-white font-medium rounded-lg text-sm py-2 mt-4"
            >
              Submit
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

export default ForgotPassword;
