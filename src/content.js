window.onload = function() {
  document.getElementsByName('comment[body]').forEach(commentElement => {
    commentElement.addEventListener('keyup', function() {
      Array.prototype.forEach.call(document.getElementsByClassName('start-review-label'), function(element) {
        element.parentElement.disabled = true;
      });
    });
  });
}
