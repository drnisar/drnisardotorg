import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}
const ExpandableText = ({ children, maxChars = 80 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);

  if (children.length <= maxChars) return <p>{children}</p>;

  const text = isExpanded ? children : children.substring(0, maxChars) + "...";
  return (
    <p>
      {text}
      <button
        className="btn btn-sm btn-light"
        onClick={() => setExpanded(!isExpanded)}
      >
        {isExpanded ? "see less" : "see more"}
      </button>
    </p>
  );
};

export default ExpandableText;
