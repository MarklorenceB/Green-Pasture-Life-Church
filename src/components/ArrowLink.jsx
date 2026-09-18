import { ArrowUpRight } from "lucide-react";
import Button from "./Button";

export default function ArrowLink({ children, className = "", ...props }) {
  return <Button className={`arrow-link border-0 rounded-none p-0 bg-transparent hover:bg-transparent ${className}`} variant="ghost" {...props}>
    {children}<ArrowUpRight size={20} aria-hidden="true" />
  </Button>;
}
