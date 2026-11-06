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

---

## 11. Improving Navigation Appearance with Tailwind CSS

### Objective
To improve the visual appearance of the portfolio navigation bar by adding hover effects, colour styling, and smooth transitions to navigation links.

### Activities
Updated the navigation links to improve their appearance and interaction.

Applied:
- A light grey text colour to navigation links.
- A blue hover colour when users move their mouse over a link.
- Smooth colour transitions when hovering over navigation links.

### Code Used

```jsx
<div className="hidden gap-6 text-gray-300 sm:flex">

  <a href="#about" className="transition-colors hover:text-blue-400">
    About
  </a>

  <a href="#skills" className="transition-colors hover:text-blue-400">
    Skills
  </a>

  <a href="#projects" className="transition-colors hover:text-blue-400">
    Projects
  </a>

  <a href="#contact" className="transition-colors hover:text-blue-400">
    Contact
  </a>

</div>
```

### What I Learned

1. `text-gray-300`: Sets the default text colour of the navigation links.
2. `hover:text-blue-400`: Changes the text colour when a user hovers over a link.
3. `transition-colors`: Creates a smooth transition when the text colour changes.
4. `hidden`: Hides the navigation links by default.
5. `sm:flex`: Displays the navigation links as a flex container at the small breakpoint and above.
6. `gap-6`: Creates spacing between navigation links.

### Technical Knowledge Acquired

I learned about CSS pseudo-classes, particularly the `:hover` pseudo-class, which allows developers to apply styles when users interact with an element using a pointing device.

I also learned how CSS transitions improve the visual feedback and user experience of interactive website elements.

### Practical Outcome

The navigation bar became more visually appealing and interactive. Visitors can now see a colour change when hovering over the navigation links, making the interface more responsive to user interaction.

### Conclusion

This activity improved my understanding of interactive styling with Tailwind CSS and how hover effects and transitions can be used to create a better user experience.

---

## 12. Creating the Footer Section

### Objective
To create a footer at the bottom of the portfolio website to display copyright information and acknowledge the technologies used in building the website.

### Activities
Created a footer section containing:
- Copyright information.
- Developer's name.
- A statement identifying the technologies used to build the portfolio.

### Code Used

```jsx
<footer className="border-t border-gray-700 px-6 py-8 text-center">

  <p className="text-gray-400">
    © 2026 Favour Atsulighan. All rights reserved.
  </p>

  <p className="mt-2 text-sm text-gray-500">
    Built with React and Tailwind CSS.
  </p>

</footer>
```

### What I Learned

1. `<footer>` is a semantic HTML element used to represent footer content for a webpage or section.
2. `border-t` adds a border to the top of the footer.
3. `border-gray-700` sets the border colour.
4. `px-6` adds horizontal padding.
5. `py-8` adds vertical padding.
6. `text-center` aligns the text to the centre.
7. `mt-2` adds margin above the second paragraph.
8. `text-sm` reduces the text size.
9. `text-gray-400` and `text-gray-500` apply different shades of grey to the text.

### Technical Knowledge Acquired

I learned about semantic HTML and the importance of using appropriate HTML elements to describe the purpose of different sections of a webpage.

I also gained more experience using Tailwind CSS utility classes to control spacing, borders, text alignment, and typography.

### Practical Outcome

The portfolio now has a footer at the bottom of the webpage. It displays copyright information and identifies React and Tailwind CSS as the technologies used to build the website.

### Conclusion

Creating the footer completed another important part of the portfolio structure. This activity improved my understanding of semantic HTML and the use of Tailwind CSS for styling webpage sections.

### 13. Implementing a Mobile Navigation Menu

### Objective

To improve mobile navigation by allowing visitors to open and close navigation links on smaller screens.

### Activities

Imported React's useState Hook.

Created a state variable to track whether the mobile menu is open or closed.

Added a menu button with an onClick event handler.

Implemented conditional rendering to display the mobile navigation links.

Added click handlers to close the menu after selecting a navigation link.

Code Used

### Importing useState:

import { useState } from 'react'

### Creating the menu state:

const [menuOpen, setMenuOpen] = useState(false)

### Creating the menu button:

<button
  onClick={() => setMenuOpen(!menuOpen)}
  className="sm:hidden rounded-lg border border-gray-600 px-4 py-2"
>
  Menu
</button>

### Displaying the mobile navigation links:

{menuOpen && (
  <div className="flex flex-col gap-4 px-8 pb-6 sm:hidden">

    <a href="#about" onClick={() => setMenuOpen(false)}>About</a>

    <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>

    <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>

    <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

  </div>
)}

### What I Learned

useState is a React Hook used to manage component state.

menuOpen stores the current state of the mobile navigation menu.

setMenuOpen updates the state.

false represents a closed menu, while true represents an open menu.

onClick handles click events.

&& supports conditional rendering in JSX.

sm:hidden hides the mobile menu at the sm breakpoint and above.

sm:hidden on the menu button makes it visible only below the sm breakpoint.

Understanding State Toggling

### The expression:

setMenuOpen(!menuOpen)

toggles the menu state.

When menuOpen is false, the new state becomes true.

When menuOpen is true, the new state becomes false.

This allows the same button to open and close the menu.

### Technical Knowledge Acquired

I gained practical experience with React state management, event handling, conditional rendering, and responsive navigation.

### Practical Outcome

The portfolio now has a mobile navigation menu that visitors can open and close. Selecting a navigation link closes the menu and takes the visitor to the selected section.

### Conclusion

This activity improved my understanding of React Hooks and interactive user interfaces. It also demonstrated how React state can be combined with Tailwind CSS responsive utilities to create a mobile-friendly navigation experience.

General Knowledge and Skills Acquired

Through these thirteen practical activities, I gained experience in:

Creating React applications with Vite.

Configuring Tailwind CSS.

Writing JSX.

Using semantic HTML elements.

Building layouts with Flexbox and CSS Grid.

Applying responsive design.

Creating webpage sections.

Connecting navigation links to page sections.

Implementing smooth scrolling.

Applying hover effects and transitions.

Managing React state with useState.

Handling click events.

Implementing conditional rendering.

Building a responsive mobile navigation menu.

### Overall Conclusion

The first thirteen stages of this practical project introduced me to the process of building a personal portfolio website using React and Tailwind CSS.

I gained practical experience in structuring webpage content, styling components, creating responsive layouts, implementing navigation, and managing interactive features with React.

The project has helped me connect frontend development concepts with practical applications while improving my understanding of how modern websites are constructed.

--- 

### 14. Improving Mobile Navigation Accessibility

### Objective

To improve the accessibility of the mobile navigation menu by adding ARIA attributes that provide additional information to assistive technologies, such as screen readers.

### Activities

- Added the `aria-expanded` attribute to the mobile menu button.
- Added the `aria-controls` attribute to identify the mobile navigation container.
- Assigned a unique ID to the mobile navigation container.
- Tested the menu to ensure it continued opening and closing correctly.

### Code Used

**Updated mobile menu button:**

```jsx
<button
  onClick={() => setMenuOpen(!menuOpen)}
  aria-expanded={menuOpen}
  aria-controls="mobile-menu"
  className="sm:hidden rounded-lg border border-gray-600 px-4 py-2"
>
  Menu
</button>
```

**Updated mobile navigation container:**

```jsx
{menuOpen && (
  <div
    id="mobile-menu"
    className="flex flex-col gap-4 px-8 pb-6 sm:hidden"
  >
    {/* Existing navigation links */}
  </div>
)}
```

### What I Learned

1. `aria-expanded` communicates whether an interactive element is expanded or collapsed.
2. `aria-controls` identifies the element controlled by an interactive element.
3. `id="mobile-menu"` provides a unique identifier for the mobile navigation container.
4. ARIA attributes provide additional accessibility information to assistive technologies.

### Technical Knowledge Acquired

I learned about ARIA (Accessible Rich Internet Applications) and how accessibility attributes improve the experience of people who use assistive technologies.

I also learned that accessibility is an important consideration when developing interactive user interfaces.

### Practical Outcome

The mobile navigation button now communicates its expanded or collapsed state through `aria-expanded` and identifies the controlled navigation container through `aria-controls`.

The mobile menu continues to open and close as expected.

### Conclusion

This activity improved my understanding of web accessibility and the use of ARIA attributes in React applications. It demonstrated how accessibility considerations can be integrated into interactive frontend components.





