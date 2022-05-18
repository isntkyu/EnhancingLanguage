const extension = ".css";

// Switch statement
let contentType;
switch (extension) {
  case ".css":
    contentType = "text/css";
    break;
  case ".js":
    contentType = "text/javascript";
    break;
  case ".json":
    contentType = "application/json";
    break;
  case ".jpg":
    contentType = "image/jpg";
    break;
  case ".png":
    contentType = "image/png";
    break;
  case ".txt":
    contentType = "text/plain";
    break;
  default:
    contentType = "text/html";
    break;
}

console.log(contentType);

// Obj
const extensionObj = {
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".jpg": "image/jpg",
  ".png": "image/png",
  ".txt": "text/plain",
};

console.log(extensionObj[extension] || "text/html");

// Map
const myMap = new Map();
myMap.set(".css", "text/css");
myMap.set(".js", "text/javascript");

console.log(myMap.get(extension) || "text/html");
