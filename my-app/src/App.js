import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({ query: event.target.value });
  }

  render() {
    const users = [{ name: "Robin" }, { name: "Markus" }];
    return (
      <div>
        <ul>
          {users
            .filter((user) => this.state.query === user.name)
            .map((myuser) => (
              <li>{myuser.name}</li>
            ))}
        </ul>
        <input type="text" onChange={this.onChange} />
      </div>
    );
  }
}
