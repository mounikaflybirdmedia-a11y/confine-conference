import catAi from "@/assets/cat-ai.jpg";
import catMedical from "@/assets/cat-medical.jpg";
import catEngineering from "@/assets/cat-engineering.jpg";
import catBusiness from "@/assets/cat-business.jpg";
import catPharma from "@/assets/cat-pharma.jpg";
import catNursing from "@/assets/cat-nursing.jpg";

export type Conference = {
  id: string;
  title: string;
  date: string;
  city: string;
  cat: string;
  img: string;
  status: "upcoming" | "ongoing" | "past";
  description: string;
  venue: string;
  topics: string[];
  speakers: { name: string; role: string; org: string }[];
  deadlines: { label: string; date: string }[];
  fee: { type: string; amount: string }[];
};

export const conferences: Conference[] = [
  {
    id: "global-summit-ai-machine-learning",
    title: "Global Summit on Artificial Intelligence & Machine Learning",
    date: "Mar 14–16, 2026",
    city: "London, UK",
    cat: "AI & Technology",
    img: catAi,
    status: "upcoming",
    venue: "ExCeL London, Royal Victoria Dock, London E16 1XL, UK",
    description:
      "The Global Summit on Artificial Intelligence & Machine Learning is a premier international gathering bringing together the world's leading AI researchers, practitioners, and innovators. Explore cutting-edge advancements in deep learning, natural language processing, computer vision, and responsible AI across three days of keynotes, workshops, and networking.",
    topics: [
      "Deep Learning & Neural Networks",
      "Natural Language Processing",
      "Computer Vision & Image Recognition",
      "Reinforcement Learning",
      "Responsible & Ethical AI",
      "AI in Healthcare",
      "Edge AI & IoT",
      "Generative AI & Large Language Models",
    ],
    speakers: [
      { name: "Prof. Hiroshi Tanaka", role: "Director, AI Research Lab", org: "University of Tokyo" },
      { name: "Dr. Elena Marchetti", role: "Head of ML Research", org: "DeepMind, UK" },
      { name: "Dr. Aisha Rahman", role: "Principal Scientist", org: "Microsoft Research" },
    ],
    deadlines: [
      { label: "Abstract Submission", date: "Jan 15, 2026" },
      { label: "Full Paper Submission", date: "Feb 10, 2026" },
      { label: "Early Bird Registration", date: "Feb 28, 2026" },
      { label: "Conference Dates", date: "Mar 14–16, 2026" },
    ],
    fee: [
      { type: "Early Bird", amount: "$350" },
      { type: "Regular", amount: "$450" },
      { type: "Student", amount: "$150" },
      { type: "Virtual", amount: "$100" },
    ],
  },
  {
    id: "international-conference-clinical-oncology",
    title: "International Conference on Clinical Oncology & Cancer Research",
    date: "Apr 22–24, 2026",
    city: "Dubai, UAE",
    cat: "Medical",
    img: catMedical,
    status: "upcoming",
    venue: "Dubai World Trade Centre, Sheikh Zayed Road, Dubai, UAE",
    description:
      "The International Conference on Clinical Oncology & Cancer Research unites oncologists, researchers, and healthcare professionals from across the globe to discuss groundbreaking advances in cancer treatment, early detection, immunotherapy, and patient care. A must-attend event for the global oncology community.",
    topics: [
      "Immunotherapy & Targeted Therapy",
      "Precision Oncology",
      "Early Detection & Screening",
      "Surgical Oncology",
      "Radiation Therapy Advances",
      "Pediatric Oncology",
      "Palliative Care",
      "Cancer Genomics",
    ],
    speakers: [
      { name: "Dr. Amara Okafor", role: "Chief of Oncology", org: "Mayo Clinic, USA" },
      { name: "Prof. Sophie Laurent", role: "Director, Cancer Institute", org: "Institut Curie, France" },
      { name: "Dr. Rajesh Gupta", role: "Head of Oncology Research", org: "Tata Memorial Centre, India" },
    ],
    deadlines: [
      { label: "Abstract Submission", date: "Feb 20, 2026" },
      { label: "Full Paper Submission", date: "Mar 15, 2026" },
      { label: "Early Bird Registration", date: "Mar 31, 2026" },
      { label: "Conference Dates", date: "Apr 22–24, 2026" },
    ],
    fee: [
      { type: "Early Bird", amount: "$400" },
      { type: "Regular", amount: "$550" },
      { type: "Student", amount: "$180" },
      { type: "Virtual", amount: "$120" },
    ],
  },
  {
    id: "world-congress-advanced-materials-nanotechnology",
    title: "World Congress on Advanced Materials & Nanotechnology",
    date: "May 09–11, 2026",
    city: "Singapore",
    cat: "Engineering",
    img: catEngineering,
    status: "upcoming",
    venue: "Sands Expo & Convention Centre, Marina Bay Sands, Singapore",
    description:
      "The World Congress on Advanced Materials & Nanotechnology is a landmark event at the intersection of materials science, nanotechnology, and engineering. Researchers and industry leaders present the latest breakthroughs in smart materials, nanofabrication, sustainable materials, and applications across aerospace, biomedical, and electronics sectors.",
    topics: [
      "Nanomaterials & Nanofabrication",
      "Smart & Functional Materials",
      "Biomaterials & Biomedical Applications",
      "Energy Storage Materials",
      "Additive Manufacturing",
      "Sustainable & Green Materials",
      "Composite Materials",
      "Surface Engineering & Coatings",
    ],
    speakers: [
      { name: "Prof. Wei Zhang", role: "Dean of Materials Science", org: "NUS, Singapore" },
      { name: "Dr. Fatima Al-Rashid", role: "Head of Nano Research", org: "MIT, USA" },
      { name: "Prof. Klaus Werner", role: "Director, Materials Institute", org: "TU Dresden, Germany" },
    ],
    deadlines: [
      { label: "Abstract Submission", date: "Mar 01, 2026" },
      { label: "Full Paper Submission", date: "Apr 01, 2026" },
      { label: "Early Bird Registration", date: "Apr 20, 2026" },
      { label: "Conference Dates", date: "May 09–11, 2026" },
    ],
    fee: [
      { type: "Early Bird", amount: "$380" },
      { type: "Regular", amount: "$500" },
      { type: "Student", amount: "$160" },
      { type: "Virtual", amount: "$110" },
    ],
  },
  {
    id: "international-summit-sustainable-business-esg",
    title: "International Summit on Sustainable Business & ESG",
    date: "Jun 18–20, 2026",
    city: "Paris, France",
    cat: "Business",
    img: catBusiness,
    status: "upcoming",
    venue: "Palais des Congrès de Paris, 2 Place de la Porte Maillot, Paris, France",
    description:
      "The International Summit on Sustainable Business & ESG brings together C-suite executives, policy makers, investors, and academics to address the most pressing questions around Environmental, Social, and Governance performance. A transformative three-day summit shaping the future of responsible business across global markets.",
    topics: [
      "ESG Reporting & Disclosure",
      "Carbon Neutrality & Net Zero Strategy",
      "Sustainable Finance & Green Bonds",
      "Corporate Governance & Ethics",
      "Circular Economy",
      "Social Impact & Diversity",
      "Supply Chain Sustainability",
      "Climate Risk & Resilience",
    ],
    speakers: [
      { name: "Dr. Isabelle Moreau", role: "Chief Sustainability Officer", org: "L'Oréal Group, France" },
      { name: "Prof. Daniel Becker", role: "Chair, Business Sustainability", org: "TU Munich, Germany" },
      { name: "Mr. James Okonkwo", role: "Partner, ESG Advisory", org: "McKinsey & Company" },
    ],
    deadlines: [
      { label: "Abstract Submission", date: "Apr 10, 2026" },
      { label: "Full Paper Submission", date: "May 10, 2026" },
      { label: "Early Bird Registration", date: "May 25, 2026" },
      { label: "Conference Dates", date: "Jun 18–20, 2026" },
    ],
    fee: [
      { type: "Early Bird", amount: "$420" },
      { type: "Regular", amount: "$580" },
      { type: "Student", amount: "$200" },
      { type: "Virtual", amount: "$130" },
    ],
  },
  {
    id: "global-forum-pharmaceutical-sciences-drug-discovery",
    title: "Global Forum on Pharmaceutical Sciences & Drug Discovery",
    date: "Jul 07–09, 2026",
    city: "Tokyo, Japan",
    cat: "Pharma",
    img: catPharma,
    status: "upcoming",
    venue: "Tokyo International Forum, 3-5-1 Marunouchi, Chiyoda, Tokyo, Japan",
    description:
      "The Global Forum on Pharmaceutical Sciences & Drug Discovery is a world-class platform for pharmaceutical scientists, clinical researchers, regulatory experts, and biotech leaders to exchange knowledge on the most recent advances in drug design, clinical trials, regulatory affairs, and pharmacovigilance.",
    topics: [
      "Drug Discovery & Design",
      "Clinical Trial Management",
      "Regulatory Affairs & FDA Compliance",
      "Biopharmaceuticals & Biosimilars",
      "Pharmacovigilance & Drug Safety",
      "Formulation Science",
      "Personalized Medicine",
      "Vaccine Development",
    ],
    speakers: [
      { name: "Prof. Yuki Nakamura", role: "Director of Drug Research", org: "University of Tokyo, Japan" },
      { name: "Dr. Sarah Mitchell", role: "VP Clinical Development", org: "Pfizer Inc., USA" },
      { name: "Prof. Arjun Mehta", role: "Head of Pharmacology", org: "AIIMS Delhi, India" },
    ],
    deadlines: [
      { label: "Abstract Submission", date: "May 01, 2026" },
      { label: "Full Paper Submission", date: "Jun 01, 2026" },
      { label: "Early Bird Registration", date: "Jun 15, 2026" },
      { label: "Conference Dates", date: "Jul 07–09, 2026" },
    ],
    fee: [
      { type: "Early Bird", amount: "$370" },
      { type: "Regular", amount: "$490" },
      { type: "Student", amount: "$150" },
      { type: "Virtual", amount: "$100" },
    ],
  },
  {
    id: "international-nursing-healthcare-leadership-congress",
    title: "International Nursing & Healthcare Leadership Congress",
    date: "Aug 25–27, 2026",
    city: "Toronto, Canada",
    cat: "Nursing",
    img: catNursing,
    status: "upcoming",
    venue: "Metro Toronto Convention Centre, 255 Front St W, Toronto, ON, Canada",
    description:
      "The International Nursing & Healthcare Leadership Congress is a premier global event dedicated to advancing the nursing profession and healthcare leadership worldwide. Join nurses, nurse practitioners, healthcare administrators, and educators to explore best practices in patient care, leadership development, digital health, and global health equity.",
    topics: [
      "Nursing Leadership & Management",
      "Patient Safety & Quality Care",
      "Digital Health & Telehealth",
      "Global Health Equity",
      "Mental Health Nursing",
      "Geriatric & Long-term Care",
      "Nursing Education & Research",
      "Infection Control & Prevention",
    ],
    speakers: [
      { name: "Dr. Priya Nair", role: "Chief Nursing Officer", org: "AIIMS Delhi, India" },
      { name: "Prof. Linda Osei", role: "Dean, School of Nursing", org: "University of Toronto, Canada" },
      { name: "Dr. James Whitfield", role: "Director of Healthcare Leadership", org: "WHO Geneva" },
    ],
    deadlines: [
      { label: "Abstract Submission", date: "Jun 15, 2026" },
      { label: "Full Paper Submission", date: "Jul 15, 2026" },
      { label: "Early Bird Registration", date: "Jul 31, 2026" },
      { label: "Conference Dates", date: "Aug 25–27, 2026" },
    ],
    fee: [
      { type: "Early Bird", amount: "$320" },
      { type: "Regular", amount: "$440" },
      { type: "Student", amount: "$140" },
      { type: "Virtual", amount: "$90" },
    ],
  },
  {
    id: "international-forum-renewable-energy",
    title: "International Forum on Renewable Energy",
    date: "Live now — closes Feb 12",
    city: "Berlin, Germany",
    cat: "Environmental",
    img: catEngineering,
    status: "ongoing",
    venue: "Messe Berlin, Messedamm 22, 14055 Berlin, Germany",
    description:
      "The International Forum on Renewable Energy is a live, ongoing global conference addressing the most urgent challenges and innovations in clean energy. Covering solar, wind, hydrogen, energy storage, and grid modernization, this forum brings together policymakers, engineers, and investors to accelerate the energy transition.",
    topics: [
      "Solar PV & Concentrated Solar",
      "Wind Energy Onshore & Offshore",
      "Green Hydrogen & Fuel Cells",
      "Energy Storage & Battery Technology",
      "Smart Grids & Microgrids",
      "Energy Policy & Regulation",
      "Carbon Capture & Storage",
      "Electric Mobility",
    ],
    speakers: [
      { name: "Prof. Klaus Müller", role: "Head of Energy Research", org: "Fraunhofer Institute, Germany" },
      { name: "Dr. Amina Diallo", role: "Director, Renewable Energy", org: "IRENA, UAE" },
    ],
    deadlines: [
      { label: "Conference Closes", date: "Feb 12, 2026" },
    ],
    fee: [
      { type: "In-Person", amount: "$300" },
      { type: "Virtual", amount: "$80" },
    ],
  },
  {
    id: "congress-precision-medicine",
    title: "Congress on Precision Medicine",
    date: "Live now — closes Feb 14",
    city: "Boston, USA",
    cat: "Healthcare",
    img: catMedical,
    status: "ongoing",
    venue: "Boston Convention & Exhibition Center, 415 Summer St, Boston, MA, USA",
    description:
      "The Congress on Precision Medicine is a cutting-edge ongoing conference exploring how genomics, proteomics, and advanced diagnostics are transforming personalized healthcare. Join top clinicians, biotech innovators, and data scientists to discuss the future of individualized treatment strategies.",
    topics: [
      "Genomics & Pharmacogenomics",
      "Biomarker Discovery",
      "AI in Diagnostics",
      "Cell & Gene Therapy",
      "Liquid Biopsy",
      "Digital Pathology",
      "Clinical Decision Support",
      "Rare Disease Research",
    ],
    speakers: [
      { name: "Dr. Jennifer Cole", role: "Director of Genomics", org: "Harvard Medical School, USA" },
      { name: "Prof. Marco Rossi", role: "Head of Precision Medicine", org: "Mayo Clinic, USA" },
    ],
    deadlines: [
      { label: "Conference Closes", date: "Feb 14, 2026" },
    ],
    fee: [
      { type: "In-Person", amount: "$380" },
      { type: "Virtual", amount: "$100" },
    ],
  },
  {
    id: "global-conference-data-science-2025",
    title: "Global Conference on Data Science 2025",
    date: "Nov 12–14, 2025",
    city: "Amsterdam, NL",
    cat: "AI & Technology",
    img: catAi,
    status: "past",
    venue: "RAI Amsterdam Convention Centre, Europaplein 24, Amsterdam, Netherlands",
    description:
      "The Global Conference on Data Science 2025 successfully gathered over 2,000 data scientists, analysts, and AI researchers from 60+ countries. The event featured 120+ presentations, 15 workshops, and landmark keynotes on the future of data-driven decision making.",
    topics: [
      "Big Data Analytics",
      "Machine Learning at Scale",
      "Data Engineering & MLOps",
      "Statistical Modeling",
      "Data Visualization",
      "Privacy-Preserving ML",
      "Real-Time Analytics",
      "Data Ethics & Governance",
    ],
    speakers: [
      { name: "Dr. Ana Kovač", role: "Chief Data Scientist", org: "Booking.com, Netherlands" },
      { name: "Prof. Lars Hansen", role: "Head of Data Science", org: "DTU, Denmark" },
    ],
    deadlines: [
      { label: "Event Concluded", date: "Nov 14, 2025" },
    ],
    fee: [
      { type: "Standard", amount: "$320" },
      { type: "Virtual", amount: "$90" },
    ],
  },
  {
    id: "world-summit-cardiology-2025",
    title: "World Summit on Cardiology 2025",
    date: "Sep 21–23, 2025",
    city: "Madrid, Spain",
    cat: "Medical",
    img: catMedical,
    status: "past",
    venue: "IFEMA — Feria de Madrid, Av. del Partenón, 5, Madrid, Spain",
    description:
      "The World Summit on Cardiology 2025 was a landmark international conference attended by 3,500+ cardiologists and cardiovascular researchers. Topics ranged from interventional cardiology and heart failure management to cutting-edge cardiac imaging and AI-driven diagnostics.",
    topics: [
      "Interventional Cardiology",
      "Heart Failure & Cardiomyopathy",
      "Cardiac Imaging & Echo",
      "Electrophysiology & Arrhythmias",
      "Preventive Cardiology",
      "Cardiovascular Genetics",
      "AI in Cardiology",
      "Hypertension Management",
    ],
    speakers: [
      { name: "Prof. Carlos García", role: "Head of Cardiology", org: "Hospital La Paz, Spain" },
      { name: "Dr. Nina Petrović", role: "Director, Cardiovascular Research", org: "ESC, France" },
    ],
    deadlines: [
      { label: "Event Concluded", date: "Sep 23, 2025" },
    ],
    fee: [
      { type: "Standard", amount: "$400" },
      { type: "Virtual", amount: "$110" },
    ],
  },
  {
    id: "international-engineering-symposium-2025",
    title: "International Engineering Symposium 2025",
    date: "Aug 03–05, 2025",
    city: "Seoul, South Korea",
    cat: "Engineering",
    img: catEngineering,
    status: "past",
    venue: "COEX Convention & Exhibition Center, 513 Yeongdong-daero, Seoul, South Korea",
    description:
      "The International Engineering Symposium 2025 brought together 2,800+ engineers and researchers across civil, mechanical, electrical, and chemical engineering disciplines. The three-day event featured hands-on technical workshops, industry exhibitions, and interdisciplinary panel discussions.",
    topics: [
      "Civil & Structural Engineering",
      "Mechanical Engineering & Robotics",
      "Electrical & Power Engineering",
      "Chemical & Process Engineering",
      "Environmental Engineering",
      "Aerospace Engineering",
      "Manufacturing & Automation",
      "Engineering Education",
    ],
    speakers: [
      { name: "Prof. Ji-hoon Kim", role: "Dean of Engineering", org: "KAIST, South Korea" },
      { name: "Dr. Mia Johansson", role: "Head of R&D", org: "ABB Group, Sweden" },
    ],
    deadlines: [
      { label: "Event Concluded", date: "Aug 05, 2025" },
    ],
    fee: [
      { type: "Standard", amount: "$350" },
      { type: "Virtual", amount: "$95" },
    ],
  },
];

export const catImg: Record<string, string> = {
  "AI & Technology": catAi,
  Medical: catMedical,
  Healthcare: catMedical,
  Engineering: catEngineering,
  Business: catBusiness,
  Pharma: catPharma,
  Pharmaceutical: catPharma,
  Nursing: catNursing,
  Environmental: catEngineering,
};
