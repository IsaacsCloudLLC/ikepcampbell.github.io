
import React from 'react';
import Link from 'next/link';


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



// ProjectCard component
function ProjectCard({ project }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
            {project.image && (
                <img src={project.image} alt={project.title} className="w-32 h-32 mr-4 rounded-2xl" />
            )}
            <div>
                <p className="font-semibold text-gray-600 mb-4 text-lg">{project.title}</p>
                <p className="text-gray-600">{project.description}</p>
                {project.privacy_policy && (
                    <a href={`/${project.privacy_policy}`} className="text-blue-500 hover:underline mt-2 inline-block mr-4">View Privacy Policy</a>
                )}

                <a href={project.link} className="text-blue-500 hover:underline mt-2 inline-block">
                    View {project.view}
                </a>
            </div>
        </div>
    );
}

export default function Page() {
    return (
        <section className="mb-8">
            <h1 className="font-semibold text-3xl mb-8 tracking-tighter">Projects</h1>
            <div className="grid grid-cols-1 gap-6">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
}
