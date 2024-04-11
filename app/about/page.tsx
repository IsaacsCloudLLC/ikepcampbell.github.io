import React from 'react';


export const metadata = {
    title: 'Services',
    description: 'Interested in stuff?',
}


export default function Page() {
    return (
        <section className="mb-8">
            <h1 className="font-semibold text-3xl mb-8 tracking-tighter">About</h1>
            <p className="mb-4 text-xl">
                {`Thanks for stopping by! I graduated from the University of Northern Iowa in 2019. 
        Since then, I have built, maintained, and ensured the reliability and resilience of systems with multiple organizations. 
        I've worked in FinTech, Education, Consulting, and Insurance.`}
            </p>
            <p className="mb-4 text-xl">
                {`In 2024 I founded Isaacs Cloud LLC, bringing Hosting as a Service (HaaS) to small and mid size businesses.  
        I bring enthusiasm, security, and efficient technical solutions to solve business problems!`}
            </p>
        </section>
    );
}