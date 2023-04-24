const tf = require('@tensorflow/tfjs-node');

// Load the pre-trained model
const model = await tf.loadLayersModel('file://path/to/pretrained/model');

function determineSize(bodyMeasurements) {
  // Convert the body measurements to a tensor
  const tensor = tf.tensor([[
    bodyMeasurements.chestSize,
    bodyMeasurements.waistSize,
    bodyMeasurements.hipSize,
    bodyMeasurements.armLength,
    bodyMeasurements.legLength
  ]]);

  // Normalize the tensor
  const normalizedTensor = tensor.sub(tf.scalar(150)).div(tf.scalar(150));

  // Pass the tensor through the pre-trained model to get a prediction for the appropriate clothing size
  const prediction = model.predict(normalizedTensor);

  // Convert the prediction to a string (such as "M" for medium)
  const predictedSize = convertPredictionToString(prediction);

  return predictedSize;
}

function convertPredictionToString(prediction) {
  // Convert the prediction tensor to an array
  const predictionArray = prediction.dataSync();

  // Get the index of the maximum value in the array
  const maxIndex = predictionArray.indexOf(Math.max(...predictionArray));

  // Define an array of clothing sizes
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  // Return the corresponding size string
  return sizes[maxIndex];
}

module.exports = determineSize;
