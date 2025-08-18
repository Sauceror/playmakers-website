import { motion } from "framer-motion";
import {
  Calendar,
  Users,
  Rocket,
  ChevronRight,
  Github,
  Mail,
  MapPin,
} from "lucide-react";

const nav = [
  { label: "Home", href: "#home" },
  { label: "Events", href: "#events" },
  { label: "Projects", href: "#projects" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Join", href: "#join" },
];

const events = [
  {
    title: "Playmakers Arcade",
    date: "First Wednesday each month",
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
    title: "/*Placeholder*/",
    date: "See Discord Announcments",
    blurb:
      "{/* TODO: Implement logic to seamlessly update third event slot with next biggest event*/}",
    icon: <Calendar className="h-5 w-5 text-brand-600" aria-hidden />,
  },
];

const sponsors = [
  { name: "MSI Australia", href: "#" },
  { name: "Riot Games", href: "#" },
  { name: "/*Placeholder*/", href: "#" },
  { name: "/*Placeholder*/", href: "#" },
];

export default function App() {
  return (
    <div id="home" className="min-h-dvh">
      {/* Top bar */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-brand-200">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#home" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-2xl bg-brand-800 text-white grid place-content-center shadow-sm">
                <span className="text-sm font-bold">PM</span>
              </div>
              <span className="font-semibold">UTS Playmakers</span>
            </a>
            <ul className="hidden md:flex items-center gap-6 text-sm">
              {nav.map((n) => (
                <li key={n.label}>
                  <a
                    href={n.href}
                    className="text-neutral-700 hover:text-brand-700 transition-colors"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#join" className="btn-primary">
              Join Us <ChevronRight className="ml-1 h-4 w-4" aria-hidden />
            </a>
          </div>
        </nav>
      </header>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none [background:radial-gradient(60%_50%_at_80%_0%,rgba(79,70,229,0.12),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-4xl font-extrabold tracking-tight">
                Playmakers
                <span className="block bg-gradient-to-r from-brand-900 to-brand-600 bg-clip-text text-transparent">
                  A student run society for gamedevs and enthusiasts alike!
                </span>
              </h1>
              <p className="mt-6 text-lg text-neutral-700/90 max-w-prose">
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
              <div className="card p-4">
                <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-brand-50 grid place-content-center text-center">
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-widest text-brand-700/70">
                      Featured
                    </p>
                    <h3 className="mt-1 text-2xl font-bold text-brand-900">
                      Playmakers Arcade
                    </h3>
                    <p className="mt-2 text-neutral-700 max-w-sm mx-auto">
                      Monthly showcase + playtest night. Meet studios, alumni
                      and fellow devs. Bring your projects!
                    </p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {events.map((e) => (
                    <div
                      key={e.title}
                      className="rounded-xl border border-brand-200/70 bg-white p-3 hover:bg-brand-50/50 transition"
                    >
                      <div className="badge">
                        {e.icon}
                        <span className="text-sm font-semibold">{e.title}</span>
                      </div>
                      <p className="mt-1 text-xs text-neutral-500">{e.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section
        id="events"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-900">
            Upcoming Events
          </h2>
          <a
            href="#"
            className="text-sm text-brand-700 hover:text-brand-800 hover:underline"
          >
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
                <h3 className="font-semibold">{e.title}</h3>
              </div>
              <p className="mt-1 text-sm text-neutral-500">{e.date}</p>
              <p className="mt-3 text-neutral-700 text-sm">{e.blurb}</p>
              <a
                href="#join"
                className="mt-4 inline-flex items-center text-sm font-medium text-brand-700 hover:text-brand-800 hover:underline"
              >
                RSVP <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </motion.article>
          ))}
        </div>
      </section>
      {/* Projects */}
      <section
        id="projects"
        className="bg-brand-50/60 border-y border-brand-200"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-900">
            Student Projects
          </h2>
          <p className="mt-3 text-neutral-700 max-w-prose">
            A curated selection of society built games. Swap these cards with
            PDT/game jam thumbnails and links.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="card overflow-hidden hover:shadow-lg hover:ring-1 hover:ring-brand-200 transition"
              >
                <div className="aspect-[16/10] bg-brand-100" />
                <div className="p-5">
                  <h3 className="font-semibold text-brand-900">
                    Project Title {i}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-700">
                    Short description about the mechanics, tech or team.
                  </p>
                  <a
                    href="#"
                    className="mt-3 inline-flex items-center text-sm font-medium text-brand-700 hover:text-brand-800 hover:underline"
                  >
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Sponsors */}
      <section
        id="sponsors"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-brand-900">
          Partners & Sponsors
        </h2>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {sponsors.map((s) => (
            <a
              key={s.name}
              href={s.href}
              className="rounded-xl border border-brand-200 bg-white p-6 text-center text-sm font-medium text-neutral-800 hover:bg-brand-50 hover:shadow-sm hover:ring-1 hover:ring-brand-200 transition"
            >
              {s.name}
            </a>
          ))}
        </div>
      </section>
      {/* Join */}
      <section
        id="join"
        className="text-white bg-gradient-to-br from-brand-900 to-brand-700"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
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
                  className="rounded-xl bg-white text-brand-900 px-5 py-3 text-sm font-medium  hover:bg-white/10"
                >
                  Join here on the ActivateUTS Website
                </a>
                <a
                  href="https://discord.gg/UJT94Z39VY"
                  className="rounded-xl bg-white text-brand-900 px-5 py-3 text-sm font-medium hover:bg-white/10"
                >
                  Join our Discord
                </a>
              </div>
            </div>
            <div className="rounded-2xl bg-white text-neutral-900 p-6">
              <form className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm">First name</label>
                  <input className="input mt-1" placeholder="Play" />
                </div>
                <div>
                  <label className="text-sm">Last name</label>
                  <input className="input mt-1" placeholder="Maker" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm">Email</label>
                  <input
                    type="email"
                    className="input mt-1"
                    placeholder="you@uni.edu"
                  />
                </div>
                <button type="button" className="btn-primary sm:col-span-2">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="border-t border-brand-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
            <div>
              <div className="flex items-center gap-2 font-semibold">
                <div className="h-8 w-8 rounded-xl bg-brand-900 text-white grid place-content-center">
                  PM
                </div>
                Playmakers Society
              </div>
              <p className="mt-3 text-neutral-700">
                The University of Technology Sydney
              </p>
              <p className="mt-1 inline-flex items-center gap-1 text-neutral-700">
                <MapPin className="h-4 w-4 text-brand-700" /> 15 Broadway,
                Ultimo NSW
              </p>
            </div>
            <div>
              <p className="font-semibold text-brand-900">Navigate</p>
              <ul className="mt-3 space-y-2 text-neutral-700">
                {nav.map((n) => (
                  <li key={n.label}>
                    <a
                      href={n.href}
                      className="hover:underline hover:text-brand-800"
                    >
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-semibold text-brand-900">Social</p>
              <ul className="mt-3 space-y-2 text-neutral-700">
                <li>
                  <a href="#" className="hover:underline hover:text-brand-800">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:text-brand-800">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:text-brand-800">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-brand-900">Contact</p>
              <ul className="mt-3 space-y-2 text-neutral-700">
                <li className="inline-flex items-center gap-2">
                  <Mail className="h-4 w-4 text-brand-700" />{" "}
                  president@playmakers.activateuts.com.au
                </li>
                <li className="inline-flex items-center gap-2">
                  <Github className="h-4 w-4 text-brand-700" />{" "}
                  github.com/playmakers
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t border-brand-200 pt-6 text-xs text-neutral-600">
            © {new Date().getFullYear()} Playmakers UTS. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
