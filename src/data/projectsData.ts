import { Cloud, BarChart3, Brain, Database } from "lucide-react";

export const projects = [
  {
    id: 1,
    title: "Pipeline de Datos E-commerce en GCP",
    description:
      "Sistema completo de ETL que procesa millones de transacciones diarias usando Cloud Dataflow, BigQuery y Pub/Sub para análisis en tiempo real.",
    image:
      "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    technologies: ["Google Cloud Platform", "Apache Beam", "BigQuery", "Cloud Dataflow", "Python"],
    icon: Cloud,
    demo: "#",
    github: "#",
    category: "Data Engineering",
  },
  {
    id: 2,
    title: "Dashboard Ejecutivo de Ventas",
    description:
      "Dashboard interactivo en Power BI con KPIs dinámicos, análisis de tendencias y predicciones de ventas conectado a múltiples fuentes de datos.",
    image:
      "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    technologies: ["Power BI", "SQL Server", "DAX", "Power Query", "Azure"],
    icon: BarChart3,
    demo: "#",
    github: "#",
    category: "Business Intelligence",
  },
  {
    id: 3,
    title: "Modelo de Predicción de Churn",
    description:
      "Sistema de machine learning usando PySpark para predecir la deserción de clientes con 94% de precisión, deployado en cluster Databricks.",
    image:
      "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    technologies: ["PySpark", "MLlib", "Databricks", "Apache Kafka", "Python"],
    icon: Brain,
    demo: "#",
    github: "#",
    category: "Machine Learning",
  },
  {
    id: 4,
    title: "Data Warehouse Multidimensional",
    description:
      "Arquitectura de almacén de datos con modelo estrella optimizado, procesos ETL automatizados y cubos OLAP para análisis histórico.",
    image:
      "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    technologies: ["SQL Server", "SSIS", "SSAS", "T-SQL", "Power BI"],
    icon: Database,
    demo: "#",
    github: "#",
    category: "Data Warehousing",
  },
  {
    id: 5,
    title: "Streaming Analytics Platform",
    description:
      "Plataforma de análisis en tiempo real procesando eventos de IoT usando Kafka, Spark Streaming y visualizaciones en Grafana.",
    image:
      "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    technologies: ["Apache Kafka", "Spark Streaming", "InfluxDB", "Grafana", "Docker"],
    icon: Cloud,
    demo: "#",
    github: "#",
    category: "Real-time Analytics",
  },
  {
    id: 6,
    title: "Migration to Snowflake",
    description:
      "Migración completa de data warehouse legacy a Snowflake con optimización de performance y reducción del 40% en costos operativos.",
    image:
      "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    technologies: ["Snowflake", "dbt", "Airflow", "Python", "SQL"],
    icon: Database,
    demo: "#",
    github: "#",
    category: "Cloud Migration",
  },
];
