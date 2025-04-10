document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggle-comments');
    const commentWrapper = document.querySelector('.comment-wrapper');
  
    toggleBtn.addEventListener('click', () => {
      const isHidden = commentWrapper.hidden;
      commentWrapper.hidden = !isHidden;
      toggleBtn.textContent = isHidden ? 'Hide comments' : 'Show comments';
  });
  });