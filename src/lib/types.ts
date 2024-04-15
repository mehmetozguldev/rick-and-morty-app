interface LocationInfo {
  name: string;
  url: string;
}

export enum Status {
  Alive = "Alive",
  Dead = "Dead",
  Unknown = "Unknown",
}

interface Character {
  id: number;
  name: string;
  status: Status;
  species: string;
  type: string;
  gender: string;
  location: LocationInfo;
  image: string;
}

interface CharacterCardProps {
  id: number;
  name: string;
  status: Status;
  species: string;
  image: string;
}

export type { LocationInfo, Character, CharacterCardProps };
