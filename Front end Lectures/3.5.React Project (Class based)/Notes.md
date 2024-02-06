React project(class based)
class based component
manipulate the state
handling diff event
condition rendering
forms in react

1.npx create-react-app app
2.npm install bootstrap/ npm i bootstrap

installing the bootstrap dependencies:-
npm install bootstrap

1.delete app.css and logo.svg
remove app.js completely

import in index.js
2.import 'bootstrap/dist/css/bootstrap.min.css'
3.import 'bootstrap/js/dist/modal'
advantage:-if you lose cdn

go to app.js write this
import { Component } from "react";

class App extends Component{
render(){
return(

<div>
<div className="container">
<h1 className="text-center">TODO appp in ReactJS</h1>
</div>
</div>
)
}
}
4.create Addtodo.js file this will add the data.
make like a app.js

class Addtodo extends Component {
render() {
return (

<div class="input-group mb-3">
1.approach
<input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
<button type="submit" className="btn btn-primary">Add TODO</button>
</div>
)
}

}

                    2.approach
                    <div className="mb-3">
                        <input type="text" className="form-control" id="exampleInputtext" placeholder="ToDo" onChange={this.myTodoFunction} />
                    </div>

import and export in app.js

MATERIAL :-

npx create-react-app react-todo-app
install this function
download bootstrap

npm i bootstrap
