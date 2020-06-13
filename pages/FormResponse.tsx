import Footer from "../components/respondent/Footer";
import { useRouter } from "next/router";

const FormResponse = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <div className="bg-primary-background">
      <div className="flex flex-col items-center max-w-5xl min-h-screen mx-auto">
        <h1 className="pt-10 text-4xl font-extrabold text-center text-primary-text">
          Form Title Lorem
        </h1>
        <h4 className="mt-3 text-xl font-medium text-center text-gray-300">
          Response successfully saved
        </h4>

        <span className="inline-flex mt-12 rounded-md shadow-sm">
          <button
            type="button"
            className="inline-flex items-center px-4 py-3 font-medium font-bold leading-5 transition duration-150 ease-in-out border border-transparent rounded-md text-md text-gray-50 bg-primary hover:bg-yellow-600 focus:outline-none focus:border-yellow-700 focus:shadow-outline-blue active:bg-yellow-800"
            onClick={handleBack}
          >
            Submit another response
          </button>
        </span>
      </div>
      <Footer />
    </div>
  );
};

export default FormResponse;
