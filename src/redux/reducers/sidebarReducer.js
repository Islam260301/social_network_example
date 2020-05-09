import friend1 from "../../img/friend1.jpg";
import friend2 from "../../img/friend2.jpeg";
import friend3 from "../../img/friend3.jpg";

let initialState = {
  friends: [
    {name: 'Naruto', image: friend1},
    {name: 'Luffy', image: friend2},
    {name: 'Sophia', image: friend3}
  ],
  menu: [
    {name: 'Profile', link: '/profile'},
    {name: 'Messages', link: '/dialogs'},
    {name: 'News', link: '/news'},
    {name: 'Music', link: '/music'},
    {name: 'Settings', link: '/settings'},
    {name: 'Users', link: '/users'},
  ]
}

export const sidebarReducer = (state = initialState, action) => {

  return state
}