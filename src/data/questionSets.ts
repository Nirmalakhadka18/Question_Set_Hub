export interface QuestionSet {
  id: string;
  number: string;
  title: string;
  description: string;
  category: string;
  url: string;
  imageUrl: string;
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
  "IAM",
  "Security / SOC"
];

export const questionSets: QuestionSet[] = [
  {
    id: "1",
    number: "01",
    title: "Networking Interview Questions for Freshers",
    description: "Practice essential networking concepts and commonly asked interview questions for freshers.",
    category: "Networking",
    url: "https://nh-prep.pages.dev",
    imageUrl: "/images/networking_rack_1791279720089.jpg"
  },
  {
    id: "2",
    number: "02",
    title: "Firewall & Network Security",
    description: "Practice firewall and network security interview questions.",
    category: "Network Security",
    url: "https://firewall-interview-questions.interviewquestions.workers.dev/?q=6",
    imageUrl: "/images/firewall_security_1791279733257.jpg"
  },
  {
    id: "3",
    number: "03",
    title: "Email Security",
    description: "Prepare for email security concepts and interview questions.",
    category: "Security",
    url: "https://miles-performed-namespace-barry.trycloudflare.com/",
    imageUrl: "/images/email_security_1791279745768.jpg"
  },
  {
    id: "4",
    number: "04",
    title: "DevOps Interview Prep",
    description: "Prepare for DevOps concepts, tools, and interview questions.",
    category: "DevOps",
    url: "https://devops-interview-prep.yyaswanth528.workers.dev/",
    imageUrl: "/images/devops_pipeline_1791279758940.jpg"
  },
  {
    id: "5",
    number: "05",
    title: "Cloud Security",
    description: "Practice cloud security concepts and interview questions.",
    category: "Cloud Security",
    url: "https://cloud-security-interview-prep.pages.dev/",
    imageUrl: "/images/cloud_security_1791279772219.jpg"
  },
  {
    id: "6",
    number: "06",
    title: "Networking Concepts",
    description: "Explore core networking concepts and fundamentals.",
    category: "Networking",
    url: "https://networking-concepts-react-website.thilakg895.workers.dev/#/topics/ethernet",
    imageUrl: "/images/network_topology_1791279784129.jpg"
  },
  {
    id: "7",
    number: "07",
    title: "Web API Security",
    description: "Practice web API security concepts and interview questions.",
    category: "Web Security",
    url: "https://web-api-security-prep.pages.dev/",
    imageUrl: "/images/api_security_1791279796307.jpg"
  },
  {
    id: "8",
    number: "08",
    title: "Azure Prep",
    description: "Prepare for Microsoft Azure concepts and interview questions.",
    category: "Cloud",
    url: "https://azureprepp.pages.dev/#",
    imageUrl: "/images/azure_cloud_1791279809139.jpg"
  },
  {
    id: "9",
    number: "09",
    title: "Linux Interview Questions",
    description: "Practice Linux concepts and Linux interview questions.",
    category: "Linux",
    url: "https://linux-interview-lab.pages.dev/linux-interview-questions/1",
    imageUrl: "/images/linux_server_1791279821073.jpg"
  },
  {
    id: "10",
    number: "10",
    title: "IAM Preparation",
    description: "Prepare for Identity and Access Management interview questions.",
    category: "IAM",
    url: "https://iam-preparation-interview.pages.dev/",
    imageUrl: "/images/iam_architecture_1791279835009.jpg"
  },
  {
    id: "11",
    number: "11",
    title: "SOC Analyst L1 Interview Questions",
    description: "Practice Security Operations Center (SOC) analyst concepts and L1 interview questions through an interactive preparation lab.",
    category: "Security / SOC",
    url: "https://soc-analyst-prep.golddgokul.workers.dev/",
    imageUrl: "/images/soc_analyst_1791279846665.jpg"
  },
  {
    id: "12",
    number: "12",
    title: "DNS & IP Services Interview Prep",
    description: "Interactive interview simulator covering DNS, IP addressing, DHCP, and related network services.",
    category: "Networking",
    url: "https://networking-interview-prep.olladns.workers.dev/",
    imageUrl: "/images/dns_infrastructure_1791279858246.jpg"
  }
];
