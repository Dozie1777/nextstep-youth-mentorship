# NextStep — Youth Mentorship

A responsive, beginner-friendly demonstration of a youth mentorship website. It
introduces mentorship, practical digital skills, personal growth and community
projects through fictional sample content. Built with plain HTML, CSS and
JavaScript, with no framework, package installation or backend required.

## Screenshot

![NextStep desktop welcome section with blue headings and an illustration of a mentor guiding young learners](images/screenshot.jpg)

Screenshot of the published desktop welcome section, captured before the file-only
reorganisation on 10 October 2026. It illustrates the current visual design.

## Project structure

| Path | Purpose |
| --- | --- |
| `index.html` | Page content and semantic structure |
| `css/style.css` | Responsive layout, colours and accessible focus styles |
| `js/script.js` | Resource filtering and demo form feedback |
| `images/` | Two original project illustrations and the screenshot |
| `README.md` | Setup, usage and contribution guide |
| `LICENSE` | Full MIT license |
| `.gitignore` | Secret, temporary and generated-file exclusions |
| `scripts/build.mjs` | Creates the static publishing output |
| `tests/` | Link/asset and interaction checks |
| `dist/` | Generated publishing output; ignored by Git |

## Local setup

1. Download or clone this repository.
2. Open `index.html` in a modern browser. No installation or build is required.
3. To use a local HTTP server instead, open a terminal in the project folder and run:

   ```sh
   python3 -m http.server 8000
   ```

   Visit <http://localhost:8000>. Stop the server with `Ctrl+C`.
   On Windows, `py -m http.server 8000` is an alternative if Python is installed.

Edit `index.html`, `css/style.css` or `js/script.js`, save, and refresh the browser.

### Prepare for hosting

With Node.js 18 or newer installed, run:

```sh
node scripts/build.mjs
```

This recreates `dist/` from the source files. The build copies only the listed
website assets, README and license;
it does not copy secrets, Git metadata, tests or local configuration into the site.
Deploy `dist/` to your chosen static host. Configure your own hosting project;
account-specific deployment identifiers are intentionally excluded.

## Features

- Welcome section, program goals, fictional mentor profiles, learning resources and join section.
- White/pale-blue surfaces, royal-blue and turquoise accents, rounded shapes and readable typography.
- Responsive single-column layouts on narrow screens.
- Keyboard-friendly navigation, skip link, visible focus and labelled controls.
- Native expandable mentor profiles and learning activities.
- Resource filters with an announced result count.
- Demo join form with preset sample learners and three learning paths.
- Inline feedback, reduced-motion support and descriptive image alternative text.
- Locally bundled illustrations; no external font or image dependencies.

## Demo privacy

The program and all mentor profiles are fictional. The form asks for no names,
email addresses or other free-text personal information. It uses preset choices,
prevents form submission, and shows a suggestion on the page. The app uses no
analytics, cookies, browser storage or network requests to process the choices.
It creates no application or account. Hosting providers may retain ordinary access
logs independently of the form. Do not add real participant data to this demo.

## Verification and testing

Run these checks from the project folder:

```sh
node --check js/script.js
node tests/interactions.mjs
python3 tests/check_links.py
node scripts/build.mjs
python3 tests/check_links.py dist
```

The interaction checks execute the actual JavaScript against a small DOM test
double. They cover all four filters, pressed states, result counts, all three
learning paths, prevented submissions and rejection of unknown demo values.
They are not a substitute for browser or screen-reader testing. Link checks verify
local assets, section anchors, duplicate IDs, image alternative text and README links.

### Manual browser checklist

1. Try widths of 320, 375, 768 and 1440 pixels; check wrapping and horizontal overflow.
2. Navigate using Tab and Shift+Tab. Check the skip link and visible focus outlines.
3. Activate section links with Enter; open and close mentor/resource details with
   Enter or Space. Confirm the expected section or expanded content appears.
4. Try every filter, then All resources. Confirm the right cards and announced count.
5. Submit an empty form to check required-field validation. Try each learning path
   and confirm the preview message. No application should be created.
6. Clear the browser Network panel after loading and submit the demo form. Confirm
   it makes no requests. Check the Console for JavaScript errors.
7. Test 200% zoom and an available screen reader. Check reading order and feedback.
8. Enable reduced motion: navigation should no longer smooth-scroll. Disable
   JavaScript: content and native details remain usable, with a form explanation.

Automated source checks have been run. The hosted desktop screenshot was visually
reviewed. Interactive browser, mobile and assistive-technology checks were not
available in the authoring environment and remain manual checks.

## Contributing

1. Fork the repository and clone your fork.
2. Create a focused branch, for example `git switch -c improve-resource-guide`.
3. Make changes to source files, not the generated `dist/` folder.
4. Keep content fictional, controls accessible and the form free of real-data collection.
5. Run the verification commands above and complete relevant manual browser checks.
6. Update documentation and the screenshot when the visible design changes.
7. Review `git diff` and `git status` for unintended files or secrets. Commit your
   changes, push your branch, and open a pull request explaining the change and tests.

Never commit tokens, passwords or personal participant information. `.gitignore`
helps prevent accidental additions but does not remove secrets already tracked by Git.

## Credits

- Project owner and copyright name: **Chidozie Philip Nwabueze**.
- Website implementation and sample copy: developed with ChatGPT/Codex assistance.
- `images/mentorship.png` and `images/community-workshop.png`: created using OpenAI's
  built-in image-generation tool for this project. They are illustrative fictional
  scenes, not photos of real program participants or endorsements.
- Image prompt briefs: a mentor guiding three diverse young learners around a
  laptop; and four young adults developing a community idea around an ideas board.
  Both use a pale-blue, royal-blue and turquoise editorial illustration style.
- `images/screenshot.jpg`: screenshot of this project's published welcome section.
- Typography uses system fonts. No third-party JavaScript libraries are bundled.

## License

MIT License — Copyright (c) 2026 Chidozie Philip Nwabueze.
See [LICENSE](LICENSE) for the complete terms.
