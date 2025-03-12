export default function Portfolio() {
  return (
    <div className="container mx-auto p-4 space-y-12">
      {/* Education Section */}
      <div className="card group">
        <div className="card-header flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 p-2 group-hover:scale-110 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
              <path d="M6 12v5c3 3 9 3 12 0v-5"/>
            </svg>
          </div>
          <h2 className="text-2xl title-gradient">Education</h2>
        </div>
        <div className="p-8">
          <div className="relative group/edu">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl blur-sm opacity-0 group-hover/edu:opacity-100 transition duration-500"></div>
            <div className="relative p-4 rounded-xl">
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Bachelor of Engineering in Computer Engineering
              </h3>
              <div className="space-y-2" style={{ color: "var(--muted-foreground)" }}>
                <p className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  </svg>
                  Prince of Songkla University (Phuket Campus)
                </p>
                <p className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  Kathu District, Phuket 83120
                </p>
                <p className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  Graduated: December 2021
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Experience Section */}
      <div className="card group">
        <div className="card-header flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 p-2 group-hover:scale-110 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
            </svg>
          </div>
          <h2 className="text-2xl title-gradient">Professional Experience</h2>
        </div>
        <div className="p-6 space-y-8">
          {/* IMT GROUP */}
          <div className="space-y-3 relative group/job cursor-pointer">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl opacity-0 group-hover/job:opacity-100 transition-opacity duration-500"></div>
            <h3 className="text-2xl font-bold relative" style={{ color: "var(--secondary)" }}>
              IT and Web and Mobile Developer
            </h3>
            <p className="font-medium" style={{ color: "var(--accent)" }}>
              IMT GROUP COMPANY LIMITED | March 2021 - January 2022
            </p>
            <ul className="space-y-2">
              {[
                "Spearheaded the development of department-specific web and mobile applications aligned with organizational goals.",
                "Established IT department resource planning initiatives to accommodate technological advancement and scalability.",
                "Recommended tools and technologies to augment operational efficiency and productivity.",
                "Managed workflow processes, adopting best practices for enhanced team coordination and project delivery."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2" style={{ color: "var(--muted-foreground)" }}>
                  <span style={{ color: "var(--primary)" }} className="mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* TOKEN MINER */}
          <div className="space-y-3 relative group/job cursor-pointer mt-8">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl opacity-0 group-hover/job:opacity-100 transition-opacity duration-500"></div>
            <h3 className="text-2xl font-bold relative" style={{ color: "var(--secondary)" }}>
              Head Engineer (Bitcoin Miner Machine)
            </h3>
            <p className="font-medium" style={{ color: "var(--accent)" }}>
              TOKEN MINER COMPANY LIMITED | January 2022 – August 2024
            </p>
            <ul className="space-y-2">
              {[
                "Lead cross-departmental collaboration to craft comprehensive feasibility studies for strategic investment decisions.",
                "Develop and implement processes for the procurement and maintenance of mining equipment.",
                "Design and enforce Standard Operating Procedures (SOP) to streamline staff operations.",
                "Analyze market trends to forecast cryptocurrency selling points and facilitate timely equipment upgrades.",
                "Architect an organizational structure that optimizes management and team efficiency.",
                "Orchestrate the design of facility layouts, ensuring operational functionality and safety compliance.",
                "Drive disaster prevention initiatives, mitigating risks associated with fire and electrical loads.",
                "Liaise with external service providers to enhance operational capabilities and performance."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2" style={{ color: "var(--muted-foreground)" }}>
                  <span style={{ color: "var(--primary)" }} className="mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 space-y-4">
              <div>
                <h4 className="text-lg font-bold mb-2" style={{ color: "var(--secondary)" }}>
                  Financial Department
                </h4>
                <ul className="space-y-2">
                  {[
                    "Advised on the application of data analytics to inform financial strategies and executive decision-making.",
                    "Created data visualizations using Excel and Power BI to convey complex financial concepts to stakeholders.",
                    "Projected financial outcomes to support fiscal planning and corporate financial health."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2" style={{ color: "var(--muted-foreground)" }}>
                      <span style={{ color: "var(--primary)" }} className="mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-2" style={{ color: "var(--secondary)" }}>
                  Operation Department
                </h4>
                <ul className="space-y-2">
                  {[
                    "Formulated cost management strategies to improve financial efficiency across departments.",
                    "Assisted in developing project timelines, ensuring on-time delivery of objectives.",
                    "Designed workflow documentation to optimize interdepartmental process efficiency."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2" style={{ color: "var(--muted-foreground)" }}>
                      <span style={{ color: "var(--primary)" }} className="mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* FINSTABLE */}
          <div className="space-y-3 relative group/job cursor-pointer mt-8">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl opacity-0 group-hover/job:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <h3 className="text-2xl font-bold" style={{ color: "var(--secondary)" }}>
                Senior Developer (Backend and Frontend)
                <span className="absolute -right-2 -top-2 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
              </h3>
              <p className="font-medium" style={{ color: "var(--accent)" }}>
                FINSTABLE COMPANY LIMITED | August 2024 – Present
              </p>
            </div>
            <ul className="space-y-2">
              {[
                "Applying for a position focused on developing website applications, including both backend and frontend, based on customer requirements.",
                "Core expertise in Enterprise Resource Planning (ERP) systems.",
                "Experienced in implementing role-based approval workflows within applications."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2" style={{ color: "var(--muted-foreground)" }}>
                  <span style={{ color: "var(--primary)" }} className="mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="card group">
        <div className="card-header flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 p-2 group-hover:scale-110 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <h2 className="text-2xl title-gradient">Skills</h2>
        </div>
        <div className="p-8 grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Soft Skills",
              skills: [
                "Negotiation",
                "Project and Cost Planning",
                "Strategic Planning and Analytics",
                "Team Management",
                "Cross-Functional Collaboration"
              ]
            },
            {
              title: "Technical Skills",
              skills: [
                "Cloud Computing: Azure, Google Cloud",
                "Virtualization: VMware ESXi, Proxmox",
                "Security Systems: CCTV (Analog/Digital), Cloud Backup",
                "Data Analytics: Power BI, Looker Studio, Data Processing, Visualization",
                "IoT: NB-IoT, Arduino, Environmental Sensors",
                "Basic Computer Maintenance and Software Installation",
                "Operating System Deployment"
              ]
            },
            {
              title: "Programming",
              skills: [
                "Backend: Node.js, .NET Core, Golang, NestJS",
                "Frontend: React.js, Next.js, HTML/CSS/JavaScript",
                "Mobile: Flutter",
                "IoT: Rs232, AT Command, Sensor integration with Arduino"
              ]
            },
            {
              title: "Blockchain",
              skills: [
                "Cryptocurrency Mining: BTC, Dogecoin, LTC",
                "Cryptocurrency Exchange Operations: DeFi, CeFi"
              ]
            },
            {
              title: "Finance",
              skills: [
                "Feasibility Analysis",
                "Cost Tracking and Analytics (From ERP Software)",
                "Financial Optimization",
                "Data Visualization"
              ]
            },
            {
              title: "Design and Engineering",
              skills: [
                "Google SketchUp",
                "Machine Learning Applications",
                "Integration of Chat GPT for financial and engineering process optimization",
                "Organizational Engagement",
                "Business Registration Processes",
                "Vendor Management: IT, Construction, Security, and Business Operations"
              ]
            }
          ].map((section, i) => (
            <div key={i} className="relative group/skill">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl opacity-0 group-hover/skill:opacity-100 transition-opacity duration-500"></div>
              <div className="relative space-y-3">
                <h3 className="text-xl font-bold flex items-center gap-2" style={{ color: "var(--secondary)" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover/skill:w-3 transition-all duration-300"></span>
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.skills.map((skill, j) => (
                    <li key={j} className="flex items-start gap-2" style={{ color: "var(--muted-foreground)" }}>
                      <span style={{ color: "var(--primary)" }} className="mt-1">•</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
