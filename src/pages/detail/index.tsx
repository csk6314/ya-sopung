import Detail from "@/container/detail";
import { Suspense, useEffect } from "react";
import Loading from "./loading";
import { ErrorBoundary } from "react-error-boundary";
import DetailError from "./error";

const DetailPage = () => {
  useEffect(() => {
    console.log("gd");
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <ErrorBoundary FallbackComponent={DetailError}>
      <Suspense fallback={<Loading />}>
        <Detail />
      </Suspense>
    </ErrorBoundary>
  );
};

export default DetailPage;
