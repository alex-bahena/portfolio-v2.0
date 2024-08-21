import './Projects.css'
import projects from './projects-list/ProjectList'
import useWindowSize from '../../hooks/useWindowSize';

const [
    { p1_thumbnail, p1_name, p1_description, p1_technologies, p1_links },
    { p2_thumbnail, p2_name, p2_description, p2_technologies, p2_links },
    { p3_thumbnail, p3_name, p3_description, p3_technologies, p3_links },
    { p4_thumbnail, p4_name, p4_description, p4_technologies, p4_links }
] = projects

function Projects() {

    const { width: windowWidth } = useWindowSize();
    const isMobile = windowWidth <= 1200;
    return (
        <section id="projects" className="projects-section">
            <div className='projects-title'>
                <h2 className='title-decoration'><span>Projects</span></h2>
            </div>
            {/*Projects-card*/}

            {/*Project-1*/}
            {isMobile ?
        <div className="project-card-1">
            <img src={p1_thumbnail} alt="" className="card-img-1" />
            <div className="content-card-1">
                <h3>
                    {p1_name}
                </h3>
                <p>{p1_description}</p>
                <div className="technologies">
                   {p1_technologies.map((tech, index) => (
                       <span key={index}>{tech}</span>
                    ))}
                </div>
                <div className="repo-links"><a rel="noopener noreferrer" target="_blank"href={p1_links[0]}>
                    <span className="external_link material-symbols-sharp">
                        open_in_new 
                    </span>
                </a>
                </div>
            </div>
        </div> 
        :
        <>
        <div className="project-card-1">
               <img src={p1_thumbnail} alt="" className="card-img-1" />
        </div>
               <div className="content-card-1">
                   <h3>
                       {p1_name}
                   </h3>
                   <p>{p1_description}</p>
                   <div className="technologies">
                      {p1_technologies.map((tech, index) => (
                          <span key={index}>{tech}</span>
                        ))}
                   </div>
                   <div className="repo-links"><a rel="noopener noreferrer" target="_blank"href={p1_links}>
                       <span className="external_link material-symbols-sharp">
                           open_in_new 
                       </span>
                   </a>
                   </div>
               </div>
         </>
                }
        {/*Project-2*/}
        {isMobile ?
        <div className="project-card-2">
            <img src={p2_thumbnail} alt="" className="card-img-2" />
            <div className="content-card-2">
                <h3>
                    {p2_name}
                </h3>
                <p>{p2_description}</p>
                <div className="technologies">
                   {p2_technologies.map((tech, index) => (
                       <span key={index}>{tech}</span>
                    ))}
                </div>
                <div className="repo-links">
                <a rel="noopener noreferrer" target="_blank"href={p2_links[0]}> <span className="fa fa-github"></span></a>
                <a rel="noopener noreferrer" target="_blank"href={p2_links[1]}> <span className="external_link material-symbols-sharp">
                        open_in_new 
                    </span></a>
                </div>
            </div>
        </div> 
        :
        <>
        <div className="project-card-2">
               <img src={p2_thumbnail} alt="" className="card-img-2" />
        </div>
               <div className="content-card-2">
                   <h3>
                       {p2_name}
                   </h3>
                   <p>{p2_description}</p>
                   <div className="technologies">
                      {p2_technologies.map((tech, index) => (
                          <span key={index}>{tech}</span>
                        ))}
                   </div>
                   <div className="repo-links">
                   <a rel="noopener noreferrer" target="_blank"href={p2_links[0]}> <span className="fa fa-github"></span></a>
                <a rel="noopener noreferrer" target="_blank"href={p2_links[1]}> <span className="external_link material-symbols-sharp">
                        open_in_new 
                    </span></a>
                </div>
               </div>
         </>
                }
            {/* Other projects*/}
          
            <div className='projects-title'>
            <h2 className='title-decoration'><span>Other projects</span></h2>
        </div>
          {/*Project-3*/}
        <div className="project-card-3">
            <img src={p3_thumbnail} alt="" className="card-img-3" />
            <div className="content-card-3">
                <h3>
                   {p3_name}
                </h3>
                <p>{p3_description}</p>
                <div className="technologies">
                {p3_technologies.map((tech, index) => (
                    <span key={index}>{tech}</span>
                   ))}
                </div>
                </div>
                <div className="repo-links">
                <a rel="noopener noreferrer" target="_blank"href={p3_links[0]}> <span className="fa fa-github"></span></a>
                <a rel="noopener noreferrer" target="_blank"href={p3_links[1]}> <span className="external_link material-symbols-sharp">
                        open_in_new 
                    </span></a>
                </div>
            </div>
        {/*Project-4*/}
        <div className="project-card-4">
            <img src={p4_thumbnail} alt="" className="card-img-4" />
            <div className="content-card-4">
                <h3>
                    {p4_name}
                </h3>
                <p>{p4_description}</p>
                <div className="technologies">
                {p4_technologies.map((tech, index) => (
                    <span key={index}>{tech}</span>
                   ))}
                </div>
                </div>
                <div className="repo-links">
                <a rel="noopener noreferrer" target="_blank"href={p4_links[0]}><span className="fa fa-github"></span></a>
                <a rel="noopener noreferrer" target="_blank"href={p4_links[1]}><span className="external_link material-symbols-sharp">
                        open_in_new 
                    </span></a>
                </div>
            </div>
        </section>
    )
}

export default Projects