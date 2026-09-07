const projects = [
  {
    number: '01',
    title: 'RescueSync',
    type: 'Full-stack web platform',
    description: 'A citizen-first emergency response platform for reporting incidents, tracking teams, mapping nearby resources, and understanding operational data in real time.',
    stack: ['React', 'Express', 'MongoDB', 'Leaflet', 'Gemini AI'],
    accent: 'RS / WEB',
    href: 'https://github.com/sameentariq26/RescueSync',
  },
  {
    number: '02',
    title: 'RescueSync Mobile',
    type: 'Cross-platform mobile app',
    description: 'The RescueSync experience reimagined for mobile—with live Firestore updates, native maps, AI-assisted incident assessment, and an Expo-first interface.',
    stack: ['React Native', 'Expo', 'Firebase', 'Maps', 'Gemini AI'],
    accent: 'RS / APP',
    href: 'https://github.com/sameentariq26/RescueSync-Mobile',
  },
  {
    number: '03',
    title: 'Sameen Tariq Portfolio',
    type: 'Interactive portfolio experience',
    description: 'The site you are exploring now—an expressive, motion-led portfolio built to present every public GitHub project with clarity and personality.',
    stack: ['Next.js', 'TypeScript', 'CSS Motion', 'Responsive UI', 'Firebase'],
    accent: 'ST / 2026',
    href: 'https://github.com/sameentariq26/SameenTariqPortfolio',
  },
];

const capabilities = ['React & modern JavaScript', 'React Native & Expo', 'Node.js & Express', 'Firebase & MongoDB', 'Responsive interface design', 'Maps & real-time data'];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Sameen Tariq, home">ST<span>.</span></a>
        <div className="navLinks">
          <a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a>
        </div>
        <a className="navIcon" href="https://www.linkedin.com/in/dure-sameen-818b41431/" target="_blank" rel="noreferrer" aria-label="Sameen Tariq on LinkedIn">
          in
        </a>
      </nav>

      <section className="hero shell" id="top">
        <div className="heroMeta reveal delay1">
          <span>Software developer</span>
          <span className="availability"><i /> Open to opportunities</span>
        </div>
        <h1 className="heroTitle" aria-label="Sameen Tariq, digital experiences with purpose">
          <span className="line reveal">Sameen Tariq</span>
          <span className="line outline reveal delay1">builds digital</span>
          <span className="line reveal delay2">experiences</span>
          <span className="heroFoot reveal delay3">
            <span>with purpose.</span>
            <a href="#work" aria-label="Explore selected work">↘</a>
          </span>
        </h1>
        <div className="heroBottom reveal delay3">
          <p>I turn ambitious ideas into thoughtful web and mobile products—clear, capable, and made for real people.</p>
          <span className="coordinates">◎ Pakistan · PKT</span>
        </div>
      </section>

      <section className="marquee" aria-label="Core disciplines"><div>
        <span>Design-minded development</span><i>✦</i><span>Web + mobile</span><i>✦</i><span>Ideas into interfaces</span><i>✦</i>
        <span>Design-minded development</span><i>✦</i><span>Web + mobile</span><i>✦</i><span>Ideas into interfaces</span><i>✦</i>
      </div></section>

      <section className="work shell" id="work">
        <header className="sectionHeader">
          <div><span className="eyebrow">Selected work</span><h2>Built to be useful.<br />Designed to be felt.</h2></div>
          <p>Every public repository on my GitHub—presented as a focused collection spanning web, mobile, and interactive design.</p>
        </header>
        <div className="projectList">
          {projects.map((project) => (
            <article className="project" key={project.title}>
              <div className="projectTop"><span>{project.number}</span><span>{project.type}</span></div>
              <div className="projectBody">
                <div className={`projectVisual ${project.number === '01' ? 'webVisual' : project.number === '02' ? 'mobileVisual' : 'portfolioVisual'}`} aria-hidden="true">
                  {project.number === '01' ? (
                    <>
                      <div className="visualBar"><span>{project.accent}</span><span className="liveDot">LIVE</span></div>
                      <div className="mapGrid" />
                      <svg className="route" viewBox="0 0 420 230" preserveAspectRatio="none">
                        <path className="routeGhost" d="M24 184 C90 92, 146 205, 218 112 S328 23, 398 70" />
                        <path className="routeLive" d="M24 184 C90 92, 146 205, 218 112 S328 23, 398 70" />
                      </svg>
                      <span className="mapNode n1"><i /></span><span className="mapNode n2"><i /></span><span className="mapNode n3"><i /></span>
                      <div className="dispatchCard"><b>Unit 04 dispatched</b><span>ETA · 04:18</span></div>
                      <div className="signal"><i /><i /><i /></div>
                    </>
                  ) : project.number === '02' ? (
                    <>
                      <div className="visualBar"><span>{project.accent}</span><span>EXPO 54</span></div>
                      <div className="radar"><i /><span className="radarSweep" /></div>
                      <div className="phoneUi">
                        <div className="phoneTop"><span>9:41</span><span>•••</span></div>
                        <div className="phoneHello">Emergency center</div>
                        <div className="sos"><span>+</span><b>Report emergency</b><small>Tap to send your location</small></div>
                        <div className="phoneStats"><span><b>04</b>Active</span><span><b>12</b>Nearby</span></div>
                        <div className="phoneNav"><i /><i /><i /></div>
                      </div>
                      <span className="floatTag tagOne">AI assessment</span><span className="floatTag tagTwo">Location live</span>
                    </>
                  ) : (
                    <>
                      <div className="visualBar"><span>{project.accent}</span><span>LIVE PORTFOLIO</span></div>
                      <div className="orbit orbitOne" /><div className="orbit orbitTwo" />
                      <div className="portfolioMark"><span>S</span><i>+</i><span>T</span></div>
                      <div className="codeRail"><span>DESIGN</span><span>BUILD</span><span>SHIP</span><span>REPEAT</span></div>
                      <span className="cursorDot" />
                    </>
                  )}
                </div>
                <div className="projectCopy">
                  <h3>{project.title}</h3><p>{project.description}</p>
                  <ul aria-label={`${project.title} technologies`}>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
                <a className="projectLink" href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}>↗</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <div className="aboutInner shell">
          <div className="aboutIndex">03 / About</div>
          <div className="aboutStatement"><p>I&apos;m a developer who cares about the space where <span>strong engineering</span> meets <span>clear design.</span></p></div>
          <div className="aboutGrid">
            <p>My work spans responsive web platforms and cross-platform mobile apps, with a focus on practical systems, real-time experiences, and interfaces that make complex tasks feel natural.</p>
            <ul>{capabilities.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="contact shell" id="contact">
        <span className="eyebrow">Have an idea?</span>
        <h2>Let&apos;s make it<br /><span>remarkable.</span></h2>
        <div className="contactActions">
          <a href="mailto:sameen4512@gmail.com">@ sameen4512@gmail.com</a>
          <a href="https://www.linkedin.com/in/dure-sameen-818b41431/" target="_blank" rel="noreferrer">in LinkedIn ↗</a>
          <a href="https://github.com/sameentariq26" target="_blank" rel="noreferrer">GH GitHub projects ↗</a>
        </div>
      </section>
      <footer className="footer shell"><span>© 2026 Sameen Tariq</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
