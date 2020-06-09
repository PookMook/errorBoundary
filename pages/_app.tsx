import React from "react";
import { withErrorBoundary } from "~/components/errorHandling/errorBoundary";
import { ErrorMessage } from "~/components/errorHandling/errorMessage";

const ErrorMessageWithErrorBoundary = withErrorBoundary(ErrorMessage);

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <ErrorMessageWithErrorBoundary>
      <Component {...pageProps} />
    </ErrorMessageWithErrorBoundary>
  );
}
