/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'es' | 'en';

export interface DeveloperIdentity {
  name: string;
  roleTitle: string;
  location: string;
  availability: string;
  firmware: string;
  summary: string;
  quote: string;
  systemSpecs: { label: string; value: string }[];
  contacts: {
    primaryEmail: string;
    institutionalEmail: string;
    githubUrl: string;
    githubUser: string;
    linkedinUrl: string;
    linkedinUser: string;
    phone: string;
    phoneDisplay: string;
    locationDetailed: string;
  };
}

export interface Specialization {
  id: string;
  code: string;
  name: string;
  role: string;
  avatarId: 'architect' | 'performance' | 'cloud_qa';
  bio: string;
  stats: { name: string; value: number; desc: string }[];
  tech: string[];
  capabilities: string[];
}

export interface Project {
  id: string;
  code: string;
  title: string;
  type: string;
  status: 'ACTIVE' | 'COMPLETED' | 'MAINTENANCE';
  securityLevel: 'CLASSIFIED' | 'LEVEL_3' | 'LEVEL_2' | 'PUBLIC';
  description: string;
  outcomes: string[];
  tech: string[];
  url?: string;
  isPrivate?: boolean;
}

export interface Experience {
  id: string;
  period: string;
  company: string;
  role: string;
  description: string;
  achievements: string[];
  nodeStatus: 'ACTIVE' | 'STABLE' | 'DEPRECATED';
  geo: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  code: string;
  skills: {
    name: string;
    level: number;
    status: 'OPTIMIZED' | 'STABLE' | 'UPGRADING';
    description: string;
  }[];
}

export interface TourStep {
  element: string;
  sectionId: string;
  title: string;
  description: string;
  side: 'top' | 'bottom' | 'left' | 'right';
  align: 'start' | 'center' | 'end';
}

export interface ContentDictionary {
  nav: {
    specialties: string;
    projects: string;
    timeline: string;
    stack: string;
    contact: string;
    tourBtn: string;
    signalActive: string;
    currentSection: string;
  };
  hero: {
    nodeAuth: string;
    startTour: string;
    tourTag: string;
    specsTitle: string;
    systemTime: string;
  };
  specialties: {
    rosterTitle: string;
    selectRole: string;
    vectorRadar: string;
    roleIntegration: string;
    roleIntegrationVal: string;
    profileBio: string;
    stackTitle: string;
    statsTitle: string;
    skillsTitle: string;
    evaluationMetric: string;
    metricClass: string;
  };
  projects: {
    tag: string;
    title: string;
    filterAll: string;
    filterCompleted: string;
    filterActive: string;
    filterMaintenance: string;
    outcomesTitle: string;
    collapseBtn: string;
    expandBtn: string;
    statusActive: string;
    statusCompleted: string;
    statusMaintenance: string;
    privateBadge: string;
  };
  timeline: {
    tag: string;
    title: string;
    registryStatus: string;
    nodeActive: string;
    nodeArchived: string;
    outcomesTitle: string;
  };
  stack: {
    tag: string;
    title: string;
    filterAll: string;
    coreAnalysis: string;
    coreLoad: string;
    complianceLabel: string;
    renderSpeedLabel: string;
    typesCoverageLabel: string;
    specFooter: string;
    syncLevel: string;
  };
  contact: {
    tag: string;
    title: string;
    description: string;
    primaryEmailLabel: string;
    institutionalEmailLabel: string;
    locationLabel: string;
    phoneLabel: string;
    socialsLabel: string;
    firmSocket: string;
    terminalTitle: string;
    terminalPort: string;
    fieldName: string;
    fieldEmail: string;
    fieldMessage: string;
    placeholderName: string;
    placeholderEmail: string;
    placeholderMsg: string;
    btnSubmit: string;
    btnCompiling: string;
    successTitle: string;
    successDesc: string;
    btnNewSignal: string;
    logStart: string;
    logEncrypt: string;
    logMeta: string;
    logReady: string;
    logFreq: string;
    logTransmit: string;
    logSuccess: string;
    logCode: string;
    logNotice: string;
  };
  tourUi: {
    progress: string;
    next: string;
    prev: string;
    done: string;
  };
  footer: {
    copyright: string;
    compliance: string;
  };
  identity: DeveloperIdentity;
  specializations: Specialization[];
  projectsList: Project[];
  experiences: Experience[];
  skillsList: SkillCategory[];
  tourSteps: TourStep[];
}
