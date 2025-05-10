
import React from 'react';

const ClientLogos = () => {
  const logos = [
    { name: "Client 1", url: "/placeholder.svg" },
    { name: "Client 2", url: "/placeholder.svg" },
    { name: "Client 3", url: "/placeholder.svg" },
  ];

  return (
    <div className="py-16 bg-offwhite">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 md:gap-0">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="lift-on-hover cursor-pointer"
            >
              <img 
                src={logo.url} 
                alt={`${logo.name} logo`} 
                className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;
