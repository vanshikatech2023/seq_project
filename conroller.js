// //==========================================user.controller.js=================================== 

// // This is a module that exports two functions for handling user-related requests in a Node.js application.

// // The first function is signin, which is an asynchronous function that accepts request, response, and next arguments. When this function is called, it first tries to find a user in the database by their email using User.findOne(). If a user is found, it compares their password with the provided password using bcrypt.compare(). If the passwords match, the function returns a JSON response with a message "Sign in success" and a status of true. Otherwise, it returns a 400 error response with a message "Bad request" and a status of false.

// // The second function is signup, which is also an asynchronous function that accepts request, response, and next arguments. When this function is called, it first validates the request using validationResult(request). If there are validation errors, it returns a 400 error response with a message "Bad request" and an array of error messages. If there are no validation errors, it generates a salt key and encrypts the password using bcrypt.genSalt() and bcrypt.hash(). It then updates the request.body.password property with the encrypted password and creates a new user in the database using User.create(). Finally, it returns a JSON response with the newly created user and a status of true.

// // These two functions likely correspond to different CRUD (Create, Read, Update, Delete) operations on a user entity in the application.
// import User from "../model/user.model.js"
// import { validationResult } from "express-validator";
// import bcrypt from "bcryptjs";
// export const signin = async (request, response, next) => {
//     try {
//         let user = await User.findOne({raw: true,
//             where: {
//                 email: request.body.email
//             }
//         });
//         if (user) {
//             let status = await bcrypt.compare(request.body.password, user.password);
//             if (status)
//                 return response.status(200).json({ message: "Sign in success", status: true });
//             return response.status(400).json({ error: "Bad request", status: false });
//         }
//     }
//     catch (err) {
//         return response.status(500).json({ error: "Internal Server Error", status: false });
//     }
// }

// export const signup = async (request, response, next) => {
//     try {
//         const errors = await validationResult(request);
//         if (!errors.isEmpty())
//             return response.status(400).json({ error: "Bad request", messages: errors.array() });
//         let saltKey = await bcrypt.genSalt(10);
//         let encryptedPassword = await bcrypt.hash(request.body.password, saltKey);
//         request.body.password = encryptedPassword;
//         let user = await User.create(request.body);
//         return response.status(200).json({ user: user, status: true });
//     }
//     catch (err) {
//         return response.status(500).json({ error: "Internal Server Error", status: false });
//     }
// }
// /*
//                     +--------------------+
//                     |                    |
//                     |      Signin        |
//                     |                    |
//                     +--------------------+
//                     |                    |
//                     |  Find user by email|
//                     |                    |
//                     +-----------+--------+
//                                 |
//              +------------------+----------------+
//              |                                  |
//     User found                             User not found
//              |                                  |
// +------------v---------+              +---------v----------+
// |                      |              |                     |
// |     Compare          |              |    Return error      |
// |     password with    |              |    JSON with status  |
// |     hashed password  |              |    code 400 and      |
// |                      |              |    "Bad Request"      |
// +----------+-----------+              +----------+----------+
//            |                                      |
//  Password matches                           No matching user
//            |                                      |
// +----------v-----------+              +----------v----------+
// |                      |              |                     |
// |    Return success    |              |     Return error     |
// |    JSON with status  |              |     JSON with status |
// |    code 200 and      |              |     code 400 and     |
// |    "Sign in success" |              |     "Bad Request"     |
// |                      |              |                     |
// +----------+-----------+              +----------+----------+
//            |                                      |
//            |                                      |
//            |                                      |
//            |                                      |
// +----------v-----------+              +----------v----------+
// |                      |              |                     |
// |        Signup        |              |      Validation      |
// |                      |              |                     |
// +----------+-----------+              +----------+----------+
//            |                                      |
//            |                                      |
//            |                                      |
//            |                                      |
//     Check for errors in                  No validation errors
//      request body fields                          |
//            |                                      |
//            v                                      |
// +----------+-----------+              +----------v----------+
// |                      |              |                     |
// |  Encrypt password    |              |   Create new user in  |
// |  with bcrypt         |              |   database using     |
// |                      |              |   request body fields|
// +----------+-----------+              +----------+----------+
//            |                                      |
//            v                                      |
// +----------+-----------+              +----------v----------+
// |                      |              |                     |
// |Create new user in    |              |  Return success JSON |
// |database using        |              |  with status code    |
// |request body fields   |              |  200 and user data   |
// |                      |              |                     |
// +----------------------+              +---------------------+
//                                            |
//                                            v
//                                  +---------+----------+
//                                  |                    |
//                                  |  Return error JSON |
//                                  |  with status code   |
//                                  |  500 and message    |
//                                  |  "Internal Server   |
//                                  |  Error"             |
//                                  +--------------------+

// */


