import Hero from "./components/Hero";
import { Skills, Involvement, Certifications, Contact, Footer } from "./components/Sections";

export default function Home() {
  return (
    <main>
      <Hero />

      {/* About Section */}
      <section id="about" className="max-w-5xl mx-auto py-20 px-6 scroll-mt-16">
        <h2 className="font-display text-4xl font-bold text-fg mb-8 flex items-center gap-3"><span className="h-8 w-1.5 rounded bg-signal" />About Me</h2>
        <div className="card p-8">
          <p className="text-lg text-muted leading-8">
            Full-Stack Developer and Data Analyst with hands-on experience designing and building
            data-driven web applications, automation systems, and interactive Power BI dashboards.
            Skilled in Python, JavaScript, SQL, REST APIs, and Power BI, with a proven ability to
            transform raw data and business requirements into functional, user-friendly digital
            solutions. Experienced in end-to-end system development, workflow automation, and
            technical support across training, manufacturing, and public-service contexts. Delivered
            projects spanning deep learning-based sentiment analysis, mobile application development,
            and Power BI reporting for training and operational analytics at MISDEC. Strong foundation
            in problem-solving, debugging, and stakeholder coordination, with a passion for building
            efficient, scalable, and user-centred solutions.
          </p>
        </div>
      </section>

      
      <Skills />

      {/* Projects Section */}
      <section id="projects" className="max-w-5xl mx-auto py-20 px-6 scroll-mt-16">
        <h2 className="font-display text-4xl font-bold text-fg mb-8 flex items-center gap-3"><span className="h-8 w-1.5 rounded bg-signal" />Projects</h2>
        <div className="space-y-6">

          <div className="card p-8 border-t-4" style={{ borderTopColor: "#2563eb" }}>
            <h3 className="font-display text-xl font-semibold text-fg mb-1">
              Cryptocurrency Sentiment Analysis for Price Prediction
            </h3>
            <p className="text-sm text-muted mb-4">Final Year Project</p>
            <ul className="list-disc pl-5 marker:text-brand space-y-2 text-muted">
              <li>Developed a deep learning-based system to predict volatile cryptocurrency price movements by analysing real-time public sentiment from social media data.</li>
              <li>Collected and processed real-time data via APIs, performing data preprocessing and feature extraction to build a clean, structured dataset for model training.</li>
              <li>Applied NLP techniques to classify sentiment as positive, negative, or neutral, converting unstructured text into usable signal data.</li>
              <li>Implemented LSTM deep learning models to predict price trends based on classified sentiment signals, combining NLP output with time-series forecasting.</li>
              <li>Evaluated model performance using MAE, MSE, and RMSE metrics, iterating on model parameters to improve prediction accuracy.</li>
              <li>Delivered an end-to-end pipeline covering data collection, NLP, deep learning, and model evaluation for a real-world financial use case.</li>
            </ul>
          </div>

          <div className="card p-8 border-t-4" style={{ borderTopColor: "#d4a90a" }}>
            <h3 className="font-display text-xl font-semibold text-fg mb-1">
              Training Performance Dashboard (Power BI)
            </h3>
            <p className="text-sm text-muted mb-4">Company Project — MISDEC</p>
            <ul className="list-disc pl-5 marker:text-brand space-y-2 text-muted">
              <li>Designed and developed an interactive Power BI dashboard to centralize training performance and participant analytics.</li>
              <li>Integrated multiple data sources (Google Sheets, Microsoft SharePoint) into a unified model.</li>
              <li>Managed over 4,000 participant records (2025–present), ensuring data accuracy and compliance with reporting deadlines.</li>
              <li>Built automated measures and DAX calculations for KPIs such as enrolment, training demand, and operations.</li>
              <li>Delivered a user-friendly interface with slicers and drill-through features for dynamic exploration.</li>
            </ul>
          </div>

          <div className="card p-8 border-t-4" style={{ borderTopColor: "#0d9488" }}>
            <h3 className="font-display text-xl font-semibold text-fg mb-1">
              Subcontractor Tracking System (Excel VBA + SAP)
            </h3>
            <p className="text-sm text-muted mb-4">Company Project — Prym Consumer Malaysia</p>
            <ul className="list-disc pl-5 marker:text-brand space-y-2 text-muted">
              <li>Implemented a centralized tracking system to enhance visibility and coordination between internal teams and subcontractors.</li>
              <li>Developed automated forms and reporting workflows using Excel VBA/Macros.</li>
              <li>Pulled and processed production data from SAP ERP into Excel for real-time monitoring.</li>
              <li>Standardized reporting templates to reduce inconsistencies and improve accuracy.</li>
              <li>Improved cross-functional communication by providing a single source of truth for subcontractor progress.</li>
              <li>Met reporting requirements and deadlines, even with large-scale subcontractor data volumes.</li>
            </ul>
          </div>

          <div className="card p-8 border-t-4" style={{ borderTopColor: "#e11d48" }}>
            <h3 className="font-display text-xl font-semibold text-fg mb-1">
              Chat Phishing Detector
            </h3>
            <p className="text-sm text-muted mb-4">Self Project</p>
            <ul className="list-disc pl-5 marker:text-brand space-y-2 text-muted">
              <li>Developed a system to automatically detect malicious content delivered through chat messages.</li>
              <li>Applied text classification and NLP techniques to identify malicious language patterns common in phishing attempts.</li>
              <li>Trained classification models on labelled datasets, iterating on features and model choice to improve detection accuracy.</li>
              <li>Delivered a functional detection system demonstrating applied skills in text classification, NLP, and security-focused machine learning.</li>
            </ul>
          </div>

          <div className="card p-8 border-t-4" style={{ borderTopColor: "#7c3aed" }}>
            <h3 className="font-display text-xl font-semibold text-fg mb-1">
              Recycle Request Mobile Application
            </h3>
            <p className="text-sm text-muted mb-4">Self Project</p>
            <ul className="list-disc pl-5 marker:text-brand space-y-2 text-muted">
              <li>Designed and developed a mobile application to manage and track recycling item requests.</li>
              <li>Implemented user authentication and CRUD operations using REST API for secure, reliable request management.</li>
              <li>Simplified the request submission and tracking process, streamlining the user journey from creation to completion.</li>
              <li>Delivered a mobile solution demonstrating full-stack mobile development, from backend API integration to front-end usability.</li>
            </ul>
          </div>

                    <div className="card p-8 border-t-4" style={{ borderTopColor: "#ea580c" }}>
            <h3 className="font-display text-xl font-semibold text-fg mb-1">
              Personal Portfolio Website
            </h3>
            <p className="text-sm text-muted mb-4">Self Project</p>
            <ul className="list-disc pl-5 marker:text-brand space-y-2 text-muted">
              <li>Designed and built this portfolio from scratch using Next.js, React, and Tailwind CSS to showcase projects, work experience, and skills.</li>
              <li>Implemented a fully responsive layout with reusable components (Navbar, Hero, section containers) for maintainable, scalable code.</li>
              <li>Built a dark mode toggle with persisted user preference via localStorage, applying theme state across the entire site.</li>
              <li>Structured all content sections into consistent card-based containers for a clean, organized reading experience.</li>
              <li>Optimized image loading using Next.js Image component with responsive sizing for the profile photo.</li>
            </ul>
          </div>

        </div>
      </section>

      
      {/* Experience Section */}
      <section id="experience" className="max-w-5xl mx-auto py-20 px-6 scroll-mt-16">
        <h2 className="font-display text-4xl font-bold text-fg mb-8 flex items-center gap-3"><span className="h-8 w-1.5 rounded bg-signal" />Experience</h2>

        {/* Professional Experience */}
        <h3 className="font-display text-2xl font-semibold text-fg mb-4">Professional Experience</h3>
        <div className="tl space-y-6 mb-12">

          <div className="card p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
              <h4 className="font-display text-xl font-semibold text-fg">
                Learning and Development Intern
              </h4>
              <span className="text-sm text-muted">March 2026 – July 2026</span>
            </div>
            <p className="text-sm text-muted mb-4">
              Melaka Industrial Skills Development & Entrepreneurship Center (MISDEC)
            </p>
            <ul className="list-disc pl-5 marker:text-brand space-y-2 text-muted">
              <li>Designed and developed an automated email distribution system to replace manual e-cert delivery, reducing administrative workload.</li>
              <li>Designed and developed an interactive Power BI dashboard to centralize training performance and participant analytics.</li>
              <li>Enhanced and maintained the MISDEC website in collaboration with the supervisor, improving usability and accessibility.</li>
              <li>Executed digital marketing campaigns to promote training programmes, increasing participant engagement and enrolment.</li>
              <li>Coordinated operations for training programs to ensure smooth implementation.</li>
              <li>Facilitated orientation programmes for new SKM students, supporting a smooth onboarding experience.</li>
            </ul>
          </div>

          <div className="card p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
              <h4 className="font-display text-xl font-semibold text-fg">
                IT Technician Intern
              </h4>
              <span className="text-sm text-muted">September 2023 – March 2024</span>
            </div>
            <p className="text-sm text-muted mb-4">
              Prym Consumer Malaysia Sdn. Bhd., Melaka
            </p>
            <ul className="list-disc pl-5 marker:text-brand space-y-2 text-muted">
              <li>Designed and implemented a centralized tracking system, enhancing data visibility and cross-functional coordination.</li>
              <li>Identified and fixed hardware, software, and network issues in production systems to minimize downtime.</li>
              <li>Processed and managed SAP ERP-supported production accurately and efficiently.</li>
              <li>Field tested, analyzed, and optimized production tracking forms, focused on reporting accuracy and efficiency.</li>
              <li>Created user documentation and reporting procedures, standardizing system usage and reducing process inconsistencies.</li>
            </ul>
          </div>

        </div>

        {/* Other Work Experience */}
        <h3 className="font-display text-2xl font-semibold text-fg mb-4">Other Work Experience</h3>
        <div className="space-y-6">

          <div className="card p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
              <h4 className="font-display text-xl font-semibold text-fg">
                Helper Technician, Turnaround
              </h4>
              <span className="text-sm text-muted">15 Aug – 20 Sep 2026</span>
            </div>
            <p className="text-sm text-muted mb-4">Petronas</p>
            <ul className="list-disc pl-5 marker:text-brand space-y-2 text-muted">
              <li>Laid electrical cabling as part of turnaround maintenance operations.</li>
              <li>Assisted technicians with electrical installation and maintenance tasks.</li>
              <li>Performed wire stripping and preparation for electrical connections.</li>
            </ul>
          </div>

          <div className="card p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
              <h4 className="font-display text-xl font-semibold text-fg">
                Volunteer, Water Station
              </h4>
              <span className="text-sm text-muted">7 September 2025</span>
            </div>
            <p className="text-sm text-muted mb-4">Melaka International Marathon 2025</p>
            <ul className="list-disc pl-5 marker:text-brand space-y-2 text-muted">
              <li>Managed a water station checkpoint, ensuring runners had timely access to hydration throughout the event.</li>
              <li>Coordinated with fellow volunteers to keep the station stocked and running smoothly during peak runner traffic.</li>
            </ul>
          </div>

          <div className="card p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
              <h4 className="font-display text-xl font-semibold text-fg">
                Part-Time Helper, Air-Conditioning Installation & Wiring
              </h4>
            </div>
            <ul className="list-disc pl-5 marker:text-brand space-y-2 text-muted">
              <li>Installed air-conditioning units and associated wiring.</li>
              <li>Topped up refrigerant gas for air-conditioning systems.</li>
              <li>Troubleshot electrical wiring issues.</li>
              <li>Installed household electrical fixtures.</li>
              <li>Serviced and overhauled air-conditioning units.</li>
            </ul>
          </div>

          <div className="card p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
              <h4 className="font-display text-xl font-semibold text-fg">
                Jump Rope Coach (Freelance)
              </h4>
            </div>
            <ul className="list-disc pl-5 marker:text-brand space-y-2 text-muted">
              <li>Taught students fundamental jump rope steps and skills, building a technical foundation for beginners and intermediates.</li>
              <li>Prepared and trained student athletes for competitive tournaments, developing structured practice sessions.</li>
              <li>Judged rhythmic jump rope tournaments, evaluating routines against technical and performance criteria.</li>
              <li>Provided individual feedback to help students refine technique ahead of competitions.</li>
            </ul>
          </div>

        </div>
      </section>

      
      <Involvement />

      {/* Education Section */}
      <section id="education" className="max-w-5xl mx-auto py-20 px-6 scroll-mt-16">
        <h2 className="font-display text-4xl font-bold text-fg mb-8 flex items-center gap-3"><span className="h-8 w-1.5 rounded bg-signal" />Education</h2>
        <div className="space-y-6">

          <div className="card p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
              <h3 className="font-display text-xl font-semibold text-fg">
                Bachelor of Computer Science (Hons.)
              </h3>
              <span className="text-sm text-muted">Mar 2023 – Aug 2026</span>
            </div>
            <p className="text-muted">
              Universiti Teknologi MARA (UiTM), Melaka — CGPA: 3.16
            </p>
          </div>

          <div className="card p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
              <h3 className="font-display text-xl font-semibold text-fg">
                Diploma in Computer Science
              </h3>
              <span className="text-sm text-muted">Oct 2021 – Mar 2023</span>
            </div>
            <p className="text-muted">
              Universiti Teknologi MARA (UiTM), Melaka — CGPA: 3.09
            </p>
          </div>

        </div>
      </section>

      
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
