import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import classNames from "../utils/classNames";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const Login = () => {
  return (
    <div className="flex min-h-screen">
      <img
        src="https://images.unsplash.com/photo-1517817748493-49ec54a32465?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        className="object-cover w-6/12 bg-gray-800 "
      />
      <div className="flex-shrink-0 w-6/12 px-20 mt-64 min-w-96">
        <div className="flex items-center -ml-3">
          <img className="w-auto h-16" src="/logo.png" alt="" />
          <span className="text-2xl font-bold tracking-widest text-primary font-header">
            icarus
          </span>
        </div>
        <h1 className="text-3xl font-extrabold text-gray-800">
          Welcome back to icarus
        </h1>
        <p>
          Or{" "}
          <span className="mt-2 font-bold cursor-pointer text-primary">
            create a new account
          </span>
        </p>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log(values);
              setSubmitting(false);
            }, 4000);
          }}
        >
          {({ isSubmitting, isValidating, errors }) => (
            <Form className="mt-8">
              <div className="mt-6">
                <div>
                  {isSubmitting.toString()} - {isValidating.toString()}
                </div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1 shadow-sm">
                  <Field
                    id="email"
                    type="email"
                    name="email"
                    required
                    className={classNames(
                      "block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 appearance-none focus:outline-none  sm:text-sm sm:leading-5",
                      errors.email
                        ? "focus:border-red-300 focus:shadow-outline-red"
                        : "focus:shadow-outline-orange"
                    )}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-sm text-red-600"
                  />
                </div>
              </div>

              <div className="flex justify-between w-full mt-6 space-x-6">
                <div className="w-full">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Password
                  </label>
                  <div className="mt-1 shadow-sm">
                    <Field
                      id="password"
                      type="password"
                      name="password"
                      required
                      className={classNames(
                        "block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 appearance-none focus:outline-none  sm:text-sm sm:leading-5",
                        errors.password
                          ? "focus:border-red-300 focus:shadow-outline-red"
                          : "focus:shadow-outline-orange"
                      )}
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-sm text-red-600"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end mt-6">
                <div className="text-sm leading-5">
                  <a
                    href="/"
                    className="font-bold transition duration-150 ease-in-out text-primary hover:text-indigo-500 focus:outline-none focus:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div className="mt-6">
                <span className="block w-full shadow-sm">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={classNames(
                      "flex justify-center w-full px-4 py-2 text-lg font-medium text-white transition duration-150 ease-in-out border border-transparent bg-primary hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700",
                      isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                    )}
                  >
                    Login
                  </button>
                </span>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
