import React from "react";

const SectionTitle = ({
  title,
  subtitle,
  centered = false,
  className = "",
}) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""} ${className}`}>
      <h2 className="mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-neutral-600 max-w-3xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionTitle;
