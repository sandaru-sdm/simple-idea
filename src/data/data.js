import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";
// import image8 from "../assets/image8.png";
// import image9 from "../assets/image9.png";
import image11 from "../assets/image11.jpg";
import avatar from "../assets/avatar.png";

// Recommended image sizes (Width x Height)
// image1: 1200x800
// image2: 1200x800
// image3: 1200x800
// image5: 800x600
// image6: 800x600
// image7: 800x600
// image8: 1200x900
// image9: 1200x800
// image11: 800x600
// avatar: 400x400

export const services = [
  {
    id: 1,
    title: "Digital Printing",
    description: "High-quality digital printing for business cards, banners, and more.",
    icon: "bi bi-printer-fill",
    image: image7,
  },
  {
    id: 2,
    title: "Branding",
    description: "Comprehensive branding services to build a strong brand identity.",
    icon: "bi bi-bag-fill",
    image: image5,
  },
  {
    id: 3,
    title: "Logo Design",
    description: "Custom logo designs that capture your brand's essence.",
    icon: "bi bi-brush-fill",
    image: image6,
  },
  {
    id: 4,
    title: "Web Design",
    description: "Modern and responsive web design services for a strong online presence.",
    icon: "bi bi-laptop-fill",
    image: image11,
  },
];

export const portfolioItems = [
  {
    id: 1,
    title: "Urban Coffee Branding",
    category: "Branding",
    image: image3,
  },
  {
    id: 2,
    title: "Juice Bar Website",
    category: "Web Design",
    image: image1,
  },
  {
    id: 3,
    title: "Camping Arts",
    category: "Digital Printing",
    image: image2,
  },
];

export const teamMembers = [
  {
    id: 1,
    name: "Lahiru Gunathilake",
    role: "Creative Director",
    bio: "With over 15 years of experience, Alex leads our creative team with vision.",
    image: avatar,
  },
  {
    id: 2,
    name: "Sandaru Gunathilake",
    role: "Web Developer",
    bio: "Sandaru creates dynamic and responsive websites with excellent user experiences.",
    image: avatar,
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Web Designer",
    bio: "Michael combines technical expertise with design sensibility for stunning websites.",
    image: avatar,
  },
  {
    id: 4,
    name: "Emma Rodriguez",
    role: "Print Specialist",
    bio: "Emma ensures the highest quality for all our print projects with her attention to detail.",
    image: avatar,
  },
];

export const testimonials = [
  {
    id: 1,
    text: "Simple Idea transformed our brand identity. Our new logo has received countless compliments!",
    author: "Jane Smith, CEO of Bright Solutions",
  },
  {
    id: 2,
    text: "Working with Simple Idea was a breeze. They understood our vision and delivered exceptional designs.",
    author: "Mark Johnson, Marketing Director at TechPro",
  },
  {
    id: 3,
    text: "The packaging design helped our product stand out and increased our sales by 40%!",
    author: "Lisa Chen, Founder of Eco Essentials",
  },
];