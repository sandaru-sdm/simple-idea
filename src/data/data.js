import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";
import image11 from "../assets/image11.jpg";
import avatar from "../assets/avatar.png";

// Change this dummy images later
const logoDesign1 = "https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const logoDesign2 = "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const leafletDesign1 = "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const posterDesign1 = "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";


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
    {
        id: 4,
        title: "Abstract Logo",
        category: "Logo Design",
        image: logoDesign1,
    },
    {
        id: 5,
        title: "Corporate Leaflet",
        category: "Leaflet Design",
        image: leafletDesign1,
    },
    {
        id: 6,
        title: "Music Festival Poster",
        category: "Poster Design",
        image: posterDesign1,
    },
    {
        id: 7,
        title: "Tech Company Logo",
        category: "Logo Design",
        image: logoDesign2,
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