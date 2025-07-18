import React from "react";

type ProjectsProps = {
  isDay: boolean;
};

const Projects = ({ isDay }: ProjectsProps) => {
  const textColor = isDay ? "text-gray-800" : "text-gray-200";
  const secondaryText = isDay ? "text-gray-700" : "text-gray-300";
  const tertiaryText = isDay ? "text-gray-600" : "text-gray-400";
  const linkColor = "text-blue-500";

  const sectionPanelClass = isDay
    ? "bg-white/20 backdrop-blur-md text-gray-800"
    : "bg-black/20 backdrop-blur-md text-gray-200";

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
        video: `${import.meta.env.BASE_URL}walkthrough.mp4`,
        figma: "https://www.figma.com/proto/fhiIFW8exuAeS2sUycMCrF/prototype-v2.0?content-scaling=fixed&kind=proto&node-id=70-1067&scaling=scale-down&starting-point-node-id=70%3A1067&t=LJXTnMAGeL2DitKF-1",
        styleGuide: "https://drive.google.com/file/d/17GY1ef4v0pwrDHjADfavFv3qcTnqNlDb/view?usp=sharing",
        installationGuide: {
          instructions: [
            "Scan the QR code below and open the link, or click ",
            "Tap the three-dot menu in the browser, then select 'Download build'",
            "Locate and open the .apk file to install",
            "Allow installs from unknown sources if prompted"
          ],
          qrCode: `${import.meta.env.BASE_URL}QR.png`,
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
          { src: `${import.meta.env.BASE_URL}elevator1.svg`, caption: "Component connectivity" },
          { src: `${import.meta.env.BASE_URL}elevator2.gif`, caption: "Scheduling system example" },
          { src: `${import.meta.env.BASE_URL}elevator3.svg`, caption: "Visual demonstration of scheduler" }
        ],
        pdf: `${import.meta.env.BASE_URL}elevator-description.pdf`
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
        github: "https://github.com/delly0/af-portfolio"
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
          { src: `${import.meta.env.BASE_URL}movie1.png`, caption: "Landing page" },
          { src: `${import.meta.env.BASE_URL}movie2.png`, caption: "Movie search page" },
          { src: `${import.meta.env.BASE_URL}movie3.png`, caption: "Movie information page" },
          { src: `${import.meta.env.BASE_URL}movie4.png`, caption: "Person information page" },
          { src: `${import.meta.env.BASE_URL}movie5.png`, caption: "Login page for accessing authentication person information page" },
          { src: `${import.meta.env.BASE_URL}movie6.png`, caption: "Message for unauthenticated users attempting to access the person information page" }
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
        reportLink: `${import.meta.env.BASE_URL}test-report.html`
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
          { src: `${import.meta.env.BASE_URL}EV1.png` },
          { src: `${import.meta.env.BASE_URL}EV2.png` },
          { src: `${import.meta.env.BASE_URL}EV3.png` }
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
        video: `${import.meta.env.BASE_URL}UX-presentation.mp4`
      }
    },
    {
      id: "project8",
      title: "Slowly MVP",
      summary:
        "A mood and emotional tracking app to help users slowly build emotional granularity and awareness through regular check-ins.",
      technical: "React Native, Firebase, Context API, UI/UX Design",
      features: [
        "User creation flow with passcode authentication",
        "Profile setup and customization",
        "Emotion tracking interface with granular options",
        "Data visualization of emotional trends",
        "Custom kitchen for emotional regulation exercises"
      ],
      extras: {
        github: "https://github.com/delly0/slowly",
        videos: [
          { id: "slow-create", label: "User Creation", src: `${import.meta.env.BASE_URL}slow-create.mp4` },
          { id: "slow-passcode", label: "Passcode Authentication", src: `${import.meta.env.BASE_URL}slow-passcode.mp4` },
          { id: "slow-profile", label: "Profile Setup", src: `${import.meta.env.BASE_URL}slow-profile.mp4` },
          { id: "slow-kitchen", label: "Emotional Regulation Kitchen", src: `${import.meta.env.BASE_URL}slow-kitchen.mp4` },
          { id: "slow-tracker", label: "Emotion Tracker", src: `${import.meta.env.BASE_URL}slow-tracker.mp4` },
          { id: "slow-trends", label: "Emotional Trends Visualization", src: `${import.meta.env.BASE_URL}slow-trends.mp4` }
        ]
      }
    },
    {
      id: "project9",
      title: "Garden Line App (MVP)",
      summary:
        "Garden Line is a mobile app designed around gentle, low-pressure communication. It was originally created as a heartfelt gift for a close friend, but evolved into a thoughtful, user-oriented app that supports connection even when words feel hard. Inspired by the emotional fatigue of constant messaging expectations, Garden Line offers a calming, garden-themed space where users can share presence and moments — not just messages. Users tend personal digital gardens and can visit their friends' gardens to plant animated flower messages tied to photos, audio, music, or small notes. It also supports passive shared presence, mood signaling via a lamp, and soft interaction — all designed with emotional bandwidth in mind.",
      technical: "React Native, Firebase Firestore, Expo Audio, React Native WebView, Lottie, Animated API",
      features: [
        "Digital gardens with real-time weather/sky visuals based on location",
        "Send a flower: share a small moment as a flower (text, image, voice note, Spotify link)",
        "Mood Lamp: change a color to gently communicate how you feel",
        "Shared Presence Screen: appear together without needing to chat, with subtle haptics and 'hand holding' planned",
        "Moment Cards: flower moments live in a timeline alongside regular messages",
        "Soothing UI and ambient interaction design, inspired by mental load relief",
      ],
      extras: {
        github: "https://github.com/delly0/garden-line",
        videos: [
          { id: "garden-login", label: "Login & Sign Up", src: `${import.meta.env.BASE_URL}login.mp4` },
          { id: "garden-garden", label: "My Garden", src: `${import.meta.env.BASE_URL}garden.mp4` },
          { id: "garden-friend", label: "Friend's Garden", src: `${import.meta.env.BASE_URL}friendgarden.mp4` },
          { id: "garden-messages", label: "Message Screen", src: `${import.meta.env.BASE_URL}messages.mp4` },
          { id: "garden-presence", label: "Presence Mode", src: `${import.meta.env.BASE_URL}presence.mp4` },
          { id: "garden-settings", label: "Settings", src: `${import.meta.env.BASE_URL}settings.mp4` }
        ]
      },
    },
  ];

  return (
    <div className="min-h-screen pl-4 pr-4 pt-20 pb-20 space-y-16 md:pl-[140px] md:pr-10">
          <h2 className={`text-4xl font-bold mb-10 ${textColor}`}>Projects 🚀</h2>
          {projectList.map(({ id, title, summary, technical, features, extras }) => (
            <section
              key={id}
              id={id}
              className={`${sectionPanelClass} max-w-4xl mx-auto p-8 rounded-lg mb-16 space-y-6`}
            >
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
                {extras.videos && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 place-items-center">
                    {extras.videos.map(({ id, label, src }) => (
                      <div key={id} className="text-center space-y-2">
                        <p className={`font-semibold ${textColor}`}>{label}</p>
                        <video
                          src={src}
                          controls
                          className="w-[250px] h-auto rounded-lg shadow"
                        >
                          Your browser does not support the video tag.
                        </video>
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