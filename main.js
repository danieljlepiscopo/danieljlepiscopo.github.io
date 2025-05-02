// toggleMenu for Mobile
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Fetching blog data from Medium using RSS feed via rss2json API
async function fetchRSS() {
  const rssUrl = 'https://medium.com/feed/@danieljlepiscopo';
  const apiKey = "tdpcptwobb0tsyrt5esqweq18ndspvknrpnfu4ta";
  const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}&api_key=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
    const data = await response.json();

    if (data.status !== 'ok') throw new Error(`API error: ${data.message}`);
    const blogPosts = data.items.slice(0, 3).reverse().map(item => {
      // Extract first image from content, or use a default
      const imageMatch = item.content.match(/<img.*?src=["'](.*?)["']/);
      const image = imageMatch ? imageMatch[1] : "./assets/default-blog-image.jpg";

      return {
        title: item.title || "Untitled",
        date: new Date(item.pubDate).toDateString(),
        link: item.link || "#",
        snippet: stripHTML(item.description).substring(0, 200) + "...",
        image
      };
    });

// We'll populate the blog with the renderBlogPosts(), throw an error if they're not populating
    renderBlogPosts(blogPosts);
  } catch (error) {
    console.error("❌ Failed to fetch or parse blog posts:", error);
    displayFeedError();
  }
}

// Convert the extracted blog data into HTML and inject it into the page
function renderBlogPosts(posts) {
  const blogContainer = document.getElementById("blog-posts");
  blogContainer.innerHTML = "";

  posts.forEach(post => {
    const postHTML = `
      <div class="blog-post details-container color-container">
        <div class="article-container">
          <img src="${post.image}" alt="${post.title}" class="blog-post-img" />
        </div>
        <h2 class="experience-sub-title project-title">${post.title}</h2>
        <p class="blog-post-date">Posted on ${post.date}</p>
        <p class="blog-post-snippet">${post.snippet}</p>
        <div class="btn-container">
          <button class="btn btn-color-2 project-btn" onclick="window.open('${post.link}', '_blank')">
            Read on Medium
          </button>
        </div>
      </div>
    `;
    blogContainer.innerHTML += postHTML;
  });
}

// Strip out any HTML tags from the blog snippet to get clean text
function stripHTML(html) {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;
  return tempDiv.textContent || tempDiv.innerText || "";
}

// Display fallback message if fetching the RSS feed fails
function displayFeedError() {
  const blogContainer = document.getElementById("blog-posts");
  blogContainer.innerHTML = `
    <div class="details-container color-container blog-post">
      <p class="blog-post-snippet">⚠️ Unable to load blog posts at this time. Please check back later.</p>
    </div>
  `;
}

// Start everything once the page is fully loaded
document.addEventListener('DOMContentLoaded', fetchRSS);