export interface QuestionSet {
  id: string;
  number: string;
  title: string;
  description: string;
  category: string;
  url: string;
}

export const categories = [
  "All",
  "Networking",
  "Network Security",
  "Security",
  "DevOps",
  "Cloud",
  "Cloud Security",
  "Web Security",
  "Linux",
  "Identity & Access Management",
  "Interview Preparation",
  "Security / SOC"
];

export const questionSets: QuestionSet[] = [
  {
    id: "1",
    number: "01",
    title: "Networking Interview Questions for Freshers",
    description: "Practice essential networking concepts and commonly asked interview questions for freshers.",
    category: "Interview Preparation",
    url: "https://nh-prep.pages.dev"
  },
  {
    id: "2",
    number: "02",
    title: "Firewall & Network Security",
    description: "Practice firewall and network security interview questions.",
    category: "Network Security",
    url: "https://firewall-interview-questions.interviewquestions.workers.dev/?q=6"
  },
  {
    id: "3",
    number: "03",
    title: "Email Security",
    description: "Prepare for email security concepts and interview questions.",
    category: "Security",
    url: "https://miles-performed-namespace-barry.trycloudflare.com/"
  },
  {
    id: "4",
    number: "04",
    title: "Networking Interview Prep",
    description: "Practice networking concepts and interview preparation.",
    category: "Networking",
    url: "https://networking-interview-prep.olladns.workers.dev"
  },
  {
    id: "5",
    number: "05",
    title: "DevOps Interview Prep",
    description: "Prepare for DevOps concepts, tools, and interview questions.",
    category: "DevOps",
    url: "https://devops-interview-prep.yyaswanth528.workers.dev/"
  },
  {
    id: "6",
    number: "06",
    title: "Cloud Security",
    description: "Practice cloud security concepts and interview questions.",
    category: "Cloud Security",
    url: "https://cloud-security-interview-prep.pages.dev/"
  },
  {
    id: "7",
    number: "07",
    title: "Networking Concepts",
    description: "Explore core networking concepts and fundamentals.",
    category: "Networking",
    url: "https://networking-concepts-react-website.thilakg895.workers.dev/#/topics/ethernet"
  },
  {
    id: "8",
    number: "08",
    title: "Web API Security",
    description: "Practice web API security concepts and interview questions.",
    category: "Web Security",
    url: "https://web-api-security-prep.pages.dev/"
  },
  {
    id: "9",
    number: "09",
    title: "Azure Prep",
    description: "Prepare for Microsoft Azure concepts and interview questions.",
    category: "Cloud",
    url: "https://azureprepp.pages.dev/#"
  },
  {
    id: "10",
    number: "10",
    title: "Linux Interview Questions",
    description: "Practice Linux concepts and Linux interview questions.",
    category: "Linux",
    url: "https://linux-interview-lab.pages.dev/linux-interview-questions/1"
  },
  {
    id: "11",
    number: "11",
    title: "IAM Preparation",
    description: "Prepare for Identity and Access Management interview questions.",
    category: "Identity & Access Management",
    url: "https://iam-preparation-interview.pages.dev/"
  },
  {
    id: "12",
    number: "12",
    title: "SOC Analyst L1 Interview Questions",
    description: "Practice Security Operations Center (SOC) analyst concepts and L1 interview questions through an interactive preparation lab.",
    category: "Security / SOC",
    url: "https://soc-analyst-prep.golddgokul.workers.dev/"
  }
];
