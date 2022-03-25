import { USERS } from "./users";

export const POSTS = [
  {
    image: require("../assets/Posts/burger.jpeg"),
    user: USERS[0].user,
    likes: 8000,
    caption:
      "test for burger123456789ethan and leo love burger beff buger zzzzzzz who is ethan ethan and leo love burger beff buger zzzzzzz who is ethanethan and leo love burger beff buger zzzzzzz who is ethanethan and leo love burger beff buger zzzzzzz who is ethanethan and leo love burger beff buger zzzzzzz who is ethan ",
    profile_picture: USERS[0].image,
    comments: [
      {
        user: "sandy",
        comment: "nice datas!!!",
      },
      {
        user: "liado",
        comment: "terrible datas!!!!",
      },
    ],
  },
  {
    image: require("../assets/Posts/seafood_hotpot.jpeg"),
    user: USERS[1].user,
    likes: 6800,
    caption: "I love hot pot!!!!!!!",
    profile_picture: USERS[1].image,
    comments: [
      {
        user: "allen",
        comment: "i want to eat hot pot!!!",
      },
      {
        user: "liado",
        comment: "i love it!!!!",
      },
    ],
  },
];

export const ICONS = [
  {
    name: "like",
    imagepath: require("../assets/Icons/love.png"),
  },
  {
    name: "comment",
    imagepath: require("../assets/Icons/comment.png"),
  },
  {
    name: "share",
    imagepath: require("../assets/Icons/share.png"),
  },
  {
    name: "save",
    imagepath: require("../assets/Icons/save.png"),
  },
  //bottom icons
  {
    name: "home",
    inactive: require("../assets/Icons/home.png"),
    active: require("../assets/Icons/home.png"),
  },
  {
    name: "search",
    inactive: require("../assets/Icons/search.png"),
    active: require("../assets/Icons/search.png"),
  },
  {
    name: "add",
    inactive: require("../assets/Icons/add.png"),
    active: require("../assets/Icons/search.png"),
  },
  {
    name: "shop",
    inactive: require("../assets/Icons/shop.png"),
    active: require("../assets/Icons/search.png"),
  },
];
