import React, { useState } from 'react';

// --- SVG Icons ---
// Using inline SVGs for performance and easy styling
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
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.053 1.905.24 2.49.446.58.205.975.47 1.48.976.504.504.77.898.976 1.48.206.585.394 1.32.446 2.49.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.053 1.17-.24 1.905-.446 2.49-.205.58-.47.975-.976 1.48-.504.504-.898.77-1.48.976-.585.206-1.32.394-2.49.446-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.053-1.905-.24-2.49-.446-.58-.205-.975-.47-1.48-.976-.504-.504-.77-.898-.976-1.48-.206-.585-.394-1.32-.446-2.49-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.053-1.17.24-1.905.446-2.49.205-.58.47.975.976-1.48.504-.504.898-.77 1.48-.976.585-.206 1.32.394 2.49.446C8.416 2.175 8.796 2.163 12 2.163m0-1.608c-3.264 0-3.66.014-4.944.072-1.28.058-2.16.25-2.924.518-.77.27-1.436.63-2.09 1.286-.656.656-1.017 1.32-1.286 2.09-.268.763-.46 1.643-.518 2.923-.058 1.284-.072 1.68-.072 4.944s.014 3.66.072 4.944c.058 1.28.25 2.16.518 2.923.27.77.63 1.436 1.286 2.09.656.656 1.32 1.017 2.09 1.286.763.268 1.643.46 2.923.518 1.284.058 1.68.072 4.944.072s3.66-.014 4.944-.072c1.28-.058 2.16-.25 2.923-.518.77-.27 1.436-.63 2.09-1.286.656-.656 1.017-1.32 1.286-2.09.268-.763.46-1.643.518-2.923.058-1.284.072-1.68.072-4.944s-.014-3.66-.072-4.944c-.058-1.28-.25-2.16-.518-2.923-.27-.77-.63-1.436-1.286-2.09-.656-.656-1.32-1.017-2.09-1.286-.763-.268-1.643-.46-2.923-.518C15.66.566 15.264.554 12 .554z" />
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
// This is a reusable component for all the "CTA" links
const CtaLink = ({ text }) => (
  <a
    href="#"
    className="inline-flex items-center text-sm font-bold tracking-widest border border-white px-6 py-3 uppercase text-white hover:bg-white hover:text-brand-dark transition-colors duration-300"
  >
    {text}
    <ArrowRightIcon />
  </a>
);

// Reusable component for section headings
const SectionHeading = ({ sub, main }) => (
  <div className="text-center mb-12">
    <p className="text-brand-yellow font-heading text-sm tracking-widest mb-2">{sub}</p>
    <h2 className="text-4xl md:text-5xl font-heading text-white">{main}</h2>
  </div>
);

// --- 1. Header Component ---
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 p-6 md:p-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Hamburger Menu (Mobile) */}
        <button className="md:hidden z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>

        {/* Logo */}
        <a href="/" className="z-50">
          {/* <img 
            src="./assets/logo.png" // Placeholder logo from the design
            alt="The Tiffin Box Logo" 
            className="w-20" 
          /> */}
          <svg width="86" height="106" viewBox="0 0 86 106" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM31.3982 15.5686L31.1988 23.7096C32.2831 22.1629 34.2559 21.2713 36.4572 21.3296C40.4282 21.4169 41.9151 23.4221 41.828 26.8357L41.5996 35.952L37.5125 35.8647L37.712 27.6655C37.741 26.0314 37.0556 24.9142 34.9993 24.856C33.0011 24.7977 31.6267 25.8895 31.0863 27.4944L30.8869 35.6645L26.7744 35.5772L27.2604 15.565H4.573V43.0594H85.4875V15.5686H31.3982ZM19.4852 35.8392C16.1125 35.7518 14.4008 33.9468 14.4552 31.1664L14.6257 23.9971L11.1116 23.5095L11.1696 21.1585L14.6837 21.2458L14.7707 17.603L18.8832 17.7194L18.7961 21.3623L23.623 21.4788L23.565 24.23L18.7381 24.1136L18.5677 30.7079C18.5387 31.8542 19.0246 32.8004 20.3664 32.8295C21.6792 32.8586 22.6801 32.6876 23.7391 32.3419L24.4535 35.3806C23.1407 35.6973 21.5124 35.8974 19.4815 35.8392H19.4852ZM59.772 30.2202L48.9142 29.9618C48.9722 31.7669 50.4011 33.0588 52.8562 33.117C54.4555 33.1461 56.0838 32.8586 57.2842 32.2873L58.8545 35.4971C57.2262 36.3268 55.1699 36.7308 52.6531 36.6726C47.5978 36.5561 44.6531 33.7211 44.7691 29.0156C44.8852 24.4557 47.6268 21.6171 52.6822 21.7626C57.6831 21.8791 59.8808 24.8305 59.7683 29.3905V30.2202H59.772ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889Z" fill="#FCB017"/>
<path d="M0.257482 46.3602L0.170446 56.8558H3.42704V53.1001H7.68456V56.8558H12.7145V59.7235H7.68456V66.5762C7.68456 67.7516 8.19952 68.7269 9.59935 68.7269C10.9992 68.7269 12.0001 68.5268 13.0844 68.1265L13.9113 71.2817C12.5404 71.6529 10.8541 71.9113 8.73987 71.9113C5.22579 71.9113 3.39803 70.0771 3.39803 67.1803V59.7526L0.141434 59.3814L0 73.8874L80.8565 75.2339L81.1139 47.7395L0.257482 46.3602ZM20.5695 71.42H16.312V56.8558H20.5695V71.42ZM20.5695 54.3592H16.312V50.0868H20.5695V54.3592ZM49.2007 53.6459C48.1418 53.2456 47.0575 53.0164 45.6867 53.0164C44.2288 53.0164 43.5724 54.079 43.5724 55.1963V56.8594H48.6277V59.7271H43.5978V71.4236H39.3693V59.7271H31.5107V71.4236H27.2822V59.7271L23.6267 59.3268V56.8594H27.2822V54.6213C27.2822 51.7244 29.226 49.8611 32.7691 49.8611C35.1408 49.8611 36.6277 50.0904 37.8824 50.5198L37.11 53.6751C36.051 53.2747 34.9667 53.0455 33.5959 53.0455C32.1381 53.0455 31.4817 54.1081 31.4817 55.2254V56.8885H39.3403V54.6504C39.3403 51.7535 41.2841 49.8903 44.8272 49.8903C47.1699 49.8903 48.6568 50.1195 49.9405 50.549L49.1971 53.6459H49.2007ZM55.5725 71.42H51.373V56.8558H55.5725V71.42ZM55.5725 54.3592H51.373V50.0868H55.5725V54.3592ZM75.8845 71.42H71.656V62.9333C71.656 61.241 70.8836 60.0947 68.7693 60.0947C66.6551 60.0947 65.3133 61.241 64.7693 62.9333V71.42H60.5118V56.8558H63.7104L64.1093 59.2358C65.2226 57.5727 67.4819 56.3972 69.8537 56.3972C74.0531 56.3972 75.8809 58.4315 75.8809 61.958V71.42H75.8845Z" fill="#FCB017"/>
<path d="M51.9424 91.3485C52.0294 93.6121 50.742 95.4499 48.1708 95.5336C45.6286 95.6209 44.1998 93.8413 44.1127 91.6068C44.0547 89.3687 45.3711 87.5054 47.9133 87.4217C50.4845 87.3344 51.8843 89.114 51.9424 91.3485Z" fill="#FCB017"/>
<path d="M25.6865 78.502L25.944 86.8758C26.9739 85.3292 28.4571 84.3247 30.7708 84.2665C35.2278 84.1246 37.7119 87.4508 37.828 91.8361C37.9694 96.1668 35.8008 99.6641 31.1407 99.806C28.5986 99.8934 26.6838 98.8598 25.5414 97.1676L25.3129 99.5185L22.2848 99.6059L21.6284 78.502H3.91296V105.996H84.7984V78.502H25.6865ZM48.3122 99.231C43.1408 99.4021 40.2541 96.4798 40.1127 91.7197C39.9713 86.9595 42.6839 83.8625 47.8553 83.7206C53.0267 83.5496 55.8843 86.4719 56.0258 91.232C56.1418 95.9921 53.4546 99.0891 48.3122 99.231ZM70.0277 98.1138L65.6287 92.866H65.3423L61.2552 98.3722L58.2851 98.4595L58.198 95.2497L62.1401 90.8899L58.198 87.0469L58.0566 83.8371L61.0557 83.7497L65.1682 88.7682H65.4547L69.2552 83.5205L72.2544 83.4331L72.3704 86.672L68.6279 90.7443L72.8274 94.8458L72.9434 98.0847L70.0277 98.1138ZM76.715 97.9136L76.5989 93.8122L80.4575 93.6958L80.5736 97.7681L76.715 97.91V97.9136Z" fill="#FCB017"/>
<path d="M65.7702 12.2715H62.0567V6.82357C62.0567 5.10221 60.6858 3.72658 58.9705 3.72658H29.7409C28.0256 3.72658 26.6548 5.10221 26.6548 6.82357V12.2715H22.9412V6.30679C22.9412 2.80949 25.7699 0 29.2259 0H59.4818C62.9669 0 65.7666 2.8386 65.7666 6.30679V12.2715H65.7702Z" fill="#FCB017"/>
<path d="M33.799 91.9198C33.857 94.1834 32.5406 96.0212 29.9694 96.1049H29.4254C29.1099 96.0758 28.798 96.0176 28.5115 95.9339C28.4245 95.9048 28.3121 95.8757 28.225 95.8465C28.138 95.8174 28.0546 95.7592 27.9386 95.7301C26.6258 95.0714 25.7953 93.6958 25.7953 92.0872C25.7953 89.8491 27.4526 88.044 29.5959 88.044H29.7119C32.2831 87.9021 33.7119 89.6489 33.799 91.9162V91.9198Z" fill="#FCB017"/>
<path d="M29.4 96.0795C29.0845 96.0795 28.7726 96.0212 28.4861 95.9084C28.7726 95.9958 29.0845 96.0503 29.4 96.0795Z" fill="#FCB017"/>
</svg>

        </a>

        {/* "View Menu" Button (Desktop) */}
        <a 
          href="#" 
          className="hidden md:inline-block bg-brand-yellow text-brand-dark px-6 py-2 font-bold text-sm tracking-wider hover:bg-yellow-400 transition-colors"
        >
          View Menu
        </a>

        {/* "View Menu" Button (Mobile) */}
        <a 
          href="#" 
          className="md:hidden bg-brand-yellow text-brand-dark px-6 py-2 font-bold text-sm tracking-wider"
        >
          View Menu
        </a>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-brand-dark flex flex-col items-center justify-center space-y-8 z-40">
          <a href="#" className="text-2xl font-heading text-white">MENU</a>
          <a href="#" className="text-2xl font-heading text-white">ORDER ONLINE</a>
          <a href="#" className="text-2xl font-heading text-white">BOOK A TABLE</a>
          <a href="#" className="text-2xl font-heading text-white">ABOUT US</a>
          <a href="#" className="text-2xl font-heading text-white">CONTACT</a>
        </div>
      )}
    </header>
  );
};

// --- 1.1 Floating Social Icons ---
const SocialIcons = () => (
  <div className="hidden md:flex flex-col space-y-4 fixed top-1/2 -translate-y-1/2 right-8 z-50">
    <a href="https://www.instagram.com" className="text-white hover:text-brand-yellow transition-colors">
      <InstagramIcon />
    </a>
    <a href="https://www.facebook.com" className="text-white hover:text-brand-yellow transition-colors">
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
        {/* Gradient Overlay for Text */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark to-transparent"></div>
      </div>
      
      {/* Background Image (Right Half) - Placeholder */}
      <div className="absolute top-0 right-0 w-1/2 h-full hidden md:block">
        <img 
          src="./assets/image.png"
          alt="Authentic Indian Cuisine"
          className="w-full h-full object-cover" 
        />
        
        {/* Dark overlay for the image */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl md:text-7xl font-heading text-white leading-tight">
            AUTHENTIC SOUTH INDIAN CUISINE
          </h1>
          <div className="mt-10">
            <CtaLink text="Order Now" />
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 3. About Section ---
const About = () => {
  return (
    <section className="bg-brand-dark">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2">
        {/* Image Side - Placeholder */}
        <div className="min-h-[300px] md:min-h-[500px]">
          <img 
            src="https://images.pexels.com/photos/1683989/pexels-photo-1683989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Chef and team"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Text Side */}
        <div className="flex items-center justify-center p-12 md:p-24 bg-brand-yellow text-brand-dark">
          <div>
            <p className="font-heading text-sm tracking-widest mb-2">ABOUT US</p>
            <h2 className="text-4xl md:text-5xl font-heading mb-8">
              EXPERIENCE AUTHENTIC SOUTH INDIAN FLAVORS
            </h2>
            <a
              href="#"
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
    <section className="py-24 bg-brand-dark relative">
      {/* Faint background logo */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden z-0">
       <svg width="86" height="106" viewBox="0 0 86 106" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM31.3982 15.5686L31.1988 23.7096C32.2831 22.1629 34.2559 21.2713 36.4572 21.3296C40.4282 21.4169 41.9151 23.4221 41.828 26.8357L41.5996 35.952L37.5125 35.8647L37.712 27.6655C37.741 26.0314 37.0556 24.9142 34.9993 24.856C33.0011 24.7977 31.6267 25.8895 31.0863 27.4944L30.8869 35.6645L26.7744 35.5772L27.2604 15.565H4.573V43.0594H85.4875V15.5686H31.3982ZM19.4852 35.8392C16.1125 35.7518 14.4008 33.9468 14.4552 31.1664L14.6257 23.9971L11.1116 23.5095L11.1696 21.1585L14.6837 21.2458L14.7707 17.603L18.8832 17.7194L18.7961 21.3623L23.623 21.4788L23.565 24.23L18.7381 24.1136L18.5677 30.7079C18.5387 31.8542 19.0246 32.8004 20.3664 32.8295C21.6792 32.8586 22.6801 32.6876 23.7391 32.3419L24.4535 35.3806C23.1407 35.6973 21.5124 35.8974 19.4815 35.8392H19.4852ZM59.772 30.2202L48.9142 29.9618C48.9722 31.7669 50.4011 33.0588 52.8562 33.117C54.4555 33.1461 56.0838 32.8586 57.2842 32.2873L58.8545 35.4971C57.2262 36.3268 55.1699 36.7308 52.6531 36.6726C47.5978 36.5561 44.6531 33.7211 44.7691 29.0156C44.8852 24.4557 47.6268 21.6171 52.6822 21.7626C57.6831 21.8791 59.8808 24.8305 59.7683 29.3905V30.2202H59.772ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889Z" fill="#FCB017"/>
<path d="M0.257482 46.3602L0.170446 56.8558H3.42704V53.1001H7.68456V56.8558H12.7145V59.7235H7.68456V66.5762C7.68456 67.7516 8.19952 68.7269 9.59935 68.7269C10.9992 68.7269 12.0001 68.5268 13.0844 68.1265L13.9113 71.2817C12.5404 71.6529 10.8541 71.9113 8.73987 71.9113C5.22579 71.9113 3.39803 70.0771 3.39803 67.1803V59.7526L0.141434 59.3814L0 73.8874L80.8565 75.2339L81.1139 47.7395L0.257482 46.3602ZM20.5695 71.42H16.312V56.8558H20.5695V71.42ZM20.5695 54.3592H16.312V50.0868H20.5695V54.3592ZM49.2007 53.6459C48.1418 53.2456 47.0575 53.0164 45.6867 53.0164C44.2288 53.0164 43.5724 54.079 43.5724 55.1963V56.8594H48.6277V59.7271H43.5978V71.4236H39.3693V59.7271H31.5107V71.4236H27.2822V59.7271L23.6267 59.3268V56.8594H27.2822V54.6213C27.2822 51.7244 29.226 49.8611 32.7691 49.8611C35.1408 49.8611 36.6277 50.0904 37.8824 50.5198L37.11 53.6751C36.051 53.2747 34.9667 53.0455 33.5959 53.0455C32.1381 53.0455 31.4817 54.1081 31.4817 55.2254V56.8885H39.3403V54.6504C39.3403 51.7535 41.2841 49.8903 44.8272 49.8903C47.1699 49.8903 48.6568 50.1195 49.9405 50.549L49.1971 53.6459H49.2007ZM55.5725 71.42H51.373V56.8558H55.5725V71.42ZM55.5725 54.3592H51.373V50.0868H55.5725V54.3592ZM75.8845 71.42H71.656V62.9333C71.656 61.241 70.8836 60.0947 68.7693 60.0947C66.6551 60.0947 65.3133 61.241 64.7693 62.9333V71.42H60.5118V56.8558H63.7104L64.1093 59.2358C65.2226 57.5727 67.4819 56.3972 69.8537 56.3972C74.0531 56.3972 75.8809 58.4315 75.8809 61.958V71.42H75.8845Z" fill="#FCB017"/>
<path d="M51.9424 91.3485C52.0294 93.6121 50.742 95.4499 48.1708 95.5336C45.6286 95.6209 44.1998 93.8413 44.1127 91.6068C44.0547 89.3687 45.3711 87.5054 47.9133 87.4217C50.4845 87.3344 51.8843 89.114 51.9424 91.3485Z" fill="#FCB017"/>
<path d="M25.6865 78.502L25.944 86.8758C26.9739 85.3292 28.4571 84.3247 30.7708 84.2665C35.2278 84.1246 37.7119 87.4508 37.828 91.8361C37.9694 96.1668 35.8008 99.6641 31.1407 99.806C28.5986 99.8934 26.6838 98.8598 25.5414 97.1676L25.3129 99.5185L22.2848 99.6059L21.6284 78.502H3.91296V105.996H84.7984V78.502H25.6865ZM48.3122 99.231C43.1408 99.4021 40.2541 96.4798 40.1127 91.7197C39.9713 86.9595 42.6839 83.8625 47.8553 83.7206C53.0267 83.5496 55.8843 86.4719 56.0258 91.232C56.1418 95.9921 53.4546 99.0891 48.3122 99.231ZM70.0277 98.1138L65.6287 92.866H65.3423L61.2552 98.3722L58.2851 98.4595L58.198 95.2497L62.1401 90.8899L58.198 87.0469L58.0566 83.8371L61.0557 83.7497L65.1682 88.7682H65.4547L69.2552 83.5205L72.2544 83.4331L72.3704 86.672L68.6279 90.7443L72.8274 94.8458L72.9434 98.0847L70.0277 98.1138ZM76.715 97.9136L76.5989 93.8122L80.4575 93.6958L80.5736 97.7681L76.715 97.91V97.9136Z" fill="#FCB017"/>
<path d="M65.7702 12.2715H62.0567V6.82357C62.0567 5.10221 60.6858 3.72658 58.9705 3.72658H29.7409C28.0256 3.72658 26.6548 5.10221 26.6548 6.82357V12.2715H22.9412V6.30679C22.9412 2.80949 25.7699 0 29.2259 0H59.4818C62.9669 0 65.7666 2.8386 65.7666 6.30679V12.2715H65.7702Z" fill="#FCB017"/>
<path d="M33.799 91.9198C33.857 94.1834 32.5406 96.0212 29.9694 96.1049H29.4254C29.1099 96.0758 28.798 96.0176 28.5115 95.9339C28.4245 95.9048 28.3121 95.8757 28.225 95.8465C28.138 95.8174 28.0546 95.7592 27.9386 95.7301C26.6258 95.0714 25.7953 93.6958 25.7953 92.0872C25.7953 89.8491 27.4526 88.044 29.5959 88.044H29.7119C32.2831 87.9021 33.7119 89.6489 33.799 91.9162V91.9198Z" fill="#FCB017"/>
<path d="M29.4 96.0795C29.0845 96.0795 28.7726 96.0212 28.4861 95.9084C28.7726 95.9958 29.0845 96.0503 29.4 96.0795Z" fill="#FCB017"/>
</svg>

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
        {/* Box 1: Online Order */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 mb-20">
          <div className="text-center md:text-left">
            <p className="text-brand-yellow font-heading text-sm tracking-widest mb-2">ONLINE ORDER</p>
            <h2 className="text-4xl md:text-5xl font-heading text-white mb-6">
              FRESH SOUTH INDIAN FLAVORS DELIVERED!
            </h2>
            <p className="text-brand-muted mb-8 max-w-md mx-auto md:mx-0">
              Craving your favorite South Indian dishes? Enjoy the rich, authentic flavors of The Tiffin Box from the comfort of your home.
            </p>
            <CtaLink text="Order Online" />
          </div>
          <div className="relative h-64 md:h-96">
            {/* Placeholder for line art */}
            <p className="text-9xl text-gray-700 text-center opacity-30">🛵</p>
            <div className="absolute top-10 right-20 w-24 h-24 rounded-full overflow-hidden">
                <img src="https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Food item" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        
        {/* Box 2: Book Table */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Image first on mobile, text first on desktop */}
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
            <CtaLink text="Book Table" />
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 6. Specialties Section ---
// This is a complex layout, simplified for responsiveness
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
          
          {/* Center Image - Placeholder */}
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
        
        {/* Decorative Spoon - Placeholder */}
        <div className="text-center text-7xl text-brand-yellow/20 -mt-20 mb-10">
          🥄
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://i.imgur.com/vUjkyQW.png" // Placeholder image of chef from design
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
        
        {/* On mobile, this will scroll horizontally */}
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
    <section className="bg-brand-gray grid grid-cols-1 md:grid-cols-2">
      <div className="flex items-center justify-center p-12 md:p-24">
        <div>
          <p className="text-brand-yellow font-heading text-sm tracking-widest mb-2">OUR LOCATIONS</p>
          <h2 className="text-4xl md:text-5xl font-heading text-white mb-8">
            FIND US AT THESE CONVENIENT LOCATIONS
          </h2>
          <CtaLink text="Our Store" />
        </div>
      </div>
      {/* Placeholder for map */}
      <div className="min-h-[400px] md:min-h-[600px] bg-gray-900 flex items-center justify-center relative">
        <img 
          src="https://i.imgur.com/gKHYfex.png" // Placeholder map from design
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
          <svg width="86" height="106" viewBox="0 0 86 106" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM31.3982 15.5686L31.1988 23.7096C32.2831 22.1629 34.2559 21.2713 36.4572 21.3296C40.4282 21.4169 41.9151 23.4221 41.828 26.8357L41.5996 35.952L37.5125 35.8647L37.712 27.6655C37.741 26.0314 37.0556 24.9142 34.9993 24.856C33.0011 24.7977 31.6267 25.8895 31.0863 27.4944L30.8869 35.6645L26.7744 35.5772L27.2604 15.565H4.573V43.0594H85.4875V15.5686H31.3982ZM19.4852 35.8392C16.1125 35.7518 14.4008 33.9468 14.4552 31.1664L14.6257 23.9971L11.1116 23.5095L11.1696 21.1585L14.6837 21.2458L14.7707 17.603L18.8832 17.7194L18.7961 21.3623L23.623 21.4788L23.565 24.23L18.7381 24.1136L18.5677 30.7079C18.5387 31.8542 19.0246 32.8004 20.3664 32.8295C21.6792 32.8586 22.6801 32.6876 23.7391 32.3419L24.4535 35.3806C23.1407 35.6973 21.5124 35.8974 19.4815 35.8392H19.4852ZM59.772 30.2202L48.9142 29.9618C48.9722 31.7669 50.4011 33.0588 52.8562 33.117C54.4555 33.1461 56.0838 32.8586 57.2842 32.2873L58.8545 35.4971C57.2262 36.3268 55.1699 36.7308 52.6531 36.6726C47.5978 36.5561 44.6531 33.7211 44.7691 29.0156C44.8852 24.4557 47.6268 21.6171 52.6822 21.7626C57.6831 21.8791 59.8808 24.8305 59.7683 29.3905V30.2202H59.772ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889ZM52.5407 25.0889C50.256 25.0307 49.0556 26.4063 48.9106 27.7273L55.7973 27.8984C55.8263 26.5519 54.7384 25.118 52.5407 25.0889Z" fill="#FCB017"/>
<path d="M0.257482 46.3602L0.170446 56.8558H3.42704V53.1001H7.68456V56.8558H12.7145V59.7235H7.68456V66.5762C7.68456 67.7516 8.19952 68.7269 9.59935 68.7269C10.9992 68.7269 12.0001 68.5268 13.0844 68.1265L13.9113 71.2817C12.5404 71.6529 10.8541 71.9113 8.73987 71.9113C5.22579 71.9113 3.39803 70.0771 3.39803 67.1803V59.7526L0.141434 59.3814L0 73.8874L80.8565 75.2339L81.1139 47.7395L0.257482 46.3602ZM20.5695 71.42H16.312V56.8558H20.5695V71.42ZM20.5695 54.3592H16.312V50.0868H20.5695V54.3592ZM49.2007 53.6459C48.1418 53.2456 47.0575 53.0164 45.6867 53.0164C44.2288 53.0164 43.5724 54.079 43.5724 55.1963V56.8594H48.6277V59.7271H43.5978V71.4236H39.3693V59.7271H31.5107V71.4236H27.2822V59.7271L23.6267 59.3268V56.8594H27.2822V54.6213C27.2822 51.7244 29.226 49.8611 32.7691 49.8611C35.1408 49.8611 36.6277 50.0904 37.8824 50.5198L37.11 53.6751C36.051 53.2747 34.9667 53.0455 33.5959 53.0455C32.1381 53.0455 31.4817 54.1081 31.4817 55.2254V56.8885H39.3403V54.6504C39.3403 51.7535 41.2841 49.8903 44.8272 49.8903C47.1699 49.8903 48.6568 50.1195 49.9405 50.549L49.1971 53.6459H49.2007ZM55.5725 71.42H51.373V56.8558H55.5725V71.42ZM55.5725 54.3592H51.373V50.0868H55.5725V54.3592ZM75.8845 71.42H71.656V62.9333C71.656 61.241 70.8836 60.0947 68.7693 60.0947C66.6551 60.0947 65.3133 61.241 64.7693 62.9333V71.42H60.5118V56.8558H63.7104L64.1093 59.2358C65.2226 57.5727 67.4819 56.3972 69.8537 56.3972C74.0531 56.3972 75.8809 58.4315 75.8809 61.958V71.42H75.8845Z" fill="#FCB017"/>
<path d="M51.9424 91.3485C52.0294 93.6121 50.742 95.4499 48.1708 95.5336C45.6286 95.6209 44.1998 93.8413 44.1127 91.6068C44.0547 89.3687 45.3711 87.5054 47.9133 87.4217C50.4845 87.3344 51.8843 89.114 51.9424 91.3485Z" fill="#FCB017"/>
<path d="M25.6865 78.502L25.944 86.8758C26.9739 85.3292 28.4571 84.3247 30.7708 84.2665C35.2278 84.1246 37.7119 87.4508 37.828 91.8361C37.9694 96.1668 35.8008 99.6641 31.1407 99.806C28.5986 99.8934 26.6838 98.8598 25.5414 97.1676L25.3129 99.5185L22.2848 99.6059L21.6284 78.502H3.91296V105.996H84.7984V78.502H25.6865ZM48.3122 99.231C43.1408 99.4021 40.2541 96.4798 40.1127 91.7197C39.9713 86.9595 42.6839 83.8625 47.8553 83.7206C53.0267 83.5496 55.8843 86.4719 56.0258 91.232C56.1418 95.9921 53.4546 99.0891 48.3122 99.231ZM70.0277 98.1138L65.6287 92.866H65.3423L61.2552 98.3722L58.2851 98.4595L58.198 95.2497L62.1401 90.8899L58.198 87.0469L58.0566 83.8371L61.0557 83.7497L65.1682 88.7682H65.4547L69.2552 83.5205L72.2544 83.4331L72.3704 86.672L68.6279 90.7443L72.8274 94.8458L72.9434 98.0847L70.0277 98.1138ZM76.715 97.9136L76.5989 93.8122L80.4575 93.6958L80.5736 97.7681L76.715 97.91V97.9136Z" fill="#FCB017"/>
<path d="M65.7702 12.2715H62.0567V6.82357C62.0567 5.10221 60.6858 3.72658 58.9705 3.72658H29.7409C28.0256 3.72658 26.6548 5.10221 26.6548 6.82357V12.2715H22.9412V6.30679C22.9412 2.80949 25.7699 0 29.2259 0H59.4818C62.9669 0 65.7666 2.8386 65.7666 6.30679V12.2715H65.7702Z" fill="#FCB017"/>
<path d="M33.799 91.9198C33.857 94.1834 32.5406 96.0212 29.9694 96.1049H29.4254C29.1099 96.0758 28.798 96.0176 28.5115 95.9339C28.4245 95.9048 28.3121 95.8757 28.225 95.8465C28.138 95.8174 28.0546 95.7592 27.9386 95.7301C26.6258 95.0714 25.7953 93.6958 25.7953 92.0872C25.7953 89.8491 27.4526 88.044 29.5959 88.044H29.7119C32.2831 87.9021 33.7119 89.6489 33.799 91.9162V91.9198Z" fill="#FCB017"/>
<path d="M29.4 96.0795C29.0845 96.0795 28.7726 96.0212 28.4861 95.9084C28.7726 95.9958 29.0845 96.0503 29.4 96.0795Z" fill="#FCB017"/>
</svg>

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
        <div className="text-center text-brand-muted mb-12">
          <p className="font-heading tracking-wider">CONTACT</p>
          <p>+44 7587 114100</p>
          <p>INFO@TIFFINBOX.CO.UK</p>
          <p>ALLERTON RD, LIVERPOOL L25 7RE</p>
        </div>
        
        {/* Footer Nav */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white uppercase font-heading tracking-wider">
          <a href="#" className="hover:text-brand-yellow">MENU</a>
          <span>|</span>
          <a href="#" className="hover:text-brand-yellow">ORDER ONLINE</a>
          <span>|</span>
          <a href="#" className="hover:text-brand-yellow">BOOK A TABLE</a>
          <span>|</span>
          <a href="#" className="hover:text-brand-yellow">ABOUT US</a>
          <span>|</span>
          <a href="#" className="hover:text-brand-yellow">CONTACT</a>
        </nav>
      </div>
    </footer>
  );
};

// --- Main App Component ---
function App() {
  return (
    <div className="bg-brand-dark">
      <Header />
      <SocialIcons />
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