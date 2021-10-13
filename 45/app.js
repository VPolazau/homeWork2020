fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((posts) => console.log(posts))
  .catch((err) => console.log(err));
