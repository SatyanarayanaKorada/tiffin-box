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
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
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
            src="https://raw.githubusercontent.com/SatyanarayanaKorada/tiffin-box/refs/heads/master/src/assets/logo.png" 
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
          src="https://raw.githubusercontent.com/SatyanarayanaKorada/tiffin-box/refs/heads/master/src/assets/dish.png"
          alt="Authentic Indian Cuisine"
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="w-full md:w-1/2">
          <img 
            src="https://raw.githubusercontent.com/SatyanarayanaKorada/tiffin-box/refs/heads/master/src/assets/logo.png"
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
            src="https://raw.githubusercontent.com/SatyanarayanaKorada/tiffin-box/refs/heads/master/src/assets/chefTeam.png"
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
              src="https://raw.githubusercontent.com/SatyanarayanaKorada/tiffin-box/refs/heads/master/src/assets/bookTable.png"
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
              src="https://raw.githubusercontent.com/SatyanarayanaKorada/tiffin-box/refs/heads/master/src/assets/OurSpecials.png"
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
          src="https://raw.githubusercontent.com/SatyanarayanaKorada/tiffin-box/refs/heads/master/src/assets/googleMap.png" 
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
            src="https://raw.githubusercontent.com/SatyanarayanaKorada/tiffin-box/refs/heads/master/src/assets/logo.png"
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