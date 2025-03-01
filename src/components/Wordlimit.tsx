export const WordLimit = (limit: number, text: string): string => {
  return text?.length > limit ? `${text.substring(0, limit)}...` : `${text}`;
};
