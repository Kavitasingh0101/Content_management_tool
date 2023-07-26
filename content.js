const blogForm = document.getElementById('blogForm');
const postList = document.getElementById('postList');

// Function to display all blog posts
function displayPosts(posts) {
  postList.innerHTML = '';
  posts.forEach((post) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.content}</p>
    `;
    postList.appendChild(listItem);
  });
}

// Sample initial data (in a real app, you would fetch this from the server or a database)
let blogPosts = [
  { title: 'First Post', content: 'This is the content of the first post.' },
  { title: 'Second Post', content: 'This is the content of the second post.' },
];

// Display the initial blog posts
displayPosts(blogPosts);

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();

  const title = event.target.title.value;
  const content = event.target.content.value;

  // Add the new post to the data
  blogPosts.push({ title, content });

  // Display the updated list of blog posts
  displayPosts(blogPosts);

  // Reset the form
  event.target.reset();
}

// Attach event listener to the form
blogForm.addEventListener('submit', handleFormSubmit);
