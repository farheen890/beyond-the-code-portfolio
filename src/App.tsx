
// import { useState } from 'react';
// import {
//   ArrowDownRight,
//   ArrowUpRight,
//   ExternalLink,
//   Menu,
//   X,
//   ShieldCheck,
//   GitBranch,
//   Network,
//   Compass,
//   Linkedin,
//   Mail,
//   Github,
//   FileText,
//   CheckCircle2,
// } from 'lucide-react';
// import { profile } from './config';

// const projects = [
//   {
//     n: '01',
//     category: 'MAJOR PROJECT · CYBER FORENSICS',
//     title:
//       'Cyber Forensics Data Extraction & Analysis Platform with Provenance Graphs and Dynamic Knowledge Graphs for APT Reconstruction & Court-Ready Evidence',
//     summary:
//       'A major project focused on cyber-forensics evidence analysis, provenance, and reconstructing advanced persistent threat activity.',
//     tags: [
//       'Cyber forensics',
//       'Provenance graphs',
//       'Knowledge graphs',
//       'APT reconstruction',
//     ],
//     status: 'In development',
//     icon: Network,
//     tone: 'acid',
//     detail:
//       'The project direction centers on tracing evidence and relationships to support investigation and explainability. Specific implemented capabilities and evaluation results are not claimed here.',
//     links: [],
//   },
//   {
//     n: '02',
//     category: 'CYBERSECURITY · MACHINE LEARNING',
//     title: 'Robust Malware Traffic Classification',
//     summary:
//       'A research-led workflow exploring network-traffic classification using flow and TLS features from CIC-IDS2017.',
//     tags: ['Python', 'Random Forest', 'pandas', 'FastAPI'],
//     status: 'Prototype',
//     icon: ShieldCheck,
//     tone: 'dark',
//     detail:
//       'Includes classifier and history dashboard work. Reported results were above 90% on simulated datasets; these are not presented as production performance.',
//     links: [],
//   },
//   {
//     n: '03',
//     category: 'HACKATHON · FULL-STACK CONCEPT',
//     title: 'StreetSnackSync',
//     summary:
//       'A street-vendor delivery concept designed around local food vendors and nearby customers.',
//     tags: ['Web app', 'Multilingual UX', 'Team collaboration'],
//     status: 'Hackathon project',
//     icon: GitBranch,
//     tone: 'paper',
//     detail:
//       'Built with Team Byte Burst for the Unlox 24-hour Grand Finale. The team placed 1st among 14 teams in April 2026.',
//     links: [
//       { label: 'View repository', href: profile.streetSnackSync },
//     ],
//   },
//   {
//     n: '04',
//     category: 'AI · TRAVEL PLANNING',
//     title: 'TravelOasis AI',
//     summary:
//       'An AI travel-planning project developed as a collaborative concept.',
//     tags: ['AI application', 'Product thinking', 'Prototyping'],
//     status: 'Project',
//     icon: Compass,
//     tone: 'paper',
//     detail:
//       'Presented as a project exploration. No unverified usage figures, performance claims, or implementation details are asserted.',
//     links: [],
//   },
// ];

// const groups = [
//   {
//     name: 'BUILDING WITH',
//     items: ['Python', 'SQL / MySQL', 'HTML & CSS', 'FastAPI'],
//   },
//   {
//     name: 'EXPLORING',
//     items: [
//       'AI applications',
//       'Machine learning',
//       'Cybersecurity',
//       'Backend development',
//     ],
//   },
//   {
//     name: 'WORKING WITH',
//     items: [
//       'Git / GitHub',
//       'API implementation',
//       'Frontend integration',
//       'Product/task ownership',
//     ],
//   },
// ];

// export default function App() {
//   const [active, setActive] = useState('01');
//   const [menu, setMenu] = useState(false);
//   const [copied, setCopied] = useState(false);

//   const jump = (id: string) => {
//     setMenu(false);
//     document.getElementById(id)?.scrollIntoView({
//       behavior: 'smooth',
//     });
//   };

//   const copyEmail = async () => {
//     if (!profile.email) return;

//     try {
//       await navigator.clipboard.writeText(profile.email);
//       setCopied(true);
//       window.setTimeout(() => setCopied(false), 1600);
//     } catch {
//       setCopied(false);
//     }
//   };

//   const project = projects.find((p) => p.n === active) ?? projects[0];
//   const Icon = project.icon;

//   return (
//     <div className="site" id="top">
//       <div className="noise" aria-hidden="true" />

//       <header className="topbar">
//         <a className="brand" href="#top" aria-label="Farheen Meti — home">
//           <b>
//             FM<span>.</span>
//           </b>
//           <small>BEYOND THE CODE</small>
//         </a>

//         <nav
//           className={menu ? 'nav open' : 'nav'}
//           id="primary-navigation"
//           aria-label="Primary navigation"
//         >
//           <button onClick={() => jump('work')}>
//             Selected work <sup>01</sup>
//           </button>
//           <button onClick={() => jump('about')}>
//             About <sup>02</sup>
//           </button>
//           <button onClick={() => jump('approach')}>
//             Approach <sup>03</sup>
//           </button>
//         </nav>

//         <button className="connect" onClick={() => jump('contact')}>
//           Contact <ArrowUpRight size={15} />
//         </button>

//         <button
//           className="menubtn"
//           aria-label={menu ? 'Close navigation' : 'Open navigation'}
//           aria-expanded={menu}
//           aria-controls="primary-navigation"
//           onClick={() => setMenu(!menu)}
//         >
//           {menu ? <X /> : <Menu />}
//         </button>
//       </header>

//       <main>
//         {/* HERO */}
//         <section className="hero wrap" id="home">
//           <div className="micro">
//             <span>
//               <i aria-hidden="true" /> ASPIRING FORWARD DEPLOYED ENGINEER
//             </span>
//             <span>VIJAYAPURA · INDIA</span>
//           </div>

//           <div className="hero-grid">
//             {/* Introduction */}
//             <div>
//               <p className="eyebrow">— ENGINEERING WITH INTENT</p>

//               <h1>
//                 Beyond
//                 <br />
//                 the <em>code</em>
//                 <span className="acid">.</span>
//               </h1>

//               <div className="intro-row">
//                 <p>
//                   I’m <strong>Farheen Meti</strong> — a CSE student with an AI
//                   specialization, learning to turn unclear problems into
//                   useful software.
//                 </p>

//                 <button
//                   className="round"
//                   onClick={() => jump('work')}
//                   aria-label="Explore selected projects"
//                 >
//                   <ArrowDownRight />
//                 </button>
//               </div>

//               <div className="hero-ctas">
//                 <button
//                   className="primary-cta"
//                   onClick={() => jump('work')}
//                 >
//                   Explore selected work <ArrowUpRight size={15} />
//                 </button>

//                 <button
//                   className="text-cta"
//                   onClick={() => jump('about')}
//                 >
//                   A little about me <ArrowDownRight size={15} />
//                 </button>
//               </div>
//             </div>

//             {/* PHOTO: save your image as public/farheen.jpg */}
//             <div className="hero-art photo-art">
//               <div className="artlabel top">
//                 FIG. 001 / THE ENGINEER
//               </div>

//               <div className="photo-frame">
//                 <img
//                   src="/farheen.jpg"
//                   alt="Portrait of Farheen Meti"
//                   className="profile-photo"
//                 />

//                 <div className="photo-index">FM / 001</div>

//                 <div className="photo-caption">
//                   <span>ENGINEERING WITH INTENT</span>
//                   <span>CS / AI</span>
//                 </div>
//               </div>

//               <div className="photo-note note-top">
//                 <span>+</span> BUILDER MODE
//               </div>

//               <div className="photo-note note-bottom">
//                 CURIOUS BY DEFAULT <span>↗</span>
//               </div>
//             </div>
//           </div>

//           <div className="hero-foot">
//             <span>CURIOUS BY DEFAULT. BUILDING BY DOING.</span>
//             <button onClick={() => jump('work')}>
//               SELECTED WORK ↘
//             </button>
//           </div>
//         </section>

//         {/* INTERESTS TICKER */}
//         <div className="ticker" aria-label="Areas of interest">
//           <div>
//             {[
//               'SOFTWARE ENGINEERING',
//               'AI APPLICATIONS',
//               'CYBERSECURITY',
//               'PRODUCT THINKING',
//               'SOFTWARE ENGINEERING',
//               'AI APPLICATIONS',
//               'CYBERSECURITY',
//               'PRODUCT THINKING',
//             ].map((x, i) => (
//               <span key={i}>
//                 {x} <b>✳</b>
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* SELECTED PROJECTS */}
//         <section id="work" className="wrap section work">
//           <div className="section-head">
//             <div>
//               <p className="eyebrow">— SELECTED WORK</p>
//               <h2>
//                 Problems first.
//                 <br />
//                 <span>Then the build.</span>
//               </h2>
//             </div>

//             <aside>
//               <small>[ 01 — 04 ]</small>
//               <p>
//                 Projects and prototypes, with the scope and status kept
//                 honest.
//               </p>
//             </aside>
//           </div>

//           <div className="projects">
//             <div
//               className="project-tabs"
//               role="group"
//               aria-label="Select a project"
//             >
//               {projects.map((p) => (
//                 <button
//                   key={p.n}
//                   onClick={() => setActive(p.n)}
//                   className={active === p.n ? 'selected' : ''}
//                   aria-pressed={active === p.n}
//                 >
//                   <small>{p.n}</small>
//                   <b>{p.title}</b>
//                   <ArrowUpRight size={17} />
//                 </button>
//               ))}
//             </div>

//             <article
//               className={'feature ' + project.tone}
//               key={project.n}
//               aria-live="polite"
//             >
//               <div className="feature-top">
//                 <span>{project.category}</span>
//                 <span>PROJECT / {project.n}</span>
//               </div>

//               <div className="visual">
//                 <div className="visual-grid" />
//                 <div className="stamp">
//                   <Icon size={26} />
//                   <span>
//                     FIELD
//                     <br />
//                     NOTES
//                   </span>
//                 </div>

//                 {project.n === '01' && (
//                   <div className="forensics-visual">
//                     <div className="node node-a">
//                       SOURCE
//                       <br />
//                       EVIDENCE
//                     </div>
//                     <div className="node node-b">PROVENANCE</div>
//                     <div className="node node-c">
//                       EVENT
//                       <br />
//                       RELATIONSHIPS
//                     </div>
//                     <div className="node node-d">
//                       APT
//                       <br />
//                       RECONSTRUCTION
//                     </div>
//                     <svg viewBox="0 0 520 210" aria-hidden="true">
//                       <path d="M80 82 L205 112 L330 62 L430 132 M205 112 L330 162 L430 132" />
//                     </svg>
//                     <span className="visual-caption">
//                       CONCEPTUAL PROJECT MAP · NOT A LIVE SYSTEM
//                     </span>
//                   </div>
//                 )}

//                 {project.n === '02' && (
//                   <div className="malware">
//                     <div className="bars">
//                       {[
//                         35, 58, 44, 76, 52, 91, 63, 42,
//                         82, 56, 69, 31, 73, 48, 88, 60,
//                       ].map((h, i) => (
//                         <i key={i} style={{ height: h + '%' }} />
//                       ))}
//                     </div>
//                     <div className="signal">
//                       <span>
//                         FLOW
//                         <br />
//                         / TLS
//                       </span>
//                     </div>
//                     <b>TRAFFIC SIGNATURES</b>
//                   </div>
//                 )}

//                 {project.n === '03' && (
//                   <div className="snack">
//                     <div className="sun">
//                       SS<span>↗</span>
//                     </div>
//                     <b>
//                       GOOD FOOD.
//                       <br />
//                       CLOSER TO YOU.
//                     </b>
//                     <i />
//                   </div>
//                 )}

//                 {project.n === '04' && (
//                   <div className="travel-visual">
//                     <Compass size={66} strokeWidth={1} />
//                     <b>
//                       GO
//                       <br />
//                       WITH
//                       <br />
//                       <em>CURIOSITY.</em>
//                     </b>
//                     <span>TRAVELOASIS AI / CONCEPT</span>
//                   </div>
//                 )}

//                 <span className="fig">FM—{project.n}</span>
//               </div>

//               <div className="feature-body">
//                 <div className="project-meta">
//                   <span>{project.status}</span>
//                   <span>SELECTED PROJECT</span>
//                 </div>

//                 <h3>{project.title}</h3>
//                 <p>{project.summary}</p>

//                 <div className="tags">
//                   {project.tags.map((t) => (
//                     <span key={t}>{t}</span>
//                   ))}
//                 </div>

//                 <div className="outcome">
//                   <b>↳</b>
//                   <p>{project.detail}</p>
//                 </div>

//                 {project.links.length > 0 && (
//                   <div className="links">
//                     {project.links.map((link) => (
//                       <a
//                         key={link.label}
//                         href={link.href}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         {link.label}
//                         <ExternalLink size={14} />
//                       </a>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </article>
//           </div>

//           <p className="note">
//             <CheckCircle2 size={14} />
//             Project status and contribution claims are deliberately limited
//             to verified information.
//           </p>
//         </section>

//         {/* ABOUT */}
//         <section id="about" className="about">
//           <div className="wrap about-grid">
//             <div className="about-title">
//               <p className="eyebrow">— THE PERSON BEHIND THE WORK</p>
//               <h2>
//                 Student by title.
//                 <br />
//                 <span>Builder by habit.</span>
//               </h2>
//               <div className="arrow-art" aria-hidden="true">
//                 ↘
//               </div>
//             </div>

//             <div className="about-copy">
//               <p className="lead">
//                 I’m studying Computer Science and Engineering with an AI
//                 specialization at{' '}
//                 <strong>
//                   SECAB Institute of Engineering &amp; Technology
//                 </strong>{' '}
//                 in Vijayapura.
//               </p>

//               <p>
//                 I’m interested in the space between a user’s problem and a
//                 working technical solution: clarifying requirements,
//                 building and integrating software, testing assumptions, and
//                 learning with a team.
//               </p>

//               <div className="facts">
//                 <div>
//                   <small>01 / EDUCATION</small>
//                   <b>B.E. CSE · AI specialization</b>
//                   <span>Expected graduation: 2027</span>
//                 </div>
//                 <div>
//                   <small>02 / ACADEMICS</small>
//                   <b>{profile.cgpa}</b>
//                   <span>Latest shared CGPA</span>
//                 </div>
//                 <div>
//                   <small>03 / EXPERIENCE</small>
//                   <b>Codlix Technologies</b>
//                   <span>
//                     Full-Stack Developer &amp; Product Manager Intern
//                   </span>
//                 </div>
//                 <div>
//                   <small>04 / COMMUNITY</small>
//                   <b>Google Student Ambassador</b>
//                   <span>Gemini Campus Ambassador · 2026</span>
//                 </div>
//               </div>

//               <div className="award">
//                 <b>✳</b>
//                 <div>
//                   <strong>1st place · Unlox 24-hour Grand Finale</strong>
//                   <p>Team Byte Burst · StreetSnackSync · April 2026</p>
//                 </div>
//                 <small>01 / 14 TEAMS</small>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* APPROACH */}
//         <section id="approach" className="wrap section approach">
//           <div className="section-head">
//             <div>
//               <p className="eyebrow">— HOW I APPROACH A BUILD</p>
//               <h2>
//                 Make the unclear
//                 <br />
//                 <span>actionable.</span>
//               </h2>
//             </div>
//             <aside>
//               <p>
//                 A working method I aim to bring to engineering teams — not a
//                 claim that every project follows a perfect process.
//               </p>
//             </aside>
//           </div>

//           <div className="steps">
//             <article>
//               <small>01 / UNDERSTAND</small>
//               <h3>Clarify the problem.</h3>
//               <p>
//                 Identify who needs the solution, what outcome matters, and
//                 what is still unknown.
//               </p>
//             </article>
//             <article>
//               <small>02 / DECOMPOSE</small>
//               <h3>Find the next useful step.</h3>
//               <p>
//                 Break the work into smaller tasks and choose a practical
//                 starting point.
//               </p>
//             </article>
//             <article>
//               <small>03 / BUILD &amp; TEST</small>
//               <h3>Make assumptions visible.</h3>
//               <p>
//                 Implement, test, debug, and check whether the result
//                 addresses the original need.
//               </p>
//             </article>
//             <article>
//               <small>04 / COMMUNICATE</small>
//               <h3>Share what changed.</h3>
//               <p>
//                 Explain progress, limitations, and blockers so the team can
//                 decide what to do next.
//               </p>
//             </article>
//           </div>
//         </section>

//         {/* TOOLKIT */}
//         <section id="stack" className="wrap section toolkit">
//           <div className="section-head">
//             <div>
//               <p className="eyebrow">— CURRENT TOOLKIT</p>
//               <h2>
//                 Learning.
//                 <br />
//                 <span>Applying.</span>
//               </h2>
//             </div>
//             <aside>
//               <p>
//                 A practical snapshot — no arbitrary skill percentages or
//                 claims of mastery.
//               </p>
//             </aside>
//           </div>

//           <div className="skills">
//             {groups.map((g, i) => (
//               <div key={g.name}>
//                 <small>
//                   0{i + 1} / {g.name}
//                 </small>
//                 {g.items.map((x) => (
//                   <span key={x}>{x}</span>
//                 ))}
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* QUOTE */}
//         <section className="quote wrap">
//           <small>A NOTE TO SELF / 001</small>
//           <p>
//             “Good engineering starts with understanding{' '}
//             <em>why the problem matters</em> — then making progress visible.”
//           </p>
//           <span>— FARHEEN METI / BEYOND THE CODE</span>
//         </section>

//         {/* CONTACT */}
//         <section id="contact" className="contact">
//           <div className="wrap">
//             <p className="eyebrow">— START A CONVERSATION</p>
//             <h2>
//               Have a good
//               <br />
//               problem? <em>Let’s build.</em>
//             </h2>

//             <div className="contact-bottom">
//               <p>
//                 Interested in FDE, software engineering, AI applications,
//                 internships, and collaborative builds.
//               </p>

//               <div className="contact-actions">
//                 <a
//                   href={profile.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <Github size={16} /> GitHub <ArrowUpRight size={16} />
//                 </a>

//                 {profile.linkedin && (
//                   <a
//                     href={profile.linkedin}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <Linkedin size={16} /> LinkedIn{' '}
//                     <ArrowUpRight size={16} />
//                   </a>
//                 )}

//                 {profile.email && (
//                   <a href={'mailto:' + profile.email}>
//                     <Mail size={16} /> Email me <ArrowUpRight size={16} />
//                   </a>
//                 )}

//                 {profile.resume && (
//                   <a
//                     href={profile.resume}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FileText size={16} /> Résumé{' '}
//                     <ArrowUpRight size={16} />
//                   </a>
//                 )}

//                 {profile.email && (
//                   <button onClick={copyEmail}>
//                     {copied ? (
//                       <CheckCircle2 size={16} />
//                     ) : (
//                       <Mail size={16} />
//                     )}
//                     {copied ? 'Email copied' : 'Copy email'}{' '}
//                     <ArrowUpRight size={16} />
//                   </button>
//                 )}
//               </div>
//             </div>

//             <small className="config-note">
//               <i /> LINKEDIN, EMAIL AND RÉSUMÉ APPEAR WHEN VERIFIED DETAILS
//               ARE ADDED IN <code>src/config.ts</code>
//             </small>
//           </div>
//         </section>
//       </main>

//       {/* FOOTER */}
//       <footer className="wrap footer">
//         <a href="#top" aria-label="Back to top">
//           FM<span>.</span>
//         </a>
//         <small>BUILT TO KEEP EVOLVING.</small>
//         <button onClick={() => jump('top')}>
//           BACK TO TOP <ArrowUpRight size={13} />
//         </button>
//         <small>© 2026 FARHEEN METI</small>
//       </footer>
//     </div>
//   );
// }




import { useState } from 'react';
import {
  ArrowDownRight, ArrowUpRight, ExternalLink, Menu, X,
  ShieldCheck, GitBranch, Network, Compass, Linkedin, Mail,
  Github, FileText, CheckCircle2
} from 'lucide-react';
import { profile } from './config';

const projects = [
  {
    n: '01',
    category: 'MAJOR PROJECT · CYBER FORENSICS',
    title: 'Cyber Forensics Data Extraction & Analysis Platform with Provenance Graphs and Dynamic Knowledge Graphs for APT Reconstruction & Court-Ready Evidence',
    summary: 'A major project focused on cyber-forensics evidence analysis, provenance, and reconstructing advanced persistent threat activity.',
    tags: ['Cyber forensics', 'Provenance graphs', 'Knowledge graphs', 'APT reconstruction'],
    status: 'In development',
    icon: Network,
    tone: 'acid',
    detail: 'The project focuses on tracing evidence and relationships to support investigation and explainability. Specific implemented capabilities and evaluation results are not claimed here.',
    links: [],
  },
  {
    n: '02',
    category: 'CYBERSECURITY · MACHINE LEARNING',
    title: 'Robust Malware Traffic Classification',
    summary: 'A workflow exploring network-traffic classification using flow and TLS features from CIC-IDS2017.',
    tags: ['Python', 'Random Forest', 'pandas', 'FastAPI'],
    status: 'Prototype',
    icon: ShieldCheck,
    tone: 'dark',
    detail: 'Includes classifier and history dashboard work. Reported results were above 90% on simulated datasets; these are not presented as production performance.',
    links: [],
  },
  {
    n: '03',
    category: 'HACKATHON · FULL-STACK CONCEPT',
    title: 'StreetSnackSync',
    summary: 'A street-vendor delivery concept designed around local food vendors and nearby customers.',
    tags: ['Web app', 'Multilingual UX', 'Team collaboration'],
    status: 'Hackathon project',
    icon: GitBranch,
    tone: 'paper',
    detail: 'Built with Team Byte Burst for the Unlox 24-hour Grand Finale. The team placed 1st among 14 teams in April 2026.',
    links: [{ label: 'View repository', href: profile.streetSnackSync }],
  },
  {
    n: '04',
    category: 'AI · TRAVEL PLANNING',
    title: 'TravelOasis AI',
    summary: 'An AI travel-planning project developed as a collaborative concept.',
    tags: ['AI application', 'Product thinking', 'Prototyping'],
    status: 'Project',
    icon: Compass,
    tone: 'paper',
    detail: 'Presented as a project exploration. No unverified usage figures, performance claims, or implementation details are asserted.',
    links: [],
  },
];

const groups = [
  { name: 'BUILDING WITH', items: ['Python', 'SQL / MySQL', 'HTML & CSS', 'FastAPI'] },
  { name: 'EXPLORING', items: ['AI applications', 'Machine learning', 'Cybersecurity', 'Backend development'] },
  { name: 'WORKING WITH', items: ['Git / GitHub', 'API implementation', 'Frontend integration', 'Product/task ownership'] },
];

export default function App() {
  const [active, setActive] = useState('01');
  const [menu, setMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  const jump = (id: string) => {
    setMenu(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const copyEmail = async () => {
    if (!profile.email) return;
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  const project = projects.find((p) => p.n === active) ?? projects[0];
  const Icon = project.icon;

  return (
    <div className="site" id="top">
      <div className="noise" aria-hidden="true" />

      <header className="topbar">
        <a className="brand" href="#top" aria-label="Farheen Meti — home">
          <b>FM<span>.</span></b>
          <small>BEYOND THE CODE</small>
        </a>

        <nav className={menu ? 'nav open' : 'nav'} id="primary-navigation" aria-label="Primary navigation">
          <button onClick={() => jump('work')}>Selected work <sup>01</sup></button>
          <button onClick={() => jump('about')}>About <sup>02</sup></button>
          <button onClick={() => jump('approach')}>Approach <sup>03</sup></button>
        </nav>

        <button className="connect" onClick={() => jump('contact')}>
          Contact <ArrowUpRight size={15} />
        </button>

        <button
          className="menubtn"
          aria-label={menu ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menu}
          aria-controls="primary-navigation"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section className="hero wrap">
          <div className="micro">
            <span><i aria-hidden="true" /> ASPIRING FORWARD DEPLOYED ENGINEER</span>
            <span>VIJAYAPURA · INDIA</span>
          </div>

          <div className="hero-grid">
            <div>
              <p className="eyebrow">— ENGINEERING WITH INTENT</p>
              <h1>Beyond<br />the <em>code</em><span className="acid">.</span></h1>

              <div className="intro-row">
                <p>
                  I’m <strong>Farheen Meti</strong> — a CSE student with an AI
                  specialization, learning to turn unclear problems into useful software.
                </p>
                <button className="round" onClick={() => jump('work')} aria-label="Explore selected projects">
                  <ArrowDownRight />
                </button>
              </div>

              <div className="hero-ctas">
                <button className="primary-cta" onClick={() => jump('work')}>
                  Explore selected work <ArrowUpRight size={15} />
                </button>
                <button className="text-cta" onClick={() => jump('about')}>
                  A little about me <ArrowDownRight size={15} />
                </button>
              </div>
            </div>

            {/* YOUR PHOTO: keep farheen.jpeg inside the public folder */}
            <div className="hero-art photo-art">
              <div className="artlabel top">FIG. 001 / THE ENGINEER</div>

              <div className="photo-frame">
                <img
                  src="/farheen.jpeg"
                  alt="Portrait of Farheen Meti"
                  className="profile-photo"
                />
                <div className="photo-index">FM / 001</div>
                <div className="photo-caption">
                  <span>ENGINEERING WITH INTENT</span>
                  <span>CS / AI</span>
                </div>
              </div>

              <div className="photo-note note-top"><span>+</span> BUILDER MODE</div>
              <div className="photo-note note-bottom">CURIOUS BY DEFAULT <span>↗</span></div>
            </div>
          </div>

          <div className="hero-foot">
            <span>CURIOUS BY DEFAULT. BUILDING BY DOING.</span>
            <button onClick={() => jump('work')}>SELECTED WORK ↘</button>
          </div>
        </section>

        <div className="ticker" aria-label="Areas of interest">
          <div>
            {[
              'SOFTWARE ENGINEERING', 'AI APPLICATIONS', 'CYBERSECURITY',
              'PRODUCT THINKING', 'SOFTWARE ENGINEERING', 'AI APPLICATIONS',
              'CYBERSECURITY', 'PRODUCT THINKING',
            ].map((x, i) => <span key={i}>{x} <b>✳</b></span>)}
          </div>
        </div>

        <section id="work" className="wrap section work">
          <div className="section-head">
            <div>
              <p className="eyebrow">— SELECTED WORK</p>
              <h2>Problems first.<br /><span>Then the build.</span></h2>
            </div>
            <aside>
              <small>[ 01 — 04 ]</small>
              <p>Projects and prototypes, with the scope and status kept honest.</p>
            </aside>
          </div>

          <div className="projects">
            <div className="project-tabs" role="group" aria-label="Select a project">
              {projects.map((p) => (
                <button
                  key={p.n}
                  onClick={() => setActive(p.n)}
                  className={active === p.n ? 'selected' : ''}
                  aria-pressed={active === p.n}
                >
                  <small>{p.n}</small>
                  <b>{p.title}</b>
                  <ArrowUpRight size={17} />
                </button>
              ))}
            </div>

            <article className={'feature ' + project.tone} key={project.n} aria-live="polite">
              <div className="feature-top">
                <span>{project.category}</span>
                <span>PROJECT / {project.n}</span>
              </div>

              <div className="visual">
                <div className="visual-grid" />
                <div className="stamp">
                  <Icon size={26} />
                  <span>FIELD<br />NOTES</span>
                </div>

                {project.n === '01' && (
                  <div className="forensics-visual">
                    <div className="node node-a">SOURCE<br />EVIDENCE</div>
                    <div className="node node-b">PROVENANCE</div>
                    <div className="node node-c">EVENT<br />RELATIONSHIPS</div>
                    <div className="node node-d">APT<br />RECONSTRUCTION</div>
                    <svg viewBox="0 0 520 210" aria-hidden="true">
                      <path d="M80 82 L205 112 L330 62 L430 132 M205 112 L330 162 L430 132" />
                    </svg>
                    <span className="visual-caption">CONCEPTUAL PROJECT MAP · NOT A LIVE SYSTEM</span>
                  </div>
                )}

                {project.n === '02' && (
                  <div className="malware">
                    <div className="bars">
                      {[35, 58, 44, 76, 52, 91, 63, 42, 82, 56, 69, 31, 73, 48, 88, 60].map((h, i) => (
                        <i key={i} style={{ height: h + '%' }} />
                      ))}
                    </div>
                    <div className="signal"><span>FLOW<br />/ TLS</span></div>
                    <b>TRAFFIC SIGNATURES</b>
                  </div>
                )}

                {project.n === '03' && (
                  <div className="snack">
                    <div className="sun">SS<span>↗</span></div>
                    <b>GOOD FOOD.<br />CLOSER TO YOU.</b>
                    <i />
                  </div>
                )}

                {project.n === '04' && (
                  <div className="travel-visual">
                    <Compass size={66} strokeWidth={1} />
                    <b>GO<br />WITH<br /><em>CURIOSITY.</em></b>
                    <span>TRAVELOASIS AI / CONCEPT</span>
                  </div>
                )}

                <span className="fig">FM—{project.n}</span>
              </div>

              <div className="feature-body">
                <div className="project-meta">
                  <span>{project.status}</span>
                  <span>SELECTED PROJECT</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="tags">
                  {project.tags.map((t) => <span key={t}>{t}</span>)}
                </div>
                <div className="outcome">
                  <b>↳</b>
                  <p>{project.detail}</p>
                </div>
                {project.links.length > 0 && (
                  <div className="links">
                    {project.links.map((link) => (
                      <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.label}<ExternalLink size={14} />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          </div>

          <p className="note">
            <CheckCircle2 size={14} />
            Project status and contribution claims are deliberately limited to verified information.
          </p>
        </section>

        <section id="about" className="about">
          <div className="wrap about-grid">
            <div className="about-title">
              <p className="eyebrow">— THE PERSON BEHIND THE WORK</p>
              <h2>Student by title.<br /><span>Builder by habit.</span></h2>
              <div className="arrow-art" aria-hidden="true">↘</div>
            </div>

            <div className="about-copy">
              <p className="lead">
                I’m studying Computer Science and Engineering with an AI specialization at
                <strong> SECAB Institute of Engineering & Technology</strong> in Vijayapura.
              </p>
              <p>
                I’m interested in the space between a user’s problem and a working technical
                solution: clarifying requirements, building and integrating software, testing
                assumptions, and learning with a team.
              </p>

              <div className="facts">
                <div>
                  <small>01 / EDUCATION</small>
                  <b>B.E. CSE · AI specialization</b>
                  <span>Expected graduation: 2027</span>
                </div>
                <div>
                  <small>02 / ACADEMICS</small>
                  <b>{profile.cgpa}</b>
                  <span>Latest shared CGPA</span>
                </div>
                <div>
                  <small>03 / EXPERIENCE</small>
                  <b>Codlix Technologies</b>
                  <span>Full-Stack Developer & Product Manager Intern</span>
                </div>
                <div>
                  <small>04 / COMMUNITY</small>
                  <b>Google Student Ambassador</b>
                  <span>Gemini Campus Ambassador · 2026</span>
                </div>
              </div>

              <div className="award">
                <b>✳</b>
                <div>
                  <strong>1st place · Unlox 24-hour Grand Finale</strong>
                  <p>Team Byte Burst · StreetSnackSync · April 2026</p>
                </div>
                <small>01 / 14 TEAMS</small>
              </div>
            </div>
          </div>
        </section>

        <section id="approach" className="wrap section approach">
          <div className="section-head">
            <div>
              <p className="eyebrow">— HOW I APPROACH A BUILD</p>
              <h2>Make the unclear<br /><span>actionable.</span></h2>
            </div>
            <aside>
              <p>A working method I aim to bring to engineering teams — not a claim that every project follows a perfect process.</p>
            </aside>
          </div>

          <div className="steps">
            <article>
              <small>01 / UNDERSTAND</small>
              <h3>Clarify the problem.</h3>
              <p>Identify who needs the solution, what outcome matters, and what is still unknown.</p>
            </article>
            <article>
              <small>02 / DECOMPOSE</small>
              <h3>Find the next useful step.</h3>
              <p>Break the work into smaller tasks and choose a practical starting point.</p>
            </article>
            <article>
              <small>03 / BUILD & TEST</small>
              <h3>Make assumptions visible.</h3>
              <p>Implement, test, debug, and check whether the result addresses the original need.</p>
            </article>
            <article>
              <small>04 / COMMUNICATE</small>
              <h3>Share what changed.</h3>
              <p>Explain progress, limitations, and blockers so the team can decide what to do next.</p>
            </article>
          </div>
        </section>

        <section id="stack" className="wrap section toolkit">
          <div className="section-head">
            <div>
              <p className="eyebrow">— CURRENT TOOLKIT</p>
              <h2>Learning.<br /><span>Applying.</span></h2>
            </div>
            <aside>
              <p>A practical snapshot — no arbitrary skill percentages or claims of mastery.</p>
            </aside>
          </div>

          <div className="skills">
            {groups.map((g, i) => (
              <div key={g.name}>
                <small>0{i + 1} / {g.name}</small>
                {g.items.map((x) => <span key={x}>{x}</span>)}
              </div>
            ))}
          </div>
        </section>

        <section className="quote wrap">
          <small>A NOTE TO SELF / 001</small>
          <p>“Good engineering starts with understanding <em>why the problem matters</em> — then making progress visible.”</p>
          <span>— FARHEEN METI / BEYOND THE CODE</span>
        </section>

        <section id="contact" className="contact">
          <div className="wrap">
            <p className="eyebrow">— START A CONVERSATION</p>
            <h2>Have a good<br />problem? <em>Let’s build.</em></h2>

            <div className="contact-bottom">
              <p>Interested in FDE, software engineering, AI applications, internships, and collaborative builds.</p>
              <div className="contact-actions">
                <a href={profile.github} target="_blank" rel="noopener noreferrer">
                  <Github size={16} /> GitHub <ArrowUpRight size={16} />
                </a>
                {profile.linkedin && (
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin size={16} /> LinkedIn <ArrowUpRight size={16} />
                  </a>
                )}
                {profile.email && (
                  <a href={'mailto:' + profile.email}>
                    <Mail size={16} /> Email me <ArrowUpRight size={16} />
                  </a>
                )}
                {profile.resume && (
                  <a href={profile.resume} target="_blank" rel="noopener noreferrer">
                    <FileText size={16} /> Résumé <ArrowUpRight size={16} />
                  </a>
                )}
                {profile.email && (
                  <button onClick={copyEmail}>
                    {copied ? <CheckCircle2 size={16} /> : <Mail size={16} />}
                    {copied ? 'Email copied' : 'Copy email'}
                    <ArrowUpRight size={16} />
                  </button>
                )}
              </div>
            </div>

            <small className="config-note">
              <i /> LINKEDIN, EMAIL AND RÉSUMÉ APPEAR WHEN VERIFIED DETAILS ARE ADDED IN
              <code>src/config.ts</code>
            </small>
          </div>
        </section>
      </main>

      <footer className="wrap footer">
        <a href="#top" aria-label="Back to top">FM<span>.</span></a>
        <small>BUILT TO KEEP EVOLVING.</small>
        <button onClick={() => jump('top')}>BACK TO TOP <ArrowUpRight size={13} /></button>
        <small>© 2026 FARHEEN METI</small>
      </footer>
    </div>
  );
}
