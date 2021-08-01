import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';


class App extends Component {
    constructor(){
        super()
        this.state = {
            robots:[],
            searchfield:''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users=> this.setState({robots:users}))
    }

    onSearchChange = (event) => {
    
        this.setState({searchfield:event.target.value})

    //   const filterRobots = this.state.robots.filter(robot =>{
    //       return robot.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase());
    //   });
      //console.log(filterRobots) 
    }


    render() {
        const {robots, searchfield} = this.state;
        const filterRobots = robots.filter(robot =>{
            return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase());
        });


        if(robots === 0){
           return <h1>Loading...</h1>
        }  
        
        else{
            return (
                <div className='tc'>
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                     <CardList robots={filterRobots} />
                    </Scroll>
                </div>
            );
        } 

     }
}


export default App;