import designSystem from '../data/design_system.js';
import work from '../data/work.js';

document.addEventListener("DOMContentLoaded", () => {
    // Set Hero Image
    const heroImage = document.getElementById('hero-image');
    heroImage.src = designSystem.hero_image;

    // Set Intro Section
    document.getElementById('intro-title').innerText = designSystem.title;
    document.getElementById('intro-desc').innerText = designSystem.description;
    const introTextContainer = document.getElementById('intro-text');
    const introItemsContainer = document.getElementById('intro-items');

    designSystem.intro_text.forEach((item) => {
        if(item.type === 'paragraph') {
            introTextContainer.innerHTML += `
                <div class="intro_desc">${item.text}</div>`;
        }else if(item.type === 'heading'){
            introTextContainer.innerHTML += `
                <div class="intro_subtitle">${item.text}</div>`;
        }
    });

    designSystem.intro_items.forEach((item) => {
        introItemsContainer.innerHTML += `
            <div class="intro_item">
                <div class="intro_subtitle">${item.name}</div>
                <div class="intro_item_value">${item.value}</div>
            </div>
        `;
    });

    // Populate Sections
    const sectionsContainer = document.getElementById('sections-container');
    designSystem.sections.forEach((section) => {
        let sectionHTML = `
            <div class="work_section">
                <div class="work_left">
                    <div class="work_subtitle">${section.subtitle}</div>
                    <div class="work_title">${section.title}</div>
                </div>
                <div class="work_right">
        `;
        section.elements.forEach((element) => {
            if (element.type === 'paragraph') {
                sectionHTML += `<div class="work_para">${element.text}</div>`;
            } else if (element.type === 'highlight') {
                sectionHTML += `
                    <div class="work_highlight">
                        <div class="work_highlight_title">${element.title}</div>
                        <div class="work_para">${element.text}</div>
                    </div>
                `;
            } else if (element.type === 'image') {
                sectionHTML += `<img class="work_image" src="${element.src}" alt="image" />`;
            }
        });
        sectionHTML += `</div></div>`;
        sectionsContainer.innerHTML += sectionHTML;
    });

    // Set Next Project
    const nextProject = work.find((project) => project.id === designSystem.next_project_id);
    const nextProjectContainer = document.getElementById('next-project-container');
    if (nextProject) {
        nextProjectContainer.innerHTML = `
            <img class="next-project-image" src="${nextProject.image_background}" alt="Next Project Image" />
            <div class="next-project-right">
                <div class="work-item-logo">
                    <img class="work-item-logo-image" src="${nextProject.logo}" alt="Next Project Logo" />
                </div>
                <div class="work-item-subtitle">${nextProject.subtitle}</div>
                <div class="work-item-title">${nextProject.title}</div>
                <div class="work-item-desc">${nextProject.description}</div>
                <div class="work-item-tags">
                    ${nextProject.tags.map((tag) => `<div class="tag">${tag}</div>`).join("")}
                </div>
            </div>
        `;
    }
    // else {
    //     nextProjectContainer.innerHTML = `<div>No next project found.</div>`;
    // }
});