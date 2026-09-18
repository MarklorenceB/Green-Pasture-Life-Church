export default function Container({ as: Tag = "div", className = "", ...props }) {
  return <Tag className={`site-container ${className}`} {...props} />;
}
