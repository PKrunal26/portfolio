import work from './data/work.js';
import about from './data/about.js';
// Commented out unused imports
// import beyond from './data/beyond.js';
// import testimonials from "./data/testimonials.js";

document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll for nav links
    document.querySelectorAll('.header-content-right-menu a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').slice(1);
            const target = document.getElementById(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Populate Shipped Work
    const shippedWorkContainer = document.getElementById("shipped-work-content");
    work.forEach((item) => {
        shippedWorkContainer.innerHTML += `
      <div class="work-item"  onclick="window.open('${item.href}','_blank');">
        <div class="work-item-left instrument-sans-regular">
          <div class="work-item-left-logo">
            <img class="work-item-logo-image" src="${item.logo}" alt="logo" />
          </div>
          <div class="work-item-subtitle">${item.subtitle}</div>
          <div class="work-item-title">${item.title}</div>
          <div class="work-item-desc">${item.description}</div>
          <div class="work-item-tags">
            ${item.tags.map((tag) => `<div class="tag">${tag}</div>`).join("")}
          </div>
        </div>
        <div class="work-item-right">
            <img src="${item.image_foreground}" alt="logo" class="work-item-right-image"/>
        </div>
      </div>
    `;
    });

    // Populate About Me
    const aboutMeContainer = document.getElementById("about-me");
    if (aboutMeContainer && about) {
        aboutMeContainer.innerHTML = `
            <div class="section-title">About Me</div>
            <div class="line"></div>
            <div class="about-me-content">
                <div class="about-me-left">
                    <div class="about-me-left-image-wrapper">
                        <img class="about-me-left-image" src="${about.profileImage}" alt="Krunal Prajapati" />
                    </div>
                </div>
                <div class="about-me-right">
                    <div class="about-me-greeting">${about.greeting}</div>
                    <div class="about-me-bio">${about.bio.replace(/\n/g, '<br/>')}</div>
                    ${about.sections.map((section, i) => `
                        <div class="about-dropdown-section">
                            <div class="about-dropdown-title" data-index="${i}">
                                <div class="about-dropdown-title-text">${section.title}</div>
                                <span class="about-dropdown-arrow">&#9660;</span>
                            </div>
                            <div class="about-dropdown-desc">${section.description.replace(/\n/g, '<br/>')}</div>
                            <div style="height: 1px; background: #c3cbda; margin: 1rem 0;"></div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        // Add dropdown toggle functionality
        const dropdownSections = aboutMeContainer.querySelectorAll('.about-dropdown-section');
        dropdownSections.forEach((section) => {
            const title = section.querySelector('.about-dropdown-title');
            title.addEventListener('click', () => {
                section.classList.toggle('open');
            });
        });
    }

    // Commented out Beyond Work population
    /*
    const beyondWorkContainer = document.getElementById("beyond-work-content");
    beyond.forEach((item) => {
        beyondWorkContainer.innerHTML += `
      <div class="beyond-item" onclick="window.open('${item.href}','_blank');">
        <img class="beyond-item-image" src="${item.image}" alt="logo" />
        <div class="work-item-title">${item.title}</div>
        <div class="work-item-desc">${item.description}</div>
        <div class="work-item-tags">
          ${item.tags.map((tag) => `<div class="tag">${tag}</div>`).join("")}
        </div>
      </div>
    `;
    });
    */

    // Commented out Testimonials population
    /*
    const testimonialsContainer = document.getElementById("testimonials-content");
    testimonials.forEach((testimonial) => {
        testimonialsContainer.innerHTML += `
      <div class="testimonial">
        <div class="testimonial-left">
          <img src="${testimonial.small_image}" alt="testimonial" class="testimonial-image">
          <div class="testimonial-title">${testimonial.title}</div>
          <div class="testimonial-subtitle">${testimonial.subtitle}</div>
        </div>
        <div class="testimonial-right">
          ${testimonial.text
            .map((para) => `<div class="testimonial-para">${para.text}</div>`)
            .join("")}
        </div>
      </div>
    `;
    });
    */
});