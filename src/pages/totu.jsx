// 1:-Container:- this work for set  content equal space in page

//2:- maxWidth='xl' for using width in ui page

//3:- Box:- for using The Box component packages all the style functions that are exposed in @mui/system .

//4:- Grid:- a network of uniformly spaced horizontal and perpendicular lines

//5:-  @mui/metrail:- for using react component

//6:- please all your content to need to create a sperate file for good learing

//7:-rafce :- for short key to create a react function

//8:-<Stack>:- for using in Stack is like a flex container. The Stack component manages layout of immediate children along the vertical or horizontal axis with optional spacing and/or dividers between each child.

//9:-sx={{px:3,py:2}} spacing={2}

// In the context of Material-UI's (MUI) `sx` prop and the `spacing` prop, here’s what each part means:

// 1. **`sx={{ px: 3, py: 2 }}`**:
// - The `sx` prop is used to apply custom styling using a shorthand syntax for CSS styling in MUI components.
// - **`px: 3`**: This means "padding in the X-axis (left and right) is 3 units."
// - **`py: 2`**: This means "padding in the Y-axis (top and bottom) is 2 units."

// MUI’s default spacing unit is `8px`. So:
// - `px: 3` results in 3 * 8 = `24px` padding on the left and right.
// - `py: 2` results in 2 * 8 = `16px` padding on the top and bottom.

// 2. **`spacing={2}`**:
// - The `spacing` prop, when used within a layout component like `Grid`, defines the amount of space (gap) between items.
// - Setting `spacing={2}` means there is a gap of `2 * 8 = 16px` between grid items.

// In summary:
// - `sx={{ px: 3, py: 2 }}` adds `24px` padding on the left and right, and `16px` padding on the top and bottom.
// - `spacing={2}` applies a `16px` gap between items in a container like `Grid`.

//10:-  md={6} xs={12}:-are typically used with the Grid component to control how much space an element takes up on different screen sizes:

//11:- material-ui:- u need all high level conten for react use this website

//12:- Typography:-Use typography to present your design and content as clearly and efficiently as possible.

//13:- varint :- for using text styling

//14:- textalign:- for using the alignment for text

// 15:- { xs: "center", md: "start" }:- for mobile size and desktop and pc size

//16:-direction="row": This arranges items in a horizontal line (row) from left to right. If set to "column", items would stack vertically instead.

//17:-alignItems="center": This centers items vertically along the row.

//18:- spacing :- for using gap each item in the row

//19:-<Chip label={"Map View"} /> for using dipaly rounded rectangle

//20:-view == "map" ? "filled" : "outlined": This is a conditional (or ternary) expression:

//If view is equal to "map", it sets variant to "filled", giving the component a solid background.
//If view is not equal to "map", it sets variant to "outlined", displaying the component with only an outline around it.

//21:- const [view, setView] = useState("card");
//  ->>view:-view holds the current state value (in this case, a string).
// ->> setView:-setView is a function that you’ll use to change the value of view.
//use State:-useState is a React hook used to define and initialize state in a functional component.

// importent point that:- jo chij aapne suru ki he usko ekdam pura kro chahe style ho ya dusra

//22:- ctrl+space :- for using show option

//23:-onClick:-The onClick handler in React enables you to call a function and performs an action when an element is clicked in your app.

//24:- The justifyContent property aligns items along the container's main axis, which is the horizontal axis in a row layout (flexDirection: 'row') or the vertical axis in a column layout (flexDirection: 'column').

//25:- ViewWeekIcon size={20}

//26:-useMediaQuery:-This React hook listens for matches to a CSS media query. It allows the rendering of components based on whether the query matches or not.

//27:-agar koi bhi website creating krani he tho koi bhi uske related clone uthao or same tech use kro and build it

//28:-Use MUI.com for anything toold like tabs and any but u know proper name

//29:- Please use tech language

//30:- minimize :- collapse maximize:- expand

//31:- " ":- String Format

//32:-Render:- the render() method is a function that defines a React component to be rendered and describes how a user interface should be displayed

// //33:-ternory Operator :-The ternary operator is a simplified conditional operator like if / else.

// Syntax: condition ? <expression if true> : <expression if false>

// Here is an example using if / else:

//jo bhi aap section me work krthe he uski file ek honi chahiye jo app.js me export ho baki ki file seprate fold so currnt file me call ho

//33:- Props Validation:-

//34:-value: A string that represents the currently active tab.

//35:-handleChangeTab: A function that handles changes when the user switches tabs.This ensures that the component receives the correct data types for these props.

//36:-onChange: Calls props.handleChangeTab when the user switches tabs.
//variant="scrollable": Allows the tabs to scroll if there are many.
//scrollButtons="auto": Adds scroll buttons when needed.
//allowScrollButtonsMobile: Enables scroll buttons for mobile devices.

//39:-Component: A reusable piece of UI in React.

//40:-Props: Data passed to a component to customize its behavior or content.

//41:-PropTypes: A library to validate the type of props a component should receive.

//42:-Material-UI (@mui/material): A popular React UI library for creating responsive and modern designs.

//43:-customPanel

//44:-<div>

//45:-What is PropTypes Validation in React?
//PropTypes is a type-checking mechanism built into React that ensures components receive the correct types of props. It helps validate the data passed to a component, making the code more robust and less prone to bugs.

//46:- List Render:-Rendering a list in React involves mapping over an array and returning JSX element
// const items = ['Apple', 'Banana', 'Cherry'];
// return (
//   <ul>
//     {items.map(item => (
//       <li key={item}>{item}</li>
//     ))}
//   </ul>
// );

//47:- Array:-A collection of items stored in a single variable. In JavaScript, arrays can hold elements of any data type.
// const fruits = ['Apple', 'Banana', 'Cherry'];

//48:-Map:-The map() method creates a new array populated with the results of calling a function on every element in the array.
// const numbers = [1, 2, 3];
// const squares = numbers.map(num => num * num); // [1, 4, 9]

//49:-callback Function:-A function passed as an argument to another function and executed later.
// function greet(name, callback) {
//     console.log('Hello ' + name);
//     callback();
//   }

//   greet('Suman', () => console.log('Callback executed!'));

//50:-Key in    List:-In React, keys help identify elements uniquely, improving performance during updates.

// //51:-  const handleChangeTab = (event, newValue) => {   :-Used to manage the state for switching between tabs.
//     setValue(newValue);
// };:--Used to manage the state for switching between tabs.

//52:-sx={{ position: "absolute", top: 10, left: 10,color:Theme.palette.common.white,bgcolor:alpha(Theme.palette.common.black,0.4) }}

//53:-const Theme=useTheme();:--A hook provided by Material-UI to access the theme object.

//55:-style={{ color:Theme.palette}}:-Applying inline styles using the theme object.

//56:-<IconButton>:--A Material-UI component for clickable icons with styles.

//57:-  <FavoriteIcon style={{color: Theme.palette.error.main,}}/>

//58:-CardContent:-Component to structure and organize content within a card.

//59:- <Divider orientation="vertical" sx={{ height: 15 }} />:- adds a vertical line for separation.

//60:-condition in react:-Use conditional rendering to display components or values based on conditions, e.g., if, ternary operator, etc.

//61:- prop drilling:- Passing data (props) through multiple components to reach a specific child.

//62:-prop validation:- Use PropTypes to check the type and validity of props.

//63:- tooltip:- Small info box displayed when hovering over an element (e.g., MUI's <Tooltip>).

//64: null value:- Check for null or undefined to prevent errors, e.g., value && <Component />.

//65:- destructure in react:-Extract specific values from objects or arrays for easier access, e.g., const { name } = props.

//66:-onClick:-Event handler for detecting and responding to click events.

//67:-latitude and longitude:-Coordinates used for mapping or geolocation purposes.

//Custom Components in react:-

//68:- InputLabel:-A label component, often used with input fields.

//69:- RadioGroupComponent:-Groups multiple radio buttons.

//70:-FormControlLabel:-Combines a label with a control (e.g., checkbox or radio).

//71:-Radio:-Single radio button for selection.

//72:-RdioGroup:- Groups a set of radio buttons for a single choice.

//73:- ui me jo comopnent app use krna chahthe he uska bassic name pta hona chaiye

//74:- Slider:-A UI component that allows users to select a value from a range (e.g., Material-UI's <Slider> component).

//75:- State Creation in React:-A way to store and manage dynamic data in React components.

//76:-onChange:-Triggered when the value of an input field (e.g., text box, checkbox) changes.

//77:- TextField:-A component for input fields, often used in Material-UI for capturing user data.

//78:- <TextField
// size="small"
// label="minimum"
// type="number"
// value={[0]}
// onChange={(e) => {
//   setValue((prev) => {
//     return [e.target.value, prev[1]];
//   });
// }}
// ></TextField>

//79:-ToggleButtonGroup:-A group of toggle buttons to switch between states or options.

//80:- DryPrincipalInReact:-Don’t Repeat Yourself: A principle that encourages reusing code through:

//81:-  <Switch  defaultChecked/>

//82:-creation array list in react:-Using state or a simple variable:

//83:-OverflowY:"scroll":-A CSS property to enable vertical scrolling when the content exceeds the container height

//84:-react-router-dom:-A library for routing in React applications.

//85:- Outlet:-Used in react-router-dom for nested routing

//86:-boxShadow: "0px 2px 4x rgba(0 , 0, 0 ,0.1):-Adds a shadow effect to a box:
// 0px: Horizontal shadow.
// 2px: Vertical shadow.
// 4px: Blur radius.
// rgba(0, 0, 0, 0.1): Color and transparency of the shadow.

//87:-useResponsive:-A custom hook or library utility to manage responsive behavior based on screen size.

//89:- Hover:-A CSS pseudo-class to style elements when the mouse pointer hovers over them

//90:-    <Avatar alt={faker.person.fullname} src={faker.image.avatar()}/>

//91:- Autocomplete

//92:- freesolo

//93:-loader

//94:- <Autocomplete fullWidth freeSolo options={options} loading={loading} onInputChange={(event,newValue)=>{
//     setInputText(newValue);
// }}/>

//95:-API call in react

//96:- <TextField
// placeholder="Enter Location"
// {...params}
// variant="standard"
// InputProps={{
//   disableUnderline: true,
//   endAdornment: (
//     <>
//       {loading ? (
//         <CircularProgress color="inherit" size={20} />
//       ) : null}
//       {params.InputProps.endAdornment}
//     </>
//   ),
// }}
// />
// )}
// />

//97:-try and catch in react

//98:- async and await in react

//99:-useDebounce

//100:-setTimeout

//101:-clearTimeout

//102:-useEffect

//103:-clearTimeout
