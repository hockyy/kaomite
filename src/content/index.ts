// This function logs the YouTube video title and channel name to the console
function getVideoTitleAndChannel() {
  try {
    // Get the video title element by its class
    const titleElement = document.querySelector('h1.style-scope.ytd-watch-metadata yt-formatted-string');

    // Get the channel name element by its class and ID
    const channelElement = document.querySelector('ytd-channel-name#channel-name a');

    if (titleElement && channelElement) {
      const videoTitle = titleElement.textContent.trim();
      const channelName = channelElement.textContent.trim();
      console.log(chrome.storage)
      // Store in Chrome's local storage
      chrome.storage.local.set({'latestVideoTitle': videoTitle, 'latestChannelName': channelName}, () => {
        console.log('Video title and channel name saved.');
      });
    }
  } catch (e) {
    console.error("An error occurred:", e);
  }
}

// Run the function to log the video title and channel name after a 5-second delay
setTimeout(getVideoTitleAndChannel, 2000);

export {}
