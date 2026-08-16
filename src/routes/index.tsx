import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  ArrowRight,
  Star,
  ShieldCheck,
  Gem,
  Hammer,
  Clock,
  Instagram,
  Facebook,
  Twitter,
  ChevronRight,
} from "lucide-react";
import { BookingForm } from "@/components/BookingForm";

export const Route = createFileRoute("/")({
  head: () => ({
    title: "Aura Luxury Footwear | Onde a Arte Encontra a Sua Distinção",
    meta: [
      {
        name: "description",
        content:
          "Descubra coleções exclusivas de sapatos feitos à mão, desenhados para a sua jornada de estilo e conforto inigualável.",
      },
      { property: "og:title", content: "Aura Luxury Footwear" },
      {
        property: "og:description",
        content:
          "Onde a Arte do Calçado Encontra a Sua Distinção. Explore a nossa coleção exclusiva.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen font-sans bg-background text-foreground selection:bg-gold/30">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <nav className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-serif tracking-widest text-luxury-black">
            AURA
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide uppercase">
            <a href="#art" className="hover:text-gold transition-colors">
              Arte
            </a>
            <a href="#collections" className="hover:text-gold transition-colors">
              Coleções
            </a>
            <a href="#quality" className="hover:text-gold transition-colors">
              Excelência
            </a>
            <a href="#testimonials" className="hover:text-gold transition-colors">
              Experiência
            </a>
          </div>
          <a href="#booking">
            <Button
              variant="outline"
              className="border-gold text-gold hover:bg-gold hover:text-white transition-all duration-300"
            >
              Agendar Visita
            </Button>
          </a>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=2012"
              alt="Luxury shoe detail"
              className="w-full h-full object-cover opacity-90 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/70 to-transparent"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-6 animate-in fade-in slide-in-from-left-8 duration-1000">
                Onde a Arte do Calçado Encontra a Sua Distinção.
              </h1>
              <p className="text-lg md:text-xl text-luxury-ivory/80 mb-10 leading-relaxed max-w-lg animate-in fade-in slide-in-from-left-8 duration-1000 delay-200">
                Descubra coleções exclusivas de sapatos feitos à mão, desenhados
                para a sua jornada de estilo e conforto inigualável.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
                <Button className="bg-gold hover:bg-gold/90 text-white px-8 py-6 text-lg rounded-none transition-all hover:scale-105">
                  Explore a Coleção Exclusiva
                </Button>
                <a href="#booking">
                  <Button
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-white hover:text-luxury-black px-8 py-6 text-lg rounded-none w-full sm:w-auto"
                  >
                    Agende Sua Experiência Privada
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 mb-2">
              Descobrir
            </span>
            <div className="w-px h-12 bg-white/20"></div>
          </div>
        </section>

        {/* Essential Art (About) */}
        <section id="art" className="py-24 bg-luxury-ivory">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative group">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1512374382149-433a727a2f9b?auto=format&fit=crop&q=80&w=1000"
                    alt="Craftsmanship process"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-gold/30 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
              </div>
              <div>
                <span className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-4 block">
                  Nossa Herança
                </span>
                <h2 className="text-4xl md:text-5xl font-serif text-luxury-black mb-8 leading-tight">
                  Tradição, Paixão e Artesanato: A Alma por Trás de Cada Par.
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                  <p>
                    Na Aura, acreditamos que um sapato é mais do que um
                    acessório; é uma extensão da sua identidade. Nossa jornada
                    começou com o desejo de reviver o verdadeiro artesanato,
                    onde cada ponto conta uma história.
                  </p>
                  <p>
                    Cada criação passa pelas mãos de mestres sapateiros que
                    dedicam décadas ao aperfeiçoamento de técnicas tradicionais.
                    Usamos apenas os couros mais finos e materiais nobres,
                    garantindo que cada par seja uma obra de arte única.
                  </p>
                </div>
                <Button
                  variant="link"
                  className="mt-8 text-luxury-black p-0 group text-lg"
                >
                  Nossa História
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Collection Highlights */}
        <section id="collections" className="py-24 bg-white">
          <div className="container mx-auto px-6 text-center mb-16">
            <span className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-4 block">
              Curadoria
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-luxury-black mb-6">
              Sua Escolha de Distinção: Explore Nossas Coleções.
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              De eventos de gala ao dinamismo urbano, cada coleção é uma ode à
              sofisticação contemporânea.
            </p>
          </div>

          <div className="container mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Feminino: Elegância Atemporal",
                image:
                  "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=800",
                desc: "Design que transcende tendências.",
              },
              {
                title: "Masculino: Sofisticação Moderna",
                image:
                  "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&q=80&w=800",
                desc: "O equilíbrio perfeito entre forma e função.",
              },
              {
                title: "Edições Limitadas: Peças Únicas",
                image:
                  "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=800",
                desc: "Exclusividade absoluta para colecionadores.",
              },
            ].map((col, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden mb-6">
                  <img
                    src={col.image}
                    alt={col.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-luxury-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button
                      variant="outline"
                      className="bg-white/90 border-none text-luxury-black hover:bg-white"
                    >
                      Ver Coleção
                    </Button>
                  </div>
                </div>
                <h3 className="text-xl font-serif mb-2">{col.title}</h3>
                <p className="text-muted-foreground text-sm">{col.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quality (Diferenciais) */}
        <section id="quality" className="py-24 bg-luxury-black text-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-serif mb-6">
                O Toque Inconfundível da Excelência em Cada Detalhe.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                {
                  icon: <Gem className="w-8 h-8 text-gold" />,
                  title: "Materiais Nobres",
                  desc: "Couros exóticos selecionados e camurças finas das melhores curtumes do mundo.",
                },
                {
                  icon: <Hammer className="w-8 h-8 text-gold" />,
                  title: "Artesanato Manual",
                  desc: "Técnicas ancestrais aplicadas por mestres sapateiros com atenção obsessiva.",
                },
                {
                  icon: <Clock className="w-8 h-8 text-gold" />,
                  title: "Conforto Ergonômico",
                  desc: "Engenharia de precisão que garante bem-estar do amanhecer ao anoitecer.",
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-gold" />,
                  title: "Design Exclusivo",
                  desc: "Linhas autorais que definem novos padrões de estética e durabilidade.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="mb-6 p-4 rounded-full bg-white/5 border border-white/10">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-serif mb-4">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
              <img
                src="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=400"
                alt="Texture 1"
                className="aspect-square object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&q=80&w=400"
                alt="Texture 2"
                className="aspect-square object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&q=80&w=400"
                alt="Texture 3"
                className="aspect-square object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1605812860427-4024433a70fd?auto=format&fit=crop&q=80&w=400"
                alt="Texture 4"
                className="aspect-square object-cover"
              />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-24 bg-luxury-ivory">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-luxury-black mb-6">
                A Experiência de Luxo Através dos Nossos Clientes.
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <Carousel className="w-full">
                <CarouselContent>
                  {[
                    {
                      name: "Helena Valenzuela",
                      role: "Curadora de Arte",
                      text: "Nunca encontrei um calçado que unisse tão perfeitamente a estética de uma escultura com o conforto necessário para o meu dia a dia intenso.",
                      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
                    },
                    {
                      name: "Marco Antônio",
                      role: "Arquiteto",
                      text: "A atenção aos detalhes da Aura é o que me fascina. Você sente a qualidade no toque e a distinção no olhar de quem percebe a elegância.",
                      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
                    },
                    {
                      name: "Isabella Rossi",
                      role: "Designer de Interiores",
                      text: "Minha visita à boutique foi uma experiência sensorial. Sair com um par de sapatos feito quase sob medida foi o ápice do meu ano.",
                      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
                    },
                  ].map((t, idx) => (
                    <CarouselItem key={idx}>
                      <Card className="border-none bg-white shadow-sm rounded-none py-12 px-8">
                        <CardContent className="flex flex-col items-center text-center">
                          <div className="flex mb-6 text-gold">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                          </div>
                          <p className="text-xl md:text-2xl font-serif italic text-luxury-black mb-8 leading-relaxed">
                            "{t.text}"
                          </p>
                          <div className="flex items-center space-x-4">
                            <img
                              src={t.img}
                              alt={t.name}
                              className="w-12 h-12 rounded-full object-cover"
                            />
                            <div className="text-left">
                              <p className="font-bold text-luxury-black text-sm">
                                {t.name}
                              </p>
                              <p className="text-muted-foreground text-xs uppercase tracking-wider">
                                {t.role}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-10 space-x-4">
                  <CarouselPrevious className="static translate-y-0 rounded-none border-gold text-gold hover:bg-gold hover:text-white" />
                  <CarouselNext className="static translate-y-0 rounded-none border-gold text-gold hover:bg-gold hover:text-white" />
                </div>
              </Carousel>
            </div>
          </div>
        </section>

        {/* Final CTA & Booking Form */}
        <section id="booking" className="relative py-24 overflow-hidden bg-luxury-black">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=2000"
              alt="Final CTA background"
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="text-left">
                <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">
                  Eleve Seu Estilo. <br /> Descubra a Nossa Coleção Agora.
                </h2>
                <p className="text-luxury-ivory/60 max-w-xl mb-12 text-lg leading-relaxed">
                  Receba uma consultoria de estilo personalizada ao agendar sua
                  visita em nossa boutique. A exclusividade espera por você.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <Button className="bg-gold hover:bg-gold/90 text-white px-10 py-7 text-lg rounded-none">
                    Ver Todas as Coleções
                  </Button>
                </div>
              </div>
              
              <div className="animate-in fade-in slide-in-from-right-8 duration-1000">
                <BookingForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="text-3xl font-serif tracking-widest text-luxury-black mb-6">
                AURA
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                Definindo novos padrões de luxo e artesanato em calçados desde
                1992. Cada par é uma promessa de excelência.
              </p>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-6">
                Explorar
              </h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-gold">
                    Coleção Feminina
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold">
                    Coleção Masculina
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold">
                    Edições Limitadas
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold">
                    Acessórios
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-6">
                Serviços
              </h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-gold">
                    Consultoria de Estilo
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold">
                    Sob Medida (Bespoke)
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold">
                    Manutenção Vitalícia
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold">
                    Envio Internacional
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-6">
                Contato & Boutique
              </h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="leading-relaxed">
                    Av. da Liberdade, 192 <br /> 1250-147 Lisboa, Portugal
                  </span>
                </li>
                <li>contact@aurashoes.com</li>
                <li>+351 213 456 789</li>
                <li className="flex space-x-4 pt-2">
                  <Instagram className="w-5 h-5 cursor-pointer hover:text-gold" />
                  <Facebook className="w-5 h-5 cursor-pointer hover:text-gold" />
                  <Twitter className="w-5 h-5 cursor-pointer hover:text-gold" />
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border flex flex-col md:row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
              © 2026 Aura Luxury Footwear. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-[10px] uppercase tracking-widest text-muted-foreground">
              <a href="#" className="hover:text-gold">
                Privacidade
              </a>
              <a href="#" className="hover:text-gold">
                Termos
              </a>
              <a href="#" className="hover:text-gold">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
