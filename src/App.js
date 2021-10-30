 
import './App.css';
import { Allresult } from './components/Allresult';
import { Filerts } from './components/Filerts';
import Group from './img/Group.png'
function App() {
  return (
    <div className="container-fluid">
      {/* total result header */}
        <div className="result-count">
        
        <h2>Total Results 350</h2>
       
    </div>
   {/* total result header */}








   <div className="row ">
     {/* row */}
   <div  className=" col-lg-3  col-sm-12  col-xs-12 htch">
     
    <Filerts/>


     </div>



     <div  className="  col-lg-9 col-sm-12  col-xs-12 htch"> 
     <div className="frist-top">
             <h4>APPLIED FILTERS</h4>
           <div className="filters">
            <div className="applied-filers">
                 
                <h4>Bangalore</h4>
                <img src={Group} alt=""/>
             
            </div>
            <div className="applied-filers">
                 
                <h4>MBA/PGDMA</h4>
                <img src={Group} alt=""/>
             
            </div>
           
           </div>
         </div>
        <Allresult/>

    </div>

{/* row */}
     </div>














    </div>
  );
}

export default App;
