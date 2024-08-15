// Scenario: Building a Simple Image Carousel

// Imagine you have a webpage with a few images that you want to display in a carousel, allowing users to navigate between them using "Previous" and "Next" buttons. A doubly linked list is a suitable structure for this:

// Each image is a Node in the doubly linked list.
// The data in each node stores the image URL or other relevant information.
// The next pointer connects each image to the next one in the carousel.
// The prev pointer connects each image to the previous one.

class ImageNode {
    constructor(imageUrl) {
        this.imageUrl = imageUrl;
        this.prev = null;
        this.next = null;
    }
}

const image1 = new ImageNode('image1.jpg');
const image2 = new ImageNode('image2.jpg');
const image3 = new ImageNode('image3.jpg');

image1.next = image2;
image2.prev = image1;
image2.next = image3;
image3.prev = image2;

let currentImage = image1;

function displayImage() {
    console.log("Displaying", currentImage.imageUrl);
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
prevImage();