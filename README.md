Welcome to NextStep! This is a youth mentorship website demo and a practical
place to learn, share ideas and contribute to an open-source project together.

Whether you are making your first contribution or bringing years of experience,
there is room for your perspective. A clearer sentence, a thoughtful design
suggestion, a useful bug report or a small code improvement can make the project
easier for the next person to use.

You do not need to be a software developer to contribute. Start with what you
know, ask questions and build from there.

Explore the website ·
Find an issue ·
Suggest an improvement

About the project

NextStep explores mentorship, practical digital skills, personal growth and
community projects through fictional sample content. It is built with plain
HTML, CSS and JavaScript, so you can open it in a browser and begin exploring
without installing a framework or setting up a backend.

The website is a demonstration, not an active mentorship registration service.
Its mentor profiles are fictional and its join form only displays sample feedback.

Find your way to contribute

Choose an area you enjoy or a skill you would like to practise. These are ideas
to explore, not a list of confirmed bugs or approved features.

Your interest

Ways you can help

UI/UX design

Review the navigation, readability, mobile layouts and join journey. Share annotated screenshots or mockups explaining your proposed improvements.

Frontend development

Improve responsive layouts, accessible interactions, resource filtering or small usability details.

Backend development

Help with validation, tests and build tooling, or propose a future API design in an issue. The current demo has no backend; discuss new services before implementation.

Data science and analytics

Review resource categories, propose ways to assess learning-resource coverage, or explore ideas using clearly labelled synthetic data. The demo does not collect learner data or run analytics.

Documentation and writing

Clarify setup steps, improve website copy, explain a feature or write a beginner-friendly contribution guide.

Testing and accessibility

Try different screen sizes, keyboard navigation and assistive tools. Report what happened, what you expected and how to reproduce it.

Community and project coordination

Help clarify issues, suggest manageable tasks, organise learning resources and give constructive feedback on proposals.

A useful contribution can begin with a question. If you are unsure where to
start, open an issue describing your interests and the part you would like to
explore. You can contribute feedback or a design proposal without running the code.

Your first contribution: spot two opportunities

Try this challenge on your own or with a workshop partner:

Explore: browse the website from the perspective of a learner or mentor.

Notice: identify two problems or improvement opportunities related to your
interests. Describe who is affected and why each change would help.

Check: look through existing issues and pull requests to avoid duplicating work.

Discuss: create a separate issue for each distinct idea, with screenshots
or examples where useful. Comment on an existing issue if it already covers your idea.

Start small: choose one focused improvement and work towards a solution.
For a substantial redesign or new feature, agree on the direction with the
maintainer before investing time in implementation.

Share: submit a pull request or add your research, mockup or findings to
the relevant issue. Explain your reasoning and welcome feedback.

You do not have to solve both problems at once. One clear, well-explained
improvement is a valuable first step.

Screenshot



Screenshot of the published desktop welcome section, captured before the file-only
reorganisation on 10 October 2026. It illustrates the current visual design.

Project structure

Path

Purpose

index.html

Page content and semantic structure

css/style.css

Responsive layout, colours and accessible focus styles

js/script.js

Resource filtering and demo form feedback

images/

Two original project illustrations and the screenshot

README.md

Setup, usage and contribution guide

LICENSE

Full MIT license

.gitignore

Secret, temporary and generated-file exclusions

scripts/build.mjs

Creates the static publishing output

tests/

Link/asset and interaction checks

dist/

Generated publishing output; ignored by Git

Local setup

Download or clone this repository.

Open index.html in a modern browser. No installation or build is required.

To use a local HTTP server instead, open a terminal in the project folder and run:

python3 -m http.server 8000

Visit http://localhost:8000. Stop the server with Ctrl+C.
On Windows, py -m http.server 8000 is an alternative if Python is installed.

Edit index.html, css/style.css or js/script.js, save, and refresh the browser.

Prepare for hosting

With Node.js 18 or newer installed, run:

node scripts/build.mjs

This recreates dist/ from the source files. The build copies only the listed
website assets, README and license;
it does not copy secrets, Git metadata, tests or local configuration into the site.
Deploy dist/ to your chosen static host. Configure your own hosting project;
account-specific deployment identifiers are intentionally excluded.

Features

Welcome section, program goals, fictional mentor profiles, learning resources and join section.

White/pale-blue surfaces, royal-blue and turquoise accents, rounded shapes and readable typography.

Responsive single-column layouts on narrow screens.

Keyboard-friendly navigation, skip link, visible focus and labelled controls.

Native expandable mentor profiles and learning activities.

Resource filters with an announced result count.

Demo join form with preset sample learners and three learning paths.

Inline feedback, reduced-motion support and descriptive image alternative text.

Locally bundled illustrations; no external font or image dependencies.

Demo privacy

The program and all mentor profiles are fictional. The form asks for no names,
email addresses or other free-text personal information. It uses preset choices,
prevents form submission, and shows a suggestion on the page. The app uses no
analytics, cookies, browser storage or network requests to process the choices.
It creates no application or account. Hosting providers may retain ordinary access
logs independently of the form. Do not add real participant data to this demo.

Verification and testing

Run these checks from the project folder:

node --check js/script.js
node tests/interactions.mjs
python3 tests/check_links.py
node scripts/build.mjs
python3 tests/check_links.py dist

The interaction checks execute the actual JavaScript against a small DOM test
double. They cover all four filters, pressed states, result counts, all three
learning paths, prevented submissions and rejection of unknown demo values.
They are not a substitute for browser or screen-reader testing. Link checks verify
local assets, section anchors, duplicate IDs, image alternative text and README links.

Manual browser checklist

Try widths of 320, 375, 768 and 1440 pixels; check wrapping and horizontal overflow.

Navigate using Tab and Shift+Tab. Check the skip link and visible focus outlines.

Activate section links with Enter; open and close mentor/resource details with
Enter or Space. Confirm the expected section or expanded content appears.

Try every filter, then All resources. Confirm the right cards and announced count.

Submit an empty form to check required-field validation. Try each learning path
and confirm the preview message. No application should be created.

Clear the browser Network panel after loading and submit the demo form. Confirm
it makes no requests. Check the Console for JavaScript errors.

Test 200% zoom and an available screen reader. Check reading order and feedback.

Enable reduced motion: navigation should no longer smooth-scroll. Disable
JavaScript: content and native details remain usable, with a form explanation.

Automated source checks have been run. The hosted desktop screenshot was visually
reviewed. Interactive browser, mobile and assistive-technology checks were not
available in the authoring environment and remain manual checks.

Contributing

Thank you for helping improve NextStep. Small, focused contributions are welcome,
and you can start with documentation, feedback or testing before touching code.

Report a problem or share an idea

Open an issue
and include:

A short, descriptive title.

The page or feature involved.

What happened and what you expected, or the improvement you propose.

Steps to reproduce a bug, with browser and screen size where relevant.

Screenshots, sketches or examples that help explain the problem.

Whether you would like to work on it yourself.

Remove personal information from screenshots and examples.

Submit a change

Fork the repository and clone your fork.

Create a focused branch, for example git switch -c improve-resource-guide.

Make changes to source files, not the generated dist/ folder.

Keep content fictional, controls accessible and the form free of real-data collection.

Run the relevant verification commands above and complete manual browser checks
for any behaviour or layout you change. For a documentation-only update, check
wording, formatting, links and the accuracy of instructions.

Update documentation and the screenshot when the visible design changes.

Review git diff and git status for unintended files or secrets. Commit your
changes, push your branch and open a pull request against this repository's
default branch.

In your pull request, explain what changed, why it helps and how you checked it.
Link the related issue and add before-and-after screenshots for visual changes.
If something is unfinished or you need guidance, say so clearly; a draft pull
request can make your work easier to discuss.

Never commit tokens, passwords or personal participant information. .gitignore
helps prevent accidental additions but does not remove secrets already tracked by Git.

Learn and collaborate with care

Be respectful, patient and specific when giving feedback.

Welcome questions and explain technical terms when helping someone new.

Discuss ideas constructively and acknowledge other people's contributions.

Keep each contribution focused so it is easier to understand and review.

If you use AI assistance, review the output, understand your changes and verify
that they work before submitting them.

You are welcome to learn as you contribute. Bring your curiosity, share what you
notice and help make the next person's first step a little easier.

Credits

Project owner and copyright name: Chidozie Philip Nwabueze.

Website implementation and sample copy: developed with ChatGPT/Codex assistance.

images/mentorship.png and images/community-workshop.png: created using OpenAI's
built-in image-generation tool for this project. They are illustrative fictional
scenes, not photos of real program participants or endorsements.

Image prompt briefs: a mentor guiding three diverse young learners around a
laptop; and four young adults developing a community idea around an ideas board.
Both use a pale-blue, royal-blue and turquoise editorial illustration style.

images/screenshot.jpg: screenshot of this project's published welcome section.

Typography uses system fonts. No third-party JavaScript libraries are bundled.

License

MIT License — Copyright (c) 2026 Chidozie Philip Nwabueze.
See LICENSE for the complete terms.
