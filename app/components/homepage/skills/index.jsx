// @flow strict
import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";

function Skills() {
  // Grouping skills into clusters
  const devOpsClusters = [
    ["Docker", "Kubernetes", "Jenkins"],
    ["Terraform", "Ansible", "Git"],
    ["Prometheus", "Grafana", "ELK Stack"]
  ];

  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            DevOps Skills
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="w-full my-12">
        <div className="flex justify-center">
          {devOpsClusters.map((cluster, clusterIndex) => (
            <div key={clusterIndex} className="flex flex-col items-center gap-6">
              {cluster.map((skill, skillIndex) => (
                <div key={`${clusterIndex}-${skillIndex}`} className="hexagon-container" style={{ width: '120px', height: '138px', margin: '10px' }}>
                  <svg
                    className="hexagon bg-[#1f223c] bg-red-500 rounded-lg m-3"
                    width="120"
                    height="138"
                    viewBox="0 0 120 138"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polygon
                      points="60 1, 118 35, 118 103, 60 137, 2 103, 2 35"
                      fill="#1f223c"
                      stroke="#1f223c"
                    />
                     <Image
                        src={skillsImage(skill)?.src}
                        alt={skill}
                        width={50}
                        height={58}
                        className="transform rotate-30 -skew-y-30"
                      />
                    
                  </svg>
                  <div className="hexagon-inner flex items-center justify-center">
                    <div className="hexagon-content text-center">
                     
                      <p className="text-white text-center">{skill}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
