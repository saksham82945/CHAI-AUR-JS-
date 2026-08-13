const canvasElement = document.getElementById("scratch");
const canvasContext = canvasElement.getContext("2d");


const initializeCanvas = (imgUrl) => {
  canvasElement.setAttribute('height', document.querySelector('.coupon').getBoundingClientRect().height)
  canvasElement.setAttribute('width', document.querySelector('.coupon').getBoundingClientRect().width)
  const gradient = canvasContext.createLinearGradient(5, 99, document.querySelector('.coupon').getBoundingClientRect().width, document.querySelector('.coupon').getBoundingClientRect().height);

  const img = new Image();

  img.onload = () => {
    const imgAspectRatio = img.width / img.height;
    const canvasAspectRatio = canvasContext.canvas.width / canvasContext.canvas.height;

    let sourceX, sourceY, sourceWidth, sourceHeight;

    if (imgAspectRatio > canvasAspectRatio) {
      sourceHeight = img.height;
      sourceWidth = sourceHeight * canvasAspectRatio;
      sourceX = (img.width - sourceWidth) / 2;
      sourceY = 0;
    } else {
      sourceWidth = img.width;
      sourceHeight = sourceWidth / canvasAspectRatio;
      sourceX = 0;
      sourceY = (img.height - sourceHeight) / 2;
    }

    canvasContext.drawImage(img, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, canvasContext.canvas.width, canvasContext.canvas.height);
  };

  img.src = imgUrl;

};

let isDragging = false;

function lerp(start, end, t) {
  return start * (1 - t) + end * t;
}


let totalArea = 0;
let scratchedArea = 0;
let scratchedCoordinates = [];

const scratch = (x, y) => {
  const radius = 30;
  const area = Math.PI * radius * radius;

  // Check if the coordinate has been scratched before
  if (scratchedCoordinates.some(coord => coord.x === x && coord.y === y)) {
    return;
  }

  // Add the coordinate to the scratched coordinates array
  scratchedCoordinates.push({ x, y });

  canvasContext.globalCompositeOperation = "destination-out";
  canvasContext.beginPath();
  canvasContext.arc(x, y, radius, 0, 2 * Math.PI);
  canvasContext.fill();

  scratchedArea += area;
  totalArea = canvasContext.canvas.width * canvasContext.canvas.height;

  if ((scratchedArea / totalArea) > 0.7) {
    canvasElement.style.opacity = 0;
    // canvasContext.clearRect(0, 0, canvasContext.canvas.width, canvasContext.canvas.height);
  }
};

let mouseScratch = {
  x: 0,
  y: 0,
  z: false,
  dx: 0,
  dy: 0
}
// Event handling for mouseScratch and touch devices
canvasElement.addEventListener("mousedown", handleStart);
canvasElement.addEventListener("touchstart", handleStart);

canvasElement.addEventListener("mousemove", handleMove);
canvasElement.addEventListener("touchmove", handleMove);

canvasElement.addEventListener("mouseup", handleEnd);
canvasElement.addEventListener("touchend", handleEnd);

function handleStart(event) {
  event.preventDefault(); // Prevent default touch behavior (e.g., scrolling)

  const touches = event.type === "touchstart" ? event.touches : [ event ];
  const touch = touches[ 0 ];

  if (!mouseScratch.z) {
    mouseScratch.x = touch.clientX - canvasElement.getBoundingClientRect().left;
    mouseScratch.y = touch.clientY - canvasElement.getBoundingClientRect().top;
  }
  mouseScratch.z = true;
}

function handleMove(event) {
  event.preventDefault(); // Prevent default touch behavior (e.g., scrolling)

  const touches = event.type === "touchmove" ? event.touches : [ event ];
  const touch = touches[ 0 ];

  if (mouseScratch.z) {
    mouseScratch.x = touch.clientX - canvasElement.getBoundingClientRect().left;
    mouseScratch.y = touch.clientY - canvasElement.getBoundingClientRect().top;
  }
}

function handleEnd() {
  mouseScratch.z = false;
}


// canvasElement.addEventListener("touchstart", (event) => {
//   isDragging = true;
//   scratch(event.touches[ 0 ].clientX - canvasElement.getBoundingClientRect().left, event.touches[ 0 ].clientY - canvasElement.getBoundingClientRect().top);
// });

// canvasElement.addEventListener("touchmove", (event) => {
//   if (isDragging) {
//     scratch(event.touches[ 0 ].clientX - canvasElement.getBoundingClientRect().left, event.touches[ 0 ].clientY - canvasElement.getBoundingClientRect().top);
//   }
// });

// canvasElement.addEventListener("touchend", () => {
//   isDragging = false;
// });

let lastTimeScratch = 0;

function anim(currentTime) {
  // Throttle to 60 FPS
  if (currentTime - lastTimeScratch < 1000 / 60) {
    requestAnimationFrame(anim);
    return;
  }
  lastTimeScratch = currentTime;

  if (mouseScratch.z) {
    mouseScratch.dx = lerp(mouseScratch.x, mouseScratch.dx, .1);
    mouseScratch.dy = lerp(mouseScratch.y, mouseScratch.dy, .1);
    scratch(
      mouseScratch.dx,
      mouseScratch.dy
    );
  }

  requestAnimationFrame(anim);
}

requestAnimationFrame(anim);


initializeCanvas("https://ik.imagekit.io/sheryians/FrontEnd%20Donation/Group%20500_Cwk04CTUa.png?updatedAt=1716013002760");
