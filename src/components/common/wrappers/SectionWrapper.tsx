import React from "react";

const SectionWrapper = ({
    children,
    className,
  }: Readonly<{
    children: React.ReactNode;
    className ?: string;
  }>) => {
  return (
    <section className={`bg-white dark:bg-gray-900 ${className}`}>
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
