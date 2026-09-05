# Visual Reconstruction Notes

## Scope

The goal is not a generic *Rewrite* fan page. It is a diegetic reconstruction:
the page should feel as though the Kazamatsuri Academy Occult Research Club put
it online themselves. Only features supported by the three supplied frames or
by common Japanese personal-blog behavior of the period are presented on the
surface.

## Evidence map

| Reference | State shown | High-confidence evidence |
| --- | --- | --- |
| Episode 2 | Initial publication | Full masthead, red welcome lettering, search placement, nine navigation items, three-column structure, introductory post, zero-heavy category counts, monthly archive, recent posts, and submission button |
| Episode 3 | Active UMA category | Category result heading, stacked compact posts, comment links, left link panel, popular-post list, and a sharp increase in uncategorized submissions |
| Episode 6 | Mature archive | The same layout persists; counts rise across every active category, several dense report cards are visible, and the lower link image confirms the forest motif |

## Layout deductions

1. The content is centered in a wide desktop canvas, approximately a 5:10:4
   three-column ratio below the navigation.
2. The masthead and page body share one bounded site container. The masthead is
   much taller in the episode 2 establishing shot; episodes 3 and 6 are framed
   after vertical scrolling or at a different camera crop.
3. Navigation labels are evenly distributed in a translucent gray strip. They
   are not modern pills, cards, or isolated buttons.
4. Sidebar panels use an almost black green. Article headers are a darker band
   over desaturated gray-green bodies. Borders are thin light gray.
5. Red is used for the site title, panel headings, article titles, comment links,
   and the page field. Cyan is reserved for navigation-like links and context
   labels.
6. Text is large in the animation for legibility, but the real implementation
   uses compact Japanese system fonts so the page reads like an actual personal
   blog rather than a television prop.

## Deliberate extrapolations

- The source frames do not expose a canonical date. Fictional 2011 archive dates
  are used to establish period flavor without claiming they are canonical.
- The forest texture is recreated entirely in CSS. No anime pixels are served as
  part of the public page.
- Article prose beyond the few visible titles is newly written as in-world flavor.
- Search, filtering, expandable comments, local submissions, the local visitor
  counter, and hash-based navigation make visible controls functional while
  preserving the old visual shell.
- Small-screen behavior stacks the columns for usability. Desktop dimensions and
  visual density remain the primary reconstruction target.

## E6 reference cleanup

`pics_from_anime/E6/image_with_player_title.png` preserves the supplied archival
capture. `pics_from_anime/E6/image.png` is a deterministic crop that removes the
42-pixel media-player title bar and leaves the complete 2930-pixel-wide anime
frame below it. The cleaned dimensions are 2930 × 1580.
