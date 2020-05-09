import friend1 from '../assets/img/friend1.jpg';
import friend2 from '../assets/img/friend2.jpeg';
import friend3 from '../assets/img/friend3.jpg';
import {profileReducer} from './reducers/profile_reduser';
import {dialogReducer} from './reducers/dialog_reduser';
import {sidebarReducer} from './reducers/sidebarReducer';

export let store = {
  _state: {
    dialogPage: {
      dialogsData: [
        {id: 1, name: "John"},
        {id: 2, name: "Sofia"},
        {id: 3, name: "Peter"},
        {id: 4, name: "Alex"},
        {id: 5, name: "Ben"},
        {id: 6, name: "Hamlet"},
      ],
      messagesData: [
        {id: 1, message: "Hi!"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Amazing, thanks. You?"},
        {id: 4, message: "Me too. Can you today help me?"},
        {id: 5, message: "I think WebStorm more comfortable than VS Code"},
        {id: 6, message: "Yes. (_::_)"},
      ],
      sendMessageText: ""
    },
    profilePage: {
      posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It`s my first post", likesCount: 11},
      ],
      addPostsText: ''
    },
    sidebarPage: {
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
      ]
    }
  },
  _callSubscriber() {
    console.log("state has been changed")
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {
    profileReducer(this._state.profilePage, action);
    dialogReducer(this._state.dialogPage, action);
    sidebarReducer(this._state.sidebarPage, action);

    this._callSubscriber(this._state)
  }
}