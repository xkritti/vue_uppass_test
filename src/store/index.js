import { createStore } from "vuex";

export default createStore({
  state: {
    list: [
      {
        id: 0,
        type: "email",
        config: {
          name: "E-mail",
        },
      },
      {
        id: 1,
        type: "check_box",
        config: {
          name: "System",
        },
      },
      {
        id: 2,
        type: "input_text",
        config: {
          name: "The permissions you are lokking for..",
        },
      },
      {
        id: 3,
        type: "input_text",
        config: {
          name: "Any other details",
        },
      },
      {
        id: 4,
        type: "date",
        config: {
          name: "Date of Birth",
        },
      },
      {
        id: 5,
        type: "upload_pic",
        config: {
          name: "Picture of issues where you get stuck ( if any)",
        },
      },
      {
        id: 6,
        type: "check_box",
        config: {
          name: "Action",
        },
      },
    ],
    text_test: 'text form state'
  },
  mutations: {},
  actions: {},
  modules: {},
});
