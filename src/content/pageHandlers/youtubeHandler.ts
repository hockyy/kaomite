import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

export function handleYouTube() {
  // Your logic for handling YouTube here
  // ...
  function getVideoTitleAndChannel() {
    try {
      // Get the video title element by its class
      const titleElement = document.querySelector('h1.style-scope.ytd-watch-metadata yt-formatted-string');

      // Get the channel name element by its class and ID
      const channelElement = document.querySelector('ytd-channel-name#channel-name a');

      if (titleElement && channelElement) {
        const videoTitle = titleElement.textContent.trim();
        const channelName = channelElement.textContent.trim();
        // Store in Chrome's local storage
        chrome.storage.local.set({'latestVideoTitle': videoTitle, 'latestChannelName': channelName}, () => {
          console.log('Video title and channel name saved.');
        });
      } else {
        throw new Error("no youtube element found");
      }
    } catch (e) {
      console.error("An error occurred:", e);
      setTimeout(getVideoTitleAndChannel, 100);
    }
  }


  // Run the function to log the video title and channel name after a 2-second delay
  setTimeout(getVideoTitleAndChannel, 100);

}
