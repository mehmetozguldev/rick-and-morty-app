interface LocationInfo {
  name: string;
  url: string;
}

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  location: LocationInfo;
  image: string;
}

export type { LocationInfo, Character };
