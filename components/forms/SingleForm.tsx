import Link from "next/link";
import { Element } from "../../utils/form";

interface Props {
  form: {
    body: Element[];
    created: string;
    title: string;
    description: string;
    responses: Record<string, string>[];
  };
}

const SingleForm: React.FC<Props> = ({
  form: { responses, created, title },
}) => {
  return (
    <div>
      <li>
        <div className="block transition duration-150 ease-in-out rounded-lg cursor-pointer hover:bg-gray-800 focus:outline-none focus:bg-gray-50">
          <div className="flex items-center px-4 py-4 sm:px-6">
            <div className="flex items-center flex-1 min-w-0">
              <div className="flex-1 min-w-0 px-4 md:grid md:grid-cols-2 md:gap-4">
                <div>
                  <div className="text-lg font-medium leading-5 truncate text-primary">
                    {title}
                  </div>
                  <div className="flex mt-2">
                    <div className="flex items-center text-sm leading-5 text-gray-300">
                      <svg
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        Created on{" "}
                        <time dateTime="2020-01-07">
                          {new Date(created).toLocaleDateString()}
                        </time>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="text-lg leading-5 text-gray-200">
                    {responses.length} submissions
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};

export default SingleForm;
