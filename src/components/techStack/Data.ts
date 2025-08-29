import { 
  Database, Cloud, Code, Server, 
  Cpu, Zap, FileSpreadsheet, Search, Activity,
  Workflow, LineChart, PieChart
} from 'lucide-react';

export const technologies = {
  "Lenguajes": [
    { name: "Python", color: "text-yellow-500", icon: Code },
    { name: "SQL", color: "text-blue-600", icon: Database }
  ],
  "Big Data & Streaming": [
    { name: "Apache Spark", color: "text-orange-500", icon: Zap },
    { name: "Apache Kafka", color: "text-gray-800", icon: Activity },
    { name: "Trino/Presto", color: "text-purple-600", icon: Search },
    { name: "Hadoop", color: "text-yellow-600", icon: Server }
  ],
  "Cloud Platforms": [
    { name: "Google Cloud Platform", color: "text-blue-500", icon: Cloud },
    { name: "Amazon AWS", color: "text-orange-400", icon: Cloud }
  ],
  "BI & Visualization": [
    { name: "Power BI", color: "text-yellow-500", icon: PieChart },
    { name: "Looker Studio", color: "text-blue-500", icon: LineChart }
  ],
  "Databases": [
    { name: "PostgreSQL", color: "text-blue-700", icon: Database },
    { name: "Oracle", color: "text-red-600", icon: Database },
    { name: "MongoDB", color: "text-green-600", icon: Database }
  ],
  "Microsoft Stack": [
    { name: "SSIS", color: "text-blue-600", icon: Workflow },
    { name: "SSAS", color: "text-blue-700", icon: Cpu },
    { name: "SSRS", color: "text-blue-800", icon: FileSpreadsheet },
    { name: "SQL Server", color: "text-red-700", icon: Database }
  ]
};
