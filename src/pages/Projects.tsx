
import React from "react";

type ProjectsProps = {
  isDay: boolean;
};

const Projects = ({ isDay }: ProjectsProps) => {
  const textColor = isDay ? "text-gray-800" : "text-gray-200";
  const secondaryText = isDay ? "text-gray-700" : "text-gray-300";
  const tertiaryText = isDay ? "text-gray-600" : "text-gray-400";
  const linkColor = "text-blue-500";

  const projectList = [
    {
      id: "project1",
      title: "QUT Sustainability App",
      summary:
        "A client-facing, cross-platform mobile application built in collaboration with QUT Facilities Management to highlight environmental sustainability initiatives across campus.",
      technical: "React Native, JavaScript, Expo, GitHub Projects, Figma",
      features: [
        "Interactive campus maps displaying water refill stations",
        "Highlighting QUT's alignment with UN Sustainable Development Goals",
        "Client-feedback integration throughout Agile sprints",
        "Custom style guide following QUT branding"
      ],
      extras: {
        video: "/walkthrough.mp4",
        figma: "https://www.figma.com/proto/fhiIFW8exuAeS2sUycMCrF/prototype-v2.0?content-scaling=fixed&kind=proto&node-id=70-1067&scaling=scale-down&starting-point-node-id=70%3A1067&t=LJXTnMAGeL2DitKF-1",
        styleGuide: "https://drive.google.com/file/d/17GY1ef4v0pwrDHjADfavFv3qcTnqNlDb/view?usp=sharing",
        installationGuide: {
          instructions: [
            "Scan the QR code below and open the link, or click ",
            "Tap the three-dot menu in the browser, then select 'Download build'",
            "Locate and open the .apk file to install",
            "Allow installs from unknown sources if prompted"
          ],
          qrCode: "/QR.png",
          alternateLink: "https://expo.dev/accounts/jaredpower/projects/qutsus/builds/000ca492-8898-4e74-937c-fafbde3c6140"
        }
      }
    },
    {
      id: "project2",
      title: "Elevator Control Simulator",
      summary:
        "A simulation of an elevator system written in C, using multi-threading, queues, and TCP socket communication to emulate real-time elevator car-controller behavior.",
      technical: "C, POSIX Threads, TCP Sockets, Mutexes, Condition Variables",
      features: [
        "Multithreaded elevator control simulation",
        "Status messaging and command queues",
        "Controller-car communication protocol"
      ],
      extras: {
        github: "https://github.com/delly0/elevator-sim-c",
        images: [
          { src: "/elevator1.svg", caption: "Component connectivity" },
          { src: "/elevator2.gif", caption: "Scheduling system example" },
          { src: "/elevator3.svg", caption: "Visual demonstration of scheduler" }
        ],
        pdf: "/elevator-description.pdf"
      }
    },
    {
      id: "project3",
      title: "Personal Portfolio Website",
      summary:
        "A fully responsive personal portfolio site showcasing projects, resume, and contact info with a visually engaging animated sky background.",
      technical: "React, Tailwind CSS, Vite, CSS Animations",
      features: [
        "Responsive layout",
        "Custom animated background using React components",
        "Modular structure with scalability in mind"
      ],
      extras: {
        github: "https://github.com/delly0/adele-finney-portfolio"
      }
    },
    {
      id: "project4",
      title: "Movie Analytics Frontend",
      summary:
        "A movie data dashboard built with React to explore and analyze films using sorting, filtering, and visualization features.",
      technical: "React, Chart.js, AG Grid, Material UI",
      features: [
        "Interactive movie data table with AG Grid",
        "Chart-based visualizations",
        "Responsive, theme-aware design"
      ],
      extras: {
        github: "https://github.com/delly0/movie-analytics-frontend",
        images: [
          { src: "/movie1.png", caption: "Landing page" },
          { src: "/movie2.png", caption: "Movie search page" },
          { src: "/movie3.png", caption: "Movie information page" },
          { src: "/movie4.png", caption: "Person information page" },
          { src: "/movie5.png", caption: "Login page for accessing authentication person information page" },
          { src: "/movie6.png", caption: "Message for unauthenticated users attempting to access the person information page" }
        ]
      }
    },
    {
      id: "project5",
      title: "Movie API Server",
      summary:
        "A RESTful API backend serving movie data to a frontend client, handling authentication, filtering, and database integration.",
      technical: "Node.js, Express, MySQL, Knex, JWT, Swagger",
      features: [
        "Authentication via JSON Web Tokens",
        "SQL querying with Knex.js",
        "API documentation with Swagger"
      ],
      extras: {
        github: "https://github.com/delly0/movie-api-server",
        reportLink: "/test-report.html"
      }
    },
    {
      id: "project6",
      title: "EV Insight Jupyter Notebooks",
      summary:
        "A set of data science notebooks analyzing trends in the electric vehicle market to support evidence-based business decisions.",
      technical: "Python, Jupyter, Pandas, NumPy, Matplotlib",
      features: [
        "Market and trend analysis for EV industry",
        "Data cleaning and preprocessing",
        "Visualizations for business insights"
      ],
      extras: {
        github: "https://github.com/delly0/ev-insight-jupyter",
        images: [
          { src: "/EV1.png" },
          { src: "/EV2.png" },
          { src: "/EV3.png" }
        ]
      }
    },
    {
      id: "project7",
      title: "UX Redesign Study",
      summary:
        "A research-driven UX evaluation and redesign case study including usability testing, research synthesis, and iterative prototyping.",
      technical: "Figma, Qualtrics, User Testing, Thematic Analysis",
      features: [
        "End-to-end UX research report",
        "Usability testing results with redesign recommendations",
        "Wireframes and annotated mockups"
      ],
      extras: {
        github: "https://github.com/delly0/ux-redesign-study",
        video: "/UX-presentation.mov"
      }
    }
  ];

  return (
    <div className="min-h-screen pl-[140px] pr-10 pt-20 pb-20 space-y-16">
      <h2 className={`text-4xl font-bold mb-10 ${textColor}`}>Projects 🚀</h2>
      {projectList.map(({ id, title, summary, technical, features, extras }) => (
        <section key={id} id={id} className="space-y-6">
          <h3 className={`text-2xl font-semibold ${textColor}`}>{title}</h3>
          <p className={`max-w-xl ${secondaryText}`}>{summary}</p>
          <p className={`text-sm italic ${tertiaryText}`}>
            Frameworks & Tools: {technical}
          </p>
          {id === "project1" && (
            <p className={`text-sm italic ${tertiaryText}`}>
              The source code for this project has been handed over to QUT Facilities Management and is now confidential. As such, I cannot share the original codebase.
            </p>
          )}
          <ul className={`list-disc list-inside mt-2 ${textColor}`}>
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          {extras && (
            <div className="mt-6 space-y-4">
              {extras.github && (
                <p className={textColor}>
                  <strong>GitHub Repository:</strong>{" "}
                  <a
                    href={extras.github}
                    className={`${linkColor} underline`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </a>
                </p>
              )}

              {extras.video && (
                <div className={textColor}>
                  <strong>Presentation Video:</strong>
                  <video
                    src={extras.video}
                    controls
                    className="w-full max-w-2xl mt-2 rounded-lg shadow"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}

              {extras.figma && (
                <div className={textColor}>
                  <strong>Figma Prototype:</strong>
                  <div className="mt-2">
                    <iframe
                      title="Figma Prototype"
                      className="w-full max-w-4xl h-[500px] rounded-lg border"
                      src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(extras.figma)}`}
                      allowFullScreen
                    />
                  </div>
                </div>
              )}

              {extras.styleGuide && (
                <p className={textColor}>
                  <strong>Style Guide:</strong>{" "}
                  <a href={extras.styleGuide} className={`${linkColor} underline`} target="_blank" rel="noopener noreferrer">
                    View Style Guide
                  </a>
                </p>
              )}

              {extras.reportLink && (
                <p className={textColor}>
                  <strong>Test Suite Report:</strong>{" "}
                  <a href={extras.reportLink} className={`${linkColor} underline`} target="_blank" rel="noopener noreferrer">
                    View HTML Report
                  </a>
                </p>
              )}

              {extras.pdf && (
                <p className={textColor}>
                  <strong>Technical Description:</strong>{" "}
                  <a href={extras.pdf} className={`${linkColor} underline`} target="_blank" rel="noopener noreferrer">
                    View PDF
                  </a>
                </p>
              )}

              {extras.installationGuide && (
                <div className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 ${textColor}`}>
                  <div>
                    <strong>Installation Instructions (Android):</strong>
                    <ul className="list-disc list-inside">
                      <li>
                        Scan the QR code below and open the link, or click{" "}
                        <a
                          href={extras.installationGuide.alternateLink}
                          className={`${linkColor} underline`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          URL directly
                        </a>
                      </li>
                      {extras.installationGuide.instructions.slice(1).map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ul>
                  </div>
                  <img
                    src={extras.installationGuide.qrCode}
                    alt="QR Code for Android APK"
                    className="w-40 h-40 object-contain mt-2"
                  />
                </div>
              )}

              {extras.images && extras.images.length > 0 && (
                <div className="grid gap-6 mt-6 sm:grid-cols-2">
                  {extras.images.map((img, index) => (
                    <div key={index} className="space-y-2">
                      <img
                        src={img.src}
                        alt={img.caption || `Screenshot ${index + 1}`}
                        className="w-full rounded-lg shadow-md object-cover"
                      />
                      {img.caption && (
                        <p className={`text-sm italic text-center ${tertiaryText}`}>
                          {img.caption}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </section>
      ))}
    </div>
  );
};


export default Projects;