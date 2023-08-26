// Check the hostname and call the appropriate function
import {handleYouTube} from "./pageHandlers/youtubeHandler";
import {handleRenshuu} from "./pageHandlers/renshuuHandler";

if (window.location.hostname === "www.youtube.com") {
  handleYouTube();
} else if (window.location.href.includes("index.php?page=custom/list_edit&booktype=vocab&action=new")) {
  chrome.storage.local.get(['latestVideoTitle', 'latestChannelName'], (result) => {
    const title = result.latestVideoTitle;
    const channel = result.latestChannelName;

    if (title && channel) {
      handleRenshuu({title, channel});
    }
  });
}

export {}
