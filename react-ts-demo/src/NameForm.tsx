import * as React from 'react';

interface Props {
  value: string;
}

interface State {
  value: string;
  submitted: boolean;
}

class NameForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {value: props.value, submitted: false};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    alert('A name was submitted: ' + this.state.value);
    this.setState({submitted: false});
    event.preventDefault();
  }

  render() {
    if (!this.state.submitted) {
      return (
          <form onSubmit={e => this.handleSubmit(e)}>
            <label>
              Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
      );
    } else {
        return (
          <div>
            Hello {this.state.value}!
          </div>
        );
    }
  }
}

export default NameForm;
