import { useEffect, useLayoutEffect } from "react";

function SimpleUseEffectLayout() {
  useEffect(() => {
    console.log("useEffect Message!");
  }, []);

  useLayoutEffect(() => {
    console.log("useLayoutEffect Message!");
  }, []);
  return <div>SimpleUseEffectLayout</div>;
}

export default SimpleUseEffectLayout;
