import friend1 from "../../assets/img/friend1.jpg";
import friend2 from "../../assets/img/friend2.jpeg";
import friend3 from "../../assets/img/friend3.jpg";

let initialState = {
  friends: [
    {id: 1, name: 'Naruto', image: friend1},
    {id: 2, name: 'Luffy', image: friend2},
    {id: 3, name: 'Sophia', image: friend3}
  ],
  menu: [
    {id: 1, name: 'Profile', link: '/profile'},
    {id: 2, name: 'Messages', link: '/dialogs'},
    {id: 3, name: 'News', link: '/news'},
    {id: 4, name: 'Music', link: '/music'},
    {id: 5, name: 'Settings', link: '/settings'},
    {id: 6, name: 'Users', link: '/users'},
  ]
}

export const sidebarReducer = (state = initialState, action) => {

  return state
}