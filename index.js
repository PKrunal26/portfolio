import work from './data/work.js';
import beyond from './data/beyond.js';
import about from './data/about.js';
import testimonials from "./data/testimonials.js";

document.addEventListener("DOMContentLoaded", () => {
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

    // Populate Beyond Work
    const beyondWorkContainer = document.getElementById("beyond-work-content");
    beyond.forEach((item) => {
        beyondWorkContainer.innerHTML += `
      <div class="beyond-item">
        <img class="beyond-item-image" src="${item.image}" alt="logo" />
        <div class="work-item-title">${item.title}</div>
        <div class="work-item-desc">${item.description}</div>
        <div class="work-item-tags">
          ${item.tags.map((tag) => `<div class="tag">${tag}</div>`).join("")}
        </div>
      </div>
    `;
    });

    // Populate Testimonials
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
});