// Scenario: Building a Simple Image Carousel

// Imagine you have a webpage with a few images that you want to display in a carousel, allowing users to navigate between them using "Previous" and "Next" buttons. A doubly linked list is a suitable structure for this:

// Each image is a Node in the doubly linked list.
// The data in each node stores the image URL or other relevant information.
// The next pointer connects each image to the next one in the carousel.
// The prev pointer connects each image to the previous one.

const imageData = [
    { url: "image1.jpg", caption: "Beautiful landscape" },
    { url: "image2.jpg", caption: "Portrait of a person" },
    { url: "image3.jpg", caption: "Wildlife scene" }
];

class ImageNode {
    constructor(imageData) {
        this.data = imageData;
        this.prev = null;
        this.next = null;
    }
}

let head = null;
let tail = null;

imageData.forEach(data => {
    const node = new ImageNode(data);

    if (!head) {
        head = node;
        tail = node;
    } else {
        tail.next = node;
        node.prev = tail;
        tail = node;
    }
})

let currentImage = head;

function displayImage() {
    console.log("Displaying:", currentImage.data.url, "-", currentImage.data.caption);
}

function nextImage() {
    if (currentImage.next) {
        currentImage = currentImage.next;
        displayImage();
    }
}

function prevImage() {
    if (currentImage.prev) {
        currentImage = currentImage.prev;
        displayImage();
    }
}

displayImage();

nextImage();
nextImage();