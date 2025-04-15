// Sample blog posts data
let posts = [
    { title: "First Post", content: "This is the first blog post.", date: "2025-04-14" },
    { title: "Tech Trends", content: "Exploring the latest in tech.", date: "2025-04-13" },
    { title: "Coding Tips", content: "Best practices for developers.", date: "2025-04-12" }
];

// Function to render posts
function renderPosts() {
    const postGrid = document.getElementById('postGrid');
    postGrid.innerHTML = '';

    posts.forEach(post => {
        const postCard = document.createElement('div');
        postCard.className = 'post-card';
        postCard.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <span>Posted on: ${post.date}</span>
        `;
        postGrid.appendChild(postCard);
    });
}

// Function to add a new post
function addNewPost() {
    const newPost = {
        title: `New Post ${posts.length + 1}`,
        content: "This is a new blog post.",
        date: new Date().toISOString().split('T')[0]
    };
    posts.push(newPost);
    renderPosts();
}

// Function to toggle sidebar
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
}

// Initial render
renderPosts();