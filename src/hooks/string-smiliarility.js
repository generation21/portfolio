import stringSimilarity from "string-similarity";

const useStringSimilarity = () => {
    const getBestMatch = (inputString, stringList) => {
        const matches = stringSimilarity.findBestMatch(inputString, stringList);
        return matches.bestMatch.target;
    };

    return getBestMatch;
};

export default useStringSimilarity;
