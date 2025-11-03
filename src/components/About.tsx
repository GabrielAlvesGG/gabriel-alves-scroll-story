import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const techStack = [
    {
      category: "Backend",
      items: ["C#", ".NET 8", "EF Core", "Dapper", "SQL Server"],
    },
    { category: "Frontend", items: ["Vue.js", "React", "Tailwind CSS"] },
    { category: "Infra/DevOps", items: ["Git/GitHub", "Nginx", "Azure"] },
  ];

  // Requires an element with id="linkedin" near the bottom of the page.
  const LINKEDIN_URL = "https://www.linkedin.com/in/gabriel-alves-84725a34a/";
  const handleScrollToLinkedIn = () => {
    const el = document.getElementById("linkedin");
    if (el) {
      const margin = 24; // px - keeps the target slightly above the bottom
      const elTop = el.getBoundingClientRect().top + window.pageYOffset;
      const target = elTop - (window.innerHeight - el.clientHeight) + margin;
      window.scrollTo({ top: Math.max(target, 0), behavior: "smooth" });
    } else {
      window.open(LINKEDIN_URL, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="about" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center">
            Quem sou eu
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sou desenvolvedor de software com mais de 2 anos de experiência
                criando APIs, integrações e sistemas web. Meu foco é
                performance, Clean Architecture e entregas previsíveis.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Acredito que tecnologia boa simplifica processos e gera valor de
                negócio. Busco sempre escrever código limpo, testável e que seja
                fácil de manter no longo prazo.
              </p>

              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all group"
                type="button"
                onClick={handleScrollToLinkedIn}
                aria-label="Deslizar até o LinkedIn"
                title="Deslizar até o LinkedIn"
              >
                Ver meu LinkedIn
                <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              {techStack.map((stack, index) => (
                <motion.div
                  key={stack.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                  className="bg-card rounded-2xl p-6 shadow-md border border-border hover:shadow-xl hover:border-primary/20 transition-all"
                >
                  <h3 className="text-xl font-heading font-semibold mb-4 text-primary">
                    {stack.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {stack.items.map((item) => (
                      <Badge
                        key={item}
                        variant="secondary"
                        className="px-3 py-1 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
