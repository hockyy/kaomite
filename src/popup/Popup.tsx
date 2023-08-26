import {useState, useEffect} from 'react'
import './Popup.css'

function App() {
  const [crx, setCrx] = useState('create-chrome-ext');
  const [latestVideoTitle, setLatestVideoTitle] = useState('');
  const [latestChannelName, setLatestChannelName] = useState('');

  useEffect(() => {
    chrome.storage.local.get(['latestVideoTitle', 'latestChannelName'], (result) => {
      setLatestVideoTitle(result.latestVideoTitle || 'Not available');
      setLatestChannelName(result.latestChannelName || 'Not available');
    });
  }, []);

  const openNewTab = () => {
    chrome.tabs.create({url: "https://www.renshuu.org/index.php?page=custom/list_edit&booktype=vocab&action=new"});
  };

  return (
    <main>
      <h3>Popup Page!</h3>
      <h6>Latest Video Title: {latestVideoTitle}</h6>
      <h6>Latest Channel Name: {latestChannelName}</h6>
      <button onClick={openNewTab}>Open New Tab</button>
      <h6>v 0.0.0</h6>
      <a href="https://www.npmjs.com/package/create-chrome-ext" target="_blank" rel="noopener noreferrer">
        Powered by {crx}
      </a>
    </main>
  )
}

export default App;
