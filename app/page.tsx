import { ArrowDownRight, ArrowUpRight, Github, Mail, Linkedin, FileDown } from 'lucide-react';
import { site, projects, sideProjects, skillGroups, type Project } from '../src/content/site';

const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${path}`;

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 sm:px-10">
      <header className="flex items-center justify-between border-b border-line py-7">
        <a href="#top" className="text-base font-bold tracking-tight sm:text-lg">{site.name}<span className="text-[#a1a7ad]">.</span></a>
        <nav aria-label="Main navigation" className="flex items-center gap-3 text-sm text-muted sm:gap-8">
          <a className="hover:text-ink" href="#work">Work</a>
          <a className="hover:text-ink" href="#about">About</a>
          <a className="hover:text-ink" href="#contact">Contact</a>
        </nav>
      </header>

      <section id="top" className="max-w-4xl py-16 sm:py-20">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[.2em] text-muted">{site.eyebrow}</p>
        <h1 className="text-4xl font-semibold leading-[1.12] tracking-[-.045em] sm:text-6xl">
          {site.headline.split(' | ')[0]} <span className="text-[#a1a7ad]">|</span><br /><span className="text-[#68737e]">{site.headline.split(' | ')[1]}</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">
          {site.hero}
        </p>
        <a href="#work" className="mt-9 inline-flex items-center gap-2 border-b border-ink pb-1 text-sm font-semibold hover:text-muted">
          Explore selected work <ArrowDownRight size={17} aria-hidden="true" />
        </a>
      </section>

      <section id="work" className="scroll-mt-12 border-t border-line py-16 sm:py-20">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div><p className="mb-3 text-xs font-semibold uppercase tracking-[.2em] text-muted">Portfolio</p><h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Featured work<span className="text-[#68737e]"> ({String(projects.length).padStart(2, '0')})</span></h2></div>
          <p className="hidden max-w-xs text-right text-sm leading-6 text-muted sm:block">A selection of mobile products and teams I’ve worked with.</p>
        </div>
        <div className="grid items-start gap-5 md:grid-cols-2">{projects.map(project => <ProjectCard key={project.number} project={project} total={projects.length} />)}</div>
      </section>
      {sideProjects.length > 0 && <section id="side-projects" className="border-t border-line py-16 sm:py-20">
        <h2 className="mb-10 text-3xl font-semibold tracking-tight">Side projects</h2>
        <div className="grid items-start gap-5 md:grid-cols-2">{sideProjects.map(project => <ProjectCard key={project.number} project={project} total={sideProjects.length} />)}</div>
      </section>}

      <section id="expertise" className="scroll-mt-12 border-t border-line py-16 sm:py-20">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[.2em] text-muted">Engineering expertise</p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Built for production.</h2>
        <dl className="mt-8 divide-y divide-line">
          {skillGroups.map((expertise) => <div key={expertise.title} className="grid gap-3 py-6 sm:grid-cols-[1fr_2fr] sm:gap-8">
            <dt className="text-base font-semibold">{expertise.title}</dt>
            <dd><ul className="flex flex-wrap gap-x-5 gap-y-4">{expertise.skills.map(skill => <li key={skill.name} className="text-sm leading-6 text-muted"><span>{skill.name}</span>{skill.usedOn && <span className="mt-1 block text-xs leading-5">Used on: {skill.usedOn}</span>}</li>)}</ul></dd>
          </div>)}
        </dl>
      </section>

      <section id="about" className="grid scroll-mt-12 gap-6 border-t border-line py-16 sm:grid-cols-[1fr_2fr] sm:gap-8 sm:py-20">
        <div><p className="mb-3 text-xs font-semibold uppercase tracking-[.2em] text-muted">About</p><h2 className="text-3xl font-semibold tracking-tight">{site.aboutTitle}</h2></div>
        <p className="max-w-2xl text-lg leading-8 text-muted">{site.about}</p>
      </section>

      <section id="contact" className="scroll-mt-12 border-t border-line py-20 sm:py-24">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[.2em] text-muted">Get in touch</p>
        <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-[-.045em] sm:text-5xl">Let’s build something great.</h2>
        <p className="mt-5 max-w-xl text-base leading-7 text-muted">{site.contact.description}</p>
        <div className="mt-9 flex flex-wrap gap-4">
          <a className="inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-white hover:bg-[#39424d]" href={`mailto:${site.contact.email}`}><Mail size={17} aria-hidden="true" /> Email me</a>
          {site.contact.showGithub && <a className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-3 text-sm font-semibold hover:bg-paper" href={site.contact.github} target="_blank" rel="noopener noreferrer"><Github size={17} aria-hidden="true" /> GitHub</a>}
          {site.contact.linkedin.startsWith('https://') ? <a className="contact-button" href={site.contact.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={17} aria-hidden="true" /> LinkedIn</a> : <span className="contact-button text-muted"><Linkedin size={17} aria-hidden="true" /> LinkedIn: {site.contact.linkedin}</span>}
          <a className="contact-button" href={asset(site.contact.cv)} download><FileDown size={17} aria-hidden="true" /> Download CV</a>

        </div>
      </section>
      <footer className="flex flex-wrap justify-between gap-3 border-t border-line py-8 text-xs text-muted"><span>© {new Date().getFullYear()} {site.name}. Built with care.</span><span className="text-[11px] text-[#68737e]">{site.footerTech}</span></footer>
    </main>
  );
}

function ProjectCard({ project, total }: { project: Project; total: number }) {
  return (
              <article className="project-card overflow-hidden rounded-2xl border border-line">
                <div className={`relative flex h-56 items-center justify-center sm:h-64 ${project.tone}`}>
                  <span className="absolute left-6 top-6 text-xs font-semibold tracking-widest">{project.number} / {String(total).padStart(2, '0')}</span>
                  <div className="flex h-28 w-28 items-center justify-center rounded-[1.7rem] border border-current/10 bg-white/65 shadow-sm">
                    <img src={asset(project.logo)} alt={`${project.name} app logo`} width={112} height={112} className="h-full w-full rounded-[1.7rem] object-cover" />
                  </div>
                  <span className="absolute bottom-5 right-6 text-xs font-medium">{project.category}</span>
                </div>
                <div className="p-6 sm:p-7">
                  <h3 className="text-2xl font-semibold tracking-tight">{project.name}</h3>
                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-muted">{project.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">{project.tech.map((tag) => <span key={tag} className="rounded-full bg-paper px-3 py-1.5 text-xs font-medium text-[#616a74]">{tag}</span>)}</div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.iosUrl && <a href={project.iosUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} on the Apple App Store`} className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-ink px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#39424d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink">iOS <ArrowUpRight size={16} aria-hidden="true" /></a>}
                    {project.androidUrl ? <a href={project.androidUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} on Google Play`} className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-line px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink">Android <ArrowUpRight size={16} aria-hidden="true" /></a> : null}
                    {project.windowsUrl && <a href={project.windowsUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} on the Microsoft Store`} className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-line px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink">Windows <ArrowUpRight size={16} aria-hidden="true" /></a>}
                  </div>
                  <details className="mt-6 border-t border-line pt-4">
                    <summary className="cursor-pointer py-2 text-sm font-semibold">Read more<span className="sr-only"> about {project.name}</span></summary>
                    <div className="mt-4 space-y-5 text-sm leading-6 text-muted">
                      <dl className="space-y-3">
                        {[["Role", project.role], ["Dates / duration", project.duration], ["Team context", project.team]].map(([label, value]) => <div key={label}><dt className="font-semibold text-ink">{label}</dt><dd>{value}</dd></div>)}
                      </dl>
                      <div><h4 className="font-semibold text-ink">What I did</h4><ul className="mt-2 list-disc space-y-2 pl-5">{project.whatIDid.map((item) => <li key={item}>{item}</li>)}</ul></div>
                      <div><h4 className="font-semibold text-ink">Impact</h4><ul className="mt-2 list-disc space-y-2 pl-5">{project.impact.map((item) => <li key={item}>{item}</li>)}</ul></div>
                      {project.migration && <div><h4 className="font-semibold text-ink">Migration case study</h4><dl className="mt-2 space-y-3">{Object.entries(project.migration).map(([label, value]) => <div key={label}><dt className="font-medium capitalize text-ink">{label}</dt><dd>{value}</dd></div>)}</dl></div>}
                    </div>
                  </details>
                </div>
              </article>
  );
}
