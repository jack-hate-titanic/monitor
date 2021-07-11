import TinyReact from "./TinyReact";

class Alert extends TinyReact.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "default title",
    };
  }

  onChangeTitle = () => {
    this.setState({
      title: "new title",
    });
  };

  render() {
    return <div onClick={this.onChangeTitle}>{this.state.title}</div>;
  }
}

export default Alert;
