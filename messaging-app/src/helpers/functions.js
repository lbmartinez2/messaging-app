import { BASE_URL } from "../helpers/constants";

// export async function handleLogin({email, password}) {

  
//     try {
//       const data = await fetch(`${BASE_URL}/auth/sign_in`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email,
//           password,
//         }),
//       });
//       const authHeaders = {
//         "access-token": data.headers.get("access-token"),
//         client: data.headers.get("client"),
//         uid: data.headers.get("uid"),
//         expiry: data.headers.get("expiry")
//       }

//       localStorage.setItem("headers", JSON.stringify(authHeaders));

//     //   console.log(uid, expiry, client, access_token);

//       const response = await data.json();
//       return {response, authHeaders};

//       //   if (response.errors) {
//       //     throw response.errors.full_messages[0];
//       //   }
//     } catch (err) {
//       console.error(err);
//     }
//   }

  export function getAuthHeaders() {
    const headers = JSON.parse(localStorage.getItem("headers"));
    return headers;
  }

  // export async function getAllUsers() {
  //   const headers = getAuthHeaders();
  //   try {
  //       const data = await fetch(`${BASE_URL}/users`, {
  //           headers: {
  //               "Content-Type": "application/json",
  //               ...headers
  //           },
  //       })
  //       const response = await data.json();
  //       return response;
  //   }
  //   catch (err) {
  //       console.error(err);
  //   }
  // }
