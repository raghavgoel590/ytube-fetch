import React ,{ Component} from 'react';

 //&channelId=UCXgGY0wkgOzynnHvSEVmE3A&part=snippet,id&order=date&maxResults=10
 const API="AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA";
 const chanlid='UCBqFKDipsnzvJdt6UT0lMIg';
 var finalUrl="https://www.googleapis.com/youtube/v3/search?key="+API+"&channelId="+chanlid+"&part=snippet,id&order=date&maxResults=";
class Youtube  extends Component {
componentWillMount(){
  var finalurl=finalUrl+this.state.result;
this.getJson(finalurl);
console.log(finalUrl);
}
getJson(finalurl){
  fetch(finalurl)
      .then((response) => response.json())
      .then((responseJson) => {
        const ytlst=responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
        this.setState({ytlst});
        console.log(ytlst);
})
.catch((error) => console.log("there is problem"));
}
constructor(props){
  super(props);

  this.state = {
    ytlst:[],
    result:10
  };
  this.getJson=this.getJson.bind(this);
  this.clicked=this.clicked.bind(this);
}
clicked(event){
  event.preventDefault();
  let result=this.refs.re.value;
  this.refs.re.value='';
  this.setState({result});
  var finalurl=finalUrl+this.state.result;
  this.getJson(finalurl);
  console.log(finalurl);

}
  render(){

    return(
    <div>
    <form onSubmit={this.clicked}>
    <label><input type="text" ref="re" placeholder="enter the number of vedios you want to see" /></label>
    </form>
      {this.state.ytlst.map((link,i) => {
    return <div key={i} className="ytube"><iframe width="560" height="315" src={link} frameBorder="0" allowFullScreen></iframe></div>
     })}
    </div>
    );
  }
}
export default Youtube;
