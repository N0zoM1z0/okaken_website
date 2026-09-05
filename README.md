# OKA☆KEN Website Reconstruction
*OKA☆KEN ASSEMBLE!*

> オカルト研究会へようこそ

**[Visit OKA☆KEN on the modern internet](https://n0zom1z0.github.io/okaken_website/)**

While watching the anime adaptation of *Rewrite*, I kept having one thought:
what if that little website from 2011—the one that had only ever been alive for
a few seconds inside the anime—could somehow make it onto the modern internet?

So here it is. XD

This is not a modern *Rewrite* fan portal wearing the colors of an old screenshot.
It is meant to feel like **the actual OKA☆KEN website**: the lovingly questionable
homepage that Kotarou might have built for the Occult Research Club, complete
with dramatic red lettering, a suspiciously dark forest, far too many sidebars,
and a hit counter that is taking its job very seriously.

## What came back from 2011

The reconstruction is based on three anime frames from episodes 2, 3, and 6.
Together they reveal a surprising amount: the two-line welcome masthead, the
nine-part gray navigation bar, the burgundy page background, the black-green
side panels, the gray article cards, and that wonderfully specific mix of red
headings and cyan links.

The site follows the same little timeline seen in the anime. The home page opens
in its episode 2 state with Kotarou's first post; the category pages feel more
like episodes 3 and 6, where the archive has filled up with sightings, rumors,
arguments, and increasingly dubious reports from around Kazamatsuri.

It is intentionally old-fashioned on the surface. Underneath, it still behaves
nicely on current browsers, phones, and keyboards. Time travel should not require
horizontal scrolling.

## Things you can poke

- Browse reports by category or month.
- Search titles, article text, and category names.
- Open the gloriously low-stakes comment threads.
- Visit the club guestbook.
- Submit your own occult report and find it waiting after a reload.
- Watch the visitor counter remember that you have been here.

Reports and counter values live only in your browser through `localStorage`.
Nothing is uploaded or collected; this is a static page with delusions of being
a real school-club CMS.

## Run locally

The website itself has no build step and no runtime dependencies:

```bash
python3 -m http.server 4173
```

Then open <http://localhost:4173>.

To run the source and browser tests:

```bash
npm test
```

## A small piece of website archaeology

The original episode frames are kept under
[`pics_from_anime/`](pics_from_anime/) so every layout decision can be traced
back to something visible in the anime. They are research references only; the
public webpage does not use anime pixels as site artwork. The forest texture and
other visual details are recreated in code.

For the full evidence map—what is directly visible, what can be inferred, and
where I had to make a period-appropriate guess—see
[`docs/reconstruction-notes.md`](docs/reconstruction-notes.md).

## Rights and attribution

*Rewrite* and the referenced animation material remain the property of their
respective rights holders. The screenshots are not covered by this project's
MIT License. See [`NOTICE.md`](NOTICE.md) for the complete attribution and
third-party material statement.

Official anime copyright notice: `©VisualArt's/Key/Rewrite Project`.

## License

Original code and documentation are available under the [MIT License](LICENSE).
This grant excludes third-party intellectual property and all anime reference
screenshots.

Built for the simple joy of giving fictional infrastructure a real URL.
