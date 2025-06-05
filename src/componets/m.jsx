import React from 'react';

// Custom SVG Icons matching the image
const SpeedIcon = () => (
  <svg className="feature-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="28" stroke="#4A9B8E" strokeWidth="3" fill="none"/>
    <circle cx="32" cy="32" r="3" fill="#4A9B8E"/>
    <path d="M32 32L45 19" stroke="#4A9B8E" strokeWidth="3" strokeLinecap="round"/>
    <path d="M16 45c6-12 10-18 16-18s10 6 16 18" stroke="#4A9B8E" strokeWidth="2" fill="none"/>
    <path d="M20 28c2-4 4-6 6-6s4 2 6 6" stroke="#4A9B8E" strokeWidth="2" fill="none"/>
  </svg>
);

const SupportIcon = () => (
  <svg className="feature-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="26" r="12" stroke="#4A9B8E" strokeWidth="3" fill="none"/>
    <path d="M12 56c0-12 9-20 20-20s20 8 20 20" stroke="#4A9B8E" strokeWidth="3" fill="none"/>
    <path d="M46 20c0-4 3-7 7-7s7 3 7 7-3 7-7 7" stroke="#4A9B8E" strokeWidth="2" fill="none"/>
    <rect x="48" y="24" width="12" height="8" rx="1" stroke="#4A9B8E" strokeWidth="2" fill="none"/>
  </svg>
);

const ControlPanelIcon = () => (
  <svg className="feature-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="28" stroke="#4A9B8E" strokeWidth="3" fill="none"/>
    <path d="M20 20c0-4 4-8 8-8h8c4 0 8 4 8 8v8c0 4-4 8-8 8h-8c-4 0-8-4-8-8v-8z" stroke="#4A9B8E" strokeWidth="2" fill="none"/>
    <circle cx="28" cy="24" r="2" fill="#4A9B8E"/>
    <circle cx="36" cy="24" r="2" fill="#4A9B8E"/>
    <path d="M26 30h12" stroke="#4A9B8E" strokeWidth="2" strokeLinecap="round"/>
    <path d="M24 45c4-6 8-9 8-9s4 3 8 9" stroke="#4A9B8E" strokeWidth="2" fill="none"/>
  </svg>
);

const SecurityIcon = () => (
  <svg className="feature-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 8L16 16v16c0 12 7 22 16 26 9-4 16-14 16-26V16L32 8z" stroke="#4A9B8E" strokeWidth="3" fill="none"/>
    <circle cx="32" cy="30" r="12" stroke="#4A9B8E" strokeWidth="2" fill="none"/>
    <path d="M26 30l4 4 8-8" stroke="#4A9B8E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LayersIcon = () => (
  <svg className="feature-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 24L32 16l20 8-20 8-20-8z" stroke="#4A9B8E" strokeWidth="3" fill="none"/>
    <path d="M12 32l20 8 20-8" stroke="#4A9B8E" strokeWidth="3" fill="none"/>
    <path d="M12 40l20 8 20-8" stroke="#4A9B8E" strokeWidth="3" fill="none"/>
    <circle cx="32" cy="24" r="2" fill="#4A9B8E"/>
    <circle cx="32" cy="32" r="2" fill="#4A9B8E"/>
    <circle cx="32" cy="40" r="2" fill="#4A9B8E"/>
  </svg>
);

const ServicesIcon = () => (
  <svg className="feature-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="16" y="20" width="32" height="24" rx="2" stroke="#4A9B8E" strokeWidth="3" fill="none"/>
    <path d="M20 28h24m-24 6h20m-20 6h16" stroke="#4A9B8E" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="44" y="16" r="6" stroke="#4A9B8E" strokeWidth="2" fill="none"/>
    <path d="M41 13l2 2 4-4" stroke="#4A9B8E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="24" y="12" width="4" height="8" fill="#4A9B8E" opacity="0.3"/>
  </svg>
);

export default function SiteWorxFeaturesSection() {
  const features = [
    {
      icon: <SpeedIcon />,
      title: "Superfast website speed and uptime",
      description: "SiteWorx's web hosting uses advanced server technology and resources to let you experience the best performance, irrespective of what web hosting plan you choose with us."
    },
    {
      icon: <SupportIcon />,
      title: "24/7 Customer Support", 
      description: "SiteWorx is best known among its users for its multi-channeled customer support. Our customer support team is available 24/7 on these platforms to ensure that the users get support through email, phone and live chat."
    },
    {
      icon: <ControlPanelIcon />,
      title: "Intuitive Control Panel",
      description: "SiteWorx provides you cPanel to efficiently help you manage your web hosting account. Our users consider it as one of our user-friendly options because its UI makes it easier to navigate and monitor their usage."
    },
    {
      icon: <SecurityIcon />,
      title: "Built-in Security Features",
      description: "Without robust security your business's website and data can be easily misused by cyber criminals. SiteWorx's every plan offers built-in security features to protect your website from all potential threats by default."
    },
    {
      icon: <LayersIcon />,
      title: "Cost-effective Services",
      description: "With SiteWorx, you get the best services at a price that is hard to beat. You won't even have to stress about getting unpleasant surprises such as hidden costs or unreliable services. We promise!"
    },
    {
      icon: <ServicesIcon />,
      title: "Offer Services",
      description: "Most of the services offered by a cheap web hosting provider www.siteworx.com aren't helpful for small scale businesses, or the large-scale companies looking for long-term web hosting solutions. This is one of the reasons SiteWorx offers different types of web hosting plans."
    }
  ];

  return (
    <>
      <style jsx>{`
        .features-container {
          background-color: #f8f9fa;
          padding: 40px 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .feature-card {
          background: white;
          border-radius: 12px;
          padding: 30px 25px;
          text-align: center;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          border: 1px solid #e9ecef;
        }
        
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
        }
        
        .icon-container {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
        }
        
        .feature-icon {
          width: 64px;
          height: 64px;
          padding: 12px;
          background: linear-gradient(135deg, #e8f5f3 0%, #d4f1ed 100%);
          border-radius: 50%;
          border: 2px solid #b8e6df;
        }
        
        .feature-title {
          font-size: 18px;
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 15px;
          line-height: 1.3;
          letter-spacing: -0.02em;
        }
        
        .feature-description {
          font-size: 14px;
          color: #6c757d;
          line-height: 1.6;
          margin: 0;
          text-align: left;
        }
        
        @media (max-width: 768px) {
          .features-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .feature-card {
            padding: 25px 20px;
          }
          
          .feature-title {
            font-size: 16px;
          }
          
          .feature-description {
            font-size: 13px;
          }
        }
        
        @media (min-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>

      <div className="features-container mt-[100px]">
       <div className='h-[250px] w-full bg-slate-50 mb-10'>
            <p className="text-center text-4xl text-[#115256]  font-serif ">The SiteWorx Advantage for Web Hosting Services in India</p>
               <p className="m-auto  text-center w-[80%] text-black text-md font-serif mt-3">SiteWorx offers the best and cheap web hosting solutions with the backend handled by professionals with industry expertise. Our web hosting combines one of the best features in every package.  But why should you choose SiteWorx advantage? Here the all the features that make us stand out:</p>
               <p className='text-center text-[#1A1C26] font-serif mt-3'>Build For Speed</p>
               <p className="text-center text-[#1A1C26] text-4xl font-serif mt-3">Why SiteWorx for web hosting service in India?</p>
       </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="icon-container">
                {feature.icon}
              </div>
              <h3 className="feature-title">
                {feature.title}
              </h3>
              <p className="feature-description">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}