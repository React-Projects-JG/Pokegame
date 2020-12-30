import { useState } from "react";

function useToggleState(initialValue = false) {
  const [state, setState] = useState(initialVal);
  const toggle = () => {
    setState(!state);
  };

  return [state, toggle];
}

export default useToggleState;
