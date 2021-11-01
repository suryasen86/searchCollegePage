import React from 'react'
import Group from './../img/Group.png'
import Play from './../img/Vector.png'
import Star from './../img/Vector (3).png'
import Heart from './../img/Vector (1).png'
import CollegeLogo from './../img/Rectangle 21.png'
import Download from './../img/Vector (2).png'
import Location from './../img/Vector (4).png'
import Slider  from 'rc-slider';
import 'rc-slider/assets/index.css';
const {createSliderWithTooltip} = Slider;
const Range = createSliderWithTooltip(Slider.Range)


export const SearchPage = () => {

    const renderFilterSection=()=>{
        return(    <div className="searchPage_Filters_Mainoverflow_Conatiner">

        <div className="container my-3 d-flex justify-content-between">
            <h3 className="searchPage_left-section-heading">Filters</h3>
            <button className="searchPage_left-section-atag"> Clear  All</button>
        </div>
     
        <div className="accordion" id="accordionPanelsStayOpenExample" id="searchPage_it-is-border-nonoe">
          
    
    
          <div className="accordion-item" id="searchPage_it-is-border-nonoe">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo" id="searchPage_it-is-border-nonoe"  >
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo"
              id="searchPage_single-check-section" 
              >
              Institute Type
              </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingTwo">
              <div className="accordion-body" id="it-is-border-bottom" >            
    
    
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                  <label className="form-check-label" for="flexRadioDefault1">
                      College
                  </label>
                  </div>
                  <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                  <label className="form-check-label" for="flexRadioDefault2">
                   School
                  </label>
                  </div>
                      </div>            
                   
    
              </div>
            </div>
          </div>
    
     
            <div className="accordion-item" id="searchPage_it-is-border-nonoe">
              <h2 className="accordion-header" id="panelsStayOpen-headingTwo" id="searchPage_it-is-border-nonoe"  >
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo"
                id="searchPage_single-check-section" 
                >
                course
                </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingTwo">
                <div className="accordion-body" id="it-is-border-bottom">            
    
                     
                       <input type="text" id="searchPage_search-input" placeholder="Search Course"/>
                        
                        
                        <div id="searchPage_overflowTest" className="my-2">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" for="flexRadioDefault1">
                              Diploman in Accounting and Finance
                            </label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" for="flexRadioDefault1">
                              Bchelors of Commerce 
                            </label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" for="flexRadioDefault1">
                              Bchelors of Commerce 
                            </label>
                          </div> <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" for="flexRadioDefault1">
                              Bchelors of Commerce 
                            </label>
                          </div> <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" for="flexRadioDefault1">
                              Bchelors of Commerce 
                            </label>
                          </div> <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" for="flexRadioDefault1">
                              Bchelors of Commerce 
                            </label>
                          </div> <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" for="flexRadioDefault1">
                              Bchelors of Commerce 
                            </label>
                          </div> <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" for="flexRadioDefault1">
                              Bchelors of Commerce 
                            </label>
                          </div> <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" for="flexRadioDefault1">
                              Bchelors of Commerce 
                            </label>
                          </div> <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" for="flexRadioDefault1">
                              Bchelors of Commerce 
                            </label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" for="flexRadioDefault1">
                              Bachelors of Computers
                            </label>
                          </div>
                        </div>            
                     
    
                </div>
              </div>
            </div>
            <div className="accordion-item"  id="searchPage_it-is-border-nonoe">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree"  id="searchPage_it-is-border-nonoe">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree"
                id="searchPage_single-check-section"  
                >
                course fees
                </button>
              </h2>
              <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingThree"  id="searchPage_it-is-border-nonoe">
                <div className="accordion-body" id="it-is-border-bottom">
                  
    
    <form action="#">
       <Range
                      
                      min={1}
                      max={1500000}
                      defaultValue={[1,150000]}
                      tipFormatter={value=>`INR${value}`}
                      titProps={{
                        placement: 'top',
                        visible:true
                      }}
                   


                      
                      />
    <div className="container d-flex justify-content-between">
      <label for="customRange3" className="form-label range-fienld">₹ 0</label>
      <label for="customRange3" className="form-label range-fienld">₹ 15,00,000+ </label>
    
    </div>
    <div className="container d-flex justify-content-between">
      <div className="my-3 ">
        <label for="text" className="form-label">Min</label>
        <input type="text" className="form-control  " id="range-text" placeholder="₹ 0"/>
      </div>
      <div className="my-3 mx-2 " id="dast-id">
        <label for="text" className="form-label"></label>
        <p  className="mt-2">-</p>
      </div>
      <div className="my-3 ">
        <label for="text" className="form-label">Max</label>
        <input type="text" className="form-control " id="range-text" placeholder="₹ 15,00,000"/>
      </div>
    </div>
    </form>
    
                </div>
              </div>
            </div>
    
            <div className="accordion-item" id="searchPage_it-is-border-nonoe">
              <h2 className="accordion-header" id="panelsStayOpen-headingFour" id="searchPage_it-is-border-nonoe">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour"
                id="searchPage_single-check-section"  
                >
                Affiliated to
                </button>
              </h2>
              <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingFour">
                <div className="accordion-body" id="it-is-border-bottom">            
    
                       
 
               <input type="text" id="searchPage_search-input" placeholder="Search Affliated To"/>
    
    
                        <div id="searchPage_overflowTest" className="my-2">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" for="flexRadioDefault1">
                              Bangalore University
                            </label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" for="flexRadioDefault1">
                              Christ University
                            </label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" for="flexRadioDefault1">
                              Mysore University 
                            </label>
                          </div> 
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" for="flexRadioDefault1">
                              Mysore University 
                            </label>
                          </div> <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" for="flexRadioDefault1">
                              Mysore University 
                            </label>
                          </div> <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" for="flexRadioDefault1">
                              Mysore University 
                            </label>
                          </div> <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" for="flexRadioDefault1">
                              Mysore University 
                            </label>
                          </div> <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" for="flexRadioDefault1">
                              Mysore University 
                            </label>
                          </div> <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" for="flexRadioDefault1">
                              Mysore University 
                            </label>
                          </div> <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" for="flexRadioDefault1">
                              Mysore University 
                            </label>
                          </div> <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" for="flexRadioDefault1">
                              Mysore University 
                            </label>
                          </div> <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" for="flexRadioDefault1">
                              Mysore University 
                            </label>
                          </div> <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" for="flexRadioDefault1">
                              Mysore University 
                            </label>
                          </div> <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" for="flexRadioDefault1">
                              Mysore University 
                            </label>
                          </div> <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" for="flexRadioDefault1">
                              Mysore University 
                            </label>
                          </div> 
    
                        </div>            
                     
    
                </div>
              </div>
            </div>
            <div className="accordion-item" id="searchPage_it-is-border-nonoe">
              <h2 className="accordion-header" id="panelsStayOpen-headingFive" id="searchPage_it-is-border-nonoe">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive"
                id="searchPage_single-check-section"  
                >
                city / town
                </button>
              </h2>
              <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingFive">
                <div className="accordion-body" id="it-is-border-bottom">            
    
    
                         
                       <input type="text" id="searchPage_search-input" placeholder="Search City Or Town"/>
                        <div id="searchPage_overflowTest" className="my-2">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" for="flexRadioDefault1">
                              Bangalore , Bengaluru
                            </label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" for="flexRadioDefault1">
                              Chennai
                            </label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" for="flexRadioDefault1">
                              Hyderabad
                            </label>
                          </div> 
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" for="flexRadioDefault1">
                          Hyderabad
                            </label>
                          </div> <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" for="flexRadioDefault1">
                          Hyderabad
                            </label>
                          </div> <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" for="flexRadioDefault1">
                          Hyderabad
                            </label>
                          </div> <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" for="flexRadioDefault1">
                          Hyderabad
                            </label>
                          </div> <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" for="flexRadioDefault1">
                          Hyderabad
                            </label>
                          </div> <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" for="flexRadioDefault1">
                          Hyderabad
                            </label>
                          </div> <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" for="flexRadioDefault1">
                          Hyderabad
                            </label>
                          </div> <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" for="flexRadioDefault1">
                          Hyderabad
                            </label>
                          </div> <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" for="flexRadioDefault1">
                          Hyderabad
                            </label>
                          </div> <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" for="flexRadioDefault1">
                          Hyderabad
                            </label>
                          </div> <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" for="flexRadioDefault1">
                          Hyderabad
                            </label>
                          </div> <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" for="flexRadioDefault1">
                          Hyderabad
                            </label>
                          </div> 
    
                        </div>            
                     
    
                </div>
              </div>
            </div>
            <div className="accordion-item" id="searchPage_it-is-border-nonoe">
              <h2 className="accordion-header" id="panelsStayOpen-headingFive" id="searchPage_it-is-border-nonoe">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive"
                id="searchPage_single-check-section" 
                >
                college type
                </button>
              </h2>
              <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingFive">
                <div className="accordion-body" id="it-is-border-bottom" >
                 
    
                  <div className="form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                      <label className="form-check-label" for="flexRadioDefault1">
                        All
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                      <label className="form-check-label" for="flexRadioDefault1">
                        Government
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                      <label className="form-check-label" for="flexRadioDefault1">
                        Aided
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                      <label className="form-check-label" for="flexRadioDefault2">
                        Private
                      </label> 
                    </div>
    
    
              </div>
              </div>
            </div>
          </div>)
    }

    const renderSingleResult=()=>{
        return(<div  className="searchPage_single-result">
        <div className="searchPage_upper-single">
        <div class="searchPage_Single_top-up">
            <div class="searchPage_Single_upper-left">
              <p>Featured</p>
      </div>

          <div class="searchPage_Single_upper-right">
            <p> 4.0 <img src={Star} alt="star"/></p>
        </div>
          </div>
          
            <div class="searchPage_Single_youtube-div">
             <center>
              <img src={Play} alt="youtubeplay"/>
             </center>
            </div>

            <div className="searchPage_Single_location-upper">
               <h6>Maharishi Dayanand University...</h6>
               <p > <img src={Location} alt="location" /> Delhi Bypass, Rohtak, Haryana</p>
            </div>

        </div>
        <img className="searchPage_Single_upperimg" src={CollegeLogo} alt="clglogo"/>
        <div className="searchPage_Single_lower-single">
            <div className="like-button">
                <img src={Heart} alt="likeButton"/>
            </div>
            <div className="searchPage_Single_detail-section">
                
                  <div className="searchPage_Single_inner-detail">
                      <h6> Average yearly Fee</h6>
                      <p> &#8377; 8k - 72k</p>
                  </div>  

                  <div className="searchPage_Single_vertical-line">

                  </div>
                  <div className="searchPage_Single_inner-detail">
                    <h6> Available  Courses</h6>
                    <p>30 courses</p>
                </div>  
                <div className="searchPage_Single_vertical-line">

                </div>

                <div className="searchPage_Single_inner-detail"> 
                    <h6>Rank</h6>
                    <p> 85</p>
                </div>  
            </div>

            <hr/>
            <div className="searchPage_Single_apply-div">
               
                <button className="searchPage_Single_download-button">
                 <img src={Download} alt="Downloadbutton"/>
                    Brochure
                </button>
                <button className="searchPage_Single_apply-button">
                    Apply
                </button>
            </div>
        </div>
    
    </div>)
    }


    const renderAllResult=()=>{
        return(<div className="searchPage_result">
             
        <div className="searchPage_all-result">
           
             {renderSingleResult()}
             {renderSingleResult()}
             {renderSingleResult()}
             {renderSingleResult()}
             {renderSingleResult()}
             {renderSingleResult()}
             {renderSingleResult()}
             {renderSingleResult()}
             {renderSingleResult()}
   
          
        </div>
          
       
   </div>)
    }

const renderAppliedFilters=()=>{
  return(  <div className="searchPage_Filters">
  <div className="searchPage_Filters_applied-filters">
       
      <h4>Bangalore</h4>
      <img src={Group} alt="CrossImg"/>
   
  </div>
  <div className="searchPage_Filters_applied-filters">
       
      <h4>MBA/PGDMA</h4>
      <img src={Group} alt="CrossImg"/>
   
  </div>
 
 </div>)
}

    return (
        <div className="container-fluid">
        
          <div className="searchPage_Top_result-count">
        
          <h2>Total Results 350</h2>
         
          </div> 
          <div className="row ">
            {/* filerleftsection */}
       
        <div  className=" col-lg-3  col-sm-4  col-xs-12 ">
       
           {renderFilterSection()}
  
  
       </div>
  
  
  
       {/* rightresult section */}
       <div  className="  col-lg-9 col-sm-8  col-xs-12 "> 

       <div className="searchPage_Top_frist-top">
               <h4>APPLIED FILTERS</h4>
               {renderAppliedFilters()}
           
           </div>
          {renderAllResult()}
  
      </div>
  
 
          </div> 

        </div>
    )
}
