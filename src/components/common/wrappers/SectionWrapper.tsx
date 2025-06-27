import React from "react";

const SectionWrapper = ({
    children,
    className,
  }: Readonly<{
    children: React.ReactNode;
    className ?: string;
  }>) => {
  return (
    <section className={`bg-white dark:bg-secondary ${className}`}>
      <div className="max-w-screen-lg px-4 py-8 mx-auto xl:px-0">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
