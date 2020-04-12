
import React from "react";
import Webcam from "react-webcam";
const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };
   
const WebcamCapture = (props) => {
    const webcamRef = React.useRef(null);

    const capture = React.useCallback(
        () => {
        const imageSrc = webcamRef.current.getScreenshot();
        props.onImageSelect(imageSrc);
        },
        [webcamRef]
    );

    return (
        <div>
            <div class="ui segment">
                
                <Webcam
                audio={false}
                height={320}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={600}
                videoConstraints={videoConstraints} style={{
                    marginLeft: "240px",
                  }}></Webcam>

                <button onClick={capture} class="fluid ui button">Capture photo</button>
            </div>  
            <div class="column">

            </div>
            
        
        </div>
    );
};
  
export default WebcamCapture;
