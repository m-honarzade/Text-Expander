import { useState } from "react";

const TextExpander = ({
  collapsedNumWords = 20,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  //   buttonColor = "blue-100",
  expanded = false,
  className,
  children,
}) => {
  const [isExpanded, setIsExpanded] = useState(expanded);

  return (
    <div className={`max-w-4xl mx-auto leading-8 mt-16 p-2 ${className}`}>
      {isExpanded
        ? children
        : children.split(" ").slice(0, collapsedNumWords).join(" ") + "..."}
      <span>
        <button
          onClick={() => setIsExpanded((exp) => !exp)}
          className={`border-none p-1 bg-none ml-1 ${
            isExpanded ? "text-red-400" : "text-blue-700"
          }`}
        >
          {isExpanded ? collapseButtonText : expandButtonText}
        </button>
      </span>
    </div>
  );
};

export default TextExpander;
