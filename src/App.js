import React ,{ Component, Fragment } from 'react';
import "./App.css"
import { CSSTransition } from 'react-transition-group';

class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      css_show : true,
    }

    this.handleClick= this.handleClick.bind(this);
  }

  render(){
    return (
      <Fragment>
        <CSSTransition
          in={this.state.css_show}//判斷開關
          timeout={1000}  //動畫執行多久ms
          classNames="fade"
          unmountOnExit //隱藏後移除此範圍
          // onEntering={(el)=>{el.style.color='blue'}} //用鉤子函數改CSS
          appear={true}
        >
          <div>CSSTransition套件</div> 
        </CSSTransition>
        

        <div>
          <span className={this.state.css_show ? 'show' : 'hide'}>原生CSS</span>
        </div>
        
        <button onClick={this.handleClick}>toggle</button>
      </Fragment>
    )
  }

  handleClick(){
    this.setState(()=>{ 
      return({
        css_show : this.state.css_show ? false : true
      });
    })
  }
}

export default App;
