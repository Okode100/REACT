const person = {
    name: 'Gregorio Y. Zara',
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    }
  };
export default function TodoList(){
    retunr (
        <div style={person.theme}>
            <h1>{person.name}'s Todo List</h1>
            <img src ="mosnter image.jpg" alt="wolf image "/>
            <ul>
                <li>This picture was taken in 1989</li>
                <li>Their was a mutation in the plant where the Scientist was working</li>
                <li>This is his final form, the doctor from the dark place </li>
            </ul>
        </div>
    );
};
  

