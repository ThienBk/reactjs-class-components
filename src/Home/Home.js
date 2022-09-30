import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from "../assets/images/avatar.png";
import { connect } from "react-redux";

class Home extends React.Component {
  componentDidMount() {
    // setTimeout(() => {
    //   this.props.history.push('/todo')
    // }, 3000)
  }
  handleDeleteUsers = (user) =>{

    console.log(">>>check user delete: ", user)
    this.props.deleteUserRedux(user)
  }
  handleCreateUser = () =>{
    this.props.addUserRedux()
  }
  render() {
    console.log('>>> check props redux: ', this.props.dataRedux)
    let listUsers = this.props.dataRedux;

    return (
      <>
        <div>
        <h2>Trang Chủ Điều Hướng Các Sản Phẩm Làm Bằng ReactJS</h2>
        <p>Make By: Thiện</p>
          <img className="mb-5" src={logo} style={{ width: "200px" }} />
        </div>
        <div>
          {listUsers && listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return(
                <div key={item.id}>
                  {index + 1} - {item.name} 
                  	&nbsp; <span
                    onClick={() => this.handleDeleteUsers(item)}
                  >x</span>
                  	&nbsp;
                </div>
              )
            })
          }
        </div>

        <button type="button"
          onClick={() => this.handleCreateUser()}
        >Add New</button>
      </>
    );
  }
}
// export default withRouter(Home);

const mapStateToProps = (state) => {
  return {
    dataRedux: state.users,
  };
};

const mapDispatchToProps = (dispatch) =>{

  return {
    deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete}),
    addUserRedux: () => dispatch( {type : 'CREATE_USER'}),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
