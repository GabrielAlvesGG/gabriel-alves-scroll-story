import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// TODO: Importar suas imagens reais de projetos
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";
import project5 from "@/assets/project5.jpg";
import project6 from "@/assets/project6.jpg";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // TODO: Trocar pelos seus projetos reais
  const projects = [
    {
      title: "BarberShopSystem",
      description: "Sistema de agendamento com Clean Architecture, JWT e EF Core.",
      image: project1,
      tags: ["C#", ".NET", "EF Core", "JWT"],
      github: "#", // TODO: Trocar pelo link do GitHub
      demo: "", // TODO: Adicionar demo se houver
    },
    {
      title: "CertaconAPI",
      description: "Ingestão de XMLs em alta escala com Dapper e SqlBulkCopy.",
      image: project2,
      tags: ["C#", ".NET", "Dapper", "SQL Server"],
      github: "#", // TODO: Trocar pelo link do GitHub
      demo: "",
    },
    {
      title: "Dashboard Vendas",
      description: "Painel com métricas e filtros em tempo real.",
      image: project3,
      tags: ["Vue.js", "Tailwind", "Charts"],
      github: "#", // TODO: Trocar pelo link do GitHub
      demo: "#", // TODO: Trocar pelo link da demo
    },
    {
      title: "API Pagamentos",
      description: "Integrações seguras com gateways e validações.",
      image: project4,
      tags: ["C#", ".NET", "REST API"],
      github: "#", // TODO: Trocar pelo link do GitHub
      demo: "",
    },
    {
      title: "Landing Performance",
      description: "Landing otimizada com SEO e Lighthouse > 90.",
      image: project5,
      tags: ["React", "Tailwind", "SEO"],
      github: "#", // TODO: Trocar pelo link do GitHub
      demo: "#", // TODO: Trocar pelo link da demo
    },
    {
      title: "Nginx Reverse Proxy",
      description: "Setup para múltiplos serviços com HTTPS local.",
      image: project6,
      tags: ["Nginx", "DevOps", "Docker"],
      github: "#", // TODO: Trocar pelo link do GitHub
      demo: "",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center">
            Meus Projetos
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -8 }}
                className="bg-card rounded-2xl overflow-hidden shadow-md border border-border hover:shadow-xl hover:border-primary/50 transition-all group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs px-2 py-1"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all group/btn"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>

                    {project.demo && (
                      <Button
                        size="sm"
                        className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 transition-all group/btn"
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
