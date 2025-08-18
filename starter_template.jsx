import React from "react";
import { motion } from "framer-motion";
import { Calendar, Users, Rocket, ChevronRight, Github, Mail, MapPin } from "lucide-react";

/**
 * Society Website – React Starter
 * -------------------------------------------------
 * Drop this file in src/App.tsx of a Vite + React + TS project
 * (with Tailwind enabled). Edit the placeholder content and links.
 */

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
    blurb: "Showcase your WIP, get feedback and meet the Sydney gamedev community.",
    icon: <Rocket className="h-5 w-5" aria-hidden />,
  },
  {
    title: "Playmakers Hangout",
    date: "Every Wednesday 5–9pm",
    blurb: "Work on your projects, play games, chat, get dev help and most importantly; have fun.",
    icon: <Users className="h-5 w-5" aria-hidden />,
  },
  {
    title: "Industry Talks",
    date: "See Server Announcments",
    blurb: "Studios and alumni share production tips, portfolios, and hiring advice.",
    icon: <Calendar className="h-5 w-5" aria-hidden />,
  },
];

const sponsors = [
  { name: "UTS FEIT", href: "#" },
  { name: "GitHub", href: "#" },
  { name: "Unity", href: "#" },
  { name: "JetBrains", href: "#" },
];

export default function App() {
  return (
    <div className="min-h-dvh bg-neutral-50 text-neutral-900" id="home">
      {/* Top bar */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#home" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-2xl bg-black text-white grid place-content-center">
                <span className="text-sm font-bold">PM</span>
              </div>
              <span className="font-semibold">Playmakers Society</span>
            </a>
            <ul className="hidden md:flex items-center gap-6 text-sm">
              {nav.map((n) => (
                <li key={n.label}>
                  <a href={n.href} className="hover:text-black/80 transition-colors">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#join"
              className="inline-flex items-center rounded-xl bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:shadow transition"
            >
              Join Us
              <ChevronRight className="ml-1 h-4 w-4" aria-hidden />
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,0,0,0.08),transparent_40%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                Build. Learn. Ship.
                <span className="block text-black/60">A student-run hub for game developers.</span>
              </h1>
              <p className="mt-6 text-lg text-neutral-600 max-w-prose">
                We connect aspiring designers, programmers, and artists through events, workshops, and collaborative projects. Whether you're shipping your first jam game or polishing your portfolio, this is the place to level up.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#events" className="rounded-xl bg-black px-5 py-3 text-white text-sm font-medium hover:shadow">
                  See Events
                </a>
                <a href="#projects" className="rounded-xl border px-5 py-3 text-sm font-medium hover:bg-white">
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
              <div className="rounded-3xl border bg-white p-4 shadow-sm">
                <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-100 grid place-content-center text-center">
                  <div className="p-6">
                    <p className="text-sm uppercase tracking-widest text-neutral-500">Featured</p>
                    <h3 className="mt-1 text-2xl font-bold">Playmakers Arcade</h3>
                    <p className="mt-2 text-neutral-600 max-w-sm mx-auto">
                      Monthly showcase + playtest night. Meet studios, alumni, and fellow devs. Bring a build!
                    </p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {events.map((e) => (
                    <div key={e.title} className="rounded-xl border p-3">
                      <div className="flex items-center gap-2 text-neutral-700">
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
      <section id="events" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold">Upcoming Events</h2>
          <a href="#" className="text-sm text-black/70 hover:underline">View calendar</a>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((e) => (
            <motion.article
              key={e.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow"
            >
              <div className="flex items-center gap-2 text-neutral-700">
                {e.icon}
                <h3 className="font-semibold">{e.title}</h3>
              </div>
              <p className="mt-1 text-sm text-neutral-500">{e.date}</p>
              <p className="mt-3 text-neutral-700 text-sm">{e.blurb}</p>
              <a href="#join" className="mt-4 inline-flex items-center text-sm font-medium hover:underline">
                RSVP <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-white/50 border-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl sm:text-3xl font-bold">Student Projects</h2>
          <p className="mt-3 text-neutral-600 max-w-prose">
            A curated selection of society-built games. Swap these cards with your own project thumbnails and links.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-2xl border bg-white overflow-hidden shadow-sm hover:shadow">
                <div className="aspect-[16/10] bg-neutral-100" />
                <div className="p-5">
                  <h3 className="font-semibold">Project Title {i}</h3>
                  <p className="mt-2 text-sm text-neutral-600">Short description about the mechanics, tech, or team.</p>
                  <a href="#" className="mt-3 inline-flex items-center text-sm font-medium hover:underline">
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section id="sponsors" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold">Partners & Sponsors</h2>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {sponsors.map((s) => (
            <a key={s.name} href={s.href} className="rounded-xl border bg-white p-6 text-center text-sm font-medium hover:shadow">
              {s.name}
            </a>
          ))}
        </div>
      </section>

      {/* Join */}
      <section id="join" className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-extrabold">Join the Society</h2>
              <p className="mt-3 text-white/80 max-w-prose">
                Membership is free for UTS students. Get event invites, resources, and meet collaborators.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#" className="rounded-xl bg-white text-black px-5 py-3 text-sm font-medium hover:shadow">
                  Join on OrgSync
                </a>
                <a href="#" className="rounded-xl border border-white/20 px-5 py-3 text-sm font-medium">
                  Join our Discord
                </a>
              </div>
            </div>
            <div className="rounded-2xl bg-white text-neutral-900 p-6">
              <form className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm">First name</label>
                  <input className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="Ada" />
                </div>
                <div>
                  <label className="text-sm">Last name</label>
                  <input className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="Lovelace" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm">Email</label>
                  <input type="email" className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="you@uni.edu" />
                </div>
                <button type="button" className="sm:col-span-2 rounded-xl bg-black text-white px-5 py-3 text-sm font-medium">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
            <div>
              <div className="flex items-center gap-2 font-semibold">
                <div className="h-8 w-8 rounded-xl bg-black text-white grid place-content-center">PM</div>
                Playmakers Society
              </div>
              <p className="mt-3 text-neutral-600">UTS | Building 11 | Level 4 | Gamedev Lab</p>
              <p className="mt-1 inline-flex items-center gap-1 text-neutral-600"><MapPin className="h-4 w-4"/> 15 Broadway, Ultimo NSW</p>
            </div>
            <div>
              <p className="font-semibold">Navigate</p>
              <ul className="mt-3 space-y-2 text-neutral-600">
                {nav.map((n) => (
                  <li key={n.label}><a href={n.href} className="hover:underline">{n.label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-semibold">Social</p>
              <ul className="mt-3 space-y-2 text-neutral-600">
                <li><a href="#" className="hover:underline">Discord</a></li>
                <li><a href="#" className="hover:underline">Instagram</a></li>
                <li><a href="#" className="hover:underline">Twitter</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Contact</p>
              <ul className="mt-3 space-y-2 text-neutral-600">
                <li className="inline-flex items-center gap-2"><Mail className="h-4 w-4"/> hello@playmakers.example</li>
                <li className="inline-flex items-center gap-2"><Github className="h-4 w-4"/> github.com/playmakers</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t pt-6 text-xs text-neutral-500">© {new Date().getFullYear()} Playmakers UTS. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
