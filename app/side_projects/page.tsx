
import React from 'react';


export const metadata = {
    title: 'Projects',
    description: 'Some of the Current and Past Projects Ive done.',
}

// Define your project data
const projects = [
    {
        title: "ScoreKeep - Mobile",
        description: "ScoreKeep - Mobile is the FREE must-have app for keeping score in all your favorite games and matches! From board games to sports, ScoreKeep makes it effortless to track scores and stay ahead of the competition. If you get the point, we'll make sure to remember it.  ",
        link: "https://google.com",
        privacy_policy: "scorekeep.html",
        image: "scorekeep.png",
        view: "in App Store"
    },
    {
        title: "Spirithaus",
        description: `I competed in my first-ever game jam with two other developers. I developed the attack
        patterns, movements, and balancing for the monsters (Slime/Skeleton/Final Boss). I also drew the
        pixel art for the skeleton and programmed the attack cycles of the hero/boss, menu options. `,
        link: "https://itch.io/jam/adventure-jam-2022/rate/1578989",
        privacy_policy: "",
        image: "spirithaus.png",
        view: "in itch.io"

    },
];

function ProjectCard({ project }) {
    return (
        <div className="bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg shadow-md p-4 flex flex-col md:flex-row items-center">
            {project.image && (
                <img src={project.image} alt={project.title} className="w-full md:w-1/4 h-auto md:h-32 mr-0 md:mr-4 rounded-2xl mb-4 md:mb-0" />
            )}
            <div className="flex flex-col justify-center">
                <p className="font-semibold text-gray-800 mb-2 text-2xl">{project.title}</p>
                <p className="text-gray-600 text-lg mb-2">{project.description}</p>
                {project.privacy_policy && (
                    <a href={`/${project.privacy_policy}`} className="text-blue-500 hover:underline mt-2 text-lg mr-4">View Privacy Policy</a>
                )}
                <a href={project.link} className="text-blue-500 hover:underline mt-2 text-lg">
                    View {project.view}
                </a>
            </div>
        </div>
    );
}

export default function Page() {
    return (
        <div>
            <h1 className="text-3xl md:text-5xl font-bold text-center dark:text-white mb-8">Side Projects</h1>
            <section className="rounded-lg relative bg-gradient-to-r from-teal-400 to-teal-700 overflow-hidden py-12 px-4 md:py-24 md:px-8"> 
                <p className="text-xl md:text-2xl text-white text-center mb-8">
                    Beyond client work, here's a peek into some personal projects I've undertaken to experiment, learn new skills, and build a diverse portfolio. Feel free to explore these projects to get a better sense of my capabilities and creative drive.
                </p>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </section>
        </div>
    );
}