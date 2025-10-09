import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Users,
  Rocket,
  ChevronRight,
  Github,
  Mail,
  MapPin,
  Gamepad2,
  Download,
  Palette,
  Music,
  Bug,
  Image as ImageIcon,
  Store,
  Sun,
  Moon,
  Globe,
} from "lucide-react";

/* -----------------------------------------------------
   TODO : Prepare for deployment on Vercel
----------------------------------------------------- */
const LOGO_SRC = "/logo.png";

/* -----------------------------------------------------
   NAV
----------------------------------------------------- */
const nav = [
  { label: "Home", href: "#home" },
  { label: "Events", href: "#events" },
  { label: "Projects", href: "#projects" },
  { label: "PDT", href: "#pdt" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Join", href: "#join" },
];

/* -----------------------------------------------------
   EVENTS
----------------------------------------------------- */
const events = [
  {
    title: "Playmakers Arcade",
    date: "First Thursday of each month",
    blurb:
      "Showcase your WIP, get feedback and meet the Sydney gamedev community.",
    icon: <Rocket className="h-5 w-5 text-brand-600" aria-hidden />,
  },
  {
    title: "Playmakers Hangout",
    date: "Every 2nd Thursday 5–9pm",
    blurb:
      "Work on your projects, play games, chat, get dev help and most importantly; have fun.",
    icon: <Users className="h-5 w-5 text-brand-600" aria-hidden />,
  },
  {
    title: "More Events",
    date: "See Discord Announcements",
    blurb:
      "We run game jams, workshops, industry talks, convention visits and more! ",
    icon: <Calendar className="h-5 w-5 text-brand-600" aria-hidden />,
  },
];

/* -----------------------------------------------------
   STUDENT PROJECTS
----------------------------------------------------- */
type Project = {
  title: string;
  desc: string;
  image?: string;
  itch?: string;
  steam?: string;
  link?: string;
};

const projects: Project[] = [
  {
    title: "Pascal's Requiem",
    desc: "Pascal's Requiem is a 2.5D turn-based RPG set in a sci-fi solarpunk world. In all battles, player and enemy moves are different microgames, ranging from petting a dog, to dodging laser beams, and even busting out some dance moves! Will you accept your fate, or forge a new destiny?",
    image: "/projects/project1.jpg",
    steam: "https://store.steampowered.com/app/3224780/Pascals_Requiem/",
    link: "https://store.steampowered.com/app/3224780/Pascals_Requiem/",
  },
  {
    title: "Armless Samurai",
    desc: "Armless Samurai is a fast paced first-person parkour game where you play as a samurai whose limbs have been lost in battle, and robbed from their arsenal. Worry not, however, they haven’t taken your legs yet! And this will be your enemy's greatest mistake…",
    image: "/projects/project2.jpg",
    steam: "https://store.steampowered.com/app/2800020/Armless_Samurai/",
    link: "https://store.steampowered.com/app/2800020/Armless_Samurai/",
  },
  {
    title: "MMMMMM",
    desc: "Multi-Merge Mix & Match Minigame Mayhem is a frantic local and online multiplayer party game for up to 8 players. Run, jump and punch your way through an onslaught of simultaneous microgames as you try to be the last one standing in each of them!",
    image: "/projects/project3.jpg",
    steam:
      "https://store.steampowered.com/app/3655540/MMMMMM_MultiMerge_Mix__Match_Minigame_Mayhem/",
    link: "https://store.steampowered.com/app/3655540/MMMMMM_MultiMerge_Mix__Match_Minigame_Mayhem/",
  },
  {
    title: "Chopsticks",
    desc: "CHOPSTICKS is a local multiplayer fighting game set across the globe. With just one attack button and a focus on parrying, strategy is key. Each map opens up unique gameplay opportunities with map specific elements: from giant lasers to sticks that can be used as swords!",
    image: "/projects/project4.png",
    steam:
      "https://store.steampowered.com/app/3982670/CHOPSTICKS_Stick_Figure_Fighting/",
    link: "https://store.steampowered.com/app/3982670/CHOPSTICKS_Stick_Figure_Fighting/",
  },
  {
    title: "Quantum Loop",
    desc: "Zoom and dodge your way about space, exploring the quadrant and solving intertwining objectives however you can. Hit an asteroid and the mission resets - but whatever you learn you can exploit in the next loop! Use your crafty wits and precise piloting in chorus to prevent the asteroid crisis!",
    image: "/projects/project5.jpg",
    steam: "https://store.steampowered.com/app/3186440/Quantum_Loop/",
    link: "https://store.steampowered.com/app/3186440/Quantum_Loop/",
  },
  {
    title: "Arcane Raiders",
    desc: "Arcane Raiders is a rogue-like dungeon-raider where you blast enemies with spells and maneuver through traps to pillage the Tower of its treasure. Tight dodging controls and powerful elemental synergies will help you in your quest to take down the Tower's fearsome bosses and make it out with as much gold as possible.",
    image: "/projects/project6.jpg",
    steam: "https://store.steampowered.com/app/2899410/Arcane_Raiders/",
    link: "https://store.steampowered.com/app/2899410/Arcane_Raiders/",
  },
];

/* -----------------------------------------------------
   PDT CONTENT + IMAGES
----------------------------------------------------- */
const pdtStats = [
  { label: "Since", value: "2020" },
  { label: "Pascal’s Requiem", value: "27k+ downloads" },
  { label: "Armless Samurai", value: "23k+ downloads" },
  { label: "Team 2025", value: "≈39 students" },
];

const pdtPhases = [
  "Ideation & Prototyping",
  "Pre-Production",
  "Vertical Slice",
  "Pre-Alpha",
  "Alpha",
  "Beta",
  "Gold Master",
];

const pdtRoles = [
  { name: "Programming", icon: <Gamepad2 className="h-4 w-4" /> },
  { name: "Art / UI", icon: <Palette className="h-4 w-4" /> },
  { name: "Audio", icon: <Music className="h-4 w-4" /> },
  { name: "Design", icon: <Calendar className="h-4 w-4" /> },
  { name: "QA", icon: <Bug className="h-4 w-4" /> },
  { name: "Marketing", icon: <Rocket className="h-4 w-4" /> },
];

const pdtShots = {
  pascals: "/pdt/pascals.jpg",
  armless: "/pdt/armless.jpg",
};

/* -----------------------------------------------------
   HELPERS
----------------------------------------------------- */
function Thumb({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-24 w-36 shrink-0 overflow-hidden rounded-xl border border-brand-200 bg-brand-100">
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        onError={(e) => {
          const el = e.currentTarget;
          el.style.display = "none";
          const ph = el.nextElementSibling as HTMLElement | null;
          if (ph) {
            ph.classList.remove("hidden");
            ph.classList.add("grid");
          }
        }}
      />
      <div className="absolute inset-0 hidden place-content-center text-brand-700/70">
        <ImageIcon className="h-6 w-6" />
      </div>
    </div>
  );
}

/* -----------------------------------------------------
   SPONSORS
----------------------------------------------------- */
const sponsors = [
  { name: "MSI Australia", href: "https://au.msi.com/" }, //TEXTFIELD: Sponsors
  { name: "Riot Games", href: "https://www.riotgames.com/en" },
  { name: "SXSW", href: "https://www.sxswsydney.com/" },
  { name: "ActivateUTS", href: "https://www.activateuts.com.au/" },
];

/* -----------------------------------------------------
   CONTACT EMAIL SENDER
----------------------------------------------------- */
async function sendQuestionEmail(data: {
  firstName: string;
  lastName: string;
  email: string;
  question: string;
}) {
  const endpoint =
    "https://formsubmit.co/ajax/playmakers.president@activateuts.com.au";

  const payload = {
    "First name": data.firstName,
    "Last name": data.lastName,
    Email: data.email,
    Question: data.question,
    _subject: "Question via Playmakers website",
    _captcha: "false",
    _template: "table",
  };

  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

/* -----------------------------------------------------
   THEME (light/dark)
----------------------------------------------------- */
type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  try {
    const stored = localStorage.getItem("pm-theme");
    if (stored === "light" || stored === "dark") return stored as Theme;
  } catch {}
  return "dark"; // default
}

/* =====================================================
   APP
===================================================== */
export default function App() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    try {
      localStorage.setItem("pm-theme", theme);
    } catch {}
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <div id="home" className="min-h-dvh">
      {/* Header */}
      <header
        className="sticky top-0 z-50 backdrop-blur border-b border-brand-200"
        style={{
          background: "color-mix(in oklab, var(--card-bg) 92%, transparent)",
        }}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#home" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-2xl overflow-hidden shadow-sm">
                <img
                  src={LOGO_SRC}
                  alt="UTS Playmakers logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="font-semibold text-1">UTS Playmakers</span>
            </a>

            <ul className="hidden md:flex items-center gap-6 text-sm">
              {nav.map((n) => (
                <li key={n.label}>
                  <a
                    href={n.href}
                    className="text-2 hover:text-brand-800 transition-colors"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={toggleTheme}
                className="inline-flex items-center rounded-xl border border-brand-300 px-3 py-2 text-sm font-medium bg-[var(--card-bg)] hover:bg-brand-50/40 transition"
                aria-label="Toggle dark mode"
                title={
                  theme === "dark"
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                }
              >
                {theme === "dark" ? (
                  <>
                    <Sun className="h-4 w-4" />
                    <span className="ml-2 hidden sm:inline">Light</span>
                  </>
                ) : (
                  <>
                    <Moon className="h-4 w-4" />
                    <span className="ml-2 hidden sm:inline">Dark</span>
                  </>
                )}
              </button>

              <a href="#join" className="btn-primary">
                Join Us <ChevronRight className="ml-1 h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none hero-glow" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-4xl font-extrabold tracking-tight text-1">
                Playmakers
                {/* One span that adapts via CSS variables */}
                <span className="block headline-gradient">
                  A student run society for <br className="hidden sm:block" />
                  gamedevs and enthusiasts alike!
                </span>
              </h1>
              <p className="mt-6 text-lg text-2 max-w-prose">
                Playmakers is the University of Technology Sydney's student game
                development society. We are dedicated to supporting and serving
                future video game industry creators/leaders through their
                academic journey and additionally assist the Greater Sydney
                video game industry as a whole. We run numerous events,
                initiatives and have built industry relationships, as well as
                provided opportunities for young video game developers to
                network, building their professional education and training in
                the process.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#events" className="btn-primary">
                  See Events
                </a>
                <a href="#projects" className="btn-outline">
                  Explore Projects
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="panel p-4">
                <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-[var(--card-bg)] grid place-content-center text-center">
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-widest text-3">
                      Featured
                    </p>
                    <h3 className="mt-1 text-2xl font-bold text-1">
                      Playmakers Arcade
                    </h3>
                    <p className="mt-2 text-2 max-w-sm mx-auto">
                      Monthly showcase + playtest night. Meet studios, alumni
                      and fellow devs. Bring your projects!
                    </p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {events.map((e) => (
                    <div
                      key={e.title}
                      className="rounded-xl border border-brand-200/70 bg-[var(--card-bg)] p-3 hover:bg-brand-50/40 transition"
                    >
                      <div className="badge">
                        {e.icon}
                        <span className="text-sm font-semibold text-1">
                          {e.title}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-3">{e.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Acknowledgement of Country (About area add-on) */}
      <section
        aria-label="Acknowledgement of Country"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-6 -mt-8"
      >
        <div className="panel relative overflow-hidden p-6 md:p-7">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-700 via-brand-500 to-brand-700" />
          <div className="flex items-start gap-3">
            <div className="rounded-xl bg-brand-50 border border-brand-200 p-2 text-brand-800 shrink-0">
              <Globe className="h-5 w-5" aria-hidden />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-1">
                Acknowledgement of Country
              </h2>
              <p className="mt-2 text-sm text-2 max-w-3xl">
                We acknowledge the{" "}
                <span className="font-medium">
                  Gadigal people of the Eora Nation
                </span>
                , the Traditional Custodians of the Country on which UTS stands.
                We pay our respects to Elders past and present and extend that
                respect to all First Nations peoples who join our community and
                events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section
        id="events"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold text-1">
            Upcoming Events
          </h2>
          <a href="#" className="text-sm text-brand-800 hover:underline">
            View calendar
          </a>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((e) => (
            <motion.article
              key={e.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="card p-6 hover:shadow-lg hover:ring-1 hover:ring-brand-200 transition"
            >
              <div className="badge">
                {e.icon}
                <h3 className="font-semibold text-1">{e.title}</h3>
              </div>
              <p className="mt-1 text-sm text-3">{e.date}</p>
              <p className="mt-3 text-2 text-sm">{e.blurb}</p>
              <a
                href="#join"
                className="mt-4 inline-flex items-center text-sm font-medium text-brand-800 hover:underline"
              >
                Find out more <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Student Projects Section */}
      <section
        id="projects"
        className="border-y border-brand-200"
        style={{ background: "var(--panel-bg)" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-1">
            Student Projects
          </h2>
          <p className="mt-3 text-2 max-w-prose">
            A curated selection of society built games.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <article
                key={p.title}
                className="card overflow-hidden group hover:shadow-lg hover:ring-1 hover:ring-brand-200 transition"
              >
                {/* Thumbnail */}
                <div className="relative aspect-[16/10] bg-brand-100">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={`${p.title} thumbnail`}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        const el = e.currentTarget as HTMLImageElement;
                        el.style.display = "none";
                        const ph = el.nextElementSibling as HTMLElement | null;
                        if (ph) {
                          ph.classList.remove("hidden");
                          ph.classList.add("grid");
                        }
                      }}
                    />
                  ) : null}
                  <div className="absolute inset-0 hidden place-content-center text-brand-700/70">
                    <ImageIcon className="h-7 w-7" />
                  </div>

                  {/* Itch.io/Steam quick buttons */}
                  <div className="absolute right-3 top-3 flex gap-2 opacity-0 group-hover:opacity-100 transition">
                    {p.itch && (
                      <a
                        href={p.itch}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg bg-white/90 backdrop-blur px-2 py-1 text-xs font-medium text-brand-800 border border-brand-200 inline-flex items-center gap-1 hover:bg-white"
                        title="Itch.io"
                      >
                        <Gamepad2 className="h-3.5 w-3.5" />
                        Itch
                      </a>
                    )}
                    {p.steam && (
                      <a
                        href={p.steam}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg bg-white/90 backdrop-blur px-2 py-1 text-xs font-medium text-brand-800 border border-brand-200 inline-flex items-center gap-1 hover:bg-white"
                        title="Steam"
                      >
                        <Store className="h-3.5 w-3.5" />
                        Steam
                      </a>
                    )}
                  </div>

                  {/* Bottom fade */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[var(--card-bg)]/95 to-transparent" />
                </div>

                {/* Text */}
                <div className="p-5 border-t border-brand-200 bg-[var(--card-bg)]">
                  <h3 className="font-semibold text-1">{p.title}</h3>
                  <p className="mt-2 text-sm text-2">{p.desc}</p>
                  <div className="mt-3 flex items-center gap-4">
                    {p.link ? (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center text-sm font-medium text-brand-800 hover:underline"
                      >
                        Learn more <ChevronRight className="ml-1 h-4 w-4" />
                      </a>
                    ) : (
                      <span className="text-sm text-3">More info soon</span>
                    )}

                    <div className="ml-auto flex items-center gap-3 text-sm">
                      {p.itch && (
                        <a
                          href={p.itch}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-brand-800 hover:underline"
                          title="Open on Itch.io"
                        >
                          <Gamepad2 className="h-4 w-4" /> Itch
                        </a>
                      )}
                      {p.steam && (
                        <a
                          href={p.steam}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-brand-800 hover:underline"
                          title="Open on Steam"
                        >
                          <Store className="h-4 w-4" /> Steam
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PDT Section */}
      <section
        id="pdt"
        className="border-y border-brand-200"
        style={{ background: "var(--panel-bg)" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left */}
            <div>
              <h2 className="text-3xl font-extrabold text-1">
                Playmakers Development Team (PDT)
              </h2>
              <p className="mt-4 text-2 max-w-prose">
                Playmakers Development Team (PDT) is our studio style game
                initiative. Each year we assemble a multidisciplinary team to
                pitch, prototype and ship a polished game for PC which builds
                real studio experience, CV ready credits and lifelong
                connections.
              </p>

              <dl className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {pdtStats.map((s) => (
                  <div key={s.label} className="card p-4 text-center">
                    <dt className="text-xs text-3">{s.label}</dt>
                    <dd className="mt-1 font-semibold text-1">{s.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://store.steampowered.com/search/?developer=Playmakers%20Development%20Team"
                  className="btn-primary"
                >
                  <Download className="mr-2 h-4 w-4" />
                  View on Steam
                </a>
                <a href="https://discord.gg/UJT94Z39VY" className="btn-outline">
                  <Users className="mr-2 h-4 w-4" />
                  Apply / Ask about PDT
                </a>
              </div>
            </div>

            {/* Right */}
            <div className="panel p-6">
              <h3 className="text-lg font-semibold text-1">Roles and Teams</h3>
              <p className="mt-1 text-sm text-2">
                Producers, Directors and Leads support cross disciplinary teams:
              </p>
              <ul className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2">
                {pdtRoles.map((r) => (
                  <li
                    key={r.name}
                    className="inline-flex items-center gap-2 rounded-lg border border-brand-200 bg-brand-50 px-3 py-2 text-sm text-brand-800"
                  >
                    {r.icon}
                    {r.name}
                  </li>
                ))}
              </ul>

              <h3 className="mt-6 text-lg font-semibold text-1">
                Development Phases
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {pdtPhases.map((p) => (
                  <span
                    key={p}
                    className="rounded-full border border-brand-200 bg-[var(--card-bg)] px-3 py-1 text-xs text-brand-800"
                  >
                    {p}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-sm text-2">
                We use Agile practices and 1 on 1 MBO goal setting to ensure
                scope is clear, workloads are sustainable and growth is
                measurable.
              </p>
            </div>
          </div>

          {/* Showcase tiles */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <motion.article
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="card p-5"
            >
              <div className="flex items-start gap-4">
                <Thumb
                  src={pdtShots.pascals}
                  alt="Pascal’s Requiem thumbnail"
                />
                <div className="min-w-0">
                  <div className="flex items-center gap-2 text-brand-800">
                    <Rocket className="h-5 w-5" />
                    <h4 className="font-semibold truncate">Pascal’s Requiem</h4>
                  </div>
                  <p className="mt-2 text-sm text-2">
                    27k+ downloads, shown at UTS Tech Festival & SMASH!, headed
                    to SXSW Sydney and PAX Australia.
                  </p>
                </div>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="card p-5"
            >
              <div className="flex items-start gap-4">
                <Thumb src={pdtShots.armless} alt="Armless Samurai thumbnail" />
                <div className="min-w-0">
                  <div className="flex items-center gap-2 text-brand-800">
                    <Rocket className="h-5 w-5" />
                    <h4 className="font-semibold truncate">Armless Samurai</h4>
                  </div>
                  <p className="mt-2 text-sm text-2">
                    23k+ downloads, SXSW Student Game nominee; featured at UTS
                    Tech Festival and SMASH!.
                  </p>
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section
        id="sponsors"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-1">
          Partners & Sponsors
        </h2>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {sponsors.map((s) => (
            <a
              key={s.name}
              href={s.href}
              className="rounded-xl border border-brand-200 bg-[var(--card-bg)] p-6 text-center text-sm font-medium text-2 hover:bg-brand-50/60 hover:shadow-sm hover:ring-1 hover:ring-brand-200 transition"
            >
              {s.name}
            </a>
          ))}
        </div>
      </section>

      {/* Join: left info + right question form */}
      <section
        id="join"
        className="text-white bg-gradient-to-br from-brand-900 to-brand-700"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-extrabold">Join the Society</h2>
              <p className="mt-3 text-white/85 max-w-prose">
                Membership is free for UTS students! Get exclusive member perks
                such as free workshops, competition prizes and discounted or
                even exclusive events!
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://www.activateuts.com.au/clubs/playmakers/"
                  className="rounded-xl bg-white text-brand-900 px-5 py-3 text-sm font-medium hover:bg-white/90"
                >
                  Join here on the ActivateUTS Website
                </a>
                <a
                  href="https://discord.gg/UJT94Z39VY"
                  className="rounded-xl bg-white text-brand-900 px-5 py-3 text-sm font-medium hover:bg-white/90"
                >
                  Join our Discord
                </a>
              </div>
            </div>

            <div className="rounded-2xl bg-[var(--card-bg)] text-1 p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Ask a Question</h3>
              <p className="mt-1 text-sm text-2">
                Have a question about Playmakers or PDT? Send us a message and
                we’ll reply to your email.
              </p>

              <form
                className="mt-4 grid sm:grid-cols-2 gap-4"
                onSubmit={async (e) => {
                  e.preventDefault();
                  setStatus("sending");
                  setErrorMsg("");
                  const fd = new FormData(e.currentTarget as HTMLFormElement);
                  const firstName = String(fd.get("firstName") || "");
                  const lastName = String(fd.get("lastName") || "");
                  const email = String(fd.get("email") || "");
                  const question = String(fd.get("question") || "");
                  try {
                    await sendQuestionEmail({
                      firstName,
                      lastName,
                      email,
                      question,
                    });
                    setStatus("success");
                    (e.currentTarget as HTMLFormElement).reset();
                  } catch {
                    try {
                      const subject = encodeURIComponent(
                        "Question via Playmakers website"
                      );
                      const body = encodeURIComponent(
                        `From: ${firstName} ${lastName}\nEmail: ${email}\n\nQuestion:\n${question}`
                      );
                      window.location.href = `mailto:president@playmakers.activateuts.com.au?subject=${subject}&body=${body}`;
                    } catch {}
                    setStatus("error");
                    setErrorMsg(
                      "We couldn’t send automatically. Your email client will open so you can send it manually."
                    );
                  }
                }}
              >
                <div>
                  <label className="text-sm">First name</label>
                  <input
                    name="firstName"
                    required
                    className="input mt-1"
                    placeholder="Scrum"
                  />
                </div>
                <div>
                  <label className="text-sm">Last name</label>
                  <input
                    name="lastName"
                    required
                    className="input mt-1"
                    placeholder="Master"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="input mt-1"
                    placeholder="name@domain.com"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm">Your question</label>
                  <textarea
                    name="question"
                    required
                    className="input mt-1 min-h-[120px] resize-vertical"
                    placeholder="Ask us anything about events, PDT, membership, etc."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="sm:col-span-2 rounded-xl bg-gradient-to-r from-brand-700 to-brand-500 text-white px-5 py-3 text-sm font-medium shadow-sm hover:shadow disabled:opacity-70"
                >
                  {status === "sending" ? "Sending…" : "Submit"}
                </button>

                {status === "success" && (
                  <p className="sm:col-span-2 text-sm text-green-700">
                    Thanks! Your message has been sent. We’ll reply to your
                    email soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="sm:col-span-2 text-sm text-red-700">
                    {errorMsg}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="border-t border-brand-200"
        style={{ background: "var(--card-bg)" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
            <div>
              <div className="flex items-center gap-2 font-semibold">
                <div className="h-8 w-8 rounded-xl overflow-hidden">
                  <img
                    src={LOGO_SRC}
                    alt="UTS Playmakers logo"
                    className="h-full w-full object-contain"
                  />
                </div>
                Playmakers Society
              </div>

              <p className="mt-3 text-2">The University of Technology Sydney</p>
              <p className="mt-1 inline-flex items-center gap-1 text-2">
                <MapPin className="h-4 w-4 text-brand-700" /> 15 Broadway,
                Ultimo NSW
              </p>
            </div>
            <div>
              <p className="font-semibold text-1">Navigate</p>
              <ul className="mt-3 space-y-2 text-2">
                {nav.map((n) => (
                  <li key={n.label}>
                    <a
                      href={n.href}
                      className="hover:underline text-brand-800 hover:text-brand-900"
                    >
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-semibold text-1">Social</p>
              <ul className="mt-3 space-y-2 text-2">
                <li>
                  <a
                    href="#"
                    className="hover:underline text-brand-800 hover:text-brand-900"
                  >
                    Discord
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline text-brand-800 hover:text-brand-900"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline text-brand-800 hover:text-brand-900"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-1">Contact</p>
              <ul className="mt-3 space-y-2 text-2">
                <li className="inline-flex items-center gap-2">
                  <Mail className="h-4 w-4 text-brand-700" />{" "}
                  president@playmakers.activateuts.com.au
                </li>
                <li className="inline-flex items-center gap-2">
                  <Github className="h-4 w-4 text-brand-700" />{" "}
                  github.com/Playmakers-Development-Team
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t border-brand-200 pt-6 text-xs text-3">
            © {new Date().getFullYear()} Playmakers UTS. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
