import React, { useState } from "react";

const BrokenComponent = () => {
  throw new Error("I'm broken! Don't render me.");
};

const BrokenButton = () => {
  const [
    shouldRenderBrokenComponent,
    setShouldRenderBrokenComponent,
  ] = useState(false);

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
          throw new Error("Hello Error");
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
