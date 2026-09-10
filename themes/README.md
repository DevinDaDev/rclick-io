# Themes

One preset is live at a time. `active.css` imports it. Pick one no recent client is using.

| Preset | Accent | Feels like |
|---|---|---|
| `forest` | green `#2f6b3f` | calm, utility, trades |
| `slate` | blue `#2f4a6b` | corporate, finance, IT |
| `ember` | rust `#a8441f` | warm, creative, food |
| `plum` | purple `#5c3a73` | design tools, education |

## Switch

Edit `themes/active.css` and change the import. Then set `brand.themeColor` in
`content/site.ts` if the client wants coloured browser chrome on mobile.

## New preset

Copy `forest.css`, rename, change the eleven values. Keep the accent at or darker than
`#2f6b3f` luminance (about 5:1 on white) so white button text and the eyebrow labels
stay AA. Check with https://webaim.org/resources/contrastchecker/.

## Fonts

Fonts are not in the preset because `next/font` needs a static import. Change the font
in `lib/fonts.ts`. Inter Tight is the default and is self-hosted at build time, so the
page makes zero third-party requests.
