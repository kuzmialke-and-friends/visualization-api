export interface Subject {
  metadata: {
    personalityType: string;
  };
}

interface Log {
  x: number;
  y: number;
  idOfSound: string;
  timestamp: string;
  timestampOfSound: string;
}

interface GhostLog extends Log {
  deathCount: number;
  money: number;
  health: number;
}

export interface GhostSubject extends Subject {
  log: GhostLog[];
}

interface JumpLog extends Log {
  deathCount: number;
}

export interface JumpSubject extends Subject {
  log: JumpLog[];
}

interface MazeLog extends Log {
  wasOnCorrectPath: boolean;
}

export interface MazeSubject extends Subject {
  log: MazeLog[];
}

export type DatasetType = 'ghost' | 'jump' | 'maze';

export type VisualizationType = 'graph' | 'bar' | 'chart';

export type Subjects =
  | Record<string, GhostSubject>
  | Record<string, JumpSubject>
  | Record<string, MazeSubject>;

export interface Dataset {
  subjects: Subjects;
  supportedVisualization: VisualizationType[];
}

interface Coordinate {
  x: number;
  y: number;
  z: number;
}

export type StaticMap = Coordinate[];
