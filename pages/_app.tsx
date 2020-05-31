import React from "react";
import { AppProps } from "next/app";

import ThemeProvider from "../context/ThemeContext";
import SelectedProvider from "../context/SelectedContext";
import { AuthProvider } from "../context/AuthenticationContext";
import FormProvider from "../context/FormContext";
import SelectedFormProvider from "../context/SelectedFormContext";

import { ToastProvider } from "../utils/toast";
import ToastContainer from "../utils/ToastContainer";

import "../css/tailwind.css";
import "../styles.css";
import "react-datepicker/dist/react-datepicker.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <FormProvider>
          <SelectedFormProvider>
            <SelectedProvider>
              <ToastProvider>
                <ToastContainer>
                  <Component {...pageProps} />
                </ToastContainer>
              </ToastProvider>
            </SelectedProvider>
          </SelectedFormProvider>
        </FormProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
