
import React from 'react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <div id="contact" className="py-24 bg-offwhite">
      <div className="container max-w-xl mx-auto px-4">
        <h2 className="text-4xl font-cal mb-6 text-center">Let's Build Together</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block font-inter mb-1">Name</label>
            <input
              type="text"
              id="name"
              className="w-full border border-charcoal bg-offwhite p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-charcoal"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block font-inter mb-1">Email</label>
            <input
              type="email"
              id="email" 
              className="w-full border border-charcoal bg-offwhite p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-charcoal"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block font-inter mb-1">Message</label>
            <textarea
              id="message"
              rows={5}
              className="w-full border border-charcoal bg-offwhite p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-charcoal"
            ></textarea>
          </div>
          
          <div>
            <button 
              type="submit"
              className="w-full bg-charcoal text-offwhite font-inter px-8 py-3 rounded lift-on-hover"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
