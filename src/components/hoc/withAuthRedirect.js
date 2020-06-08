import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";


export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      return(
        <>{this.props.isAuth ? <Component {...this.props}/> : <Redirect to='/login'/>}</>
      )
    };
  };

  let mapStateToPropsForRedirect = (state) => {
    return{
      isAuth: state.auth.isAuth
    }
  };

  let connectedAuthRedirectComponent = connect(mapStateToPropsForRedirect, {})(RedirectComponent);
  return connectedAuthRedirectComponent;
}

//    =======> HOC example  <=======
//
// export const HighOrderComponent = (Component) => {
//   class HOC extends React.Component {
//     render() {
//       return(
//         <Component/>
//       )
//     }
//   }
//
//   let mapStateToPropsForHOC = (state) => {
//     return{
//       key: state.reducer.value
//     }
//   }
//
//   let connectedHOC = connect(mapStateToPropsForHOC,{})(HOC)
//   return connectedHOC
// }

























