import React from "react";

function HeaderItems({ Icon, title }) {
  return (
    <div className="group flex flex-col items-center cursor-pointer w-12">
      <Icon className="h-8 text-white mb-1 group-hover:animate-bounce" />
      <p className="tracking-widest opacity-0 group-hover:opacity-100">
        {title}
      </p>
    </div>
  );
}

export default HeaderItems;
