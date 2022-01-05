// Use && for a More Concise Conditional

// Practice:

// Solve the previous example again, so the h1 only renders if display is true, but use the && logical operator instead of an if/else statement.

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        display: true
      }
   this.toggleDisplay = this.toggleDisplay.bind(this);
    }
    toggleDisplay() {
      this.setState(state => ({
        display: !state.display
      }));
    }
    render() {
      // change code below this line
      return (
         <div>
           <button onClick={this.toggleDisplay}>Toggle Display</button>
           {this.state.display && <h1>Displayed!</h1>}
         </div>
      );
    }
  };