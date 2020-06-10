import React, { useState } from "react";
import useError from '~/hooks/useError'


const BrokenComponent = () => {
  throw new Error("I'm broken! Don't render me.");
};

const BrokenButton = () => {
  const [
    shouldRenderBrokenComponent,
    setShouldRenderBrokenComponent,
  ] = useState(false);
  const throwError = useError();

  if (shouldRenderBrokenComponent) {
    return <BrokenComponent />;
  }

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setShouldRenderBrokenComponent(true);
        }}
      >
        {`Throw nasty error`}
      </button>
      <button
        onClick={() => {
          throwError(new Error("Hello Error"));
        }}
      >
        throw a tiny error
      </button>
    </>
  );
};

export default function Test() {
  return <BrokenButton />;
}
