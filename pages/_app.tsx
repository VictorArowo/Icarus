import React, { useState, useEffect } from "react";
import "../css/tailwind.css";
import "../styles.css";

import { AppProps } from "next/app";

import ThemeProvider from "../context/ThemeContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
