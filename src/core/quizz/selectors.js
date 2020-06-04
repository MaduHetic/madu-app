export const quizz = (state) => state.quizz;
export const questions = (state) => state.quizz.questions;
export const isLoading = (state) => quizz(state).isLoading;
