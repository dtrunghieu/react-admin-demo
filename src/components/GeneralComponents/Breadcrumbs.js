import React from 'react';

const Breadcrumbs = ({ items }) => {
  return (
    <div className="breadcrumbs">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <span className="breadcrumb-separator">/</span>}
          {item.link ? (
            <a href={item.link} className="text-primary hover:underline">
              {item.label}
            </a>
          ) : (
            <span>{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumbs;
