# FRONTEND DEVELOPMENT PRACTICAL DOCUMENTATION

## Project: Personal Developer Portfolio

**Developer:** Favour Atsulighan  
**Project Type:** Personal Portfolio Website  
**Technology Stack:** React, JavaScript, Tailwind CSS, HTML  
**Development Environment:** Visual Studio Code  
**Build Tool:** Vite

---

## 1. Project Setup and Environment Configuration

### Objective
To create and configure a React development environment for building a personal portfolio website.

### Activities
- Created a React project using Vite.
- Installed the required project dependencies.
- Opened the project in Visual Studio Code.
- Started the development server.
- Configured Tailwind CSS v4 for styling.
- Confirmed that the application was running in the browser.

### Commands Used

```bash
npm.cmd create vite@latest my-portfolio -- --template react

cd my-portfolio

npm.cmd install

npm.cmd run dev
```

### Tailwind CSS Configuration

In `src/index.css`:

```css
@import "tailwindcss";
```

### What I Learned
I learned how to create a React project using Vite, install dependencies, run a development server, and configure Tailwind CSS.

---

## 2. Building the Hero Section

### Objective
To create the introductory section of the portfolio website.

### Activities
Created a hero section containing:
- A personal introduction.
- My name.
- My professional title.
- A short description of my work.
- Two navigation links: View My Projects and Contact Me.

### Code Concepts Used

```jsx
<div className="min-h-screen bg-gray-900 text-white">
```

```jsx
<main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
```

### What I Learned
- `min-h-screen` sets the minimum height of an element to the screen height.
- `bg-gray-900` sets the background colour.
- `flex` activates Flexbox.
- `flex-col` arranges elements vertically.
- `items-center` aligns items horizontally along the cross axis.
- `justify-center` aligns items along the main axis.
- `max-w-xl` limits the maximum width of content.

I also learned about semantic HTML and the purpose of the `<main>` element.

---

## 3. Creating the Navigation Bar

### Objective
To create a navigation bar that allows visitors to access different sections of the portfolio.

### Activities
Created a navigation bar containing:
- My portfolio brand name.
- About link.
- Skills link.
- Projects link.
- Contact link.

### Code Concepts Used

```jsx
<nav className="flex items-center justify-between px-8 py-6 text-white">
```

### What I Learned
- `<nav>` represents a section containing navigation links.
- `justify-between` distributes elements with space between them.
- `px-8` adds horizontal padding.
- `py-6` adds vertical padding.
- `<a>` creates a hyperlink.

I also learned that navigation links can connect to sections within the same webpage using HTML IDs.

---

## 4. Making the Navigation Responsive

### Objective
To make the navigation adapt to different screen sizes.

### Code Used

```jsx
<div className="hidden gap-6 sm:flex">
```

### What I Learned
- `hidden` hides an element by default.
- `sm:flex` displays the element as a flex container at the `sm` breakpoint and above.
- `gap-6` creates spacing between items.
- Responsive breakpoints allow a website to adapt to different screen sizes.

I learned that Tailwind CSS uses a mobile-first responsive design approach.

---

## 5. Creating the About Section

### Objective
To introduce myself and explain my interests as a frontend developer.

### Activities
Created an About section containing:
- An About Me heading.
- A short professional introduction.
- A description of my frontend development interests.

### Code Concepts Used

```jsx
<section id="about" className="px-6 py-20">
```

### What I Learned
- `<section>` groups related content.
- `id="about"` uniquely identifies the section.
- `mx-auto` centres an element horizontally when space is available.
- `max-w-3xl` limits the maximum width.
- `text-center` centres text.
- `leading-8` controls line spacing.

I also learned how an HTML ID connects to a navigation link through a fragment identifier.

---

## 6. Creating the Skills Section

### Objective
To display the technologies and tools I am learning and using.

### Skills Displayed
- HTML
- CSS
- JavaScript
- React
- Tailwind CSS
- Git and GitHub

### Code Concepts Used

```jsx
<div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
```

### What I Learned
- `grid` activates CSS Grid.
- `grid-cols-2` creates two columns by default.
- `sm:grid-cols-3` changes the layout to three columns at the `sm` breakpoint and above.
- `gap-4` creates spacing between grid items.

I learned how CSS Grid and responsive breakpoints help create flexible layouts.

---

## 7. Creating the Projects Section

### Objective
To showcase projects and demonstrate my practical development experience.

### Projects Displayed
1. Student Resources Hub.
2. Personal Portfolio.

### Code Concepts Used

```jsx
<div className="mt-10 grid gap-6 sm:grid-cols-2">
```

```jsx
<div className="rounded-xl bg-gray-800 p-6">
```

### What I Learned
- `rounded-xl` creates rounded corners.
- `bg-gray-800` sets the background colour.
- `p-6` adds internal spacing (padding).
- `gap-6` creates space between items.
- `sm:grid-cols-2` creates two columns on wider screens.

I also learned the difference between padding and gap.

---

## 8. Creating the Contact Section

### Objective
To provide visitors with a way to contact me.

### Activities
Created a contact section containing:
- A heading inviting visitors to work with me.
- A short contact message.
- An email link.

### Code Concepts Used

```jsx
<a
  href="mailto:your-email@example.com"
  className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3"
>
  Send Me an Email
</a>
```

### What I Learned
- `mailto:` creates a link that opens the visitor's default email application.
- `inline-block` combines inline and block display behaviour.
- `max-w-2xl` limits the content width.
- Contact links can provide direct communication between website visitors and the developer.

---

## 9. Implementing Smooth Scrolling

### Objective
To improve navigation by making movement between sections smoother.

### CSS Used

In `src/index.css`:

```css
@import "tailwindcss";

html {
  scroll-behavior: smooth;
}
```

### What I Learned
- `html` selects the root HTML element.
- `scroll-behavior` controls the scrolling behaviour of the page.
- `smooth` enables smooth scrolling instead of an instant jump.

I learned how a small CSS property can improve the user experience of a website.

---

## 10. Making the Hero Buttons Functional

### Objective
To make the hero section buttons navigate visitors to the appropriate portfolio sections.

### Activities
Changed the View My Projects and Contact Me elements from buttons to anchor links.

### Code Used

For the Projects link:

```jsx
<a href="#projects">
  View My Projects
</a>
```

For the Contact link:

```jsx
<a href="#contact">
  Contact Me
</a>
```

### What I Learned
- `<a>` is used for navigation.
- `<button>` is used for actions.
- `href="#projects"` connects to the section with `id="projects"`.
- `href="#contact"` connects to the section with `id="contact"`.

I learned the importance of selecting the appropriate HTML element based on its purpose.

---

## General Knowledge and Skills Acquired

Through these practical activities, I have gained experience in:

1. Creating React applications with Vite.
2. Configuring Tailwind CSS.
3. Writing JSX.
4. Using semantic HTML elements.
5. Building layouts with Flexbox and CSS Grid.
6. Applying responsive design.
7. Creating reusable styling patterns with Tailwind utility classes.
8. Connecting navigation links to page sections.
9. Improving user experience through smooth scrolling.
10. Understanding the difference between navigation elements and action buttons.

## Conclusion

The first ten steps of this practical project introduced me to the process of building a personal portfolio website using React and Tailwind CSS. I gained practical experience in structuring webpage content, styling components, creating responsive layouts, and implementing basic navigation functionality.

The project has also helped me connect frontend development concepts with their practical applications while improving my understanding of how modern websites are constructed.




