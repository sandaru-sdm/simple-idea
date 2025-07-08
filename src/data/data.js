// src/data/data.js (This file should contain all your data exports)

import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image5 from "../assets/image6.jpg"; // Corrected from image5.jpg as per common pattern
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";
import image11 from "../assets/image11.jpg";
import avatar from "../assets/avatar.png";
import image8 from "../assets/image8.png"; // Assuming image8 is also a local asset

// Helper function for consistent Picsum Photos dummy images
// Using specific IDs to get consistent images across refreshes
const getPlaceholderImage = (id, width = 1200, height = 800) => `https://picsum.photos/id/${id}/${width}/${height}`;
const getSmallPlaceholderImage = (id, width = 600, height = 400) => `https://picsum.photos/id/${id}/${width}/${height}`;

// Placeholder image URLs for categories not covered by local assets
const logoDesign1 = getPlaceholderImage(169); // Using Pexels ID for consistency, but using Picsum now
const logoDesign2 = getPlaceholderImage(326);
const leafletDesign1 = getPlaceholderImage(265);
const posterDesign1 = getPlaceholderImage(196);

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
    // Adding more services as previously discussed, with placeholders
    {
        id: 5,
        title: "Hoarding Boards",
        description: "Eye-catching and durable hoarding boards for maximum outdoor visibility.",
        icon: "bi-building-fill",
        image: getSmallPlaceholderImage(241)
    },
    {
        id: 6,
        title: "Stall Design & Creation",
        description: "Creative and functional exhibition stall designs to make your brand stand out.",
        icon: "bi-shop-window",
        image: getSmallPlaceholderImage(242)
    },
    {
        id: 7,
        title: "Light Board Creations",
        description: "Illuminated signs and light boards that grab attention day and night.",
        icon: "bi-lightbulb-fill",
        image: getSmallPlaceholderImage(243)
    },
    {
        id: 8,
        title: "Vehicle Branding",
        description: "Transform your vehicles into moving billboards with impactful branding.",
        icon: "bi-car-front-fill",
        image: getSmallPlaceholderImage(244)
    },
    {
        id: 9,
        title: "Signage Solutions",
        description: "Comprehensive signage solutions for retail, offices, and industrial spaces.",
        icon: "bi-signpost-fill",
        image: getSmallPlaceholderImage(245)
    },
];

export const portfolioItems = [
    {
        id: 1,
        title: "Urban Coffee Branding",
        category: "Branding",
        image: image3, // Single image property as requested
        description: "A comprehensive branding project for Urban Coffee, covering logo design, packaging, and in-store materials. We focused on a modern yet rustic aesthetic to appeal to their target demographic.",
    },
    {
        id: 2,
        title: "Juice Bar Website",
        category: "Web Design",
        image: image1, // Single image property as requested
        description: "Designed and developed a vibrant and user-friendly website for a local juice bar, featuring online ordering, a gallery, and contact forms. The site is fully responsive and optimized for mobile devices.",
    },
    {
        id: 3,
        title: "Camping Arts",
        category: "Digital Printing",
        image: image2, // Single image property as requested
        description: "A series of large-format digital prints for an outdoor camping gear exhibition. The prints showcased high-resolution wilderness photography and product highlights, designed for maximum visual impact.",
    },
    {
        id: 4,
        title: "Abstract Logo",
        category: "Logo Design",
        image: logoDesign1, // Single image property as requested
        description: "Creation of a unique and memorable abstract logo for a creative startup. The design aimed to convey innovation and flexibility while maintaining a clean, professional appearance.",
    },
    {
        id: 5,
        title: "Corporate Leaflet",
        category: "Leaflet Design",
        image: leafletDesign1, // Single image property as requested
        description: "Designed a concise and informative corporate leaflet for a financial consulting firm. The layout was structured to guide readers through key services and contact information efficiently.",
    },
    {
        id: 6,
        title: "Music Festival Poster",
        category: "Poster Design",
        image: posterDesign1, // Single image property as requested
        description: "Developed an energetic and visually striking poster for an annual music festival. The design incorporated thematic elements and essential event details, optimized for both print and digital promotion.",
    },
    {
        id: 7,
        title: "Tech Company Logo",
        category: "Logo Design",
        image: logoDesign2, // Single image property as requested
        description: "A modern and impactful logo design for a burgeoning technology company. The logo incorporates sleek lines and a futuristic feel to reflect their innovative approach.",
    },
    // Adding more portfolio items to make the portfolio richer, with placeholders
    {
        id: 8,
        title: "E-commerce Website Redesign",
        category: "Web Design",
        image: getPlaceholderImage(425, 600, 400),
        description: "Complete overhaul of an existing e-commerce platform, focusing on improved user experience, modern design, and optimized conversion funnels.",
    },
    {
        id: 9,
        title: "Product Packaging Suite",
        category: "Branding",
        image: getPlaceholderImage(429, 600, 400),
        description: "Designed a cohesive suite of product packaging for a new organic food line, emphasizing eco-friendly materials and eye-catching shelf appeal.",
    },
    {
        id: 10,
        title: "Conference Brochure",
        category: "Digital Printing",
        image: getPlaceholderImage(432, 600, 400),
        description: "High-quality digital print brochure for an international tech conference, featuring detailed session schedules and speaker bios.",
    },
];

export const teamMembers = [
    {
        id: 1,
        name: "Lahiru Gunathilake",
        role: "Creative Director",
        bio: "With over 15 years of experience, Lahiru leads our creative team with vision and passion, ensuring every project exceeds expectations.",
        image: avatar,
    },
    {
        id: 2,
        name: "Sandaru Gunathilake",
        role: "Web Developer",
        bio: "Sandaru specializes in building robust, dynamic, and responsive websites that offer excellent user experiences and cutting-edge functionality.",
        image: avatar,
    },
    {
        id: 3,
        name: "Michael Chen",
        role: "Graphic Designer",
        bio: "Michael combines artistic flair with strategic thinking to create stunning visuals for branding, print, and digital media.",
        image: avatar,
    },
    {
        id: 4,
        name: "Emma Rodriguez",
        role: "Print Specialist",
        bio: "Emma ensures the highest quality and precision for all our print projects, overseeing everything from material selection to final production.",
        image: avatar,
    },
];

export const testimonials = [
    {
        id: 1,
        text: "Cham Advertising transformed our brand identity. Our new logo and branding materials have received countless compliments and truly resonate with our customers!",
        author: "Jane Smith, CEO of Bright Solutions",
    },
    {
        id: 2,
        text: "Working with Cham Advertising was an absolute pleasure. They truly understood our vision for the digital campaign and delivered exceptional results ahead of schedule.",
        author: "Mark Johnson, Marketing Director at TechPro",
    },
    {
        id: 3,
        text: "The exhibition stall design was a game-changer for us. It attracted so much attention and significantly increased our leads at the trade show. Highly recommend!",
        author: "Lisa Chen, Founder of Eco Essentials",
    },
];

// If image8 is used in Home.jsx, it needs to be exported from here
export { default as image8 } from "../assets/image8.png";