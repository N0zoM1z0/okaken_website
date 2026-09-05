# OKA☆KEN Website Reconstruction

A browser-ready reconstruction of the fictional Occult Research Club website
seen in the TV anime *Rewrite*. The project treats the page as a real website
made by a school club: slightly theatrical, slightly awkward, information-dense,
and unmistakably rooted in the Japanese personal-blog conventions of its era.

The public site is designed from three frame references from episodes 2, 3, and
6. It recreates the observed structure without embedding the anime frames in
the webpage itself.

## What is reconstructed

- forest-textured masthead with the two-line red welcome title;
- search box integrated into the bottom-right of the masthead;
- nine-item gray navigation strip;
- burgundy page field and three-column blog layout;
- black-green side panels, gray-green article cards, red headings, and cyan links;
- the category, archive, popular/recent-article, link, and comment affordances;
- changing archive counts suggested by the episode 2 → 3 → 6 progression;
- a deliberately period-appropriate visitor counter and `Last Update` footer.

The surface is intentionally old-fashioned. The implementation underneath is
accessible, responsive, dependency-free, and usable with a keyboard.

## Run locally

No build step or package installation is required:

```bash
python3 -m http.server 4173
```

Then open <http://localhost:4173>.

For the automated source checks:

```bash
npm test
```

## Interaction notes

- Navigation and category lists filter the investigation archive.
- Search scans titles, article text, and category names.
- The monthly archive changes the visible report set.
- Comment links expand locally rendered thread fragments.
- The submission form stores reports in the current browser only; there is no
  remote database or data collection.
- The visitor counter is also local to the browser.

## Research material and rights

The frame references are retained under [`pics_from_anime/`](pics_from_anime/)
for reproducible visual archaeology. They are not covered by the MIT License.
See [`NOTICE.md`](NOTICE.md) for the full rights and attribution statement, and
[`docs/reconstruction-notes.md`](docs/reconstruction-notes.md) for the evidence
map and design decisions.

*Rewrite* and the referenced animation material remain the property of their
respective rights holders. Official anime copyright notice:
`©VisualArt's/Key/Rewrite Project`.

## License

Original code and documentation are available under the [MIT License](LICENSE).
This grant excludes third-party intellectual property and all anime reference
screenshots.
