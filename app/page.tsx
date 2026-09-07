const projects = [
  {
    number: '01',
    title: 'RescueSync',
    type: 'Full-stack web platform',
    description: 'A citizen-first emergency response platform for reporting incidents, tracking teams, mapping nearby resources, and understanding operational data in real time.',
    stack: ['React', 'Express', 'MongoDB', 'Leaflet', 'Gemini AI'],
    accent: 'RS / WEB',
    visual: 'rescue-web',
    href: 'https://github.com/sameentariq26/RescueSync',
  },
  {
    number: '02',
    title: 'RescueSync Mobile',
    type: 'Cross-platform mobile app',
    description: 'The RescueSync experience reimagined for mobile—with live Firestore updates, native maps, AI-assisted incident assessment, and an Expo-first interface.',
    stack: ['React Native', 'Expo', 'Firebase', 'Maps', 'Gemini AI'],
    accent: 'RS / APP',
    visual: 'rescue-mobile',
    href: 'https://github.com/sameentariq26/RescueSync-Mobile',
  },
  {
    number: '03',
    title: 'Courier Management System',
    type: 'Private collaboration · Logistics platform',
    description: 'A courier operations system for organizing deliveries, managing records, and supporting a practical logistics workflow.',
    stack: ['PHP', 'MySQL', 'CSS', 'Web App'],
    accent: 'CMS',
    visual: 'courier',
    href: 'https://github.com/AbdulManan2420/courier-management-system',
  },
  {
    number: '04',
    title: 'Abalone',
    type: 'Machine learning dataset',
    description: 'A focused machine-learning dataset project built around structured Abalone data and analytical experimentation.',
    stack: ['Machine Learning', 'Data', 'Analysis'],
    accent: 'ML / DATA',
    visual: 'dataset',
    href: 'https://github.com/AbdulManan2420/abalone',
  },
  {
    number: '05',
    title: 'My Khata',
    type: 'Mobile ledger application',
    description: 'A convenient mobile ledger experience for recording and managing everyday account transactions on the go.',
    stack: ['React Native', 'Expo', 'JavaScript', 'Mobile'],
    accent: 'KHATA',
    visual: 'ledger',
    href: 'https://github.com/AbdulManan2420/my-khata',
  },
  {
    number: '06',
    title: 'Flappy Levels',
    type: 'Unity game project',
    description: 'A level-based flappy-style game exploring responsive controls, obstacles, progression, and playful interaction.',
    stack: ['Unity', 'C#', 'Game Design'],
    accent: 'PLAY / 06',
    visual: 'game',
    href: 'https://github.com/AbdulManan2420/flappy-levelssss',
  },
  {
    number: '07',
    title: 'Tiles SetUp',
    type: 'Private collaboration · Storefront',
    description: 'A Firebase-backed tile storefront with an admin dashboard for managing products and digital operations.',
    stack: ['TypeScript', 'Firebase', 'Dashboard', 'Storefront'],
    accent: 'TILES',
    visual: 'tiles',
    href: 'https://github.com/AbdulManan2420/TilesSetUp',
  },
  {
    number: '08',
    title: 'Expense Tracker',
    type: 'Cross-platform finance app',
    description: 'A Firebase-powered expense tracker for recording spending and keeping personal finances organized from mobile.',
    stack: ['React Native', 'Expo', 'Firebase', 'JavaScript'],
    accent: 'EXP / APP',
    visual: 'expense',
    href: 'https://github.com/AbdulManan2420/expense-tracker-app',
  },
  {
    number: '09',
    title: 'Smart Price API',
    type: 'AI pricing service',
    description: 'A Python API that predicts smarter pricing for billboards through a focused machine-learning workflow.',
    stack: ['Python', 'API', 'Machine Learning', 'Pricing'],
    accent: 'AI / PRICE',
    visual: 'price',
    href: 'https://github.com/AbdulManan2420/SmartPriceAPI',
  },
  {
    number: '10',
    title: 'Billboard AI API',
    type: 'Computer vision API',
    description: 'An AI service for detecting and visualizing billboards and advertisements from visual input.',
    stack: ['Python', 'Computer Vision', 'AI', 'API'],
    accent: 'VISION / AI',
    visual: 'vision',
    href: 'https://github.com/AbdulManan2420/billboard-ai-api',
  },
];

function RepoArtwork({ kind, accent, number }: { kind: string; accent: string; number: string }) {
  return (
    <>
      <div className="visualBar"><span>{accent}</span><span>PROJECT / {number}</span></div>
      {kind === 'courier' && <><div className="courierMap"><i /><i /><i /><i /></div><div className="deliveryRoute" /><span className="package">▣</span><div className="courierStatus"><b>Out for delivery</b><span>3 stops remaining</span></div></>}
      {kind === 'dataset' && <><div className="dataShell"><span /><span /><span /><span /></div><div className="dataBars"><i /><i /><i /><i /><i /><i /></div><span className="accuracy">MODEL · 94.8%</span></>}
      {kind === 'ledger' && <><div className="ledgerCard"><div><b>Balance</b><strong>Rs 84,500</strong></div><p><i />Ahmed <span>+12,000</span></p><p><i />Supplies <span>−4,850</span></p><p><i />Received <span>+8,200</span></p></div><span className="ledgerPing">Synced</span></>}
      {kind === 'game' && <><div className="gameSky"><span className="cloud c1" /><span className="cloud c2" /><i className="pipe p1" /><i className="pipe p2" /><b className="bird">◆</b><strong>06</strong></div></>}
      {kind === 'tiles' && <><div className="tileWall">{Array.from({ length: 12 }).map((_, i) => <i key={i} style={{ animationDelay: `${i * .09}s` }} />)}</div><div className="tileLabel"><b>12 finishes</b><span>Live catalogue</span></div></>}
      {kind === 'expense' && <><div className="expenseRing"><b>68%</b><span>Budget left</span></div><div className="expenseBars"><i /><i /><i /><i /></div><span className="expenseTotal">Rs 32,450 · SEPT</span></>}
      {kind === 'price' && <><svg className="priceGraph" viewBox="0 0 420 220" preserveAspectRatio="none"><path d="M20 178 C72 166 82 110 132 130 S206 170 246 92 S333 34 400 54" /><circle cx="246" cy="92" r="7" /></svg><div className="priceCard"><span>Suggested rate</span><b>Rs 18,750</b><i>↑ 12.4%</i></div></>}
      {kind === 'vision' && <><div className="billboard"><span>YOUR<br />BRAND</span><i /><i /></div><div className="scanBox"><b>AD DETECTED</b></div><span className="scanLine" /><div className="confidence">Confidence <b>97%</b></div></>}
    </>
  );
}

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
          <p>A growing collection spanning emergency technology, mobile products, machine learning, games, and practical digital systems.</p>
        </header>
        <div className="projectList">
          {projects.map((project) => (
            <article className="project" key={project.title}>
              <div className="projectTop"><span>{project.number}</span><span>{project.type}</span></div>
              <div className="projectBody">
                <div className={`projectVisual ${project.number === '01' ? 'webVisual' : project.number === '02' ? 'mobileVisual' : 'portfolioVisual repoVisual'}`} aria-hidden="true">
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
                    <RepoArtwork kind={project.visual} accent={project.accent} number={project.number} />
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
