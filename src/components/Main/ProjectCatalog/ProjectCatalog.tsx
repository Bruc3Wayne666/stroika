import React from "react";
import cls from "./ProjectCatalog.module.scss";
import ProjectCard from "./ProjectCard/ProjectCard";

const ProjectCatalog = () => {
  return (
    <section className={cls.catalog}>
      <div className="container">
        <div className={cls.titleBlock}>
          <h2 className={cls.title}>Каталог проектов:</h2>
        </div>

        <div className={cls.projectsBlock}>
          <div className={cls.info}>
            <div className={cls.infoItem}>
              <h3>1 этажные</h3>
            </div>
            <div className={cls.infoItem}>
              <h3>от 150м²</h3>
            </div>
            <div className={cls.infoItem}>
              <h3>от 5 250 000 ₽</h3>
            </div>
          </div>

          <div className={cls.projects}>
            <ProjectCard />
            <ProjectCard offset={true} />
          </div>
        </div>

        <div className={cls.projectsBlock}>
          <div className={cls.info}>
            <div className={cls.infoItem}>
              <h3>2 этажные</h3>
            </div>
            <div className={cls.infoItem}>
              <h3>от 250м²</h3>
            </div>
            <div className={cls.infoItem}>
              <h3>от 8 750 000 ₽</h3>
            </div>
          </div>

          <div className={cls.projects}>
            <ProjectCard />
            <ProjectCard offset={true} />
          </div>
        </div>

        <div className={cls.projectsBlock}>
          <div className={cls.info}>
            <div className={cls.infoItem}>
              <h3>3 этажные</h3>
            </div>
            <div className={cls.infoItem}>
              <h3>от 350м²</h3>
            </div>
            <div className={cls.infoItem}>
              <h3>от 12 250 000 ₽</h3>
            </div>
          </div>

          <div className={cls.projects}>
            <ProjectCard />
            <ProjectCard offset={true} />
          </div>
        </div>

        <div className={cls.bottom}>
          <div className={cls.text}>
            <span>Посмотреть больше проектов</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCatalog;
