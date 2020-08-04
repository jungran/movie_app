import React from 'react'; 
//import PropTypes from "prop-types";



class App extends React.Component{
    
 /*   constructor(props){
        super(props);
        console.log("hello I'm a constructor"); //render 보다 먼저 호출 됨
                              //component가 mount 될 때(=스크린에 표시될 때) constructor를 호출한다.
    }
    state={
        // "state" contains dynamic values of data. 변하는 데이터를 가지고 있음.
        count : 0
    };

   add = () => {
    //매번 state의 상태를 변경할 때 render function 을 호출해서 refresh 해야 함. 
    // 따라서 setState을 써야 함. setState이 호출되면 새로운 state과 함께 자동으로 render function 호출함.
    this.setState(current => ({count: current.count + 1}));
   };
   
   minus = () => {
    this.setState(current => ({count: current.count - 1}));
   };

   componentDidMount(){
       console.log('component rendered');
   }

   componentDidUpdate(){
    console.log('component updated'); //render 다음에 호출됨.
   }

   componentWillUnmount(){
       console.log('Goodbye cruel world');
   } */
    state = {
        isLoading : true
        , movies :[]
    };

    componentDidMount(){
        // component가 mount 되자마자 호출 됨
        setTimeout(()=>{
            this.setState({isLoading:false});
        }, 6000);
    }

    render(){
        //react는 "자동으로" class component의 render method를 실행한다. 
        
        const {isLoading} = this.state;
        
        return <div>
                   {isLoading ? "Loading" : "We are ready" }
                </div>
    }
}

export default App;
