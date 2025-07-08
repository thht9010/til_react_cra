import React from "react";

function Test() {
  // js 자리
  const handleFocus = () => {};
  const handleBlur = () => {};
  // jsx 자리
  return (
    <div>
      <input type="text" onFocus={handleFocus} onBlur={handleBlur} />
    </div>
  );
}

export default Test;
