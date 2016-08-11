import React, {Component} from 'react'
import TodoItem from './TodoItem'

export default class TodoInput extends Component {
  render(){
    return (
      <div className='pure-menu pure-menu-scrollable custom-restricted'>
        <ul className='pure-menu-list'>
          {
            this.props.todos.map((todo, idx)=>{
              return <TodoItem key={todo.id} 
                item={todo} idx={idx + 1}
                actions={this.props.actions}
              />;
            })
          }
        </ul>
      </div>
    );
  }
}