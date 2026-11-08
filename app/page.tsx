import { ArrowDownRight, ArrowUpRight, Github, Mail, ShoppingBag } from 'lucide-react';

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
    icon: ShoppingBag, initials: 'NEXT', tone: 'bg-[#f2f3f5] text-[#20252a]',
    iosUrl: 'https://apps.apple.com/gb/app/next-shop-fashion-beauty/id348364305',
    androidUrl: 'https://play.google.com/store/apps/details?id=uk.co.next.android',
  },
  {
    number: '02', name: 'Reiss', category: 'Premium fashion',
    summary: 'Native iOS development using Swift for the Reiss retail app.',
    role: 'Mobile app portfolio', tech: ['Swift', 'Native iOS'],
    icon: ShoppingBag, initials: 'REISS', tone: 'bg-[#eeede9] text-[#393a37]',
    iosUrl: 'https://apps.apple.com/gb/app/reiss/id1605795159',
    androidUrl: 'https://play.google.com/store/apps/details?id=com.reiss.android',
  },
  {
    number: '03', name: "Victoria’s Secret", category: 'Retail & commerce',
    summary: 'Native iOS development using Swift for the Victoria’s Secret UK & Ireland app.',
    role: 'Mobile app portfolio', tech: ['Swift', 'Native iOS'],
    icon: ShoppingBag, logo: '/victorias-secret.jpg', initials: 'VS', tone: 'bg-[#f8edf1] text-[#7b455c]',
    iosUrl: 'https://apps.apple.com/gb/app/victorias-secret-uk-ireland/id1584656006',
    androidUrl: null,
  },
  {
    number: '04', name: 'ChartBuilder', category: 'Music & productivity',
    summary: 'Worked on the transition from Xamarin.Forms to .NET MAUI for ChartBuilder, a cross-platform music charts and rehearsal app.',
    role: 'Cross-platform engineering', tech: ['C#', '.NET MAUI', 'Xamarin.Forms'],
    icon: ShoppingBag, logo: '/chartbuilder.jpg', initials: 'CB', tone: 'bg-[#eaf0ed] text-[#385b50]',
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

      <section id="top" className="max-w-4xl py-24 sm:py-32">
        <p className="mb-6 text-sm font-medium text-muted">Senior Mobile Engineer | Native iOS &amp; Cross-Platform</p>
        <h1 className="text-5xl font-semibold leading-[1.09] tracking-[-.055em] sm:text-7xl">
          Native iOS.<br /><span className="text-[#68737e]">Cross-platform expertise.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">
          I’m a Senior Mobile Engineer specialising in building scalable, high-performance mobile applications. I work across native iOS development using Swift, SwiftUI and UIKit, and cross-platform development using C# and .NET MAUI.
        </p>
        <div className="mt-8 grid max-w-2xl gap-4 sm:grid-cols-2">
          <div className="border-l-2 border-ink pl-4"><p className="text-sm font-semibold">Native iOS</p><p className="mt-1 text-sm text-muted">Swift · SwiftUI · UIKit</p></div>
          <div className="border-l-2 border-ink pl-4"><p className="text-sm font-semibold">Cross-Platform</p><p className="mt-1 text-sm text-muted">C# · .NET MAUI · Xamarin</p></div>
        </div>
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
                    {'logo' in project ? <img src={project.logo} alt={`${project.name} app logo`} width={112} height={112} className="h-full w-full rounded-[1.7rem] object-cover" /> : project.name === 'NEXT' || project.name === 'Reiss' ? <span className="text-2xl font-bold tracking-tight">{project.initials}</span> : <Icon size={46} strokeWidth={1.35} />}
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
        <p className="mt-5 text-xs leading-5 text-muted">Project descriptions reflect publicly shareable experience; specific contributions can be expanded as appropriate.</p>
      </section>

      <section id="about" className="scroll-mt-12 border-t border-line py-16 sm:py-20">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[.2em] text-muted">Technical expertise</p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Two disciplines. One mobile focus.</h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted">From fully native iOS experiences to shared applications across iOS, Android and Windows, I build with clear architecture, reliable performance and thoughtful platform integrations.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {[
            {title: 'Native iOS Development', number: '01', items: ['Swift, SwiftUI, UIKit', 'iOS architecture and MVVM', 'Native integrations, deep linking and analytics', 'Performance optimisation and testing']},
            {title: 'Cross-Platform Development', number: '02', items: ['C#, .NET MAUI, Xamarin', 'iOS, Android and Windows', 'Shared application architecture', 'Platform-specific integrations and offline functionality']},
          ].map((expertise) => <article key={expertise.title} className="rounded-2xl border border-line p-6 sm:p-8">
            <p className="mb-6 text-xs font-semibold tracking-widest text-muted">{expertise.number}</p>
            <h3 className="text-2xl font-semibold tracking-tight">{expertise.title}</h3>
            <ul className="mt-6 space-y-4">{expertise.items.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-muted"><span aria-hidden="true" className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-ink" />{item}</li>)}</ul>
          </article>)}
        </div>
      </section>

      <section id="contact" className="scroll-mt-12 border-t border-line py-20 sm:py-24">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[.2em] text-muted">Get in touch</p>
        <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-[-.045em] sm:text-5xl">Let’s build something great.</h2>
        <p className="mt-5 max-w-xl text-base leading-7 text-muted">Interested in working together or discussing senior mobile engineering opportunities? I’d love to hear from you.</p>
        <div className="mt-9 flex flex-wrap gap-4">
          <a className="inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-white hover:bg-[#39424d]" href={`mailto:${profile.email}`}><Mail size={17} /> Email me</a>
          <a className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-3 text-sm font-semibold hover:bg-paper" href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={17} /> GitHub</a>
        </div>
      </section>
      <footer className="flex flex-wrap justify-between gap-3 border-t border-line py-8 text-xs text-muted"><span>© {new Date().getFullYear()} {profile.name}. Built with care.</span><span>Next.js · TypeScript · Tailwind CSS</span></footer>
    </main>
  );
}
