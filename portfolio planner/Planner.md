# **DevJourney Development Documentation**

## **Project Vision**

**DevJourney** aims to be a personal portfolio website where the developer showcases their technical journey, knowledge, and code snippets. The site will primarily feature a blog section where users can read about different technologies and programming concepts, along with a code snippets section that serves as a reference for common coding tasks and techniques. The focus is on simplicity, usability, and providing value to other developers seeking to learn and grow.

---

## **Menu Bar Options**

The menu bar will contain the following options:

1. **Home**

   - **Content**: A brief introduction about the developer, showcasing key projects and skills. Optionally include a downloadable resume link.

2. **Blog**

   - **Content**: List of blog posts organized by technology or topic. Each blog post will include:
     - Title
     - Date of publication
     - Brief summary or excerpt
     - Link to read the full post
   - Each blog can use a simple, clean layout to enhance readability.

3. **Code Snippets**

   - **Content**: A categorized list of code snippets. Each snippet will include:
     - Title or description of the snippet
     - Language tag (e.g., Python, JavaScript)
     - Code block with syntax highlighting
     - Optionally, a brief explanation or use-case for each snippet.

4. **About**

   - **Content**: A personal bio that describes the developer's journey, interests, and goals in the tech industry. This section can also include links to social media profiles and GitHub repositories.

5. **Contact**
   - **Content**: A simple contact form or an email address where users can reach out for inquiries or collaborations.

---

## **Development Planner Guide**

### **Step 1: Initial Setup**

- **Project Initialization**:
  - Create a new Next.js project using the command:
    ```bash
    npx create-next-app devjourney
    cd devjourney
    ```
- **Tailwind CSS Installation**:
  - Follow the official Tailwind CSS documentation to integrate Tailwind into your Next.js project for styling.

### **Step 2: Create Basic Pages**

- **Home Page**:
  - Set up a welcoming landing page with:
    - A brief introduction.
    - Showcase of key projects (with images and links).
    - Downloadable resume option (if desired).
- **Blog Page**:
  - Create a page that fetches and displays a list of blog posts. Each post should have:
    - Title
    - Date
    - Excerpt
    - Read more link (navigating to the full post).
- **Code Snippets Page**:

  - Set up a page displaying code snippets. Each snippet should include:
    - Title
    - Language tag
    - Code block (use Tailwind for styling).
    - Description or use-case explanation.

- **About Page**:

  - Create an "About" page that provides information about you, your journey, and links to your social media or GitHub.

- **Contact Page**:
  - Create a "Contact" page with a simple form or email address.

### **Step 3: Implement Navigation**

- **Menu Bar**:
  - Create a responsive navigation bar using Tailwind CSS.
  - Ensure links to Home, Blog, Code Snippets, About, and Contact pages are included.

### **Step 4: Blog and Code Snippet Management**

- **Static Files or JSON**:
  - Store blog posts and code snippets in static files or JSON format within the project.
  - Create a structure to organize them (e.g., by technology or category).

### **Step 5: Styling and Theming**

- **Tailwind CSS**:
  - Utilize Tailwind CSS to style all pages, ensuring a consistent look and feel.
- **Light/Dark Mode**:
  - Implement a simple toggle for light/dark mode using Tailwind CSS classes and localStorage for user preference.

### **Step 6: Deployment**

- **Deploying the Site**:
  - Push your code to a GitHub repository.
  - Use Vercel or Netlify for deployment by connecting your GitHub repository.

### **Step 7: Continuous Updates and Improvements**

- **Content Updates**:
  - Regularly add new blog posts and code snippets as you learn and grow.
- **User Feedback**:
  - Consider gathering user feedback to make improvements and add new features based on user suggestions.

---

## **Conclusion**

This development documentation outlines the vision and steps necessary to create **DevJourney**, a simple yet effective portfolio and blog site for developers. By following the outlined steps and utilizing Next.js and Tailwind CSS, you will be able to build a clean, user-friendly website that showcases your journey and shares valuable knowledge with others in the tech community. If you have any questions or need further assistance during development, feel free to reach out!
