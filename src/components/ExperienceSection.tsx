import { Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "AI Engineer (Financial & Audit)",
      company: "Project 990",
      duration: "Oct 2025 - Present",
      location: "Irvine, CA",
      description: [
        "Building AI systems that automate financial and audit workflows.",
        "Client & Project Setup - Automated Trial Balance, Balance Sheet, Statement of Activities, Cash Flows and other financial reports generation.",
        "Agentic Data extraction from documents, agreements and other sources for audit and compliance purposes.",
        "Full-stack development to AI engineering, building and deploying AI systems that automate financial and audit workflows.",
      ],
    },
    {
      title: "Machine Learning Engineer",
      company: "Project 990",
      duration: "Sep 2024 - Oct 2025",
      location: "Bloomington, IN",
      description: [
        // "Architected scalable backend and streamlined SQL queries for processing over 12M tax records",
        // "Leveraged Indiana University's Big Red 200 supercomputer to fine-tune NLP models",
        // "Engineered AI chatbots using advanced NLP techniques for improved data access",

        // "Engineered scalable backend architecture and optimized database queries to efficiently process and deliver real-time analytics from 12M+ tax records, significantly enhancing data accessibility.",
        // "Leveraged IU's Big Red 200 supercomputer for fine-tuning NLP models, achieving high-accuracy categorization of organization mission statements, and implemented advanced NLP chatbots to streamline information access for philanthropic stakeholders.",
        // "Collaborated with cross-functional teams to integrate new analytics features and enhance user experience, driving data-informed decisions and improving operational efficiency for philanthropic foundations and grantees.",
        
        // "Architected scalable backend and streamlined SQL queries for processing over 12M tax records, enhancing access to real-time philanthropic insights.",
        // "Leveraged Indiana University's Big Red 200 supercomputer to fine-tune NLP models for classifying nonprofit mission statements.",
        // "Engineered AI chatbots using advanced NLP to provide information access to philanthropic foundations, enhancing stakeholder engagement.",

        "Engineered scalable backend architecture and optimized database queries to efficiently process and deliver real-time analytics from 12M+ tax records, significantly enhancing data accessibility.",
        "Leveraged IU's Big Red 200 supercomputer for fine-tuning NLP models, achieving high-accuracy categorization of organization mission statements, and implemented advanced NLP chatbots to streamline information access for philanthropic stakeholders.",
        "Collaborated with cross-functional teams to integrate new analytics features and enhance user experience, driving data-informed decisions and improving operational efficiency for philanthropic foundations and grantees.",
        "Analyzed IRS grant and education observational data without experimental setup to estimate the causal effect of philanthropic funding on county- level high school graduation rates using DoWhy and EconML. Estimated a robust positive effect (~1.7%) validated by refutation tests (p = 0.78), demonstrating modest improvements in educational attainment to inform funding strategies.",
      ],
    },
    {
      title: "AI Engineer (Linguistic Research)",
      company: "Indiana University - PBS",
      duration: "Sep 2024 - Apr 2025",
      location: "Bloomington, IN",
      description: [
        // "Built GPT-4o-based speech transformer for aphasic input reconstruction",
        // "Created correction pipeline with SentenceTransformers for improved accuracy",
        // "Used Whisper for STT and pyttsx3 for TTS in language processing applications",
        // "Designed real-time feedback system for language rehabilitation",
        "Built an AI-powered system using GPT-4o and Whisper to convert impaired speech into clear, fluent sentences, improving communication for patients with aphasia.",
        "Developed a real-time, voice-interactive pipeline combining speech-to-text, language correction, and text-to-speech to support continuous speech rehabilitation.",
        "Fine-tuned large language models using patient data and adaptive techniques (LoRA/PEFT) to accurately detect and correct common speech impairments like word-finding issues.",

      ],
    },
    {
      title: "Data Analyst (ML & NLP)",
      company: "Indiana University - Kelley School of Business",
      duration: "May 2024 - Aug 2024",
      location: "Bloomington, IN",
      description: [
        // "Developed NLP-based risk visualization tool for business analysis",
        // "Engineered ETL pipeline using Python, AWS Lambda, and RDS",
        // "Launched real-time dashboard with AWS EC2 and CloudWatch monitoring",

        // "Built an NLP-powered tool to analyze corporate compliance risks, reducing manual review time by 50% and surfacing key regulatory trends.",
        // "Designed a scalable ETL pipeline using Python, AWS Lambda, and PostgreSQL to automate data collection from 10+ regulatory sources, boosting data coverage by 70%.",
        // "Deployed a real-time compliance insights dashboard on AWS EC2 with CloudWatch monitoring, delivering actionable analytics and improving system reliability.",

        "At Kelley School of Business, developed an NLP-driven compliance risk visualization system that reduced manual review time by 50% and improved regulatory tracking across industries.", 
        "Built a serverless ETL pipeline using AWS Lambda, Glue, and S3 to automate data extraction and transformation from 10+ public enforcement sources. Stored structured results in Amazon Aurora Serverless to enable scalable, queryable access to processed data.",
        "Deployed a real-time, filterable dashboard using Amazon QuickSight with monitoring integrated via AWS CloudWatch, delivering continuously updated insights on compliance trends. Implemented classification and keyword extraction models to tag articles and detect regulatory focus shifts, supporting dynamic user queries and custom keyword tracking.",
      ],
    },
    {
      title: "Software Engineer",
      company: "FIS Global",
      duration: "Oct 2021 - Nov 2022",
      location: "Remote",
      description: [
        // "Refined data pipelines for 30+ banking modules via SQL & Apache Kafka",
        // "Deployed interactive Tableau dashboards for financial analytics",
        // "Applied Python (Pandas, NumPy) and SQL for ETL and data aggregation",
        // "Integrated automated data validation in CI/CD pipelines",

        // "Helped modernize FIS Global's legacy Customer Setup platform by rewriting IBM AS/400 systems in AngularJS, integrating 30+ core banking modules (KYC, FraudChex, M&A, etc.), improving access time by 60%, and contributing across UI, DevOps (CI/CD), testing, and production deployments in an Agile/Scrum environment.",
        // "Refined data pipelines for 30+ core banking modules using SQL and Apache Kafka, enhancing real-time accuracy and scalability to ~100K daily transactions; deployed interactive Tableau dashboards, reducing data access time by 60% and accelerating cross-functional decision-making.",
        // "Improved ETL and data aggregation using Python (Pandas, NumPy) and SQL, reducing query resolution time by 45% and boosting system performance; integrated automated data validation into CI/CD pipelines with Jenkins and PyTest, cutting deployment time by 50% and minimizing data discrepancies.",

        "As part of the Decision Solutions team, modernized legacy IBM AS/400 systems by rewriting the Customer Setup platform using AngularJS, integrating over 30 core banking modules including ChexAdvisor, KYC, FraudChex, and M&A tools. Reduced data access time by 60% by replacing terminal-based workflows with modern UIs, dashboards, and custom reports, streamlining navigation and usability.", 
        "Refined data pipelines across these modules using Azure Data Factory, SQL Database, and Event Hubs, improving real-time accuracy to 99% and scaling throughput to 1M+ daily transactions.", 
        "Applied PySpark, Pandas, and NumPy in Azure Databricks for ETL and aggregation workflows, reducing query resolution time by 45%. Deployed interactive Power BI dashboards integrated with Azure, accelerating cross-team decision-making. Enhanced CI/CD pipelines in Azure DevOps by integrating PyTest for automated data validation, reducing deployment time by 50%.",  
        "Collaborated in Agile/Scrum cycles, contributed to code reviews, and led unit, stress, and bulk testing across Windows/Linux using Jest, PyTest, and Postman to ensure robust functionality.",
      ],
    },
    {
      title: "Data Science Intern",
      company: "Bennett University",
      duration: "May 2020 - June 2020",
      location: "Remote",
      description: [
        "Pruned 40-50% of CNN parameters, halving model size and doubling inference speed on edge devices without compromising robustness.", 
        "Built a custom K-means algorithm to assess feature importance, halving redundant computations and improving training efficiency in DL workflows.",
        "Reduced 30% FLOPs on CIFAR-100 using VGG-16, preserved accuracy (±0.5%), and improved computational efficiency with 35% latency drop on edge devices.",
      ],
    },
  ];

  const education = [
    {
      degree: "Master of Science - Data Science",
      institution: "Indiana University Bloomington",
      duration: "Aug 2023 - May 2025",
      location: "Bloomington, IN",
      description: [
        // "GPA: 3.74/4.0",
        <>
          <b>GPA:</b> 3.77/4.0
        </>,
        <><b>Coursework:</b> Data Mining, Statistics (R), Applied Machine Learning, Scientific Visualization, Computer Vision, Applied Algorithms, Big Data, Advanced Database Concepts</>,
        <><b>Research Interests</b> NLP, AI Agents, LLMs, Applied Machine Learning, Reinforcement Learning</>,
      ]
      },
    {
      degree: "Bachelor's in Computer Science",
      institution: "Siddharth Institute of Engineering & Technology",
      duration: "Jul 2017 - Jun 2021",
      location: "India",
      description: [
        <> <b>CGPA:</b> 8.8/10.0</>,
        <> <b>Coursework:</b> Computer Programming, Data Structures & Algorithms, Database Management Systems, Operating Systems, Software Engineering & Architecture, Computer Organization, Computer Networks</>,
        <> <b>Publication:</b> Detection of Online Toxic Comments Using Deep Learning</>,

      ]
    },
  ];

  return (
    <section id="experience" className="section-padding py-16">
      <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-0">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-trendy-primary">Experience & Education</h2>
          <p className="text-trendy-neutral">
            My professional journey and academic background that have shaped my career.
          </p>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-trendy-primary">
              <span className="w-60 h-8 bg-trendy-secondary rounded-full flex items-center justify-center text-white text-2xl">
                Work Experience
              </span>
              {/* Work Experience */}
            </h3>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-trendy-secondary/30">
                  <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-trendy-secondary ring-4 ring-trendy-accent" />
                  
                  <div className="mb-2">
                    <h4 className="text-xl font-bold text-trendy-primary">{exp.title}</h4>
                    <div className="text-trendy-secondary font-medium">{exp.company}</div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mb-3 text-sm text-trendy-neutral">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-trendy-secondary" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-trendy-secondary" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-1 text-trendy-neutral">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="mt-2 w-1.5 h-1.5 bg-trendy-secondary rounded-full flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-trendy-primary">
              <span className="w-40 h-8 bg-trendy-secondary rounded-full flex items-center justify-center text-white text-2xl">
                Education
              </span>
              {/* Education */}
            </h3>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-trendy-secondary/30">
                  <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-trendy-secondary ring-4 ring-trendy-accent" />
                  
                  <div className="mb-2">
                    <h4 className="text-xl font-bold text-trendy-primary">{edu.degree}</h4>
                    <div className="text-trendy-secondary font-medium">{edu.institution}</div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mb-3 text-sm text-trendy-neutral">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-trendy-secondary" />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-trendy-secondary" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                  
                  {/* <p className="text-trendy-neutral">{edu.description}</p> */}
                  <ul className="space-y-1 text-trendy-neutral">
                    {edu.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-2 w-1.5 h-1.5 bg-trendy-secondary rounded-full flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
