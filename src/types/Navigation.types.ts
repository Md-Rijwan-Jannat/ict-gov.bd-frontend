export interface Section {
  title: string;
  items: string[];
}

export interface Texts {
  sections1: Section[];
  sections2: Section[];
  sections3: Section[];
  sections4: Section[];
  sections5: Section[];
  sections6: Section[];
  sections7: Section[];
}

export type Language = "bn" | "en"; // Assuming 'bn' for Bangla and 'en' for English

export interface TextsByLanguage {
  [key: string]: Texts;
}
