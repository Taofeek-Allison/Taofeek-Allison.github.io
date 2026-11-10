import { ArrowDownRight, ArrowUpRight, Github, Mail } from 'lucide-react';

const profile = {
  name: 'Taofeek Allison',
  email: 'taofeekallison@outlook.com',
  github: 'https://github.com/Taofeek-Allison',
};

const projects = [
  {
    number: '01', name: 'NEXT', category: 'Fashion & e-commerce',
    summary: 'Native iOS development using Swift for the NEXT shopping app.',
    role: 'iOS engineering', tech: ['Swift', 'Native iOS'],
    logo: '/next.jpg', initials: 'NEXT', tone: 'bg-[#f2f3f5] text-[#20252a]',
    iosUrl: 'https://apps.apple.com/gb/app/next-shop-fashion-beauty/id348364305',
    androidUrl: 'https://play.google.com/store/apps/details?id=uk.co.next.android',
  },
  {
    number: '02', name: 'Reiss', category: 'Premium fashion',
    summary: 'Native iOS development using Swift for the Reiss retail app.',
    role: 'Mobile app portfolio', tech: ['Swift', 'Native iOS'],
    logo: '/reiss.jpg', initials: 'REISS', tone: 'bg-[#eeede9] text-[#393a37]',
    iosUrl: 'https://apps.apple.com/gb/app/reiss/id1605795159',
    androidUrl: 'https://play.google.com/store/apps/details?id=com.reiss.android',
  },
  {
    number: '03', name: "Victoria’s Secret", category: 'Retail & commerce',
    summary: 'Native iOS development using Swift for the Victoria’s Secret UK & Ireland app.',
    role: 'Mobile app portfolio', tech: ['Swift', 'Native iOS'],
    logo: '/victorias-secret.jpg', initials: 'VS', tone: 'bg-[#f8edf1] text-[#7b455c]',
    iosUrl: 'https://apps.apple.com/gb/app/victorias-secret-uk-ireland/id1584656006',
    androidUrl: null,
  },
  {
    number: '04', name: 'MADE', category: 'Furniture & homeware',
    summary: 'Native iOS development using Swift and SwiftUI for the MADE app.',
    role: 'iOS engineering', tech: ['Swift', 'SwiftUI', 'Native iOS'],
    logo: '/made.jpg', initials: 'MADE', tone: 'bg-[#f2f1ee] text-[#30332e]',
    iosUrl: 'https://apps.apple.com/gb/app/made/id1445414950',
    androidUrl: null,
  },
  {
    number: '05', name: 'ChartBuilder', category: 'Music & productivity',
    summary: 'Worked on the transition from Xamarin.Forms to .NET MAUI for ChartBuilder, a cross-platform music charts and rehearsal app.',
    role: 'Cross-platform engineering', tech: ['C#', '.NET MAUI', 'Xamarin.Forms'],
    logo: '/chartbuilder.jpg', initials: 'CB', tone: 'bg-[#eaf0ed] text-[#385b50]',
    iosUrl: 'https://apps.apple.com/gb/app/multitracks-com-chartbuilder/id1208264687',
    androidUrl: 'https://play.google.com/store/apps/details?id=com.multitracks.chartbuilder',
    windowsUrl: 'https://apps.microsoft.com/detail/9n273hxg574z',
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 sm:px-10">
      <header className="flex items-center justify-between border-b border-line py-7">
        <a href="#top" className="text-base font-bold tracking-tight sm:text-lg">{profile.name}<span className="text-[#a1a7ad]">.</span></a>
        <nav aria-label="Main navigation" className="flex items-center gap-3 text-sm text-muted sm:gap-8">
          <a className="hover:text-ink" href="#work">Work</a>
          <a className="hover:text-ink" href="#about">About</a>
          <a className="hover:text-ink" href="#contact">Contact</a>
        </nav>
      </header>

      <section id="top" className="max-w-4xl py-16 sm:py-20">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[.2em] text-muted">Taofeek Allison · Mobile Engineering</p>
        <h1 className="text-4xl font-semibold leading-[1.12] tracking-[-.045em] sm:text-6xl">
          Senior Mobile Engineer <span className="text-[#a1a7ad]">|</span><br /><span className="text-[#68737e]">Native iOS &amp; Cross-Platform</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">
          I build and deliver production mobile applications, specialising in native iOS development with Swift, SwiftUI and UIKit, alongside extensive cross-platform experience with C# and .NET MAUI.
        </p>
        <a href="#work" className="mt-9 inline-flex items-center gap-2 border-b border-ink pb-1 text-sm font-semibold hover:text-muted">
          Explore selected work <ArrowDownRight size={17} />
        </a>
      </section>

      <section id="work" className="scroll-mt-12 border-t border-line py-16 sm:py-20">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div><p className="mb-3 text-xs font-semibold uppercase tracking-[.2em] text-muted">Portfolio</p><h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Featured work<span className="text-[#a1a7ad]"> ({String(projects.length).padStart(2, '0')})</span></h2></div>
          <p className="hidden max-w-xs text-right text-sm leading-6 text-muted sm:block">A selection of mobile products and teams I’ve worked with.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => {
            return (
              <article key={project.number} className="project-card overflow-hidden rounded-2xl border border-line">
                <div className={`relative flex h-56 items-center justify-center sm:h-64 ${project.tone}`}>
                  <span className="absolute left-6 top-6 text-xs font-semibold tracking-widest opacity-60">{project.number} / {String(projects.length).padStart(2, '0')}</span>
                  <div className="flex h-28 w-28 items-center justify-center rounded-[1.7rem] border border-current/10 bg-white/65 shadow-sm">
                    <img src={project.logo} alt={`${project.name} app logo`} width={112} height={112} className="h-full w-full rounded-[1.7rem] object-cover" />
                  </div>
                  <span className="absolute bottom-5 right-6 text-xs font-medium opacity-60">{project.category}</span>
                </div>
                <div className="p-6 sm:p-7">
                  <h3 className="text-2xl font-semibold tracking-tight">{project.name}</h3>
                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-muted">{project.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">{project.tech.map((tag) => <span key={tag} className="rounded-full bg-paper px-3 py-1.5 text-xs font-medium text-[#616a74]">{tag}</span>)}</div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a href={project.iosUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} on the Apple App Store`} className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-ink px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#39424d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink">iOS <ArrowUpRight size={16} aria-hidden="true" /></a>
                    {project.androidUrl ? <a href={project.androidUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} on Google Play`} className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-line px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink">Android <ArrowUpRight size={16} aria-hidden="true" /></a> : null}
                    {'windowsUrl' in project && <a href={project.windowsUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} on the Microsoft Store`} className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-line px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink">Windows <ArrowUpRight size={16} aria-hidden="true" /></a>}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="expertise" className="scroll-mt-12 border-t border-line py-16 sm:py-20">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[.2em] text-muted">Engineering expertise</p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Built for production.</h2>
        <dl className="mt-8 divide-y divide-line">
          {[
            {title: 'Mobile Development', skills: 'Swift · SwiftUI · UIKit · C# · .NET MAUI · Xamarin'},
            {title: 'Platform Integrations & Architecture', skills: 'Push Notifications · Universal Links · Branch · Google Analytics 4 · Firebase · Dynatrace · MVVM'},
            {title: 'Engineering & Delivery', skills: 'LaunchDarkly · Azure DevOps · CI/CD · Jira · ServiceNow'},
          ].map((expertise) => <div key={expertise.title} className="grid gap-3 py-6 sm:grid-cols-[1fr_2fr] sm:gap-8">
            <dt className="text-base font-semibold">{expertise.title}</dt>
            <dd className="text-sm leading-7 text-muted">{expertise.skills}</dd>
          </div>)}
        </dl>
      </section>

      <section id="about" className="grid scroll-mt-12 gap-6 border-t border-line py-16 sm:grid-cols-[1fr_2fr] sm:gap-8 sm:py-20">
        <div><p className="mb-3 text-xs font-semibold uppercase tracking-[.2em] text-muted">About</p><h2 className="text-3xl font-semibold tracking-tight">Hi, I’m Taofeek.</h2></div>
        <p className="max-w-2xl text-lg leading-8 text-muted">I’m a Senior Mobile Engineer working across native iOS and cross-platform development. My experience spans retail applications including NEXT, Reiss, Victoria’s Secret and MADE, and music software with ChartBuilder. I bring hands-on experience with Swift and .NET MAUI to production mobile products.</p>
      </section>

      <section id="contact" className="scroll-mt-12 border-t border-line py-20 sm:py-24">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[.2em] text-muted">Get in touch</p>
        <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-[-.045em] sm:text-5xl">Let’s build something great.</h2>
        <p className="mt-5 max-w-xl text-base leading-7 text-muted">Let’s talk about Senior iOS and Senior Mobile Engineer opportunities. I’d love to hear about your team and the mobile products you’re building.</p>
        <div className="mt-9 flex flex-wrap gap-4">
          <a className="inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-white hover:bg-[#39424d]" href={`mailto:${profile.email}`}><Mail size={17} /> Email me</a>
          <a className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-3 text-sm font-semibold hover:bg-paper" href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={17} /> GitHub</a>
        </div>
      </section>
      <footer className="flex flex-wrap justify-between gap-3 border-t border-line py-8 text-xs text-muted"><span>© {new Date().getFullYear()} {profile.name}. Built with care.</span><span>Next.js · TypeScript · Tailwind CSS</span></footer>
    </main>
  );
}
