import React from "react";
import Router from "next/router";

export const ErrorMessage: React.FC<{ error: Error | null }> = ({
  error,
}) => {
  return (
    <div>
      <h2>{`Sorry there was an unexpected error`}</h2>
      {`To continue: `}
      <button
      type="button"
        onClick={() => {
          Router.reload();
        }}
      >
        {`refresh`}
      </button>
      <p>{error.toString()}</p>
    </div>
  );
};

export function test(props: any) {
  const Container = props.componentClass;
  return <Container />;
}
