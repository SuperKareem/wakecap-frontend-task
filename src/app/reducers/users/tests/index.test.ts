// import { initialState, usersReducer } from "./index";
// import "jest";

// it("should loading", () => {
//   const state = usersReducer(initialState, { type: "LOAD_USER_DATA" });
//   expect(state).toEqual({
//     ...state,
//     loadingUserData: true,
//   });
// });

// it("should fail", () => {
//   const state = usersReducer(initialState, {
//     type: "LOAD_USER_DATA_FAILED",
//     error: "api error",
//   });
//   expect(state).toEqual({
//     ...state,
//     loadingUserData: false,
//     error: state.error,
//   });
// });

// it("should success", () => {
//   const mockedData = [
//     {
//       id: 1,
//       name: "name 1",
//     },
//     {
//       id: 2,
//       name: "name 2",
//     },
//   ];

//   const state = usersReducer(initialState, {
//     type: "LOAD_USER_DATA_SUCCESS",
//     data: mockedData,
//   });
//   expect(state).toEqual({
//     ...state,
//     loadingUserData: false,
//     users: mockedData,
//   });
// });
