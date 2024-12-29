/**
 * Function for format time from seconds
 */
export const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
};

/**
 * Function to generate empty 2d array
 */
export default function generateGrid(count) {
  return Array(count)
    .fill()
    .map(() => Array(count).fill(""));
}
