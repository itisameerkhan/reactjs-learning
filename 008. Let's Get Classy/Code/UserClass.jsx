import React from "react";
import "./UserClass.scss";

class UserClass extends React.Component {
  constructor(props) {
    console.log("constructor");
    super(props);

    this.state = {
      userInfo: {},
      count: 0,
    };
  }

  async componentDidMount() {
    console.log("componentDiMount");
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUmount");
  }

  render() {
    console.log("render");
    const { name, avatar_url, bio, public_repos, followers, following } =
      this.state.userInfo;

    const { count } = this.state;

    return (
      <div className="user-card">
        <img
          src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          alt=""
        />
        <div className="pfp">
          <img src={avatar_url} alt="" />
        </div>
        <div className="user-data">
          <p>{name}</p>
          <p>{bio}</p>
        </div>
        <div className="user-data-2">
          <div>
            <span className="material-symbols-outlined">list</span>
            {public_repos}
          </div>
          <div>
            <span className="material-symbols-outlined">group</span>
            {followers}
          </div>
          <div>
            <span className="material-symbols-outlined">person_add</span>
            {following}
          </div>
        </div>
        <div className="follow-btn">
          <button className="follow">Follow</button>
        </div>
      </div>
    );
  }
}

export default UserClass;
