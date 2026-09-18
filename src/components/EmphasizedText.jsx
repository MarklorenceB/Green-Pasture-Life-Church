/** Exact substring only: typography never changes the supplied words. */
export default function EmphasizedText({ children, emphasis }) {
  if (import.meta.env.DEV && emphasis && (typeof children !== "string" || !children.includes(emphasis))) {
    console.warn("EmphasizedText: emphasis was not found in the supplied text.", { emphasis });
  }
  if (typeof children !== "string" || !emphasis || !children.includes(emphasis)) return children;
  const start = children.indexOf(emphasis);
  return <>{children.slice(0, start)}<em className="type-emphasis">{emphasis}</em>{children.slice(start + emphasis.length)}</>;
}
