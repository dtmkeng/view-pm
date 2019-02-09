import React, { Component } from 'react';
import './App.css';
import './bulma.min.css';
import {app,ref} from './config';
class App extends Component {
  constructor(props){
      super(props);
      this.state = {
        page:Boolean,
        title:'PM 2.5',
        data:'30',
        btn: 'PM 10',
        pageClass:'hero is-primary is-fullheight',
        datas:{}
      }
      this.switching = this.switching.bind(this);
  }
  componentDidMount(){
    const {datas} = this.state;
    let keyfire = '';
    console.log('etst');
    this.setState({page:true});
    ref.child(`Sensor`).on('value',res=>{
        res.forEach((data ,key)=>{
            keyfire = data.key;
           console.log(data.key,data.key);
           datas[data.key] = data.val()
        })
        this.setState({datas})
    })
    console.log(datas);
  }
  getdata(status){
    ref.child('Sensor').no('value' , (snapshot)=> {
      console.log(snapshot);
    })
  }
  switching(){
        // console.log('stsads',this.state.page);
        const {datas} = this.state;
        let data,title, btn,pageClass;
        if (this.state.page) {
          //render PM2.5
              title = 'PM 2.5'
              data = datas.MC2p5
              btn = 'PM 10'
              pageClass = 'hero is-primary is-fullheight';
        } else {
          // render PM 10 
              title = 'PM 10'
              btn = 'PM 2.5'
              data = datas.MC10p0
              pageClass = 'hero is-warning is-fullheight';
        }
         this.setState({title: title, 
                         data: data ,
                        page: !this.state.page,
                        btn:btn,
                        pageClass:pageClass
                      })
  }
  render() {
    const {title,data,btn,pageClass} = this.state;
    return (
      <div className="App">
        <section className={pageClass}>
          <div className="hero-body">
            <div className="container">
              <h1 className="titles">
                  {title}
              </h1>
              <h2 className="subtitles">
                 {data}
              </h2>
            </div>
          </div>
          <div className="button is-danger" onClick={this.switching}><b>{btn}</b></div>
        </section>
      </div>
    );
  }
}

export default App;
 