# Quiet Pasture — shared foundation

Source of truth: `src/index.css` (`@theme`); `tailwind.config.js` is editor parity only.
Keep every existing word, image, alt, route and link. Do not change mockdata.

## Grid, rhythm, type
- One content grid: 1280px maximum; gutters `clamp(20px, 4.4vw, 64px)`.
- Use `Container` once per section. Do not nest containers or add another horizontal gutter.
- Base spacing is 4px. Use 16/24/32px within groups, 48/64px between groups.
- `Section` padding: 72–144px per edge; `compact`: 48–80px. Avoid stacked padding wrappers.
- `.type-display`: 56–120px; `.type-title`: 48–104px; `.type-heading`: 36–72px.
- `.type-subheading`: 26–36px; `.type-body`: 17–18px with 1.65 leading.
- Display/title/heading: Figtree 700, 1.02 leading, −.055em tracking.
- `.type-emphasis`: Fraunces 400 italic. Emphasize one exact word/phrase, never the whole heading.
- `.eyebrow`: IBM Plex Mono, 11px, uppercase, .16em tracking. Keep existing labels only.
- Tailwind font-size tokens: `text-display`, `text-title`, `text-heading`, `text-subheading`, `text-body`.
- Prefer `type-*` classes: those include weight, tracking, and line height as well as size.
- Foundation defaults live in base/components layers; Tailwind utilities may override them.
- Figtree/Fraunces use metric-adjusted Arial/Georgia fallbacks; preload URLs must match the font CSS.

## Primitives (default imports from src/components/<Name>)
```jsx
<Section id="welcome"><SectionHeading title={title} /></Section>
<Section compact className="bg-mist">{children}</Section>
<Section as="article" bleed>{fullWidthChildren}</Section>
<Container as="div" className="grid md:grid-cols-2 gap-12">{children}</Container>
<Button to="/contact">{existingLabel}</Button>
<Button href={existingHref} variant="secondary">{existingLabel}</Button>
<Button onClick={handler} variant="ghost">{existingLabel}</Button>
<Button to="/contact" variant="on-dark">{existingLabel}</Button>
<Button to="/contact" variant="outline-on-dark">{existingLabel}</Button>
<ArrowLink to="/about">{existingLabel}</ArrowLink>
<SectionHeading eyebrow={label} title={title} emphasis="grace">
  {existingDescription}
</SectionHeading>
<SectionHeading as="h3" title={title} tone="light" />
<MediaPanel src={existingImage} alt={existingAlt} ratio="4 / 3" />
<MediaPanel src={existingImage} alt={existingAlt} position="center 30%" caption={existingCaption} />
<Eyebrow tone="light">{existingLabel}</Eyebrow>
<PageHero eyebrow={label} title={title} subtitle={subtitle} image={existingImage} />
<PageHero title={title} image={existingImage} ratio="4 / 3" />
<Field label={label} name="email" type="email" required invalid={hasError} />
<Field as="textarea" label={label} name="message" disabled={isSending} />
<Portrait src={existingImage} name={existingName} alt={existingAlt} ratio="4 / 5" />
<Portrait name={existingName} initials="AB" ground="mist" />
<Reveal delay={0.065}>{children}</Reveal>
```
- Button: `to` renders router Link, `href` an anchor, neither a native button; default type is button.
- Button variants: primary pasture, secondary outlined, ghost text, on-dark filled, outline-on-dark outlined.
- Section defaults to section + Container; `as` changes the outer tag, `bleed` omits Container only.
- MediaPanel: default 4:3; `className` → figure; `style`/remaining props → img; style merges after ratio/position.
- Field: label is linked to an auto/explicit id; `className`/other props → control, `wrapperClassName` → div.
- Field supports native disabled/required and `invalid` (aria-invalid); associate error copy with aria-describedby.
- Portrait: default 3:4; missing/failed src shows initials from name (or explicit initials), named by alt.
- Portrait grounds: canvas/mist/meadow-300/wheat-300; className/style/other props → wrapper; position → image.
- PageHero keeps old defaults; optional ratio controls image shape at all widths; emphasis is an exact substring.
- EmphasizedText warns in development if an explicit emphasis is missing; default hero emphasis is the last word.
- Hero: moss text field and separate original photo panel; stacked at mobile. No photo-dependent contrast.
- Reveal keeps `as`, `delay`, `y`, `once`, className/motion props; passed elements reveal even after instant jumps.

## Colour and composition
- Canvas is the primary page surface. Ink/pasture headings; stone secondary text.
- Meadow stays the logo/large graphic accent. Use pasture for small green text on light surfaces.
- Wheat is a rare detail: small rules/icons, not whole backgrounds or every action.
- Wheat text on light surfaces uses `text-wheat-700`; light text on moss uses canvas/mist/meadow-300.
- Moss bands are for a hero, major invitation, or footer. Separate them with generous canvas space.
- Align sections and copy left; centre only existing quotations or a deliberate single invitation.
- Prefer large image panels and editorial splits. Do not invent card grids or thumbnail strips.
- Let spacing, type, and background shifts separate content. Avoid shadows and decorative borders.
- Do not add ornamental hills. PastureHorizon remains compatible for the existing home lane.

## Motion, navigation and accessibility
- Motion exports: `softTransition` (420ms), `softEase`, `staggerContainer`, `staggerItem` (65ms stagger).
- Reveal uses IntersectionObserver with `#root`; reduced motion reveals immediately without translation.
- For new Framer scroll effects, pass a ref to `#root` as container/root. Never observe window scroll.
- Body/html remain fixed; root scrolls. Route resets are instant; in-page anchors remain smooth.
- Navbar owns its fixed positioning and dark-hero scrim; solid canvas after 24px of root scroll.
- Allow the header token (`--header-height`, 88px mobile / 104px desktop) above hero content.
- Mobile menu mounts only when open, traps focus, handles Escape, isolates content, and locks root.
- Shared controls have ≥44px targets; link buttons 52px, native buttons retain intrinsic height. Preserve focus styles.
- New primitives are opt-in: adding them must not change existing pages.
