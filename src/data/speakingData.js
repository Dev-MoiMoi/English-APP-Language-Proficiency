// ─────────────────────────────────────────────
// SPEAKING MODULE DATA
// ─────────────────────────────────────────────

export const SPEAKING_DATA = {
  A1: {
    levelLabel: 'A1 – Beginner',
    intro: 'Ready to speak with confidence? Explore speaking tasks that help you express your ideas clearly, from basic conversations to advanced critical discussions. Step by step, level by level.',
    tasks: [
      {
        title: 'Task 1: Name and Show',
        prompt: 'Show or imagine 3 objects (e.g., phone, book, bag).',
        bullets: ['What it is', 'Its color', 'If you like it'],
        duration: '1–2 minutes',
      },
      {
        title: 'Task 2: My Favorite Things',
        prompt: 'Talk about your favorite things (1–2 minutes).',
        bullets: ['Your favorite food', 'Your favorite color', 'Your favorite place', 'Your favorite activity'],
        duration: '1–2 minutes',
      },
      {
        title: 'Task 3: My Family Tree',
        prompt: 'Identify 3 members of your family.',
        bullets: ['Say their names and their relationship to you (e.g., "This is my mother, Maria")', 'State one simple thing they like (e.g., "She likes coffee")'],
        duration: '1–2 minutes',
      },
      {
        title: 'Task 4: Daily Weather and Clothes',
        prompt: 'Look outside or imagine a season.',
        bullets: ['Say what the weather is like (e.g., "It is sunny/cold")', 'Say what you are wearing today'],
        duration: '1–2 minutes',
      },
    ],
  },

  A2: {
    levelLabel: 'A2 – Elementary',
    intro: 'Practice talking about people, plans, and places using common vocabulary and simple connecting words.',
    tasks: [
      {
        title: 'Task 1: Describe Your Friend or Family Member',
        prompt: 'Talk about someone important to you.',
        bullets: ['Who is the person?', 'What do they look like?', 'What do they like doing?'],
        duration: '2–3 minutes',
      },
      {
        title: 'Task 2: Talking About Your Weekend Plans',
        prompt: 'Talk about what you will do this weekend (2–3 minutes).',
        bullets: ['Where you will go', 'Who you will be with', 'What activities you will do', 'Why you are excited (or not)'],
        duration: '2–3 minutes',
      },
      {
        title: 'Task 3: Describe Your Home',
        prompt: 'Describe the place where you live.',
        bullets: ['How many rooms?', 'What is in your house?', 'Your favorite part of the house'],
        duration: '2–3 minutes',
      },
      {
        title: 'Task 4: My Favorite Day',
        prompt: 'Talk about your favorite day of the week.',
        bullets: ['What is your favorite day?', 'What do you usually do?', 'Why do you like it?'],
        duration: '2–3 minutes',
      },
    ],
  },

  B1: {
    levelLabel: 'B1 – Intermediate',
    intro: 'Express opinions and describe experiences using a wider range of vocabulary and grammar structures.',
    tasks: [
      {
        title: 'Task 1: Short presentation',
        prompt: 'Topic: “My favorite place”',
        bullets: ['Where is it?', 'Why do you like it?', 'What do you do there?'],
        duration: '3–4 minutes',
      },
      {
        title: 'Task 2: Talk About a Past Activity',
        prompt: 'Describe a past experience.',
        bullets: ['What did you do last weekend?', 'Where did you go?', 'Who were you with?', 'Did you enjoy it? Why/why not?'],
        duration: '3–4 minutes',
      },
      {
        title: 'Task 3: Planning a Trip',
        prompt: 'Talk about a place you want to visit in the future.',
        bullets: ['Explain how you will get there and where you will stay', 'Describe at least two things you plan to see or do'],
        duration: '3–4 minutes',
      },
      {
        title: 'Task 4: My Learning Journey',
        prompt: 'Describe your English learning experience.',
        bullets: ['Describe when you started learning English', 'Talk about what you find easy and what you find difficult', 'Explain why you want to be fluent'],
        duration: '3–4 minutes',
      },
    ],
  },

  B2: {
    levelLabel: 'B2 – Upper-Intermediate',
    intro: 'Discuss complex topics fluently, give advice, and compare ideas with well-structured arguments.',
    tasks: [
      {
        title: 'Task 1: Give advice',
        prompt: 'Scenario: Your friend wants to improve their English. What advice will you give?',
        bullets: ['At least 2 suggestions', 'Reasons for each'],
        duration: '3–5 minutes',
      },
      {
        title: 'Task 2: Compare Two Things',
        prompt: 'Topic: Online class vs Face-to-face class',
        bullets: ['Similarities', 'Differences', 'Which do you prefer? Why?'],
        duration: '3–5 minutes',
      },
      {
        title: 'Task 3: The Impact of Advertising',
        prompt: 'Discuss how advertisements influence people\'s buying habits.',
        bullets: ['Give an example of a time you were persuaded to buy something', 'Share your opinion on whether advertising to children should be banned'],
        duration: '3–5 minutes',
      },
      {
        title: 'Task 4: Environmental Responsibility',
        prompt: 'Describe what you or your community do to help the environment.',
        bullets: ['E.g., recycling, saving water', 'Discuss the challenges of living a "green" lifestyle', 'Suggest one major change the government should make to protect nature'],
        duration: '3–5 minutes',
      },
    ],
  },

  C1: {
    levelLabel: 'C1 – Advanced',
    intro: 'Engage in advanced academic and professional discussions using sophisticated vocabulary and nuanced reasoning.',
    tasks: [
      {
        title: 'Task 1: Compare and Evaluate Ideas',
        prompt: 'Topic: Online learning vs Traditional classroom learning',
        bullets: ['Compare both methods', 'Discuss advantages and disadvantages', 'Decide which is more effective and explain why'],
        duration: '4–6 minutes',
      },
      {
        title: 'Task 2: Problem-Solving Discussion',
        prompt: 'Scenario: Your school wants to reduce student stress.',
        bullets: ['Suggest solutions', 'Explain why they will work', 'Evaluate the best option'],
        duration: '4–6 minutes',
      },
      {
        title: 'Task 3: Ethics in the Modern World',
        prompt: 'Discuss a specific ethical dilemma (e.g., data privacy vs. national security or animal testing for medicine).',
        bullets: ['Analyze the conflicting interests of the parties involved', 'Justify your personal stance using nuanced language'],
        duration: '4–6 minutes',
      },
      {
        title: 'Task 4: Interpreting a Statement',
        prompt: 'Statement: "Success is more about hard work than talent."',
        bullets: ['Explain the meaning of the statement', 'Give real-life examples', 'Say whether you agree or disagree and why'],
        duration: '4–6 minutes',
      },
    ],
  },

  C2: {
    levelLabel: 'C2 – Mastery',
    intro: 'Demonstrate mastery of English with balanced arguments, abstract concepts, and sophisticated rhetorical strategies.',
    tasks: [
      {
        title: 'Task 1: Make a balanced argument',
        prompt: 'Topic: “Should technology replace teachers?”',
        bullets: ['Include both sides', 'Critical evaluation', 'Final opinion'],
        duration: '5–7 minutes',
      },
      {
        title: 'Task 2: Abstract Topic Discussion',
        prompt: 'Topic: “Success means different things to different people.”',
        bullets: ['Explain the idea', 'Give examples', 'Analyze different perspectives', 'Give your own interpretation'],
        duration: '5–7 minutes',
      },
      {
        title: 'Task 3: The Concept of Globalization',
        prompt: 'Critically analyze the socio-economic impacts of globalization on local cultures.',
        bullets: ['Discuss whether the world is becoming too "homogenized"', 'Provide a sophisticated argument regarding the balance between global progress and cultural preservation'],
        duration: '5–7 minutes',
      },
      {
        title: 'Task 4: Philosophical Inquiry: Determinism vs. Free Will',
        prompt: 'Discuss the extent to which human life is shaped by external circumstances versus personal choice.',
        bullets: ['Synthesize perspectives from psychology, sociology, or philosophy', 'Engage in a high-level defense of your worldview using complex rhetorical strategies'],
        duration: '5–7 minutes',
      },
    ],
  },
};
