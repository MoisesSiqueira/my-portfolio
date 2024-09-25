import { SectionTitle } from "../sectionTitle/section-title";
import "./information.scss";

export function Info() {
  return (
    <div className="infos">
      <SectionTitle text="Languages" />
      <div className="languages-info">
        <span>🇧🇷 PT-BR - Native Speaker</span>
      </div>
      <SectionTitle text="Educação" />
      <div className="educational-info">
        <span>🎓</span>
        <span>Engenheiro de Software - Faculdade Unopar </span>
      </div>
    </div>
  );
}
