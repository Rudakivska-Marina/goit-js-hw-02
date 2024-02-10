function checkForSpam(message) {
    const banWord1  = `spam`;
    const banWord2 = `sale`;
    const check1 = message.toLowerCase().includes(banWord1);
    const check2 = message.toLowerCase().includes(banWord2);
    const hasBanWords = check1 || check2;
    console.log(hasBanWords)
    
    return message;
}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true