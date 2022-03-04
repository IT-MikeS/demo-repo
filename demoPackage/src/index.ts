// Simeple function to capitalize each word in a provided string!!
export function capitalizeEachWord(sentence: string): string {
  return sentence.replace(/(^\w{1})|(\s+\w{1})/g, letter =>
    letter.toUpperCase(),
  );
}
