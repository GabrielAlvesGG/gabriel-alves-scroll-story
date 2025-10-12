import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            © {new Date().getFullYear()} Gabriel Alves. Feito com{" "}
            <Heart className="w-4 h-4 text-primary fill-primary" /> usando React e Tailwind.
          </p>

          <div className="flex gap-6">
            {/* TODO: Adicionar mais links se desejar */}
            <a
              href="#inicio"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Voltar ao topo
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
