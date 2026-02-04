const config = {
  title: "Jason Gomes | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Naresh, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Naresh, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Jason",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Jason Gomes",
  email: "business.jasongomes@gmail.com",
  site: "https://my-portfolio-eight-plum-82.vercel.app/",

  // for github stars button
  githubUsername: "jasonxgomes",
  githubRepo: "my-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/",
    linkedin: "https://www.linkedin.com/in/jasonxgomes/",
    instagram:"https://www.instagram.com/jasonxgomes/?hl=en",
    facebook: "https://www.facebook.com/jasonxgomes/",
    github: "https://github.com/jasonxgomes",
  },
};
export { config };
