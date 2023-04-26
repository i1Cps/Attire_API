function takeSnapshot() {
  // Get the canvas element
  const canvas = document.querySelector('canvas');

  // Create a new image element
  const image = new Image();

  // Set the source of the image to the canvas data
  image.src = canvas.toDataURL('image/png');

  // Create a link element with the image as the href
  const link = document.createElement('a');
  link.download = 'snapshot.png';
  link.href = image.src;

  // Click the link to download the image
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
