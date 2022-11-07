const { useState } = React;

const GroceryListItem = (props) => {
  const [isDone, setIsDone] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const style = {
    textDecoration: isDone ? 'line-through' : 'none',
    fontWeight: isShown ? 'bold' : 'normal'
  };
  return (
    <li style={style} onClick={() => setIsDone(!isDone)} onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
      {props.item}
    </li>
  );
};

const GroceryList = (props) => (
  <ul>
    {props.groceryItems.map((item) => (
      <GroceryListItem item={item} />
    ))}
  </ul>
);

const App = () => (
  <div>
    <h1>Grocery List</h1>
    <GroceryList groceryItems={['lemons', 'sugar', 'ice']}/>
  </div>
);


ReactDOM.render(<App />, document.getElementById('app'));

