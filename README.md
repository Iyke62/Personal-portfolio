# Personal Portfolio – Stage 1 Project  
A multi-page personal website featuring an **About Me** page and a **Contact Us** page with form validation, accessibility, and responsiveness.  

---

## Overview
This project builds upon the **Stage 0 single-card task**, expanding it into a multi-page structure. It demonstrates strong use of **semantic HTML**, **accessible form validation**, and **responsive web design** principles.

---

## Live Demo
[🔗 View Live Site](#) *(replace this with your hosted link, e.g., GitHub Pages URL)*

---

## Pages Included

### 1. 🧍‍♂️ About Me Page
**File:** `about.html`  
A reflective page that showcases personal insights and progress as a front-end developer.

**Sections:**
- **Bio** — `data-testid="test-about-bio"`
- **Goals in This Program** — `data-testid="test-about-goals"`
- **Areas of Low Confidence** — `data-testid="test-about-confidence"`
- **Note to Future Self** — `data-testid="test-about-future-note"`
- **Extra Thoughts** — `data-testid="test-about-extra"`

**Features:**
- Semantic structure with `<main>` and `<section>` tags.
- Clear headings and readable content.
- Accessible markup using `aria-labelledby` attributes.

---

### 2. ✉️ Contact Us Page
**File:** `contact.html`  
A simple and accessible contact form that validates user input before submission.

**Form Fields & Test IDs:**
| Field | Test ID |
|--------|----------|
| Full Name | `test-contact-name` |
| Email | `test-contact-email` |
| Subject | `test-contact-subject` |
| Message | `test-contact-message` |
| Submit Button | `test-contact-submit` |
| Success Message | `test-contact-success` |

**Validation Rules:**
- All fields are required.  
- Email must be valid (`name@example.com`).  
- Message must contain **at least 10 characters**.  
- Displays success message after valid submission.  
- Clears form automatically and hides success message after 3 seconds.

**Accessibility Features:**
- Each input has a `<label>` linked via `for` attribute.  
- Error messages use `aria-describedby` for assistive technology.  
- Fully keyboard-navigable.

---

## ⚙️ Files Included
project-folder/
│
├── index.html # Stage 0 (existing home page)
├── about.html # About Me page
├── contact.html # Contact page with validation
├── js/
│ └── contact.js # Handles form validation logic
├── css/
│ ├── style.css # Shared site-wide styles
│ ├── about.css # About page styles
│ └── contact.css # Contact page styles
└── README.md


---

## 🧠 Technologies Used
- **HTML5** – Semantic and accessible structure  
- **CSS3** – Responsive layout and styling  
- **JavaScript (Vanilla JS)** – Form validation logic  
- **ARIA & Accessibility Practices** – Improved usability for all users  

---

## 🧪 How to Run Locally
1. Clone this repository:
   ```bash
   git clone https://github.com/<your-username>/<your-repo-name>.git

 2.  Navigate into the project folder:
    cd <your-repo-name>

 3.  Open index.html, about.html, or contact.html directly in your browser.
