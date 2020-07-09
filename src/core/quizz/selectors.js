export const quizz = (state) => state.quizz;
export const themes = (state) => state.quizz.themes;
export const questions = (state) => state.quizz.questions;
export const quizzResponse = (state) => state.quizz.quizzResponse;
export const isLoading = (state) => quizz(state).isLoading;
