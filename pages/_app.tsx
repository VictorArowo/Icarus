import React, { useState, useEffect } from "react";
import "../css/tailwind.css";
import "../styles.css";
import "react-datepicker/dist/react-datepicker.css";

import { AppProps } from "next/app";

import ThemeProvider from "../context/ThemeContext";
import SelectedProvider from "../context/SelectedContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <SelectedProvider>
        <Component {...pageProps} />
      </SelectedProvider>
    </ThemeProvider>
  );
}

export default MyApp;
