import TinyReact from "./TinyReact";

class Alert extends TinyReact.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "default title",
    };
  }

  render() {
    return <div>{this.props.message}</div>;
  }
}

export default Alert;
