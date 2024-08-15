# Scenario: Managing a Playlist

# Imagine you're building a music player app, and you need to keep track of the songs in a playlist. A linked list is a great way to represent this:

# Each song is a Node in the linked list.
# The data in each node stores information about the song (title, artist, duration, etc.).
# The next pointer connects each song to the next one in the playlist.


class SongNode:
    def __init__(self, title, artist, duration):
        self.title = title
        self.artist = artist
        self.duration = duration
        self.next = None

song1 = SongNode("Bohemian Rhapsody", "Queen", 6)
song2 = SongNode("Stairway to Heaven", "Led Zeppelin", 8)
song3 = SongNode("Riders on the Storm", "The Doors", 7)

song1.next = song2
song2.next = song3

current_song = song1
while current_song is not None:
    print(f"{current_song.title} by {current_song.artist}")
    current_song = current_song.next