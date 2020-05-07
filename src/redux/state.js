import friend1 from '../img/friend1.jpg';
import friend2 from '../img/friend2.jpeg';
import friend3 from '../img/friend3.jpg';

// actionCreators
const ADD_NEW_POST = "ADD_NEW_POST";
const INPUT_CHANGE_HANDLER = "INPUT_CHANGE_HANDLER";
const SEND_MESSAGE = "SEND_MESSAGE";

export let store = {
  _state: {
    dialogPage: {
      dialogsData: [
        {id: 1, name: "John"},
        {id: 2, name: "Sofia"},
        {id: 3, name: "Peter"},
        {id: 4, name: "Alex"},
        {id: 5, name: "Brn"},
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
    navPage: {
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
    switch (action.type) {
      case ADD_NEW_POST:
        let newPost = {
          id: this._state.profilePage.posts[this._state.profilePage.posts.length - 1].id + 1,
          message: this._state.profilePage.addPostsText,
          likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.addPostsText = ""
        this._callSubscriber(this._state)
        break

      case SEND_MESSAGE:
        let newMessage = {
          id: this._state.dialogPage.messagesData[this._state.dialogPage.messagesData.length - 1].id + 1,
          message: this._state.dialogPage.sendMessageText
        }
        this._state.dialogPage.messagesData.push(newMessage)
        this._state.dialogPage.sendMessageText = ""
        this._callSubscriber(this._state)
        break

      case INPUT_CHANGE_HANDLER:
        debugger;
        let name = action.event.target.name
        let page = action.event.target.id
        this._state[page][name] = action.event.target.value
        this._callSubscriber(this._state)
        break

      default:
        break
    }
  }
}

export const sendMessageActionCreator = () => {
  return {type: SEND_MESSAGE}
}

export const inputChangeHandlerActionCreator = (event) => {
  return {type: INPUT_CHANGE_HANDLER, event}
}

export const addPostActionCreator = () => {
  return {type: ADD_NEW_POST}
}