const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development in 2024",
    content: `
      <p>The web is evolving rapidly in 2024. Let's explore key trends:</p>
      <h2>AI-assisted Development</h2>
      <p>Tools like GitHub Copilot are helping developers write code faster.</p>
      <ul>
        <li>Real-time code suggestions</li>
        <li>AI-generated tests</li>
      </ul>
    `,
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1470&q=80",
    category: "Technology",
    date: "May 15, 2024",
    readTime: "5 min read",
    author: {
      name: "Alex Johnson",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "Senior Web Developer with 10+ years of experience."
    },
    tags: ["Web", "AI", "Development"]
  },
  {
    id: 2,
    title: "UX Design Principles That Never Change",
    content: `
      <p>Design should always focus on the user.</p>
      <h2>Consistency</h2>
      <p>Maintain a uniform design language across all screens.</p>
    `,
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1528&q=80",
    category: "Design",
    date: "April 28, 2024",
    readTime: "4 min read",
    author: {
      name: "Brooke Lee",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
      bio: "UX Designer passionate about user-first interfaces."
    },
    tags: ["UX", "Design"]
  },
  {
    id: 3,
    title: "Optimizing React Performance in 2024",
    content: `
      <p>React remains one of the most popular frameworks in 2024.</p>
      <h2>Key Tips</h2>
      <ul>
        <li>Use memoization wisely</li>
        <li>Lazy load components</li>
        <li>Avoid unnecessary re-renders</li>
      </ul>
    `,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1470&q=80",
    category: "Development",
    date: "April 10, 2024",
    readTime: "7 min read",
    author: {
      name: "Sara Kim",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      bio: "Frontend Engineer with a love for performance optimization."
    },
    tags: ["React", "Performance", "Optimization"]
  },
  {
    id: 4,
    title: "AI-Powered Design Tools in 2024",
    content: `
      <p>AI is now streamlining the design process like never before.</p>
      <h2>Popular Tools</h2>
      <ul>
        <li>Uizard</li>
        <li>Framer AI</li>
        <li>Figma Plugins</li>
      </ul>
    `,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1470&q=80",
    category: "Design",
    date: "June 2, 2024",
    readTime: "6 min read",
    author: {
      name: "Emily Tran",
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
      bio: "Product Designer exploring the intersection of AI and UX."
    },
    tags: ["AI", "Design", "Tools"]
  },
  {
    id: 5,
    title: "The Rise of WebAssembly in 2024",
    content: `
      <p>WebAssembly is becoming the standard for high-performance web apps.</p>
      <h2>Why It Matters</h2>
      <p>Wasm allows languages like C++, Rust to run on the web efficiently.</p>
    `,
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=1632&q=80",
    category: "Technology",
    date: "May 22, 2024",
    readTime: "8 min read",
    author: {
      name: "Daniel Singh",
      avatar: "https://randomuser.me/api/portraits/men/44.jpg",
      bio: "Tech Lead interested in low-level performance on the web."
    },
    tags: ["WebAssembly", "Performance", "Tech"]
  },
  {
    id: 6,
    title: "Sustainable Web Design: Reducing Digital Carbon Footprints",
    content: `
      <p>Eco-friendly design is more than a trend—it's a responsibility.</p>
      <h2>Best Practices</h2>
      <ul>
        <li>Optimize images</li>
        <li>Use system fonts</li>
        <li>Minimize script usage</li>
      </ul>
    `,
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1469&q=80",
    category: "Design",
    date: "April 5, 2024",
    readTime: "5 min read",
    author: {
      name: "Nina Patel",
      avatar: "https://randomuser.me/api/portraits/women/78.jpg",
      bio: "Green-tech advocate and sustainable web design specialist."
    },
    tags: ["Sustainability", "Design", "Carbon"]
  }
];

export default blogPosts;
