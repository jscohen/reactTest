import { useState } from "react";

interface Props {
  maxChars?: number;
  children: string;
}

const ExpandableText = ({ maxChars = 100, children }: Props) => {
  // Use state only for values that change and require rerender
  const [isExpanded, setExpanded] = useState(false);
  const text = isExpanded ? children : children.substring(0, maxChars);

  if (children.length <= maxChars) return <p>{children}</p>;

  return (
    <p>
      {text}...
      <button onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>
    </p>
  );
};

export default ExpandableText;
