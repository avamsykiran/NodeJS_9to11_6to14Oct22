
export const simpleInterest = (p,t,r) => (p*t*r/100);

const payableLoanAmount = (p,t,r) => p + simpleInterest(p,t,r);

export default payableLoanAmount;