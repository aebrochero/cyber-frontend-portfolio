/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Stat {
  name: string;
  value: number; // 0 to 100
  desc: string;
}

export interface Specialization {
  id: string;
  code: string;
  name: string;
  role: string;
  avatarId: string; // Identifier to render a specific abstract mecha SVG
  bio: string;
  stats: Stat[];
  tech: string[];
  capabilities: string[];
}

export interface Project {
  id: string;
  code: string;
  title: string;
  type: string;
  status: "COMPLETED" | "ACTIVE" | "MAINTENANCE";
  securityLevel: "LEVEL_1" | "LEVEL_2" | "LEVEL_3" | "CLASSIFIED";
  description: string;
  outcomes: string[];
  tech: string[];
  url?: string;
}

export interface Experience {
  id: string;
  period: string;
  company: string;
  role: string;
  description: string;
  achievements: string[];
  nodeStatus: "STABLE" | "ACTIVE" | "DEPRECATED";
  geo: string;
}

export interface SkillItem {
  name: string;
  level: number; // 0 to 100
  status: "OPTIMIZED" | "STABLE" | "UPGRADING";
  description: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  code: string;
  skills: SkillItem[];
}
