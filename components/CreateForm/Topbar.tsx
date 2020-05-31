import { useContext, useState } from "react";
import { useRouter } from "next/router";

import Button from "../Button";
import Editable from "../Editable";
import Loading from "../Loading";

import SaveIcon from "../../icons/SaveIcon";
import ArrowLeftIcon from "../../icons/ArrowLeftIcon";
import EyeIcon from "../../icons/EyeIcon";

import { FormContext } from "../../context/FormContext";
import { AuthContext } from "../../context/AuthenticationContext";

import { useToast } from "../../utils/toast";
import Link from "next/link";
import { SelectedFormContext } from "../../context/SelectedFormContext";

const Topbar = () => {
  const context = useContext(FormContext);
  const authContext = useContext(AuthContext);
  const { changeSelected } = useContext(SelectedFormContext);
  const router = useRouter();
  const { addToast } = useToast();
  const [loading, setLoading] = useState(false);
  const { form, changeForm } = context;
  const {
    currentUser: { id },
  } = authContext;

  const handleClick = async () => {
    setLoading(true);
    const response = await fetch("/api/forms", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: [...form["1"]],
        user: id,
        created: new Date(),
        title: form.title,
        description: form.description,
      }),
    });

    const data = await response.json();
    changeSelected(data);
    setLoading(false);
    router.push("/CreateResponse");
  };

  const handleBack = () => {
    router.back();
  };

  const handleFormPropertyChange = (
    name: "title" | "description",
    value: string
  ) => {
    changeForm({ ...form, [name]: value });
  };

  return (
    <div className="w-screen h-24 bg-primary-background">
      {loading && <Loading />}
      <div className="flex justify-between w-full tems-center p-7">
        <div className="flex items-center">
          <div
            className="w-10 h-10 cursor-pointer text-primary-text"
            onClick={handleBack}
          >
            <ArrowLeftIcon />
          </div>

          <Editable
            text={form.title}
            name="title"
            handleSubmit={handleFormPropertyChange}
            className="ml-10 text-xl text-primary-text"
          />

          <Editable
            text={form.description}
            name="description"
            handleSubmit={handleFormPropertyChange}
            className="ml-10 text-lg text-gray-400"
          />
        </div>

        <div>
          <div className="flex justify-between w-40 sm:w-64">
            <Link href="/preview">
              <a>
                <Button type="text">
                  <div className="w-5 h-5 mr-2">
                    <EyeIcon />
                  </div>
                  <span className="hidden sm:inline-block">Preview</span>
                </Button>
              </a>
            </Link>
            <Button type="primary" onClick={handleClick}>
              <div className="w-5 h-5 mr-2">
                <SaveIcon />
              </div>
              <span className="hidden sm:inline-block">Create</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
