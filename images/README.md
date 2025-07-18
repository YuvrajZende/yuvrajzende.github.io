# Images Folder Structure

This folder contains all the images used in your portfolio website, organized by category for easy management.

## Folder Structure

```
images/
├── profile/          # Profile photos and avatars
├── projects/         # Project screenshots and thumbnails
├── certificates/     # Certificate images and badges
├── articles/         # Article thumbnails and featured images
└── education/        # College logos, graduation photos, etc.
```

## What Goes Where

### 📸 `profile/`
- Your profile photo (e.g., `profile-photo.jpg`)
- Avatar images
- Professional headshots

**Current reference:** `/profile-photo.jpg` in `personalInfo.avatar`

### 💼 `projects/`
- Project screenshots
- Application thumbnails
- Demo images

**Current references:**
- `/project-images/ecommerce.jpg`
- `/project-images/taskapp.jpg`
- `/project-images/portfolio.jpg`
- `/project-images/health-ai.jpg`
- `/project-images/smart-city.jpg`
- `/project-images/sanskrit.jpg`
- `/project-images/recipe-finder.jpg`
- `/project-images/pomodoro.jpg`

### 🏆 `certificates/`
- Certificate images
- Badge images
- Achievement photos

**Current references:**
- `/certificates/aws-cert.jpg`
- `/certificates/gcp-cert.jpg`
- `/certificates/react-cert.jpg`

### 📰 `articles/`
- Article featured images
- Blog post thumbnails

**Current references:**
- `/assets/database-article.jpg`
- `/assets/education-article.jpg`

### 🎓 `education/`
- College/university logos
- Graduation photos
- Institution images

## File Naming Convention

Use descriptive, lowercase names with hyphens:
- ✅ `profile-photo.jpg`
- ✅ `ecommerce-project.jpg`
- ✅ `aws-solutions-architect-cert.jpg`
- ❌ `Profile Photo.jpg`
- ❌ `ecommerce_project.jpg`

## Supported Formats

- **Images:** `.jpg`, `.jpeg`, `.png`, `.webp`
- **Icons:** `.svg`
- **Recommended:** Use `.webp` for better performance, `.jpg` for photos, `.png` for graphics with transparency

## Usage in Code

Images in the `public` folder are served from the root path. For example:
- `public/images/profile/photo.jpg` → `/images/profile/photo.jpg`
- `public/images/projects/ecommerce.jpg` → `/images/projects/ecommerce.jpg`

## Next Steps

1. **Move existing images:** If you have images in other locations, move them to the appropriate folders
2. **Update references:** Update the image paths in `src/data/portfolio.ts` to match the new structure
3. **Add your images:** Place your actual images in the corresponding folders
4. **Optimize:** Consider compressing images for better performance

## Example Image Paths

After organizing, your image references should look like:
```typescript
// Profile
avatar: "/images/profile/profile-photo.jpg"

// Projects
image: "/images/projects/ecommerce.jpg"

// Certificates
image: "/images/certificates/aws-cert.jpg"

// Articles
image: "/images/articles/database-article.jpg"

// Education
image: "/images/education/college-logo.png"
``` 