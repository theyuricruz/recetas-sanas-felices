import { createFileRoute, HeadContent } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import {
  BookOpen,
  ChefHat,
  Clock,
  Leaf,
  ShieldCheck,
  Lock,
  Smartphone,
  Sparkles,
  Star,
  UtensilsCrossed,
  CheckCircle2,
  ShoppingCart,
  CalendarDays,
  ArrowRightLeft,
  Play,
  ChevronLeft,
  ChevronRight,
  Flame,
  Tag,
  HelpCircle,
  XCircle,
  Crown,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import coverProducto from "@/assets/cover-producto.jpg";
import heroMockup from "@/assets/hero-mockup.png";
import desayuno from "@/assets/desayuno.jpg";
import almuerzoCena from "@/assets/almuerzo-cena.jpg";
import postres from "@/assets/postres.jpg";
import bonos from "@/assets/bonos.jpg";
import listaCompras from "@/assets/lista-compras.jpg";
import reset14Dias from "@/assets/reset-14-dias.jpg";
import guiaSustituciones from "@/assets/guia-sustituciones.jpg";
import realAlmuerzosCenas from "@/assets/real-almuerzos-cenas.png";
import realQuesoHuevo from "@/assets/real-queso-huevo.png";
import realTostada from "@/assets/real-tostada.png";
import testimonio1 from "@/assets/testimonio-1.jpg.asset.json";
import testimonio2 from "@/assets/testimonio-2.jpg.asset.json";
import testimonio3 from "@/assets/testimonio-3.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "+1500 Recetas Antiinflamatorias y Deliciosas" },
      {
        name: "description",
        content:
          "Más de 1500 recetas antiinflamatorias, deliciosas y fáciles de preparar. Sin azúcar, sin gluten y bajas en carbohidratos. Acceso digital inmediato.",
      },
      { property: "og:title", content: "+1500 Recetas Antiinflamatorias y Deliciosas" },
      {
        property: "og:description",
        content:
          "Más de 1500 recetas antiinflamatorias, deliciosas y fáciles de preparar. Sin azúcar, sin gluten y bajas en carbohidratos. Acceso digital inmediato.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <PromoBar />
      <Hero />
      <DoloresComunes />
      <Comparacion />
      <QueRecibir />
      <PorQueElegir />
      <Bonos />
      <Oferta />
      <Ejemplos />
      <Testimonios />
      <Garantia />
      <PreguntasFrecuentes />
      <Footer />
    </main>
  );
}


function PromoBar() {
  const [today, setToday] = useState("");
  useEffect(() => {
    const formatted = new Date().toLocaleDateString("es-ES", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    setToday(formatted.charAt(0).toUpperCase() + formatted.slice(1));
  }, []);
  return (
    <div className="sticky top-0 z-40 w-full bg-gradient-to-r from-red-600 via-red-500 to-red-700 text-white shadow-md">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 px-4 py-2.5 text-center sm:flex-row sm:gap-4">
        <div className="flex items-center gap-2 text-sm font-semibold sm:text-base">
          <Flame className="h-4 w-4 shrink-0 animate-pulse text-yellow-300 sm:h-5 sm:w-5" />
          <span>¡Descuento especial solo por hoy!</span>
        </div>
        {today && (
          <div className="flex items-center gap-2 text-xs opacity-95 sm:text-sm">
            <CalendarDays className="h-4 w-4" />
            <span className="font-medium">{today}</span>
          </div>
        )}
      </div>
    </div>
  );
}

function scrollToOferta() {
  const element = document.getElementById("oferta");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      {/* Context background image */}
      <img
        src={almuerzoCena}
        alt=""
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-[0.12]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background/95 via-background/90 to-secondary/80" />

      {/* Premium ambient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 via-transparent to-secondary/30" />
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-primary/8 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute top-20 -left-20 h-[400px] w-[400px] rounded-full bg-primary/8 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
            {/* Premium top badge */}
            <div className="flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary shadow-sm backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5" />
                Material digital actualizado
              </span>
            </div>

            {/* Small pre-title */}
            <p className="mt-6 text-sm font-medium uppercase tracking-widest text-muted-foreground sm:text-base">
              Adiós a la hinchazón, la pesadez y la falta de energía
            </p>

            {/* Premium headline with serif font */}
            <h1 className="mt-3 text-[2.5rem] font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl" style={{ fontFamily: "var(--font-heading-premium)" }}>
              Come rico, siéntete <span className="text-primary">liviana</span> y deja de sufrir pensando qué cocinar
            </h1>

            {/* Refined subtitle */}
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Más de <strong className="text-foreground">1500 recetas antiinflamatorias</strong> sin azúcar, sin gluten y fáciles de preparar,
              pensadas para desinflamarte desde los primeros días — incluso en semanas con poco tiempo.
            </p>

            {/* Social proof row */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="h-5 w-px bg-border" />
              <p className="text-sm font-medium text-foreground">
                <span className="font-bold text-primary">4.9/5</span> valorado por miles de mujeres
              </p>
            </div>

            {/* Premium CTA */}
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start lg:justify-start">
              <Button
                onClick={scrollToOferta}
                size="lg"
                className="h-14 px-10 text-base font-semibold shadow-xl shadow-primary/25 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary/30"
              >
                Quiero acceder ahora
                <ArrowRightLeft className="ml-2 h-4 w-4" />
              </Button>
              <Button
                onClick={scrollToOferta}
                variant="outline"
                size="lg"
                className="h-14 px-8 text-base font-medium"
              >
                Ver todo lo que incluye
              </Button>
            </div>

            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground lg:justify-start">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span>Garantía de 7 días</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Acceso inmediato</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Smartphone className="h-4 w-4 text-primary" />
                <span>acceso online</span>
              </div>
            </div>
          </div>

          {/* Premium image area */}
          <div className="relative mx-auto max-w-md lg:max-w-full">
            <div className="relative rounded-3xl border border-border/60 bg-white/60 p-3 shadow-2xl shadow-foreground/5 backdrop-blur-sm">
              <img
                src={heroMockup}
                alt="Mockup del recetario digital +1500 Recetas Antiinflamatorias y bonos"
                width={1456}
                height={1092}
                className="w-full rounded-2xl object-contain"
                loading="eager"
              />
            </div>

            {/* Floating stat card - top right */}
            <div className="absolute -top-4 -right-4 hidden rounded-2xl border border-border/60 bg-white/95 p-4 shadow-xl backdrop-blur-sm lg:block">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/20">
                  <ChefHat className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-lg font-bold leading-none text-foreground">+1500</p>
                  <p className="text-xs text-muted-foreground">Recetas prácticas</p>
                </div>
              </div>
            </div>

            {/* Floating benefit card - bottom left */}
            <div className="absolute -bottom-4 -left-4 hidden rounded-2xl border border-border/60 bg-white/95 p-4 shadow-xl backdrop-blur-sm lg:block">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent/80 text-accent-foreground shadow-lg shadow-accent/20">
                  <Leaf className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-lg font-bold leading-none text-foreground">Sin azúcar</p>
                  <p className="text-xs text-muted-foreground">Sin gluten · Low carb</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QueRecibir() {
  const items = [
    {
      icon: BookOpen,
      title: "Más de 1500 recetas digitales",
      desc: "Una biblioteca completa con ideas para comer mejor todos los días.",
      tag: "Biblioteca completa",
    },
    {
      icon: UtensilsCrossed,
      title: "Para cada momento del día",
      desc: "Desayuno, almuerzo, cena, snacks, bebidas y postres organizados por secciones.",
      tag: "Organizado por secciones",
    },
    {
      icon: Leaf,
      title: "Sin azúcar, sin gluten y bajas en carbohidratos",
      desc: "Opciones pensadas para quienes buscan reducir el consumo de azúcar, gluten y ultraprocesados.",
      tag: "Alimentación consciente",
    },
    {
      icon: ChefHat,
      title: "Recetas fáciles de preparar",
      desc: "Instrucciones claras, ingredientes accesibles y tiempos de cocina realistas.",
      tag: "Rápidas y prácticas",
    },
    {
      icon: Sparkles,
      title: "Ideas para variar el menú",
      desc: "Deja de repetir siempre las mismas comidas y descubre nuevas combinaciones.",
      tag: "Más variedad",
    },
    {
      icon: Smartphone,
      title: "Acceso digital inmediato",
      desc: "Recibe el material en tu correo y accede desde el celular, tablet o computadora.",
      tag: "Multi-dispositivo",
    },
  ];

  return (
    <section className="relative px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            Contenido incluido
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Todo lo que necesitas para <span className="text-primary">desinflamarte</span> sin vivir a dieta
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Recetas simples, ricas y organizadas para que cuidarte deje de sentirse complicado — incluso en semanas caóticas.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={item.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card p-7 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
            >
              <div className="absolute right-5 top-5 font-heading text-4xl font-bold text-primary/10 transition-colors group-hover:text-primary/20">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/70 shadow-lg shadow-primary/25">
                <item.icon className="h-7 w-7 text-primary-foreground" strokeWidth={2} />
              </div>
              <h3 className="mt-6 font-heading text-lg font-bold leading-tight text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
              <div className="mt-6 flex items-center gap-2 border-t border-border/60 pt-4">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PorQueElegir() {
  const benefits = [
    { icon: Sparkles, title: "Más variedad en tu mesa", desc: "Deja de repetir siempre las mismas comidas y descubre nuevas combinaciones." },
    { icon: CalendarDays, title: "Ideas para todos los días", desc: "Opciones saludables para desayuno, almuerzo, cena, snacks y postres." },
    { icon: Clock, title: "Cocina más práctica", desc: "Recetas con pasos claros e ingredientes accesibles para el día a día." },
    { icon: ChefHat, title: "Sabor sin renunciar", desc: "Come mejor sin sentir que estás a dieta ni sacrificar el placer de comer." },
    { icon: BookOpen, title: "Alimentación organizada", desc: "Un material estructurado para planificar y decidir con más facilidad." },
    { icon: Leaf, title: "Menos ultraprocesados", desc: "Reduce el consumo de azúcar, gluten y alimentos industriales." },
    { icon: ShieldCheck, title: "Decisiones conscientes", desc: "Aprende a elegir mejor lo que llevas a tu plato cada día." },
    { icon: CheckCircle2, title: "Simple y directo", desc: "Sin teorías complicadas: recetas listas para usar desde el primer día." },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary/40 via-background to-secondary/20 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <Leaf className="h-3.5 w-3.5" />
            Hecho para tu día a día
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            ¿Por qué elegir este material?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            No es una dieta restrictiva: es una guía práctica para incorporar recetas más saludables
            sin complicarte y sin perder el sabor.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group relative flex flex-col rounded-2xl border border-border/60 bg-card/80 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/70 text-primary-foreground shadow-md shadow-primary/20 transition-transform group-hover:scale-110">
                <b.icon className="h-5 w-5" strokeWidth={2.2} />
              </div>
              <h3 className="mt-4 font-heading text-base font-bold leading-snug text-foreground">
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-3">
          <Button
            onClick={scrollToOferta}
            size="lg"
            className="h-12 px-8 text-base font-semibold shadow-lg transition-transform hover:scale-105"
          >
            Obtener acceso
          </Button>
          <p className="text-xs text-muted-foreground">Acceso digital inmediato · Garantía de 7 días</p>
        </div>
      </div>
    </section>
  );
}

function Bonos() {
  const bonuses = [
    {
      icon: ShoppingCart,
      title: "Lista de Compras Antiinflamatoria",
      desc: "Guía práctica para saber qué ingredientes comprar, organizar la despensa y facilitar la preparación de las recetas.",
      benefit: "Ahorra tiempo y compra con más claridad.",
      value: "$17",
      number: "Bono 1",
      image: listaCompras,
      alt: "Lista de compras antiinflamatoria con alimentos saludables",
    },
    {
      icon: CalendarDays,
      title: "Plan Nutricional Antiinflamatorio",
      desc: "Plan simple para comenzar con más claridad, organizar los primeros días y crear una rutina alimentaria más ligera.",
      benefit: "Una estructura clara para empezar.",
      value: "$27",
      number: "Bono 2",
      image: reset14Dias,
      alt: "Plan de 14 días antiinflamatorio organizado en calendario",
    },
    {
      icon: ArrowRightLeft,
      title: "Guía de Sustituciones Saludables",
      desc: "Aprende a adaptar recetas, cambiar ingredientes y encontrar alternativas más saludables, accesibles y prácticas.",
      benefit: "Personaliza las recetas según lo que tengas.",
      value: "$17",
      number: "Bono 3",
      image: guiaSustituciones,
      alt: "Guía de sustituciones saludables de ingredientes",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary/30 via-background to-secondary/20 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative mx-auto max-w-6xl">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <Star className="h-3.5 w-3.5" />
            Solo por tiempo limitado
          </span>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Bonos especiales incluidos
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground">
            Además del recetario, recibes 3 guías complementarias para aprovechar mejor el material.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {bonuses.map((bonus) => (
            <div
              key={bonus.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-[0_6px_24px_-10px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_16px_32px_-14px_rgba(0,0,0,0.15)]"
            >
              <div className="absolute right-3 top-3 z-10 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-primary-foreground shadow-sm">
                {bonus.number}
              </div>
              <div className="relative h-36 w-full overflow-hidden sm:h-40">
                <img
                  src={bonus.image}
                  alt={bonus.alt}
                  width={1024}
                  height={640}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-4 pt-3">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/70 shadow-md shadow-primary/20 transition-transform group-hover:scale-110">
                  <bonus.icon className="h-4 w-4 text-primary-foreground" strokeWidth={2} />
                </div>
                <h3 className="font-heading text-base font-bold leading-tight text-foreground">
                  {bonus.title}
                </h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground">
                  {bonus.desc}
                </p>
                <div className="mt-3 rounded-lg bg-secondary/60 p-3">
                  <p className="text-xs font-medium text-foreground">
                    <span className="text-primary">✓</span> {bonus.benefit}
                  </p>
                </div>
                <div className="mt-3 flex items-center justify-between border-t border-border/60 pt-3">
                  <p className="text-xs text-muted-foreground">
                    Valor normal: <span className="text-sm font-bold text-red-500 line-through">{bonus.value}</span>
                  </p>
                  <span className="text-xs font-bold uppercase tracking-wide text-green-600">Gratis</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(15 * 60);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="rounded-xl bg-black/10 px-4 py-2.5 text-center">
      <p className="text-[11px] font-medium uppercase tracking-wider opacity-90">
        Oferta especial — últimos 15 minutos
      </p>
      {mounted && (
        <div className="mt-0.5 flex justify-center gap-1 text-xl font-bold tabular-nums sm:text-2xl">
          <span>{String(minutes).padStart(2, "0")}</span>
          <span>:</span>
          <span>{String(seconds).padStart(2, "0")}</span>
        </div>
      )}
    </div>
  );
}

function Oferta() {
  const basicItems = [
    { text: "Recetario 500 recetas antiinflamatorias", included: true },
    { text: "Acceso digital inmediato", included: true },
    { text: "Garantía incondicional de 7 días", included: true },
    { text: "Bono 1: Lista de Compras Antiinflamatoria", included: false },
    { text: "Bono 2: Plan Nutricional Antiinflamatorio", included: false },
    { text: "Bono 3: Guía de Sustituciones Saludables", included: false },
  ];

  const premiumItems = [
    "Recetario digital con +1500 recetas",
    "Bono 1: Lista de Compras Antiinflamatoria",
    "Bono 2: Plan Nutricional Antiinflamatorio",
    "Bono 3: Guía de Sustituciones Saludables",
    "Acceso digital inmediato",
    "Garantía incondicional de 7 días",
  ];

  return (
    <section id="oferta" className="relative overflow-hidden bg-primary px-4 py-8 text-primary-foreground sm:px-6 lg:px-8 lg:py-12">
      {/* Premium ambient background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/80 via-primary to-primary/90" />
      <div className="pointer-events-none absolute -top-20 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-[300px] w-[300px] rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -left-20 h-[200px] w-[200px] rounded-full bg-white/5 blur-3xl" />
      <div className="relative mx-auto max-w-4xl">
        <div className="text-center">
          <span className="inline-block rounded-full bg-accent px-3 py-1 text-[11px] font-bold text-accent-foreground">
            Oferta especial por tiempo limitado
          </span>
          <h2 className="mt-2 text-xl font-bold tracking-tight sm:text-2xl lg:text-3xl">
            Elige Tu Oferta
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm opacity-90">
            Selecciona la opción que mejor se adapte a ti.
          </p>
        </div>

        <div className="mx-auto mt-4 max-w-md">
          <Countdown />
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {/* Basic offer */}
          <div className="relative flex flex-col overflow-hidden rounded-2xl bg-white text-foreground shadow-xl ring-1 ring-black/5">
            {/* Header */}
            <div className="border-b border-black/5 bg-gradient-to-b from-white to-secondary/30 px-5 py-3 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Básico
              </span>
            </div>
            {/* Price */}
            <div className="px-5 pt-5 text-center">
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-lg font-semibold text-red-500 line-through decoration-red-500/80">$9.90</span>
                <span className="text-4xl font-extrabold tracking-tight text-foreground">$5</span>
              </div>
              <p className="mt-1 text-[11px] font-medium text-muted-foreground">pago único</p>
            </div>
            {/* Items */}
            <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
              <ul className="space-y-2">
                {basicItems.map((item) => (
                  <li key={item.text} className="flex items-start gap-2.5">
                    {item.included ? (
                      <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-green-100">
                        <CheckCircle2 className="h-3 w-3 text-green-600" strokeWidth={3} />
                      </span>
                    ) : (
                      <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-red-100">
                        <XCircle className="h-3 w-3 text-red-500" strokeWidth={3} />
                      </span>
                    )}
                    <span className={`text-xs leading-relaxed ${item.included ? "text-foreground" : "text-muted-foreground line-through"}`}>
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                size="sm"
                variant="outline"
                className="mt-5 h-11 w-full rounded-xl border-black/10 bg-secondary/40 px-4 text-xs font-bold uppercase tracking-wider text-foreground hover:bg-secondary/70"
              >
                <a href="https://pay.hotmart.com/N106642669U?checkoutMode=10" target="_blank" rel="noopener noreferrer">
                  Obtener Acceso Básico
                </a>
              </Button>
            </div>
          </div>

          {/* Premium offer */}
          <div className="relative flex flex-col overflow-hidden rounded-2xl bg-white text-foreground shadow-2xl ring-1 ring-green-900/10">
            {/* Green banner header */}
            <div className="relative overflow-hidden bg-gradient-to-r from-green-800 via-green-700 to-amber-500 px-5 py-3 text-center">
              <div className="flex items-center justify-center gap-2 text-white">
                <Crown className="h-4 w-4 text-amber-200" />
                <span className="text-xs font-bold uppercase tracking-[0.18em]">
                  Más popular — Mejor valor
                </span>
              </div>
            </div>
            {/* Discount pill + Price */}
            <div className="px-5 pt-5 text-center">
              <span className="inline-block rounded-full bg-green-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-green-800 ring-1 ring-green-800/10">
                Ahorras más del 40%
              </span>
              <p className="mt-3 text-lg font-semibold text-red-500 line-through decoration-red-500/80">$27</p>
              <p className="mt-0.5 text-5xl font-extrabold tracking-tight text-green-700">$15</p>
              <p className="mt-1 text-[11px] font-medium text-muted-foreground">pago único</p>
            </div>
            {/* Items */}
            <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
              <div className="mb-4 h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />
              <ul className="space-y-2">
                {premiumItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-green-100">
                      <CheckCircle2 className="h-3 w-3 text-green-700" strokeWidth={3} />
                    </span>
                    <span className="text-xs leading-relaxed text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                size="sm"
                className="mt-5 h-12 w-full rounded-xl bg-gradient-to-r from-green-700 via-green-600 to-amber-500 px-4 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-green-900/20 transition-transform hover:scale-[1.02]"
              >
                <a href="https://pay.hotmart.com/X106687062E?checkoutMode=10" target="_blank" rel="noopener noreferrer">
                  Obtener Acceso Completo
                </a>
              </Button>
              <p className="mt-3 flex items-center justify-center gap-1.5 text-[10px] text-muted-foreground">
                <ShieldCheck className="h-3 w-3" />
                Compra 100% segura · Garantía de 7 días
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

function Ejemplos() {
  const slides = [
    {
      img: realAlmuerzosCenas,
      title: "Almuerzos y cenas saludables",
      desc: "Carnes y aves. Platos completos con presentación premium.",
      real: true,
      badge: "Sección del recetario",
    },
    {
      img: realTostada,
      title: "Receta paso a paso",
      desc: "Tostada con huevos pochados, espinacas y tomate cherry. Ingredientes claros y preparación numerada.",
      real: true,
      badge: "Página de receta",
    },
    {
      img: realQuesoHuevo,
      title: "Recetas + contenido educativo",
      desc: "Queso untable de almendras y por qué el huevo es un superalimento. Recetas con contexto nutricional.",
      real: true,
      badge: "Doble página",
    },
    {
      img: coverProducto,
      title: "Portada del recetario",
      desc: "El material principal con más de 1500 recetas antiinflamatorias.",
      real: false,
    },
    {
      img: desayuno,
      title: "Sección de desayunos",
      desc: "Ideas nutritivas para comenzar el día sin azúcar añadida.",
      real: false,
    },
    {
      img: almuerzoCena,
      title: "Almuerzos y cenas",
      desc: "Platos completos y fáciles de preparar para toda la semana.",
      real: false,
    },
    {
      img: postres,
      title: "Postres saludables",
      desc: "Opciones dulces sin culpa, con ingredientes naturales.",
      real: false,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-secondary/30 to-background px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <BookOpen className="h-3.5 w-3.5" />
            Vista previa real
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ejemplos del material
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Mira por dentro el recetario que vas a recibir: recetas paso a paso, fotos reales y
            contenido educativo cuidadosamente diseñado.
          </p>
        </div>
        <div className="mt-12">
          <Carousel className="mx-auto w-full max-w-4xl" opts={{ loop: true }}>
            <CarouselContent>
              {slides.map((slide) => (
                <CarouselItem key={slide.title} className="md:basis-4/5">
                  <div className="group overflow-hidden rounded-3xl border border-border/60 bg-white shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)]">
                    <div className="relative overflow-hidden bg-secondary/20">
                      {slide.real && (
                        <div className="absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-foreground shadow-lg">
                          <Sparkles className="h-3 w-3" />
                          Foto real del material
                        </div>
                      )}
                      {slide.badge && (
                        <div className="absolute right-4 top-4 z-10 rounded-full bg-white/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-foreground shadow-md backdrop-blur">
                          {slide.badge}
                        </div>
                      )}
                      <img
                        src={slide.img}
                        alt={slide.title}
                        width={1200}
                        height={800}
                        className="aspect-[4/3] w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                    </div>
                    <div className="border-t border-border/50 bg-white p-5 text-center sm:p-6">
                      <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                        {slide.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">{slide.desc}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2 h-10 w-10 border-primary/30 bg-white/95 text-primary hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="right-2 top-1/2 -translate-y-1/2 h-10 w-10 border-primary/30 bg-white/95 text-primary hover:bg-primary hover:text-primary-foreground" />
          </Carousel>
          <p className="mt-6 text-center text-xs text-muted-foreground">
            Desliza para ver más páginas del recetario →
          </p>
        </div>
      </div>
    </section>
  );
}


function Testimonios() {
  const testimonials = [
    {
      name: "María G.",
      location: "México",
      photo: testimonio1,
      text: "Hacía años que terminaba inflamada después de cenar. A los pocos días con estas recetas ya me sentía muchísimo más liviana. No lo podía creer.",
      highlight: "Menos hinchazón desde los primeros días",
    },
    {
      name: "Sofía R.",
      location: "Colombia",
      photo: testimonio2,
      text: "Pensé que iba a ser comida aburrida y sin sabor. Todo lo contrario: mi esposo ahora me pide los postres, y son sin azúcar refinada.",
      highlight: "Rico de verdad, hasta para la familia",
    },
    {
      name: "Ana L.",
      location: "Argentina",
      photo: testimonio3,
      text: "Lo mejor fue dejar de pensar todos los días qué cocinar. Me sacó un estrés enorme y ahora organizo la semana en minutos.",
      highlight: "Se acabó el ‘¿qué cocino hoy?’",
    },
    {
      name: "Valentina P.",
      location: "Chile",
      photo: testimonio1,
      text: "Tengo colon irritable y casi todo me caía pesado. Estas recetas me ayudaron muchísimo a comer sin miedo a cómo iba a sentirme después.",
      highlight: "Ideal para digestiones sensibles",
    },
    {
      name: "Daniela M.",
      location: "España",
      photo: testimonio2,
      text: "Era muy adicta al azúcar y los postres saludables me salvaron. Como algo dulce y no me siento pesada ni con culpa.",
      highlight: "Dulces sin culpa ni bajones",
    },
    {
      name: "Carolina F.",
      location: "Perú",
      photo: testimonio3,
      text: "Lo compré pensando que iba a usar 4 o 5 recetas y terminé usándolo todos los días. Cambió por completo cómo como.",
      highlight: "Se usa todos los días",
    },
  ];

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <Star className="h-3.5 w-3.5" />
            Opiniones reales
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Mujeres que dejaron de sentirse <span className="text-primary">inflamadas</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">
            Miles de personas empezaron a cambiar cómo se sienten después de comer con recetas simples, ricas y fáciles de sostener.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="border-0 bg-secondary/40 shadow-sm">
              <CardContent className="p-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mt-4 text-foreground">&ldquo;{t.text}&rdquo;</p>
                <div className="mt-4 flex items-center gap-3 border-t border-border pt-4">
                  <img
                    src={t.photo.url}
                    alt={`Foto de ${t.name}`}
                    width={56}
                    height={56}
                    loading="lazy"
                    className="h-14 w-14 shrink-0 rounded-full object-cover ring-2 ring-primary/20"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.location} · Compra verificada</p>
                    <p className="mt-1 text-xs font-medium text-primary">{t.highlight}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}



function Garantia() {
  const bullets = [
    { icon: Lock, text: "Pago protegido con encriptación segura" },
    { icon: ShieldCheck, text: "Tu información nunca es compartida con terceros" },
    { icon: Clock, text: "7 días completos para probar todo el material" },
    { icon: CheckCircle2, text: "Devolución simple: solo escríbenos y te reembolsamos" },
  ];

  return (
    <section className="relative overflow-hidden px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 via-background to-secondary/30" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-3xl" />

      <div className="relative mx-auto max-w-3xl">
        <div className="rounded-3xl border border-border/60 bg-card/80 p-6 shadow-xl shadow-foreground/5 backdrop-blur-sm sm:p-10">
          <div className="flex flex-col items-center text-center">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                <ShieldCheck className="h-3.5 w-3.5" />
                Compra protegida
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                <Lock className="h-3.5 w-3.5" />
                100% seguro
              </span>
            </div>

            <h2 className="mt-5 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              Garantía incondicional de 7 días
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
              Accede al material, revísalo con calma y si sientes que no es para ti, te devolvemos
              el 100% de tu inversión. Sin preguntas.
            </p>

            <ul className="mt-6 grid w-full gap-3 text-left sm:grid-cols-2">
              {bullets.map((item) => (
                <li key={item.text} className="flex items-start gap-3 py-2">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <item.icon className="h-4 w-4" strokeWidth={2.2} />
                  </div>
                  <p className="text-sm leading-snug text-foreground">{item.text}</p>
                </li>
              ))}
            </ul>

            <Button
              onClick={scrollToOferta}
              size="lg"
              className="mt-8 h-12 px-8 text-base font-semibold shadow-lg shadow-primary/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/30"
            >
              Sí, quiero probarlo sin riesgo
              <ArrowRightLeft className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function PreguntasFrecuentes() {
  const faqs = [
    {
      question: "¿Cómo recibo el material?",
      answer:
        "Al finalizar tu compra recibirás un correo electrónico con el acceso digital inmediato. Podrás usarlo desde tu celular, tablet o computadora.",
    },
    {
      question: "¿Necesito experiencia en cocina?",
      answer:
        "No. Las recetas están explicadas paso a paso, con ingredientes accesibles y tiempos de preparación realistas.",
    },
    {
      question: "¿Las recetas son sin azúcar y sin gluten?",
      answer:
        "El recetario incluye una gran variedad de opciones sin azúcar, sin gluten y bajas en carbohidratos, organizadas para que elijas según lo que necesites.",
    },
    {
      question: "¿Puedo acceder desde el celular?",
      answer:
        "Sí. El material es digital y puedes consultarlo desde cualquier dispositivo con conexión a internet.",
    },
    {
      question: "¿Este material sustituye una consulta con nutricionista o médico?",
      answer:
        "No. Este material es educativo e informativo y no sustituye la orientación de un profesional de la salud. Antes de hacer cambios importantes en tu alimentación, consulta a un nutricionista o médico.",
    },
  ];

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      {/* Premium ambient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-secondary/30" />
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-primary/8 blur-3xl" />

      <div className="relative mx-auto max-w-3xl">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <HelpCircle className="h-3.5 w-3.5" />
            Resolvemos tus dudas
          </span>
          <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Preguntas frecuentes
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Todo lo que necesitas saber antes de empezar. ¿No encuentras tu respuesta? Escríbenos.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[2rem] border border-border/60 bg-card/80 p-2 shadow-2xl shadow-foreground/5 backdrop-blur-sm">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-border/60 px-4 last:border-b-0"
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold hover:no-underline sm:text-lg">
                  <span className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-5 pl-10 text-base leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-background px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-sm font-medium text-foreground">
          © 2026 Recetas Antiinflamatorias. Todos los derechos reservados.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-xs text-muted-foreground">
          Material educativo. No sustituye orientación médica, nutricional o profesional.
        </p>
        <div className="mt-6 flex justify-center gap-6 text-xs text-muted-foreground">
          <button onClick={scrollToOferta} className="hover:text-foreground">
            Comprar ahora
          </button>
          <span>|</span>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-foreground">
            Volver arriba
          </button>
        </div>
      </div>
    </footer>
  );
}

function DoloresComunes() {
  const dolores = [
    {
      emoji: "🤰",
      text: (
        <>
          ¿Terminas de comer y sientes la panza <strong>pesada o hinchada</strong>, incluso cuando intentas cuidarte?
        </>
      ),
    },
    {
      emoji: "😣",
      text: (
        <>
          ¿Quieres comer mejor pero ya no sabes <strong>qué cocinar</strong> para sentirte bien?
        </>
      ),
    },
    {
      emoji: "😤",
      text: (
        <>
          ¿Sientes que haces el esfuerzo de cuidarte pero sigues con <strong>falta de energía y pesadez</strong>?
        </>
      ),
    },
    {
      emoji: "😰",
      text: (
        <>
          ¿Empiezas a comer saludable… pero terminas abandonando porque no es práctico ni sostenible?
        </>
      ),
    },
    {
      emoji: "🍬",
      text: (
        <>
          ¿Terminas comiendo cualquier cosa por <strong>ansiedad, cansancio o falta de ideas</strong>?
        </>
      ),
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-secondary/20 to-background px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            ¿Te suena familiar?
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            El problema no es tu <span className="text-primary">falta de voluntad</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Es sentirte inflamada después de comer, no saber qué cocinar y terminar cansada de intentar cuidarte sin ver cambios reales.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {dolores.map((d, i) => (
            <li
              key={i}
              className="flex items-start gap-4 rounded-2xl border border-border/60 bg-card/80 p-5 shadow-sm backdrop-blur transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <span className="text-3xl leading-none">{d.emoji}</span>
              <p className="text-base leading-relaxed text-foreground">{d.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Comparacion() {
  const malos = [
    "Son difíciles de sostener y terminas abandonando.",
    "Te dejan sin ideas y pensando todo el día en comida.",
    "Generan ansiedad y sensación de restricción constante.",
    "Terminas volviendo a los mismos hábitos de siempre.",
  ];
  const buenos = [
    "Recetas fáciles, rápidas y deliciosas para el día a día.",
    "Ingredientes simples y comidas que realmente vas a disfrutar.",
    "Menos hinchazón, más liviandad y más energía natural.",
    "Una forma sostenible de sentirte mejor sin vivir a dieta.",
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary/20 via-background to-secondary/30 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            La diferencia está acá
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            La solución no está en hacer <span className="line-through decoration-red-500/80">dieta</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Está en tener recetas simples, organizadas y ricas que puedas sostener incluso en semanas caóticas — sin pasar hambre ni sentir que estás haciendo sacrificios.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Bad column */}
          <div className="rounded-3xl border border-red-200/60 bg-red-50/40 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-red-100 text-xl">❌</span>
              <h3 className="text-lg font-bold text-foreground">Dietas extremas</h3>
            </div>
            <ul className="mt-5 space-y-3">
              {malos.map((m) => (
                <li key={m} className="flex items-start gap-3">
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" strokeWidth={2.4} />
                  <span className="text-sm leading-relaxed text-foreground/90">{m}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Good column */}
          <div className="rounded-3xl border border-emerald-200/60 bg-emerald-50/50 p-6 shadow-lg shadow-emerald-900/5 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-emerald-100 text-xl">✅</span>
              <h3 className="text-lg font-bold text-foreground">Alimentación antiinflamatoria práctica</h3>
            </div>
            <ul className="mt-5 space-y-3">
              {buenos.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" strokeWidth={2.4} />
                  <span className="text-sm leading-relaxed text-foreground/90">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

