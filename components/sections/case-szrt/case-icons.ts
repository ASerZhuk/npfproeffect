import { Activity, ChartNoAxesCombined, Cpu, Database, Gauge, ListRestart, MonitorDot, SlidersHorizontal, Thermometer, Zap, type LucideIcon } from 'lucide-react';
import type { CaseIcon } from '@/content/cases';

export const CASE_ICONS: Record<CaseIcon, LucideIcon> = { Thermometer, Gauge, Zap, Cpu, MonitorDot, Database, Activity, ListRestart, ChartNoAxesCombined, SlidersHorizontal };
