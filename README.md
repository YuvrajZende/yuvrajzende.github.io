# Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a clean design with dark mode support, smooth animations, and comprehensive sections for showcasing projects, skills, and achievements.

## ✨ Features

- **Modern Design**: Clean, professional layout with dark/light mode support
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth animations and hover effects using Framer Motion
- **Project Showcase**: Display projects with status indicators (Completed, In Progress, Coming Soon)
- **Skills Section**: Visual skills display with glass morphism effects
- **Coding Profiles**: Integration with LeetCode, CodeChef, CodeForces, and GeeksforGeeks
- **Contact Form**: Functional contact form with email integration
- **SEO Optimized**: Meta tags and proper structure for search engines

## 🚀 Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui components
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (ready)

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── AboutSection.tsx
│   ├── ContactForm.tsx
│   ├── ProjectCard.tsx
│   └── ...
├── pages/              # Page components
│   ├── Index.tsx       # Home page
│   ├── About.tsx       # About page
│   ├── Projects.tsx    # Projects page
│   └── Connect.tsx     # Contact page
├── data/               # Portfolio data
│   └── portfolio.ts    # All content and configuration
└── lib/                # Utility functions
```

## 🎯 Key Sections

### Home Page
- Hero section with personal introduction
- Skills showcase with glass morphism
- Education timeline
- Certificates display
- Articles/blog posts

### Projects Page
- Categorized projects (Self Projects, Hackathon, Weekend Vibes)
- Status indicators for each project
- Interactive project cards with links

### About Page
- Detailed personal information
- Coding platform profiles with ratings
- Professional background

### Contact Page
- Multiple contact methods (GitHub, LinkedIn, Twitter, Instagram, Email)
- Functional contact form
- Direct email integration

## 🛠️ Customization

### Adding Projects
Edit `src/data/portfolio.ts`:
```typescript
{
  id: "project-1",
  title: "Project Name",
  description: "Project description",
  image: "/project-images/project.jpg",
  technologies: ["React", "TypeScript"],
  githubUrl: "https://github.com/username/project",
  liveUrl: "https://project-demo.com",
  featured: true,
  category: "self-projects",
  year: 2024,
  status: "completed" // "completed" | "in-progress" | "coming-soon"
}
```

### Updating Personal Info
Edit the `personalInfo` object in `src/data/portfolio.ts`:
```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  subtitle: "Your subtitle",
  location: "Your Location",
  email: "your.email@example.com",
  bio: "Your bio...",
  avatar: "/your-photo.jpg"
};
```

### Adding Skills
Edit the `skills` array in `src/data/portfolio.ts`:
```typescript
{
  name: "Skill Name",
  level: 85, // 1-100
  category: "frontend", // "frontend" | "backend" | "database" | "devops" | "design" | "other"
  icon: "Code", // Lucide icon name
  color: "blue" // Color for the glass box
}
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production
```bash
npm run build
```

## 📦 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Connect GitHub repository
- **GitHub Pages**: Use GitHub Actions
- **Firebase**: Use Firebase Hosting

## 🎨 Customization Guide

### Colors and Theme
- Edit `tailwind.config.ts` for color schemes
- Modify CSS variables in `src/index.css`
- Update theme colors in `src/data/portfolio.ts`

### Adding New Sections
1. Create component in `src/components/`
2. Add to page in `src/pages/`
3. Update navigation if needed

### Contact Form
The contact form uses a mailto fallback. For advanced email functionality:
1. Sign up for EmailJS or similar service
2. Update the form submission logic in `ContactForm.tsx`

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Portfolio**: [your-portfolio-url.com](https://your-portfolio-url.com)
- **Email**: your.email@example.com
- **LinkedIn**: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- **GitHub**: [Your GitHub](https://github.com/yourusername)

---

⭐ Star this repository if you found it helpful!
