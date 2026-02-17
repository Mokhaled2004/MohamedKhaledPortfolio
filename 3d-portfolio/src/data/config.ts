const config = {
  title: "Mohamed Khaled Portfolio",
  description: {
    long: "Explore the portfolio of Mohamed Khaled, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Mohamed, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Naresh",
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
  author: "Mohamed Khaled",
  email: "mokhaled2004@gmail.com",
  site: "",

  // for github stars button
  githubUsername: "Mokhaled2004",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/mohamed-khaled-bayoumi/",
    github: "https://github.com/Mokhaled2004",
  },
};
export { config };
