// Descriptions and contribution statements are adapted from the Master CV.
export const projects = [
  {
    title: 'Sonar Audiobooks',
    summary: 'A Thai AI audiobook experience designed to make reading more accessible for visually impaired users.',
    award: 'First Prize · Beyond Green 2025',
    awardDetail: 'Won first prize at the Beyond Green: AI for a Thriving Future Pitch Competition 2025, organized by UNESCO and ETDA.',
    contribution: 'Researched, compared, tuned, and integrated an existing Thai OCR pipeline; developed YOLOv8/OpenCV book tracking with real-time alignment guidance and voice feedback.',
    technologies: ['Accessibility', 'OCR', 'Computer Vision'],
    poster: 'public/assets/sonar-poster.png', posterAlt: 'Sonar Audiobooks project poster', posterUrl: '', githubUrl: '', demoUrl: 'https://sonaraudiobooks.com/', tone: 'teal', order: 1
  },
  {
    title: 'Harmony Vision',
    summary: 'A collaborative augmented-reality guitar-training application with a physical feedback layer.',
    contribution: 'Implemented the Arduino/Unity hardware-interaction workflow for guitar-training feedback and contributed to UI prototyping.',
    technologies: ['AR', 'Unity', 'Arduino'],
    poster: 'public/assets/harmony.webp', posterAlt: 'Harmony Vision AR guitar training project poster', posterUrl: 'https://site.cmkl.ac.th/event/aice-undergraduate-project-showcase-spring-2024', githubUrl: '', demoUrl: '', tone: 'lime', order: 2
  },
  {
    title: 'Obscura',
    summary: 'A full-stack data-anonymization tool for protecting personally identifiable information before files are shared.',
    contribution: 'Created the tool with a teammate to detect personally identifiable information and support masking or hashing before exporting anonymized files.',
    technologies: ['Full Stack', 'Privacy', 'Data'],
    poster: '', posterAlt: '', posterUrl: '', githubUrl: 'https://github.com/meganing/Obscura_ver3', demoUrl: '', tone: 'ink', order: 3
  },
  {
    title: 'Biographical Agents',
    summary: 'A conversational-AI research project focused on building and evaluating a personality-consistent agent.',
    contribution: 'Implemented Qwen2.5-7B LoRA/QLoRA fine-tuning and Gemini-assisted evaluation/DPO workflows; measured improvements across two 10-prompt experiments.',
    technologies: ['LLMs', 'LoRA', 'Evaluation'],
    poster: '', posterAlt: '', posterUrl: '', githubUrl: 'https://github.com/meganing/Conversational-AI-Biographical-Agents', demoUrl: '', tone: 'purple', order: 4
  },
  {
    title: 'Scam Detection Assistant',
    summary: 'An interpretable SMS scam classifier built with BERT.',
    contribution: 'Independently built the classifier with confidence scores and attention visualization for more interpretable predictions.',
    technologies: ['BERT', 'NLP', 'Explainability'],
    poster: '', posterAlt: '', posterUrl: '', githubUrl: 'https://github.com/meganing/Scam-Detection-Assistant-using-BERT', demoUrl: '', tone: 'coral', order: 5
  },
  {
    title: 'Personal Study Guide',
    summary: 'A Canvas-connected AI workflow for creating structured, personalized learning materials.',
    contribution: 'Actively use and develop study, assignment, and solver modes that generate materials around the learner’s current work.',
    technologies: ['AI Workflow', 'Canvas', 'Learning'],
    poster: '', posterAlt: '', posterUrl: '', githubUrl: 'https://github.com/meganing/Personal-Study-Guide', demoUrl: '', tone: 'yellow', order: 6
  }
];
