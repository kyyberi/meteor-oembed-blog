import Oembed from 'oembed-all';

Template.postItem.onRendered(function () {
  // Get reference to template instance
  const instance = this;

  // Get Post ID from template instance
  const postId = instance.data.post._id;

  // Select post DOM element
  const postElement = document.querySelector(`#${postId}`);

  // Render post element OEmbed content
  const oembed = new Oembed(postElement);
});