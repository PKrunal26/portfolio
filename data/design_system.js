export default
{
    hero_image: "images/design_system/design_system_hero.png",
    title: "Creating a Design System built for Scalability.",
    description: "When I joined Tessell, I had the responsibility of creating our design system helped us moved faster together. When I started, I found out there existed a figma file called “Brand Book” which was lacking crucial component styles minimal, was seldom used, heavily under-documented and failed to translate into the front-end system. By the time I was done with the project, I had established principles and values for design system, a through component library, documentation and a practice of critique and governance on the design side to evolve the system, and had kick-started the process on the engineering side to make the design system a shared priority between design and engineering.",
    intro_text:[
        {
            type:"heading",
            text:"Impact"
        },
        {
            type: "paragraph",
            text: "We immediately saw an <b>increase in cohesion and decrease in rogue components</b>, and a faster pace of iterative and early design work. The governance process I established created more opportunities for designers to work together, getting early visibility into how the system was emerging across the product. Currently we are hiring a dedicated front engineer to pull the visual system into code."
        }
    ],
    intro_items:[
        {
            name: "Role",
            value: "Product Designer"
        },
        {
            name: "Timeline",
            value: "2 months"
        },
        {
            name: "Location",
            value: "Bengaluru"
        }
    ],
    sections:[
        {
            subtitle: "Getting Buy-in",
            title: "Pitching our Stakeholders",
            elements:[
                {
                    type: "paragraph",
                    text: "Once I had sufficiently created a case for the need for a Design System, it was time to get the stakeholders involved. Since design system is a design team led effort (which is a significant stray from customer request led features), pitching the stakeholders on the need was crucial. As most of our stakeholders were from a very technical background, we needed to clearly convey what design system means and what efforts will be involved. Finally but most importantly we had to showcase the impact of having a design system from a business perspective, proving with evidence that investing in design system was a worthwhile business decision."
                },
                {
                    type: "image",
                    src: "images/design_system/pitching.png",
                },
                {
                    type: "paragraph",
                    text: "The pitching was a success, mostly. Stakeholders green lit the project, but until we were ready with a pilot I was to work on this project solo. This was mostly because most designers bandwidth was expected to be spent on upcoming crucial customer asks. A frontend engineer was to be hired specifically for design system next quarter."
                },
                {
                    type: "paragraph",
                    text: "The pitch also included a roadmap for the design system, which served as a guideline for my project."
                }
            ]
        },
        {
            subtitle: "Audit and Context",
            title: "Understanding current structures",
            elements:[
                {
                    type: "highlight",
                    title:"Pretext",
                    text:"The reason this project came into existence was because few of the Tessell customers wanted to go self serve. Until this point Tessell customers were managed by Tessell SRE Team. Now for the self serve customers a more polished and consistent product was required. And for that design team identified a need for a proper design system.",
                },
                {
                    type: "paragraph",
                    text: "When I was assigned the task of making the design system, my first task was check my available inventory."
                },
                {
                    type: "paragraph",
                    text: "I found out during Tessell’s infancy, a design studio had constructed a basic design system. But as I interviewed designers, I realized we had far outgrown the design system. Designers usually built each component from scratch for each feature request and often resorted to using font styles, sizes, colors beyond the design system as the design system didn't cater their needs."
                },
                {
                    type: "paragraph",
                    text: "So I set out to take an audit of the product to take a note of these inconsistencies. As the product had grown to a massive size with multiple app families with multiple apps in each, I decided to do a stochastic sampling of pages. I then listed out the font and color variants used in each, and also tagged if those existed in the current design system. I also took note of the figma file for each page and noted the inconsistencies that arose going from figma to finished product."
                },
                {
                    type:"image",
                    src:"images/design_system/design_system_buttons.png",
                }
            ]
        },
        {
            subtitle: "Primary Definitions",
            title: "Laying the Groundwork",
            elements:[
                {
                    type: "highlight",
                    title:"Pretext",
                    text: "My first task was to define the basics of Tessell, what values we wanted to showcase, what feel must our product give."
                },
                {
                    type: "paragraph",
                    text: "For this I arranged a few workshop session. These workshop not only helped in design system but also laid the foundations for the Brand Strategy effort which was picked up by the visual design co-hire."
                },
                {
                    type:"image",
                    src:"images/design_system/laying.png",
                },
                {
                    type: "paragraph",
                    text: "As a result of these workshop + some design team collaboration sessions. We were able to define design system values, font family, color and deliverables necessary to ensure design system is useful well into future."
                },
            ]
        },
        {
            subtitle: "Structure",
            title: "Making it easy to do the right thing",
            elements:[
                {
                    type: "paragraph",
                    text: "I wanted the components to be very flexible as I wanted to prevent the usual habit of “cmd ⌘ + opt ⌥ + B” (detach instance)."
                },
                {
                    type: "paragraph",
                    text: "As a result of the audit I had a pretty good understanding of the requirements of Tessell. Also coming freshly from Atlassian, and seeing how Atlassian Design System was managed, I set out to mark the good qualities of enterprise level design systems."
                },
                {
                    type: "image",
                    src: "images/design_system/Making it easy to do the right thing01.png",
                },
                {
                    type: "image",
                    src: "images/design_system/Making it easy to do the right thing02.png",
                },
                {
                    type: "paragraph",
                    text: "Making a couple components, I got an idea of all the tokens required for the components. After establishing the tokens and primitives, it was time to put in elbow grease and run component sprints."
                },
                {
                    type: "image",
                    src: "images/design_system/Making it easy to do the right thing03.png",
                },
                {
                    type: "paragraph",
                    text: "For each component, beyond the states and variants, I also created extensive documentation. It included do and don’t, where to use, playground, accessibility checks (GAR-5) and developer documentation (essentially converting design tokens into dev tokens)."
                }
            ]
        },
        {
            subtitle: "Operations",
            title: "Creating and validating governance",
            elements:[
                {
                    type: "paragraph",
                    text: "Beyond the component library, I also spent cycles developing content guidelines for Tessell. This is because I had noticed inconsistent tone and voice through different segments of the product."
                },
                {
                    type: "image",
                    src: "images/design_system/Creating and validating governance1.png",
                },
                {
                    type: "paragraph",
                    text: "Once I had stabilized the state of the design system components and documentation, I focused on the processes and structure that would keep the design system alive and useful."
                },
                {
                    type: "paragraph",
                    text: "For some key components which underwent major changes, I drafted up a migration strategy. This was necessary as sudden and major change in UI is often met with backlash from customers. You can learn more about managing customer trust in my “Building customer Trust” case study."
                },
                {
                    type: "image",
                    src: "images/design_system/Creating and validating governance2.png",
                },
                {
                    type: "highlight",
                    title: "Design Critiques",
                    text: "I set up a every Thursday design critique session. This session would make sure design doesn’t get siloed and would serve as a checkpoint for design system."
                },
                {
                    type: "highlight",
                    title: "Living Design System",
                    text: "Since design system is a living document, changes are part of it’s nature. Most changes arise due to missing component in design system. I setup a collaborative design system update process, where the designer requiring a new component sends the need and draft of the component. Then the design system team can review and either accept or reject change."
                },
                {
                    type: "highlight",
                    title: "Snowflake Components",
                    text: "Sometimes a component might arise, which is necessary in current scenario, but will never be used again. Such components are called “Snowflake Components”, because they are unique. Spending cycles adding these components into design system won’t be worth the time. They exist beyond the design system, just in code. These components are marked as snowflakes both in design and code"
                },
                {
                    type: "highlight",
                    title: "Shared ownership with engineering",
                    text: "At this stage, a dedicated developer was necessary for this project. I would serve on the interviewing panel, and help onboard the developer to design system and processes for updates. I would be working closely with this dev to revamp the entire product in multiple sprint cycles."
                }
            ]
        },
        {
            subtitle: "Conclusion",
            title: "Learnings from making a Design System",
            elements:[
                {
                    type: "paragraph",
                    text: "I realised that often too much focus is on design components, library, and styles. However, the success of a design system hinges on its invisible parts–how to use it, when to evolve it, and why it matters for the overall success of the team."
                },
                {
                    type: "paragraph",
                    text: "The most effective design systems include a shared vision between design and engineering, processes of governance for reviewing new variants and components, a joint roadmap of prioritized updates, a philosophy of critique, and documentation that extends past Figma components."
                },
                {
                    type: "paragraph",
                    text: "Maintaining a design system is a significant effort, and we have to evaluate at which point in time this effort becomes less than the effort required to build and ship updates without design system."
                }
            ]
        },
    ],
    next_project_id: 2
}
