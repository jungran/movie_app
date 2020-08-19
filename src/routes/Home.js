import React from 'react'; 
//import PropTypes from "prop-types";
import axios from 'axios';
import Movie from "../components/Movie";
import "./home.css";


class Home extends React.Component{
    
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
        isLoadigng : false
        , movies :[]
    };

    getMovies= async() => { // axios가 끝나기까지 기다려야 해서(await) 비동기로 걸고(async)
        //javascript 에게 getMovies 가 시간이 조금 걸리기 때문에 기다려야 한다고 표시하는 것.
        const {data: 
            {data:{ movies}}} 
            = await axios.get(
                'https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
        //console.log(movies);
        this.setState({movies, isLoading:false});
    };

    componentDidMount(){
        // component가 mount 되자마자 호출 됨
        this.getMovies();        
    }

    render(){
        //react는 "자동으로" class component의 render method를 실행한다. 
        
        const {isLoading, movies} = this.state;
        
        return <section className="container">
                   {isLoading 
                   ? <div>
                       <span className='loader_text'>
                           Loading...
                       </span>
                   </div>
                   : (
                    <div className="movies">
                    {movies.map(movie => (
                       <Movie 
                            key={movie.id} 
                            id={movie.id}
                            year={movie.year} 
                            title={movie.title} 
                            summary={movie.summary} 
                            poster={movie.medium_cover_image}
                            genres={movie.genres}
                         />
                    ))}
                    </div>
                   )}
                </section>; 
              };
}

export default Home;
