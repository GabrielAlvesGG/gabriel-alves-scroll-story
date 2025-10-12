import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileCode, Briefcase, Calendar } from "lucide-react";

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // TODO: Atualizar com seus números reais
  const stats = [
    {
      icon: FileCode,
      value: "+7M",
      label: "linhas XML processadas",
    },
    {
      icon: Briefcase,
      value: "+15",
      label: "projetos entregues",
    },
    {
      icon: Calendar,
      value: "2+",
      label: "anos de experiência",
    },
  ];

  return (
    <section className="py-20 px-4 bg-card/30" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center">
            Resultados
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>

          {/* Testimonials Section - TODO: Adicionar depoimentos reais */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Testimonial 1 */}
            <div className="bg-card rounded-2xl p-8 shadow-md border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-heading font-bold text-primary">A</span>
                </div>
                <div>
                  <h4 className="font-heading font-semibold mb-1">Cliente A</h4>
                  <p className="text-sm text-muted-foreground">Empresa de Tecnologia</p>
                </div>
              </div>
              <p className="text-muted-foreground italic leading-relaxed">
                "Excelente trabalho no desenvolvimento da API. Entrega rápida, código limpo e ótima comunicação durante todo o projeto."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-card rounded-2xl p-8 shadow-md border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-heading font-bold text-primary">B</span>
                </div>
                <div>
                  <h4 className="font-heading font-semibold mb-1">Cliente B</h4>
                  <p className="text-sm text-muted-foreground">Startup</p>
                </div>
              </div>
              <p className="text-muted-foreground italic leading-relaxed">
                "Profissional dedicado e focado em resultados. O dashboard ficou exatamente como imaginávamos, com performance excepcional."
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
