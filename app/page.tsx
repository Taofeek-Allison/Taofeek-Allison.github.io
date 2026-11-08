import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Smartphone, Music2, ShoppingBag } from 'lucide-react';

// Update these links with your own profiles before publishing.
const profile = {
  name: 'Taofeek Allison',
  email: 'taofeekallison@outlook.com',
  github: 'https://github.com/Taofeek-Allison',
};

const projects = [
  {
    number: '01', name: 'NEXT', category: 'Fashion & e-commerce',
    summary: 'Native iOS shopping experiences at scale, with a focus on product discovery, customer journeys and platform quality.',
    role: 'iOS engineering', tech: ['Swift', 'SwiftUI', 'iOS'],
    icon: ShoppingBag, initials: 'NEXT', tone: 'bg-[#f2f3f5] text-[#20252a]',
    iosUrl: 'https://apps.apple.com/gb/app/next-shop-fashion-beauty/id348364305',
    androidUrl: 'https://play.google.com/store/apps/details?id=uk.co.next.android',
  },
  {
    number: '02', name: 'Reiss', category: 'Premium fashion',
    summary: 'Mobile retail experience within a portfolio of consumer-facing fashion applications.',
    role: 'Mobile app portfolio', tech: ['Mobile', 'Retail'],
    icon: ShoppingBag, initials: 'REISS', tone: 'bg-[#eeede9] text-[#393a37]',
    iosUrl: 'https://apps.apple.com/gb/app/reiss/id1605795159',
    androidUrl: 'https://play.google.com/store/apps/details?id=com.reiss.android',
  },
  {
    number: '03', name: "Victoria’s Secret", category: 'Retail & commerce',
    summary: 'Consumer shopping experience focused on presenting products and supporting customer journeys.',
    role: 'Mobile app portfolio', tech: ['Mobile', 'Retail'],
    icon: Smartphone, initials: 'VS', tone: 'bg-[#f8edf1] text-[#7b455c]',
    iosUrl: 'https://apps.apple.com/gb/app/victorias-secret-uk-ireland/id1584656006',
    androidUrl: null,
  },
  {
    number: '04', name: 'ChartBuilder', category: 'Music & productivity',
    summary: 'Cross-platform tools for musicians, including setlists, music charts and offline-first workflows.',
    role: 'Cross-platform engineering', tech: ['C#', '.NET MAUI', 'Xamarin'],
    icon: Music2, initials: 'CB', tone: 'bg-[#eaf0ed] text-[#385b50]',
    iosUrl: 'https://apps.apple.com/gb/app/multitracks-com-chartbuilder/id1208264687',
    androidUrl: 'https://play.google.com/store/apps/details?id=com.multitracks.chartbuilder',
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 sm:px-10">
      <header className="flex items-center justify-between border-b border-line py-7">
        <a href="#top" className="text-lg font-bold tracking-tight">{profile.name}<span className="text-[#a1a7ad]">.</span></a>
        <nav aria-label="Main navigation" className="flex items-center gap-5 text-sm text-muted sm:gap-8">
          <a className="hover:text-ink" href="#work">Work</a>
          <a className="hover:text-ink" href="#about">About</a>
          <a className="hover:text-ink" href="#contact">Contact</a>
        </nav>
      </header>

      <section id="top" className="max-w-4xl py-24 sm:py-32">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-xs font-medium text-muted">
          <span className="h-2 w-2 rounded-full bg-emerald-500" /> Senior iOS & Mobile Engineer
        </div>
        <h1 className="text-5xl font-semibold leading-[1.09] tracking-[-.055em] sm:text-7xl">
          Building mobile<br /><span className="text-[#9098a1]">experiences that matter.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">
          I’m {profile.name}, a software engineer specialising in native iOS and cross-platform development. I build thoughtful, reliable apps for people at scale.
        </p>
        <a href="#work" className="mt-9 inline-flex items-center gap-2 border-b border-ink pb-1 text-sm font-semibold hover:text-muted">
          Explore selected work <ArrowDownRight size={17} />
        </a>
      </section>

      <section id="work" className="scroll-mt-12 border-t border-line py-16 sm:py-20">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div><p className="mb-3 text-xs font-semibold uppercase tracking-[.2em] text-muted">Portfolio</p><h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Selected work<span className="text-[#a1a7ad]"> (04)</span></h2></div>
          <p className="hidden max-w-xs text-right text-sm leading-6 text-muted sm:block">A selection of mobile products and teams I’ve worked with.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article key={project.number} className="project-card overflow-hidden rounded-2xl border border-line">
                <div className={`relative flex h-56 items-center justify-center sm:h-64 ${project.tone}`}>
                  <span className="absolute left-6 top-6 text-xs font-semibold tracking-widest opacity-60">{project.number} / 04</span>
                  <div className="flex h-28 w-28 items-center justify-center rounded-[1.7rem] border border-current/10 bg-white/65 shadow-sm">
                    {project.name === 'NEXT' || project.name === 'Reiss' ? <span className="text-2xl font-bold tracking-tight">{project.initials}</span> : <Icon size={46} strokeWidth={1.35} />}
                  </div>
                  <span className="absolute bottom-5 right-6 text-xs font-medium opacity-60">{project.category}</span>
                </div>
                <div className="p-6 sm:p-7">
                  <h3 className="text-2xl font-semibold tracking-tight">{project.name}</h3>
                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-muted">{project.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">{project.tech.map((tag) => <span key={tag} className="rounded-full bg-paper px-3 py-1.5 text-xs font-medium text-[#616a74]">{tag}</span>)}</div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a href={project.iosUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} on the Apple App Store`} className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-ink px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#39424d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink">iOS <ArrowUpRight size={16} aria-hidden="true" /></a>
                    {project.androidUrl ? <a href={project.androidUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} on Google Play`} className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-line px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink">Android <ArrowUpRight size={16} aria-hidden="true" /></a> : <span className="inline-flex min-h-11 items-center rounded-lg border border-line px-4 py-2.5 text-sm text-muted">Android link pending</span>}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <p className="mt-5 text-xs leading-5 text-muted">Project descriptions reflect publicly shareable experience; specific contributions can be expanded as appropriate.</p>
      </section>

      <section id="about" className="grid scroll-mt-12 gap-8 border-t border-line py-16 sm:grid-cols-[1fr_2fr] sm:py-20">
        <div><p className="mb-3 text-xs font-semibold uppercase tracking-[.2em] text-muted">Background</p><h2 className="text-3xl font-semibold tracking-tight">A little about me.</h2></div>
        <div><p className="max-w-2xl text-lg leading-8 text-[#424a53]">I’m a senior mobile engineer with experience shipping native iOS applications and cross-platform products. I care about clear architecture, accessible interfaces, maintainable code and the details that make apps feel effortless.</p>
          <div className="mt-9 flex flex-wrap gap-2">{['Swift', 'SwiftUI', 'UIKit', 'C#', '.NET MAUI', 'Xamarin', 'Mobile architecture', 'Testing', 'CI/CD'].map((skill) => <span key={skill} className="rounded-md border border-line px-3 py-2 text-sm text-[#56606a]">{skill}</span>)}</div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-12 border-t border-line py-20 sm:py-24">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[.2em] text-muted">Get in touch</p>
        <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-[-.045em] sm:text-5xl">Let’s build something great.</h2>
        <p className="mt-5 max-w-xl text-base leading-7 text-muted">Interested in working together or discussing senior iOS engineering opportunities? I’d love to hear from you.</p>
        <div className="mt-9 flex flex-wrap gap-4">
          <a className="inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-white hover:bg-[#39424d]" href={`mailto:${profile.email}`}><Mail size={17} /> Email me</a>
          <a className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-3 text-sm font-semibold hover:bg-paper" href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={17} /> GitHub</a>
        </div>
      </section>
      <footer className="flex flex-wrap justify-between gap-3 border-t border-line py-8 text-xs text-muted"><span>© {new Date().getFullYear()} {profile.name}. Built with care.</span><span>Next.js · TypeScript · Tailwind CSS</span></footer>
    </main>
  );
}
