import React from "react";

export default function Hero({children, centered, vCentered, extraContainerClasses = "", extraBodyClasses = ""}) {
  const containerClasses = `hero ${vCentered ? "v-centered" : ""} ${extraContainerClasses}`;
  const bodyClasses = `hero-body ${centered ? "has-text-centered" : ""} ${extraBodyClasses}`;

  return (
    <div className={containerClasses}>
      <div className={bodyClasses}>
        {children}
      </div>
    </div>
  );
}