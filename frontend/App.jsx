import React, { useRef, useState } from "react";
import "./App.css";

const ArTtire = ({
  logo,
  theme,
  clothingMeasurements,
  basketItems,
}) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [cameraStarted, setCameraStarted] = useState(false);

  const startCamera = async () => {
    if (!cameraStarted) {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 640, height: 480 },
      });
      videoRef.current.srcObject = stream;
      setCameraStarted(true);
    }
  };

  const takePicture = () => {
    const context = canvasRef.current.getContext("2d");
    context.drawImage(videoRef.current, 0, 0, 640, 480);
  };

  return (
    <div className="arttire">
      <div className="header">
        <img src={logo} alt="Company Logo" />
      </div>
      <div className="content">
        <div className="camera-input">
          <video ref={videoRef} autoPlay={true} onClick={startCamera}></video>
          <button onClick={takePicture}>Take a picture</button>
        </div>
        <canvas ref={canvasRef} width="640" height="480"></canvas>
      </div>
    </div>
  );
};

export default ArTtire;
