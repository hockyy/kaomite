// Assume you define an interface or type for your title and channel
interface VideoInfo {
  title: string;
  channel: string;
}

export function handleRenshuu({title, channel}: VideoInfo): void {
  // Set the title and channel
  const titleInput = document.querySelector('input[name="title"]');
  if (titleInput instanceof HTMLInputElement) {
    titleInput.value = `[${channel}] ${title}`;
  }

  // Check the checkbox
  const checkBox = document.getElementById('groupdiv_check');
  if (checkBox instanceof HTMLInputElement) {
    checkBox.checked = true;
  }

  // Set the new group title
  const newGroupTitleInput = document.querySelector('input[name="newgroup_title"]');
  if (newGroupTitleInput instanceof HTMLInputElement) {
    newGroupTitleInput.value = 'Youtube';
  }
}
