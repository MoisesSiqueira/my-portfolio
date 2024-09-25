import Image from "next/image";
import { SectionTitle } from "../sectionTitle/section-title";

import "./experience.scss";
import { Skill } from "../skill/skill";

export function Experience() {
  return (
    <div className="experience">
      <SectionTitle text="Experiencia" />
      <p>
        Engenheiro de Software | Desenvolvedor Full Stack Júnior | Node.js,
        Java, Análise de Dados | Cursando Engenharia de Software
      </p>
      <div className="experiencia-time">
        <Skill image="/react.png" measure={1} years="1 ano" />
        <Skill image="/ts.png" measure={2} years="2 anos" />
        <Skill image="/js.png" measure={1} years="1 ano" />
        <Skill image="/java.png" measure={1} years="1 ano" />
      </div>
    </div>
  );
}
