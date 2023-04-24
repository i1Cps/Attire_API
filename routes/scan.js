const express = require('express');
const router = express.Router();
const cv2 = require('opencv4nodejs');
const { detectBody } = require('../controllers/detectBody');
const { determineSize } = require('../controllers/determineSize');
const { displayClothingItem } = require('../controllers/displayClothingItem');

router.post('/', async (req, res) => {
  // Start the video stream from the camera
  const videoStream = new cv2.VideoCapture(0);

  // Receive the clothing item data from the request
  const clothingItem = req.body.clothing_item;

  while (true) {
    // Read a frame from the video stream
    const frame = await videoStream.readAsync();

    // Use computer vision algorithms to detect the user's body and extract measurements from the frame
    const bodyMeasurements = detectBody(frame);

    // Use the measurements to determine the appropriate clothing size
    const clothingSize = await determineSize(bodyMeasurements);

    // Display the clothing item on the user in real time
    await displayClothingItem(clothingItem, clothingSize, bodyMeasurements, frame);

    // Convert the frame to a JPEG image for sending back in the response
    const jpeg = cv2.imencode('.jpg', frame);
    const frameData = jpeg.toString('base64');

    // Send the frame data as a response to the client
    res.write(`--frame\r\nContent-Type: image/jpeg\r\n\r\n${frameData}\r\n`);
    res.flush();
  }
});

module.exports = router;
