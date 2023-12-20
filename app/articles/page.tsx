import React from 'react';

const Page = () => {
    const articlesData = [
        {
            title: "Crafting a Personalized Expense Dashboard for Banking Professionals",
            date: "March 2023",
            content: `
            I crafted a personalized Expense Dashboard tailored for a banking professional. This dynamic dashboard was developed using the MERN stack, utilizing MongoDB, ExpressJS, ReactJS, and NodeJS to ensure robust functionality and a user-friendly experience.
          `,
        },
        {
            title: "Hackathon Mentorship: Nurturing Innovation at VIT Vellore",
            date: "June 2023",
            content: `
            I served as a mentor at an innovative Hackathon co-hosted by the Entrepreneurship Cell (E-Cell) and ISTE at VIT. My role involved advising participants on enhancing the feasibility and stability of their projects.
          `,
        },
        {
            title: "Revolutionizing Feedback: Enhancing Employee Engagement at Claas",
            date: "August - October 2023",
            content: `
            During my tenure at Claas, I played a pivotal role in creating a robust feedback system. This system empowers employees to provide suggestions for improving company processes. Approved suggestions are rewarded, fostering a culture of innovation and continuous improvement within the organization.
          `,
        },
        {
            title: "Unmasking the Shadows: A Dive into Online Payment Fraud Detection with Machine Learning",
            date: "August - October 2023",
            content: `
            In the realm of technology and data, the battle against online payment fraud has become an intricate dance between security measures and evolving deceptive tactics. My foray into this dynamic landscape involved harnessing the power of machine learning to detect and combat fraudulent activities.
          `,
        },
        {
            title: "Internship at MTAB Technology Center: Elevating Landing Page, SEO, and Marketing Automation",
            date: "November 2023",
            content: `
              During my internship at MTAB Technology Center, I focused on enhancing their landing page and SEO strategies. Additionally, I actively contributed to the implementation of marketing automation for their software, streamlining and optimizing the marketing processes.
            `,
        },
        {
            title: "CollabJunction: Spearheading Technical Initiatives Remotely",
            date: "May 2023 - Now",
            content: `
            I currently hold the position of Technical Head at CollabJunction, a company dedicated to facilitating collaboration among businesses, colleges and artists. My role involves spearheading technical initiatives to enhance collaborative capabilities.
          `,
        },
    ];

    return (
        <div className='md:pt-16 pt-0 space-y-10'>
            <div>
                <div className="max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl sm:leading-[60px]">
                        Exploring My Recent Endeavors in Tech
                    </h1>
                    <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                        Journey with me through the highlights of my recent projects and experiences. From mentoring at innovative hackathons to spearheading technical initiatives, I've been actively shaping my path in the tech world. Delve into the details of my endeavors and let's continue building and innovating together!
                    </p>
                </div>
            </div>

            <div>
                <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
                    <div className="flex max-w-3xl flex-col space-y-16">
                        {articlesData.map((article, index) => (
                            <article key={index} className="md:grid md:grid-cols-4 md:items-baseline">
                                <div className="md:col-span-3 group relative flex flex-col items-start">
                                    <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 md:ml-4">
                                        <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                                        <div>
                                            <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                                            <span className="relative z-10">{article.title}</span>
                                        </div>
                                    </h2>
                                    <time className="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3">
                                        <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
                                            <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                                        </span>
                                        {article.date}
                                    </time>
                                    <p className="relative z-10 mt-2 md:ml-4 text-sm text-zinc-600 dark:text-zinc-400">
                                        {article.content}
                                    </p>
                                </div>
                                <time className="mt-1 hidden relative z-10 order-first mb-3 md:flex items-center text-sm text-zinc-400 dark:text-zinc-500"  >
                                    {article.date}
                                </time>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
