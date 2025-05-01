function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const blogPosts = [
    {
      title: "My Cybersecurity Roadmap",
      date: "April 12th, 2025",
      image: "./assets/rohan-ZoXCoH7tja0-unsplash.jpg",
      snippet: "I turned 30 and I'm diving into cybersecurity headfirst. Here's how I plan to build a foundation, earn certs, and land a job in blue team security.",
      url: "https://medium.com/@danieljlepiscopo/my-cybersecurity-roadmap-where-im-starting-and-where-i-m-headed-466ba41d7680"
    },
    {
      title: "Analyzing Network Traffic in Wireshark and tcpdump",
      date: "April 19th, 2025",
      image: "./assets/pexels-tima-miroshnichenko-5380640.jpg",
      snippet: "A technical walkthrough on how to analyze network traffic using Wireshark and tcpdump, highlighting practical tips for packet inspection and threat detection.",
      url: "https://medium.com/@danieljlepiscopo/analyzing-network-traffic-in-wireshark-and-tcpdump-cd96b5f3410a"
    },
    {
      title: "Introduction to Splunk: Collect, Search, and Detect",
      date: "April 30th, 2025",
      image: "./assets/kaur-kristjan-CpPF4W5PB1c-unsplash.jpg",
      snippet: "A beginner-friendly guide to Splunk that covers setup, data ingestion, log searching with SPL, threat detection, and curated resources to help new blue teamers get hands-on quickly.",
      url: "https://medium.com/@danieljlepiscopo/introduction-to-splunk-collect-search-and-detect-940dcd47b555"
    }
  ];
  
  function renderBlogPosts() {
    const blogContainer = document.getElementById('blog-posts');
    blogPosts.forEach(post => {
      const postHTML = `
        <div class="blog-post details-container color-container">
          <div class="article-container">
            <img src="${post.image}" alt="${post.title}" class="blog-post-img" />
          </div>
          <h2 class="experience-sub-title project-title">${post.title}</h2>
          <p class="blog-post-date">Posted on ${post.date}</p>
          <p class="blog-post-snippet">${post.snippet}</p>
          <div class="btn-container">
            <button class="btn btn-color-2 project-btn" onclick="window.open('${post.url}', '_blank')">
              Read on Medium
            </button>
          </div>
        </div>
      `;
      blogContainer.innerHTML += postHTML;
    });
  }
  
  document.addEventListener('DOMContentLoaded', renderBlogPosts);