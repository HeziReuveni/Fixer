import React from "react";

function ScreenshotComponent() {
  const captureScreenshot = () => {
    window.print();
  };

  return (
    <div>
      <button onClick={captureScreenshot}>Capture Screenshot</button>
      <div>Content of your React component</div>
    </div>
  );
}

export default ScreenshotComponent;
