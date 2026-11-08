export interface Project {
  number: string; name: string; category: string; summary: string;
  role: string; duration: string; team: string;
  whatIDid: string[]; impact: string[]; tech: string[];
  logo: string; initials: string; tone: string;
  iosUrl?: string; androidUrl?: string | null; windowsUrl?: string;
  migration?: { approach: string; challenges: string; platforms: string; outcome: string };
}
export interface Skill { name: string; usedOn?: string }
export interface SkillGroup { title: string; skills: Skill[] }

export const site = {
  name: 'Taofeek Allison',
  eyebrow: 'Taofeek Allison · Mobile Engineering',
  headline: 'Senior Mobile Engineer | Native iOS & Cross-Platform',
  hero: 'I build and deliver production mobile applications, specialising in native iOS development with Swift, SwiftUI and UIKit, alongside extensive cross-platform experience with C# and .NET MAUI.',
  aboutTitle: 'Hi, I’m Taofeek.',
  about: 'I have {{TODO: years of experience}} of professional experience in mobile engineering. Based in {{TODO: location}}, my right to work in the UK is {{TODO: UK right-to-work status}}. My background includes {{TODO: agency versus in-house experience and context}}. I particularly enjoy building {{TODO: products, features or technical problems you enjoy working on}}. When considering my next role, I’m interested in {{TODO: preferred team environment and engineering focus}}. Outside individual features, the part of the development process I most enjoy is {{TODO: what you enjoy about delivering and maintaining mobile products}}. I’m happy to discuss how this experience fits your team’s needs.',
  contact: {
    description: 'Let’s talk about Senior iOS and Senior Mobile Engineer opportunities. I’d love to hear about your team and the mobile products you’re building.',
    email: 'taofeekallison@outlook.com',
    github: 'https://github.com/Taofeek-Allison',
    showGithub: true,
    linkedin: '{{TODO: LinkedIn URL}}',
    cv: '/cv.pdf',
  },
  seo: {
    origin: 'https://taofeek-allison.github.io',
    title: 'Taofeek Allison | Senior Mobile Engineer | Native iOS & Cross-Platform',
    description: 'Explore Taofeek Allison’s native iOS and cross-platform mobile engineering work across NEXT, Reiss, Victoria’s Secret and ChartBuilder, using Swift and .NET MAUI.',
    // Replace this placeholder asset path with your final social preview image.
    image: '/og-image-placeholder.png',
  },
  footerTech: 'Next.js · TypeScript · Tailwind CSS',
};

export const projects: Project[] = [
  {
    number: '01', name: 'NEXT', category: 'Fashion & e-commerce',
    role: '{{TODO: NEXT role}}',
    duration: '{{TODO: NEXT dates or duration}}',
    team: '{{TODO: NEXT team context}}',
    whatIDid: [
      '{{TODO: NEXT feature or ownership example 1}}',
      '{{TODO: NEXT feature or ownership example 2}}',
    ],
    impact: [
      '{{TODO: NEXT outcome and supporting metric}}',
    ],
    summary: 'Native iOS development using Swift for the NEXT shopping app.',
 tech: ['Swift', 'Native iOS'],
    logo: '/next.jpg', initials: 'NEXT', tone: 'bg-[#f2f3f5] text-[#20252a]',
    iosUrl: 'https://apps.apple.com/gb/app/next-shop-fashion-beauty/id348364305',
    androidUrl: 'https://play.google.com/store/apps/details?id=uk.co.next.android',
  },
  {
    number: '02', name: 'Reiss', category: 'Premium fashion',
    role: '{{TODO: Reiss role}}',
    duration: '{{TODO: Reiss dates or duration}}',
    team: '{{TODO: Reiss team context}}',
    whatIDid: [
      '{{TODO: Reiss feature or ownership example 1}}',
      '{{TODO: Reiss feature or ownership example 2}}',
    ],
    impact: [
      '{{TODO: Reiss outcome and supporting metric}}',
    ],
    summary: 'Native iOS development using Swift for the Reiss retail app.',
 tech: ['Swift', 'Native iOS'],
    logo: '/reiss.jpg', initials: 'REISS', tone: 'bg-[#eeede9] text-[#393a37]',
    iosUrl: 'https://apps.apple.com/gb/app/reiss/id1605795159',
    androidUrl: 'https://play.google.com/store/apps/details?id=com.reiss.android',
  },
  {
    number: '03', name: "Victoria’s Secret", category: 'Retail & commerce',
    role: '{{TODO: Victoria’s Secret role}}',
    duration: '{{TODO: Victoria’s Secret dates or duration}}',
    team: '{{TODO: Victoria’s Secret team context}}',
    whatIDid: [
      '{{TODO: Victoria’s Secret feature or ownership example 1}}',
      '{{TODO: Victoria’s Secret feature or ownership example 2}}',
    ],
    impact: [
      '{{TODO: Victoria’s Secret outcome and supporting metric}}',
    ],
    summary: 'Native iOS development using Swift for the Victoria’s Secret UK & Ireland app.',
 tech: ['Swift', 'Native iOS'],
    logo: '/victorias-secret.jpg', initials: 'VS', tone: 'bg-[#f8edf1] text-[#7b455c]',
    iosUrl: 'https://apps.apple.com/gb/app/victorias-secret-uk-ireland/id1584656006',
    androidUrl: null,
  },
  {
    number: '04', name: 'ChartBuilder', category: 'Music & productivity',
    role: '{{TODO: ChartBuilder role}}',
    duration: '{{TODO: ChartBuilder dates or duration}}',
    team: '{{TODO: ChartBuilder team context}}',
    whatIDid: [
      '{{TODO: ChartBuilder feature or ownership example 1}}',
      '{{TODO: ChartBuilder feature or ownership example 2}}',
    ],
    impact: [
      '{{TODO: ChartBuilder outcome and supporting metric}}',
    ],
    migration: {
      approach: '{{TODO: ChartBuilder migration approach}}',
      challenges: '{{TODO: ChartBuilder migration challenges and how you addressed them}}',
      platforms: '{{TODO: your migration scope across iOS, Android and Windows}}',
      outcome: '{{TODO: ChartBuilder migration outcome and supporting metric}}',
    },
    summary: 'Worked on the transition from Xamarin.Forms to .NET MAUI for ChartBuilder, a cross-platform music charts and rehearsal app.',
 tech: ['C#', '.NET MAUI', 'Xamarin.Forms'],
    logo: '/chartbuilder.jpg', initials: 'CB', tone: 'bg-[#eaf0ed] text-[#385b50]',
    iosUrl: 'https://apps.apple.com/gb/app/multitracks-com-chartbuilder/id1208264687',
    androidUrl: 'https://play.google.com/store/apps/details?id=com.multitracks.chartbuilder',
    windowsUrl: 'https://apps.microsoft.com/detail/9n273hxg574z',
  },
];

export const skillGroups: SkillGroup[] = [
  { title: 'Mobile Development', skills: [
    { name: 'Swift', usedOn: '{{TODO: Swift used on}}' },
    { name: 'SwiftUI', usedOn: '{{TODO: SwiftUI used on}}' },
    { name: 'UIKit', usedOn: '{{TODO: UIKit used on}}' },
    { name: 'C#', usedOn: '{{TODO: C# used on}}' },
    { name: '.NET MAUI', usedOn: '{{TODO: .NET MAUI used on}}' },
    { name: 'Xamarin', usedOn: '{{TODO: Xamarin used on}}' },
  ] },
  { title: 'Platform Integrations & Architecture', skills: [
    { name: 'Push Notifications', usedOn: '{{TODO: Push Notifications used on}}' },
    { name: 'Universal Links', usedOn: '{{TODO: Universal Links used on}}' },
    { name: 'Branch', usedOn: '{{TODO: Branch used on}}' },
    { name: 'Google Analytics 4', usedOn: '{{TODO: Google Analytics 4 used on}}' },
    { name: 'Firebase', usedOn: '{{TODO: Firebase used on}}' },
    { name: 'Dynatrace', usedOn: '{{TODO: Dynatrace used on}}' },
    { name: 'MVVM', usedOn: '{{TODO: MVVM used on}}' },
  ] },
  { title: 'Engineering & Delivery', skills: [
    { name: 'LaunchDarkly', usedOn: '{{TODO: LaunchDarkly used on}}' },
    { name: 'Azure DevOps', usedOn: '{{TODO: Azure DevOps used on}}' },
    { name: 'CI/CD', usedOn: '{{TODO: CI/CD used on}}' },
    { name: 'Jira', usedOn: '{{TODO: Jira used on}}' },
    { name: 'ServiceNow', usedOn: '{{TODO: ServiceNow used on}}' },
  ] },
];

export const sideProjects: Project[] = [
  /* Uncomment and fill in when ready:
  {
    number: '01', name: '{{TODO: side project name}}', category: 'Personal / open source',
    summary: '{{TODO: side project description}}',
    role: '{{TODO: side project role}}', duration: '{{TODO: side project dates}}',
    team: '{{TODO: side project team context}}',
    whatIDid: ['{{TODO: side project ownership example 1}}', '{{TODO: side project ownership example 2}}'],
    impact: ['{{TODO: side project outcome and supporting metric}}'],
    tech: ['{{TODO: side project technologies}}'],
    logo: '/icon-512.png', initials: 'TA', tone: 'bg-[#f2f3f5] text-[#20252a]',
  },
  */
];
