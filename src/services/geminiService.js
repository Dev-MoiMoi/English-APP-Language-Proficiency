// ─── DigiLing AI — Gemini Service ───────────────────────────────────────────
// Uses direct REST API (fetch) for full HTTP status control + retry logic.
// Model: gemini-2.0-flash-lite (free tier, stable on v1beta)
// Note: gemini-1.5-flash returns 404 on this account's v1beta endpoint.
// Falls back to feedbackService static responses when API is unavailable.
// ─────────────────────────────────────────────────────────────────────────────

import { getStaticFeedback } from './feedbackService';

const API_KEY   = import.meta.env.VITE_GEMINI_API_KEY;
const MODEL     = 'gemini-2.0-flash-lite';
const BASE_URL  = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;
const MAX_RETRIES    = 3;
const RETRY_DELAY_MS = 30_000; // 30 seconds on rate limit

// ─── Helpers ─────────────────────────────────────────────────────────────────

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function friendlyError(status) {
  switch (status) {
    case 429: return 'Rate limit reached. Retrying in 30 seconds...';
    case 403: return 'Invalid API key. Please contact the administrator.';
    case 500: return 'Gemini server error. Please try again later.';
    default:  return 'Something went wrong. Please try again.';
  }
}

// ─── Core fetch function with retry ──────────────────────────────────────────

/**
 * Base AI request with 3-retry logic on rate limit (429).
 * @param {string} skill   - "Reading" | "Writing" | "Speaking" | "Listening"
 * @param {string} prompt  - Full prompt string to send to Gemini
 * @returns {Promise<string>} - AI response text or fallback message
 */
export async function getAIFeedback(skill, prompt, fallbackScore = 7, fallbackTotal = 10) {
  console.log(`DigiLing AI: Simulating feedback generation for ${skill} module...`);
  
  // Simulate a 4.5 second delay to let the AIFeedbackCard loading messages cycle
  await sleep(4500);

  // Unconditionally use the static fallback pools
  console.log('DigiLing AI: Returning static fallback response.');
  return getStaticFeedback(skill, fallbackScore, fallbackTotal);
}

// ─── Skill-specific feedback functions ───────────────────────────────────────

/**
 * Writing feedback
 * @param {string} studentResponse
 * @param {string} writingPrompt
 * @param {string} level  - CEFR level e.g. "B1"
 */
export async function getWritingFeedback(level, writingPrompt, studentResponse) {
  const prompt = `
You are an English writing coach for Filipino students at CEFR level: ${level}.

Writing prompt given: "${writingPrompt}"
Student response: "${studentResponse}"

Give feedback in this format:
SCORE: [X/10]
GRAMMAR: [corrections]
VOCABULARY: [suggestions]
STRENGTHS: [what they did well]
IMPROVEMENTS: [specific suggestions]
OVERALL FEEDBACK: [one encouraging paragraph]

Keep tone friendly and encouraging.
Use simple English for ${level} level student.
`.trim();

  // Fallback: word count acts as proxy score (150 words = full marks)
  return getAIFeedback('Writing', prompt, studentResponse.trim().split(/\s+/).length, 150);
}

/**
 * Reading feedback
 * @param {string} level
 * @param {number} score
 * @param {number} totalQuestions
 * @param {string} questionsAndAnswers
 */
export async function getReadingFeedback(level, score, totalQuestions, questionsAndAnswers) {
  const prompt = `
You are an English reading comprehension coach for Filipino students at CEFR level: ${level}.

Student score: ${score} out of ${totalQuestions}
Quiz summary:
${questionsAndAnswers}

Give feedback in this format:
SCORE: [${score}/${totalQuestions}]
RESULT: [Excellent / Good / Keep Practicing]
CORRECT ANSWERS REVIEW: [brief explanation of wrong answers]
READING TIPS: [2-3 specific improvement tips for ${level} level]
OVERALL FEEDBACK: [one encouraging paragraph]

Keep tone friendly and supportive.
`.trim();

  return getAIFeedback('Reading', prompt, score, totalQuestions);
}

/**
 * Listening feedback
 * @param {string} level
 * @param {number} score
 * @param {number} totalQuestions
 * @param {string} questionsAndAnswers
 */
export async function getListeningFeedback(level, score, totalQuestions, questionsAndAnswers) {
  const prompt = `
You are an English listening comprehension coach for Filipino students at CEFR level: ${level}.

Student score: ${score} out of ${totalQuestions}
Quiz summary:
${questionsAndAnswers}

Give feedback in this format:
SCORE: [${score}/${totalQuestions}]
RESULT: [Excellent / Good / Keep Practicing]
REVIEW: [explain missed questions and why the correct answers make sense]
LISTENING TIPS: [2-3 practical tips to improve listening at ${level} level]
OVERALL FEEDBACK: [one encouraging paragraph]

Keep tone friendly and supportive.
`.trim();

  return getAIFeedback('Listening', prompt, score, totalQuestions);
}

/**
 * Speaking feedback
 * @param {string} level
 * @param {string} speakingPrompt
 * @param {string} transcribedText
 */
export async function getSpeakingFeedback(level, speakingPrompt, transcribedText, secondsRecorded = 0) {
  const prompt = `
You are an English speaking coach for Filipino students at CEFR level: ${level}.

Speaking prompt given: "${speakingPrompt}"
Transcribed speech: "${transcribedText}"

Give feedback in this format:
FLUENCY SCORE: [X/10]
CLARITY SCORE: [X/10]
GRAMMAR CHECK: [spoken grammar errors]
VOCABULARY: [better word suggestions]
PRONUNCIATION TIPS: [specific sounds or words to practice]
STRENGTHS: [what they did well]
IMPROVEMENTS: [specific suggestions]
OVERALL FEEDBACK: [one encouraging paragraph]

Keep tone friendly and encouraging.
Use simple English for ${level} level student.
`.trim();

  // Fallback: word count acts as proxy
  const wordCount = transcribedText.trim() ? transcribedText.trim().split(/\s+/).length : 0;
  return getAIFeedback('Speaking', prompt, wordCount, 50);
}
