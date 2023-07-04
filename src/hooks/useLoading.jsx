import { useState } from "react";
import Loading from "../components/Loading";

export default function useLoading() {
  const [rendering, setRendering] = useState(true);
  const loading = () => {
    if (rendering) {
      return <Loading />;
    }
    return null;
  };

  const finishedRender = () => {
    setRendering(false);
  };

  return {
    loading,
    finishedRender,
  };
}
