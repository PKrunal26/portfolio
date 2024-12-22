//import work.js, beyond.js and about.js
// import work from './data/work.js';
// import beyond from './data/beyond.js';
// import about from './data/about.js';

// let work_container =
//     document.getElementsByClassName("shipped-work-content")[0];
//
// // console.log(work);
// let work_item = work_container.getElementsByClassName("work-item")[0];
// //remove the work item from the work container
// work_container.removeChild(work_item);
//
// for (const index in work) {
//     const work_data_item = work[index];
//     // console.log(work_data_item);
//     let new_work_item = work_item.cloneNode(true);
//     // console.log(new_work_item);
//     new_work_item.getElementsByClassName("work-item-title")[0].innerText = work_data_item.title;
//     new_work_item.getElementsByClassName("work-item-desc")[0].innerText = work_data_item.description;
//     new_work_item.getElementsByClassName("work-item-subtitle")[0].innerText = work_data_item.subtitle;
//     new_work_item.getElementsByClassName("work-item-logo-image")[0].src = work_data_item.logo;
//     new_work_item.getElementsByClassName("work-item-right")[0].style.backgroundImage = `url(${work_data_item.image_background})`;
//     // new_work_item.getElementsByClassName("work-item-right-image")[0].src = work_data_item.image_foreground;
//     work_container.appendChild(new_work_item);
// }
//
// let beyond_container =
//     document.getElementsByClassName("beyond-work-content")[0];
//
// let beyond_item = beyond_container.getElementsByClassName("beyond-item")[0];
// beyond_container.removeChild(beyond_item);
//
// for (const index in beyond) {
//     const beyond_data_item = beyond[index];
//     let new_beyond_item = beyond_item.cloneNode(true);
//     new_beyond_item.getElementsByClassName("work-item-title")[0].innerText = beyond_data_item.title;
//     new_beyond_item.getElementsByClassName("work-item-desc")[0].innerText = beyond_data_item.description;
//     new_beyond_item.getElementsByClassName("beyond-item-image")[0].src = beyond_data_item.image;
//     beyond_container.appendChild(new_beyond_item);
// }
//

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



// https://www.figma.com/design/iGSfi021hVrbofHQfA3dHT/Portfolio?node-id=2145-5542&t=N7mR6gTUYb5G27QP-4