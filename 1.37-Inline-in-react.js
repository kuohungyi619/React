// Add Inline Styles in React

// Practice:

// If you have a large set of styles, you can assign a style object to a constant to keep your code organized. Declare your styles constant as a global variable at the top of the file. Initialize styles constant and assign an object with three style properties and their values to it. Give the div a color of purple, a font-size of 40, and a border of 2px solid purple. Then set the style attribute equal to the styles constant.

const styles = {
    color: 'purple',
    fontSize: 40,
    border: "2px solid purple",
  };
  
  class Colorful extends React.Component {
    render() {
      // change code below this line
      return (
        <div style={styles}>Style Me!</div>
      );
      // change code above this line
    }
  };