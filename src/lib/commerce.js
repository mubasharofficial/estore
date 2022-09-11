import Commerce from "@chec/commerce.js";
var API_PUBLIC_KEY= process.env.REACT_APP_PUBLIC_KEY;
export const commerce = new Commerce(API_PUBLIC_KEY,true);