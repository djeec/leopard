export const REQUEST_STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  FAILURE: "failure"  
};

export async function delay(ms : number) {
 return new Promise((resolve) => setTimeout(resolve, ms));
} 

