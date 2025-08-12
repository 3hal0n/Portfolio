import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { myProjects } from '../constants';
import { Icon } from '@iconify/react';
import { AnimatedTextLines } from '../components/AnimatedTextLines';

const ProjectDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  
  const [project, setProject] = useState(null);

  useEffect(() => {
    // First try to get project from navigation state
    if (location.state?.project) {
      setProject(location.state.project);
    } else {
      // Fallback: find project by ID
      const foundProject = myProjects.find(p => p.id === parseInt(id));
      if (foundProject) {
        setProject(foundProject);
      } else {
        // Project not found, redirect to projects
        navigate('/projects');
      }
    }
  }, [id, location.state, navigate]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center c-space">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p>Loading project details...</p>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen c-space py-20">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 mb-8 group"
      >
        <Icon 
          icon="lucide:arrow-left" 
          className="size-5 transition-transform duration-300 group-hover:-translate-x-1" 
        />
        Back to Projects
      </button>

      {/* Project header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          {project.title}
        </h1>
        
        {/* Technology tags */}
        <div className="flex flex-wrap gap-3 mb-8">
          {project.tags?.map((tag) => (
            <span
              key={tag.id}
              className="bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm border border-purple-500/30"
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>

      {/* Project image */}
      <div className="mb-12">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[400px] md:h-[600px] object-cover rounded-lg shadow-2xl border border-purple-500/20"
        />
      </div>

      {/* Project description */}
      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Overview</h2>
          <AnimatedTextLines
            text={project.description}
            className="text-neutral-300 leading-relaxed text-lg"
          />
        </div>

        {/* Project features */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
          <ul className="space-y-3">
            {project.subDescription?.map((feature, index) => (
              <li
                key={index}
                className="text-neutral-300 flex items-start gap-3"
              >
                <Icon 
                  icon="lucide:check-circle" 
                  className="size-5 text-purple-400 mt-1 flex-shrink-0" 
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap gap-4">
        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <Icon icon="lucide:github" className="size-5" />
            View on GitHub
          </a>
        )}
        
        <button
          onClick={() => navigate('/projects')}
          className="flex items-center gap-2 border border-purple-500/30 text-purple-300 hover:bg-purple-600/10 px-6 py-3 rounded-lg transition-all duration-300"
        >
          <Icon icon="lucide:arrow-left" className="size-5" />
          All Projects
        </button>
      </div>
    </section>
  );
};

export default ProjectDetail;
