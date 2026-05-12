// Sidebar navigation data
// Adding/removing tabs only requires editing this file.

import {
  Newspaper,
  TrendingUp,
  MapPin,
  Battery,
  Scale,
  Coins,
  Cloud,
  Cpu,
  FileBadge,
  GitCompare,
  Calculator,
  Zap,
  LineChart,
  Car,
  Eye,
  BarChart3,
  Handshake,
  FileText,
  FileBarChart,
  Presentation,
  Users,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type NavCategory = {
  id: string;
  label: string;
  items: NavItem[];
};

export const NAVIGATION: NavCategory[] = [
  {
    id: "market",
    label: "Market & Industry",
    items: [
      { label: "News Brief", href: "/news", icon: Newspaper },
      { label: "Market Prices", href: "/prices", icon: TrendingUp },
      { label: "Project Tracker", href: "/projects", icon: MapPin },
      { label: "Capacity Tracker", href: "/capacity", icon: Battery },
    ],
  },
  {
    id: "policy",
    label: "Policy & Regulation",
    items: [
      { label: "Policy Tracker", href: "/policy", icon: Scale },
      { label: "Incentive Calculator", href: "/incentive", icon: Coins },
      { label: "Carbon Market", href: "/carbon", icon: Cloud },
    ],
  },
  {
    id: "technology",
    label: "Technology & R&D",
    items: [
      { label: "Technology Tracker", href: "/technology", icon: Cpu },
      { label: "Patent Tracker", href: "/patents", icon: FileBadge },
      { label: "Tech Spec Comparison", href: "/tech-specs", icon: GitCompare },
    ],
  },
  {
    id: "economics",
    label: "Project Economics",
    items: [
      { label: "LCOH Calculator", href: "/lcoh", icon: Calculator },
      { label: "LCOE Calculator", href: "/lcoe", icon: Zap },
      { label: "Project Economics", href: "/economics", icon: LineChart },
      { label: "TCO Calculator", href: "/tco", icon: Car },
    ],
  },
  {
    id: "corporate",
    label: "Corporate Analysis",
    items: [
      { label: "Company Watchlist", href: "/watchlist", icon: Eye },
      { label: "Financial Snapshot", href: "/financials", icon: BarChart3 },
      { label: "M&A Tracker", href: "/ma", icon: Handshake },
    ],
  },
  {
    id: "tools",
    label: "Work Tools",
    items: [
      { label: "Meeting Notes", href: "/meeting-notes", icon: FileText },
      { label: "Report Builder", href: "/reports", icon: FileBarChart },
      { label: "Slide Generator", href: "/slides", icon: Presentation },
      { label: "Network Tracker", href: "/network", icon: Users },
    ],
  },
];
