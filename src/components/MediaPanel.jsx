/** className belongs to the figure; style and remaining props belong to the image.
 * Image style overrides are merged after the ratio and position defaults. */
export default function MediaPanel({ src, alt, caption, ratio = "4 / 3", position = "center", className = "", style, ...props }) {
  return <figure className={`media-panel ${className}`}>
    <img src={src} alt={alt} className="media-panel__image" loading="lazy" {...props} style={{ "--media-ratio": ratio, objectPosition: position, ...style }} />
    {caption && <figcaption>{caption}</figcaption>}
  </figure>;
}
