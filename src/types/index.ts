export interface Exercise {
  id: string;
  name: string;
  videoUrl: string;
  imageUrl?: string;
  description?: string;
}

export interface ExerciseCategory {
  id: string;
  name: string;
  description: string;
  exercises: Exercise[];
}