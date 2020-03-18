import React from 'react';
import {Component} from 'react';
// import  {Link}  from 'react-router-dom';
import Single  from './SingleContent';
// import { useHistory } from 'react-router-dom';
// import Detail  from './DetailNews';
import './App.css';

class Content extends Component {

    constructor(props) {
      super(props);
      this.state = {
        news: [{
          id: 1,
          platform: 'detik',
          isi: "Menangkal virus COVID 19"

        },
        {
          id: 2,
          platform: 'facebook',
          isi: "Perlukah menggunakan masker ?"
        },
        {
          id: 3,
          platform: 'google',
          isi: 'WHO menetapkan status pandemi'
        }
      ]
      };

      
    }

    
  
    // componentDidMount() {
    //     fetch("https://bareksa.herokuapp.com/news/list")
    //       .then(res => res.json())
    //       .then(
    //         (result) => {
    //           this.setState({
    //             isLoaded: true,
    //             items: result.data
    //           });
    //         },
    //         // Note: it's important to handle errors here
    //         // instead of a catch() block so that we don't swallow
    //         // exceptions from actual bugs in components.
    //         (error) => {
    //           this.setState({
    //             isLoaded: true,
    //             selectId: null,
    //             error
    //           });
    //         }
    //       )
    //   }
      handleClick(id){
        // let history = useHistory()
        // history.push(`/news/${id}`)
        console.log(id)
      } 

      render() {
        // const { error, isLoaded, news } = this.state;
        // if (!error) {
        //   return <div>Error: </div>;
        // } else if (!isLoaded) {
        //   return <div>Loading...</div>;
        // } else {
          return (
            <div className="card">
              {this.state.news.map(n => {
                return(

                    <Single key={n.id}
                    platform={n.platform}
                    isi={n.isi}
                    id={n.id}
                    goDetail={this.handleClick}
                  />

                )
              })}
            </div>
          );
        /*}*/
      }
}
export default Content
