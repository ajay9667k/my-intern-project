import React, { useState } from "react";

const questions = [
  {
    question:
      "What are the benefits of using a cheap web hosting provider in India?",
    answer:
      "Choosing the best and cheap web hosting provider is one of the most crucial steps to successfully launch your business online. There are multiple benefits of using the services of cheap web hosting providers in India. Significantly, if your business is offering services in India, using a cheap web hosting provider in India is the best decision.",
    storng:"Benefits of using a cheap web hosting provider in India:" , 
    ul:[
      ["Low-Cost Plans"],["Flexible Payment Options"],["Money-Back Guarantee"],["Reliability"],["High Uptime Guarantee"],["Fast Server Response Time"],["Secure Servers"]
    ]
  },
  {
    question:
      "How do I choose the best cheap web hosting provider in India?",
    answer:
      "There are several web hosting providers in the market offering cheap web hosting services. This makes finding a cheap web hosting provider in India quite easy but finding one that offers the best hosting services in India isn’t. However, there are some criterias to keep in mind when choosing the best one",
    storng:"To help ease your search process, we list below these criteria:" ,
    ul:[
      ["Determine Your Hosting Needs"],["Website Size and Traffic"],["Technical Requirements"],["Scalability"],["Compare Plans and Pricing"],["Features and Add-Ons"],["Pricing and Payment Options"],["Contract Length and Renewal"]
    ],
    storng1:"Always look out for these criterias and choose the best web host for your business’s online website. Once you find a reliable and cheap web hosting provider that meets all your requirements, you are one step closer to launching your business online. You can also look out for SiteWorx’s range of web hosting services." ,
  },
   {
    question:
     "Web Hosting vs Domain Registration",
    answer:
      "Web Hosting and Domain Registration are the segments that work hand-in-hand. This is why it is vital to understand the difference between them if you are planning to build a successful website for your business.",
      diff:"Differences between Hosting and Domain",
    storng:"One of the main differences between web hosting and domain registration is that:" ,
    ul:[
      ["Hosting is an engine powering your website. It is also the place that stores all your website’s files."],["Domain is more of a permanent address that visitors use to find websites in the online world"],
    ],
    storng1:"To successfully run a website, you will need both hosting and domain in place. You can not build your website without a domain registration although you can have a domain before building your website." ,

  },
 

];

const questions1 = [
  {
    question:
      "What should I consider when selecting a cheap web hosting provider?",
    answer:
      "Selecting a web host is one of the important decisions if you want to build the right foundation for your business’s website. It is only with a reliable web hosting service that you can build an effective online presence. Selecting a hosting plan can be really confusing when you have multiple web hosting providers available in the market that are promising awesome features at cheap prices. That is the reason, we recommend having clear expectations before beginning this search process. If you choose the wrong web hosting provider, you may end up in unnecessary troubles and expenses.",
    storng:"" ,
    things:"Things to consider when selecting a cheap web hosting provider can include your objectives and budget. It must also include your website’s security needs, 24/7 support and features like uptime guarantee, server performance, efficient response time, intuitive dashboard and many more, needed to set up and maintain your website.",
    ul:[
      
    ]  
  },
  {
    question:
      "What are the most important features of a cheap web hosting plan?",
    answer:
      "Millions of new businesses are appearing online with each passing day. If you are also planning to expand your business by leveraging the potential of the Internet you can affordably do so with a web hosting company. There are a lot of things service providers promise to their customers to help them get the best hosting experience.",
    storng:"Here are some of the most important features of a cheap web hosting plan that you can expect with a web hosting company:" ,  
    ul:[
      ["Optimal Server Performance"],["99.9% Uptime Guarantee"],["Quick Server Response Time"],["Best Server Location 5. 24/7 Availability"],["Bespoke Customer Support"],["Multiple Support Channels"],["Advanced Security Features"]
    ],
    storng1:"Our goal at SiteWorx is to offer all these in our web hosting services. As a result, our customers get fast services with important features and 99.9% uptime at cheap prices.",
  },
  {
    question:
      "Why should I invest in a dedicated server in India?",
    answer:
      "The first suggestion every business owner gets is to choose shared hosting as it is cheap. But with a cheap price comes a few things that you have to compromise. You will be sharing this server with thousands of other businesses. This also compromises security. Whether you decide to build a small or large website for your business, data security is always one of its crucial aspects. And if you have important client information on your server, you need to have high security levels for your website.",
    storng:"Here are some of the most important features of a cheap web hosting plan that you can expect with a web hosting company:" ,  
    ul:[
      
    ],
    diff:"With dedicated server hosting in place, it becomes easy for your website to prevent possible malware and data breaches. As the server is priced comparatively high you will be getting better resources. You will also be the sole user on this server.",
    storng1:"Considering the benefits that your host will offer if you choose a dedicated server, you shouldn’t have any doubts on why to invest in a dedicated server in India.",
  },

];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
const [activeIndex1, setActiveIndex1] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

   const toggleAnswer1 = (index) => {
    setActiveIndex1(activeIndex1 === index ? null : index);
  };

  return (
    <div className="w-full p-6 bg-[#e2efff]">
      <h2 className="text-center text-cyan-600 text-lg font-medium">
        Do You Have
      </h2>
      <h1 className="text-center text-3xl font-bold mb-8">Any Questions?</h1>
      <div className="flex flex-col md:flex-row w-[80%] m-auto justify-center md:gap-5">
        <div className=" mt-10 space-y-4 font-sans w-full ">
          {questions.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <div key={index} className=" rounded shadow-sm ">
                <button
                  onClick={() => toggleAnswer(index)}
                  className="w-full flex justify-between items-center px-4 py-3 text-left bg-gray-100 rounded  transition"
                >
                  <span className="font-medium md:w-[500px] w-full  md:h-[30px]">Q: {item.question}</span>
                      <svg
              className={`w-7 h-5 rounded-sm  text-black transform transition-transform ${
                activeIndex === index ? 'rotate-180' : ''
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
                </button>
                {isActive && (
                  <>
                  <div className="px-4  transition-all duration-1000 py-3   text-gray-700">
                     {item.answer}
                     <p>{item.diff}</p>
                     <p className=" mt-4"> {item.storng}</p>
                     <p className="mt-4">{item.things}</p>
                      <ul className="list-disc">
                         {
                          item.ul.map((value)=>(
                             <li>{value}</li>
                          ))
                         }
                      </ul>

                     <p className="mt-6">{item.storng1}</p>
                      
                  </div>
                  
                  </>
                )}
              </div>
            );
          })}
        </div>

        <div className=" mt-10 space-y-4 font-sans w-full ">
          {questions1.map((item, index) => {
            const isActive = activeIndex1 === index;
            return (
              <div key={index} className=" rounded shadow-sm ">
                <button
                  onClick={() => toggleAnswer1(index)}
                  className="w-full flex justify-between items-center px-4 py-3 text-left bg-gray-100 rounded  transition"
                >
                  <span className="font-medium md:w-[500px]  w-full  md:h-[30px]">Q: {item.question}</span>
                  <svg
              className={`w-7 h-5 rounded-sm  transform transition-transform  ${
                activeIndex1 === index ? 'rotate-180' : ''
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
                </button>
                {isActive && (
                  <div className="px-4  transition-all duration-1000 py-3   text-gray-700">
                     {item.answer}
                     <p>{item.diff}</p>
                     <p className=" mt-4"> {item.storng}</p>
                     <p className="mt-4">{item.things}</p>
                      <ul className="list-disc">
                         {
                          item.ul.map((value)=>(
                             <li>{value}</li>
                          ))
                         }
                      </ul>

                     <p className="mt-6">{item.storng1}</p>
                      
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
