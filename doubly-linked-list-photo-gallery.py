# Scenario: Browsing a Photo Gallery

# Imagine you're building a simple photo gallery application where users can navigate through photos. A doubly linked list is perfect for this:

# Each photo is a Node in the doubly linked list.
# The data in each node stores information about the photo (filename, caption, etc.).
# The next pointer connects each photo to the next one in the gallery.
# The prev pointer connects each photo to the previous one.

class PhotoNode:
    def __init__(self, filename, caption):
        self.filename = filename
        self.caption = caption
        self.next = None
        self.prev = None

photo1 = PhotoNode("beach.jpg", "Sunny day at the beach")
photo2 = PhotoNode("mountain.jpg", "Beautiful mountain view")
photo3 = PhotoNode("city.jpg", "City skyline at night")

photo1.next = photo2
photo2.prev = photo1
photo2.next = photo3
photo3.prev = photo2

current_photo = photo1

if current_photo.next:
    current_photo = current_photo.next
    print(f"Next: {current_photo.filename} - {current_photo.caption}")

if current_photo.prev:
    current_photo = current_photo.prev
    print(f"Previous: {current_photo.filename} - {current_photo.caption}")