import {Navbar} from "./Navbar";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
  return {
    friends: state.sidebarPage.friends,
    menu_items: state.sidebarPage.menu_items
  }
}

let mapDispatchToProps = () => {
  return {}
}

export const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);