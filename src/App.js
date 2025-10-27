import React, { useState, useEffect } from 'react';

// --- SVG Icons ---
const MenuIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

const CloseIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ArrowRightIcon = () => <span className="ml-2">›</span>;

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.053 1.905.24 2.49.446.58.205.975.47 1.48.976.504.504.77.898.976 1.48.206.585-.394 1.32-.446 2.49.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.053 1.17-.24 1.905-.446 2.49-.205.58-.47.975-.976 1.48-.504.504-.898.77-1.48.976-.585.206-1.32.394-2.49.446-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.053-1.905-.24-2.49-.446-.58-.205-.975.47-1.48-.976-.504-.504-.77-.898-.976-1.48-.206.585-.394 1.32-.446 2.49-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.053-1.17.24-1.905.446-2.49.205-.58.47.975.976-1.48.504-.504.898.77-1.48.976.585.206-1.32.394-2.49.446C8.416 2.175-8.796 2.163-12 2.163m0-1.608c-3.264 0-3.66.014-4.944.072-1.28.058-2.16.25-2.924.518-.77.27-1.436.63-2.09 1.286-.656.656-1.017 1.32-1.286 2.09-.268.763-.46-1.643-.518-2.923-.058-1.284-.072-1.68-.072-4.944s.014-3.66.072-4.944c.058-1.28.25-2.16.518-2.923.27.77.63-1.436-1.286-2.09-.656.656-1.32-1.017-2.09-1.286-.763.268-1.643.46-2.923.518-1.284.058-1.68.072-4.944.072s3.66-.014 4.944-.072c1.28-.058-2.16-.25-2.923-.518.77-.27-1.436-.63-2.09-1.286.656-.656-1.017-1.32-1.286-2.09.268-.763.46-1.643.518-2.923.058-1.284.072-1.68.072-4.944s-.014-3.66-.072-4.944c-.058-1.28-.25-2.16-.518-2.923-.27-.77-.63-1.436-1.286-2.09-.656.656-1.32-1.017-2.09-1.286-.763-.268-1.643.46-2.923.518C15.66.566-15.264.554-12 .554z" />
    <path d="M12 6.865A5.135 5.135 0 1017.135 12 5.135 5.135 0 0012 6.865zm0 8.73A3.595 3.595 0 1115.595 12 3.595 3.595 0 0112 15.595z" />
    <circle cx="16.802" cy="7.198" r="1.218" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const StarIcon = ({ filled = true }) => (
  <svg className={`w-4 h-4 ${filled ? 'text-brand-yellow' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

// --- Global Components ---
const CtaLink = ({ text, href = "#" }) => (
  <a
    href={href}
    className="inline-flex items-center text-sm font-bold tracking-widest border border-white px-6 py-3 uppercase text-white hover:bg-white hover:text-brand-dark transition-colors duration-300"
  >
    {text}
    <ArrowRightIcon />
  </a>
);

const SectionHeading = ({ sub, main }) => (
  <div className="text-center mb-12">
    <p className="text-brand-yellow font-heading text-sm tracking-widest mb-2">{sub}</p>
    <h2 className="text-4xl md:text-5xl font-heading text-white">{main}</h2>
  </div>
);

// --- 1. Header Component ---
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // This function closes the menu when a link is clicked
  const handleMobileLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 p-6 md:p-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Hamburger Menu (Mobile) */}
        <button className="md:hidden z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>

        {/* Logo */}
        <a href="/" className="z-50"> {/* Logo links to top of page */}
          <img 
            src="https://i.imgur.com/gSnP1kK.png" 
            alt="The Tiffin Box Logo" 
            className="w-20" 
          />
        </a>

        {/* "View Menu" Button (Desktop) */}
        <a 
          href="#menu" 
          className="hidden md:inline-block bg-brand-yellow text-brand-dark px-6 py-2 font-bold text-sm tracking-wider hover:bg-yellow-400 transition-colors"
        >
          View Menu
        </a>

        {/* "View Menu" Button (Mobile) */}
        <a 
          href="#menu" 
          className="md:hidden bg-brand-yellow text-brand-dark px-6 py-2 font-bold text-sm tracking-wider"
        >
          View Menu
        </a>
      </div>

      {/* Mobile Menu Overlay - UPDATED with onClick handlers */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-brand-dark flex flex-col items-center justify-center space-y-8 z-40">
          <a href="#menu" className="text-2xl font-heading text-white" onClick={handleMobileLinkClick}>MENU</a>
          <a href="#order" className="text-2xl font-heading text-white" onClick={handleMobileLinkClick}>ORDER ONLINE</a>
          <a href="#book" className="text-2xl font-heading text-white" onClick={handleMobileLinkClick}>BOOK A TABLE</a>
          <a href="#about" className="text-2xl font-heading text-white" onClick={handleMobileLinkClick}>ABOUT US</a>
          <a href="#contact" className="text-2xl font-heading text-white" onClick={handleMobileLinkClick}>CONTACT</a>
        </div>
      )}
    </header>
  );
};

// --- 1.1 Floating Social Icons ---
const SocialIcons = () => (
  <div className="hidden md:flex flex-col space-y-4 fixed top-1/2 -translate-y-1/2 right-8 z-50">
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-yellow transition-colors">
      <InstagramIcon />
    </a>
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-yellow transition-colors">
      <FacebookIcon />
    </a>
  </div>
);

// --- 2. Hero Component ---
const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center bg-brand-dark">
      {/* Background Image (Left Half) - Placeholder */}
      <div className="absolute top-0 left-0 w-full md:w-1/2 h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark to-transparent"></div>
      </div>
      
      {/* Background Image (Right Half) - Placeholder */}
      <div className="absolute top-0 right-0 w-1/2 h-full hidden md:block">
        <img 
          src="https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Authentic Indian Cuisine"
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="w-full md:w-1/2">
          <img 
            src="https://i.imgur.com/gSnP1kK.png"
            alt="The Tiffin Box Logo" 
            className="w-24 mb-6" 
          />
          <h1 className="text-5xl md:text-7xl font-heading text-white leading-tight">
            AUTHENTIC SOUTH INDIAN CUISINE
          </h1>
          <div className="mt-10">
            <CtaLink text="Order Now" href="#order" />
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 3. About Section ---
const About = () => {
  return (
    <section id="about" className="bg-brand-dark"> 
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="min-h-[300px] md:min-h-[500px]">
          <img 
            src="https://images.pexels.com/photos/1683989/pexels-photo-1683989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Chef and team"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center justify-center p-12 md:p-24 bg-brand-yellow text-brand-dark">
          <div>
            <p className="font-heading text-sm tracking-widest mb-2">ABOUT US</p>
            <h2 className="text-4xl md:text-5xl font-heading mb-8">
              EXPERIENCE AUTHENTIC SOUTH INDIAN FLAVORS
            </h2>
            <a
              href="#about"
              className="inline-flex items-center text-sm font-bold tracking-widest border border-brand-dark px-6 py-3 uppercase hover:bg-brand-dark hover:text-white transition-colors duration-300"
            >
              Know More
              <ArrowRightIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 4. Popular Dishes ---
const PopularDishes = () => {
  const dishes = [
    { name: 'CHICKEN CHETTINAD', price: '£9.99', img: 'https://images.pexels.com/photos/9609838/pexels-photo-9609838.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'MASALA DOSA', price: '£7.99', img: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'PANEER TIKKA', price: '£8.99', img: 'https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=600' },
  ];

  return (
    <section id="menu" className="py-24 bg-brand-dark relative">
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden z-0">
        <img 
          src="https://i.imgur.com/gSnP1kK.png"
          alt="Tiffin Box Logo Faded"
          className="w-4/5 md:w-1/2 opacity-5" 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading sub="FEATURED MENU" main="DISCOVER OUR MOST POPULAR DISHES" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {dishes.map((dish, index) => (
            <div key={index} className="text-center group">
              <div className="overflow-hidden mb-6">
                <img 
                  src={dish.img}
                  alt={dish.name}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-heading text-white mb-2">{dish.name}</h3>
              <p className="text-lg font-heading text-brand-yellow">{dish.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 5. Dual CTA Section (Order & Book) ---
const DualCta = () => {
  return (
    <section className="py-24 bg-brand-gray">
      <div className="container mx-auto px-6">
        <div id="order" className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 mb-20">
          <div className="text-center md:text-left">
            <p className="text-brand-yellow font-heading text-sm tracking-widest mb-2">ONLINE ORDER</p>
            <h2 className="text-4xl md:text-5xl font-heading text-white mb-6">
              FRESH SOUTH INDIAN FLAVORS DELIVERED!
            </h2>
            <p className="text-brand-muted mb-8 max-w-md mx-auto md:mx-0">
              Craving your favorite South Indian dishes? Enjoy the rich, authentic flavors of The Tiffin Box from the comfort of your home.
            </p>
            <CtaLink text="Order Online" href="#order" />
          </div>
          <div className="relative h-64 md:h-96">
            <p className="text-9xl text-gray-700 text-center opacity-30">🛵</p>
            <div className="absolute top-10 right-20 w-24 h-24 rounded-full overflow-hidden">
                <img src="https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Food item" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        
        <div id="book" className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div className="min-h-[300px] md:min-h-[450px] order-1 md:order-2">
            <img 
              src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Restaurant table setting"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center md:text-left order-2 md:order-1">
            <p className="text-brand-yellow font-heading text-sm tracking-widest mb-2">BOOK TABLE</p>
            <h2 className="text-4xl md:text-5xl font-heading text-white mb-6">
              PLANNING A MEAL AT THE TIFFIN BOX?
            </h2>
            <p className="text-brand-muted mb-8 max-w-md mx-auto md:mx-0">
              Enjoy the rich, authentic flavors. Orders online for a quick and easy delivery straight to your doorstep.
            </p>
            <CtaLink text="Book Table" href="#book" />
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 6. Specialties Section ---
const Specialties = () => {
  const features = [
    { title: 'AUTHENTIC SOUTH INDIAN FLAVORS', description: 'Our dishes are prepared using traditional recipes.' },
    { title: 'EXPERT CHEFS', description: 'Our chefs have years of experience creating magical dishes.' },
    { title: 'FRESH, QUALITY INGREDIENTS', description: 'We use only the finest, fresh ingredients in every meal.' },
    { title: 'COMFORTABLE DINING EXPERIENCE', description: 'Our restaurant offers a warm and welcoming atmosphere.' },
    { title: 'HEALTH-CONSCIOUS OPTIONS', description: 'From vegetarian to gluten-free, we have healthy options.' },
    { title: 'SEAMLESS ONLINE ORDERING', description: 'Enjoy our food at home with easy online ordering.' },
  ];

  return (
    <section className="py-24 bg-brand-dark">
      <div className="container mx-auto px-6">
        <SectionHeading sub="WHY TIFFIN BOX" main="OUR SPECIALTIES" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="space-y-10 text-center md:text-right">
            {features.slice(0, 3).map((item) => (
              <div key={item.title}>
                <h3 className="text-lg font-heading text-white mb-2">{item.title}</h3>
                <p className="text-brand-muted text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          {/* Center Image */}
          <div className="flex items-center justify-center relative">
            <img 
              src="https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Specialty Dish"
              className="rounded-full w-64 h-64 md:w-96 md:h-96 object-cover border-4 border-brand-yellow/50"
            />
            <button className="absolute bottom-10 bg-brand-yellow text-brand-dark px-6 py-2 font-bold text-xs tracking-wider uppercase">
              Our Specialties
            </button>
          </div>
          {/* Right Column */}
          <div className="space-y-10 text-center md:text-left">
            {features.slice(3, 6).map((item) => (
              <div key={item.title}>
                <h3 className="text-lg font-heading text-white mb-2">{item.title}</h3>
                <p className="text-brand-muted text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 7. Chef Section ---
const Chef = () => {
  return (
    <section className="py-24 bg-brand-gray relative">
      <div className="container mx-auto px-6">
        <SectionHeading sub="CHEF" main="OUR BRAND CHEF" />
        <div className="text-center text-7xl text-brand-yellow/20 -mt-20 mb-10">
          🥄
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://i.imgur.com/vUjkyQW.png"
              alt="Chef Jomon"
              className="w-full h-auto"
            />
          </div>
          <div className="relative">
            <h3 className="text-3xl font-heading text-white">CHEF JOMON</h3>
            <p className="text-brand-yellow font-heading text-sm tracking-widest mb-6">Master Chef</p>
            <div className="space-y-4 text-brand-muted">
              <p>Craving your favorite South Indian dishes? Enjoy the rich, authentic flavors of The Tiffin Box from the comfort of your home. Orders online for a quick and easy delivery.</p>
              <p>We are prepared fresh and delivered fast, ensuring a delicious experience every time.</p>
            </div>
            <h4 className="text-4xl font-heading text-white/50 absolute bottom-0 right-0 -mb-12 opacity-50 md:opacity-100">
              Chef Jomon
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 8. Testimonials Section ---
const Testimonials = () => {
  const reviews = [
    { name: 'Anna Mathew', date: 'One day ago', text: "Bavette delivers an unforgettable steakhouse experience. The service and ambiance are second to none.", avatar: 'https://i.pravatar.cc/100?img=1' },
    { name: 'Dennis Tom', date: 'One day ago', text: "Bavette delivers an unforgettable steakhouse experience. The service and ambiance are second to none.", avatar: 'https://i.pravatar.cc/100?img=2' },
    { name: 'Mary Eliza', date: 'One day ago', text: "Bavette delivers an unforgettable steakhouse experience. The service and ambiance are second to none.", avatar: 'https://i.pravatar.cc/100?img=3' },
    { name: 'John Doe', date: 'Two days ago', text: "Absolutely fantastic! The flavors are incredible. We booked a private dining for our anniversary.", avatar: 'https://i.pravatar.cc/100?img=4' },
  ];

  return (
    <section className="py-24 bg-brand-dark">
      <div className="container mx-auto px-6">
        <SectionHeading sub="TESTIMONIAL" main="WHAT OUR CUSTOMERS SAYS" />
        <div className="flex overflow-x-auto space-x-8 md:grid md:grid-cols-4 md:space-x-0 md:gap-8 pb-4">
          {reviews.map((review) => (
            <div key={review.name} className="bg-brand-gray p-8 flex-shrink-0 w-4/5 md:w-full">
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
              </div>
              <p className="text-brand-muted mb-6">{review.text}</p>
              <div className="flex items-center">
                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="text-white font-bold">{review.name}</h4>
                  <p className="text-brand-muted text-sm">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 9. Locations Section ---
const Locations = () => {
  return (
    <section id="locations" className="bg-brand-gray grid grid-cols-1 md:grid-cols-2">
      <div className="flex items-center justify-center p-12 md:p-24">
        <div>
          <p className="text-brand-yellow font-heading text-sm tracking-widest mb-2">OUR LOCATIONS</p>
          <h2 className="text-4xl md:text-5xl font-heading text-white mb-8">
            FIND US AT THESE CONVENIENT LOCATIONS
          </h2>
          <CtaLink text="Our Store" href="#locations" />
        </div>
      </div>
      <div className="min-h-[400px] md:min-h-[600px] bg-gray-900 flex items-center justify-center relative">
        <img 
          src="https://i.imgur.com/gKHYfex.png" 
          alt="Map"
          className="w-full h-full object-cover" 
        />
      </div>
    </section>
  );
};

// --- 10. Community Section ---
const Community = () => {
  const images = [
    "https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/935949/pexels-photo-935949.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1325735/pexels-photo-1325735.jpeg?auto=compress&cs=tinysrgb&w=600"
  ];
  return (
    <section className="py-24 bg-brand-dark">
      <div className="container mx-auto px-6">
        <SectionHeading sub="INSTAGRAM" main="JOIN OUR COMMUNITY" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {images.map((src, index) => (
            <div key={index} className="aspect-square overflow-hidden group">
              <img 
                src={src}
                alt={`Community ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 11. Newsletter & Footer ---
const Footer = () => {
  return (
    <footer className="bg-brand-dark border-t border-gray-800 pt-24 pb-12">
      <div className="container mx-auto px-6">
        {/* Newsletter */}
        <div className="flex flex-col items-center text-center mb-20">
          <img 
            src="https://i.imgur.com/gSnP1kK.png"
            alt="The Tiffin Box Logo" 
            className="w-24 mb-6" 
          />
          <h2 className="text-3xl font-heading text-white mb-8">SUBSCRIBE TO OUR NEWSLETTER</h2>
          <form className="flex w-full max-w-lg border border-white">
            <input 
              type="email" 
              placeholder="EMAIL ADDRESS"
              className="flex-grow bg-transparent p-4 text-white placeholder-brand-muted focus:outline-none"
            />
            <button 
              type="submit"
              className="inline-flex items-center text-sm font-bold tracking-widest border-l border-white px-6 py-3 uppercase text-white hover:bg-white hover:text-brand-dark transition-colors duration-300"
            >
              Subscribe <ArrowRightIcon />
            </button>
          </form>
        </div>
        
        {/* Footer Info */}
        <div id="contact" className="text-center text-brand-muted mb-12">
          <p className="font-heading tracking-wider">CONTACT</p>
          <p>+44 7587 114100</p>
          <p>INFO@TIFFINBOX.CO.UK</p>
          <p>ALLERTON RD, LIVERPOOL L25 7RE</p>
        </div>
        
        {/* Footer Nav */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white uppercase font-heading tracking-wider">
          <a href="#menu" className="hover:text-brand-yellow">MENU</a>
          <span>|</span>
          <a href="#order" className="hover:text-brand-yellow">ORDER ONLINE</a>
          <span>|</span>
          <a href="#book" className="hover:text-brand-yellow">BOOK A TABLE</a>
          <span>|</span>
          <a href="#about" className="hover:text-brand-yellow">ABOUT US</a>
          <span>|</span>
          <a href="#contact" className="hover:text-brand-yellow">CONTACT</a>
        </nav>
      </div>
    </footer>
  );
};

// --- 12. Scroll To Top Button ---
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // This function will be called when the user scrolls
  const toggleVisibility = () => {
    // If the user scrolls down more than 300px, show the button
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // This function will be called when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // This makes the scroll smooth
    });
  };

  // This useEffect sets up the scroll event listener
  useEffect(() => {
    // Add the listener when the component mounts
    window.addEventListener('scroll', toggleVisibility);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 z-50 p-3
        bg-brand-yellow text-brand-dark rounded-full
        shadow-lg transition-all duration-300
        hover:bg-yellow-400 transform hover:scale-110
        ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `}
    >
      {/* This is the SVG for the UP arrow */}
      <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19V5m-7 7l7-7 7 7" />
      </svg>
    </button>
  );
};


// --- Main App Component ---
function App() {
  return (
    <div className="bg-brand-dark">
      <Header />
      <SocialIcons />
      <ScrollToTopButton />
      <main>
        <Hero />
        <About />
        <PopularDishes />
        <DualCta />
        <Specialties />
        <Chef />
        <Testimonials />
        <Locations />
        <Community />
      </main>
      <Footer />
    </div>
  );
}

export default App;