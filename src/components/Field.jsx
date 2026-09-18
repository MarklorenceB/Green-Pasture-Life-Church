import { useId } from "react";

/** label names the control; as="textarea" selects a multiline field.
 * className and remaining props go to the control, wrapperClassName to its div. */
export default function Field({ label, as: Control = "input", id, invalid = false, className = "", wrapperClassName = "", ...props }) {
  const generatedId = useId();
  const controlId = id ?? generatedId;
  return <div className={`field ${wrapperClassName}`}>
    <label className="field__label" htmlFor={controlId}>{label}</label>
    <Control {...props} id={controlId} className={`field__control ${className}`} aria-invalid={invalid || props["aria-invalid"] || undefined} />
  </div>;
}
