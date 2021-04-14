const commentFormHandler = async (event) => {
    event.preventDefault();
  
    
    
    const comment = document.querySelector("textarea [name=comment]").value.trim();

    const post = window.location.toString().split('/') [
        window.location.toString().split('/').length -1
    ]
  
    if (comment) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({comment,post }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to create comment');
      }
    }
  };
  
  document
  .querySelector('.new-comment-form')
  .addEventListener('submit', commentFormHandler);