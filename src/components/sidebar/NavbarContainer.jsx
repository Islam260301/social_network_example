import {Navbar} from "./Navbar";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
  return {
    friends: state.sidebarPage.friends,
    menu: state.sidebarPage.menu
  }
}

let mapDispatchToProps = () => {
  return {}
}

export const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);