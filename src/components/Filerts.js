import React from 'react'
import Slider  from 'rc-slider';
import 'rc-slider/assets/index.css';
const {createSliderWithTooltip} = Slider;
const Range = createSliderWithTooltip(Slider.Range)
export const Filerts = () => {
    return (
        <div className="mainoverflow">

        <div className="container my-3 d-flex justify-content-between">
            <h3 className="left-section-heading">Filters</h3>
            <button className="left-section-atag"> Clear  All</button>
        </div>
     
        <div className="accordion" id="accordionPanelsStayOpenExample" id="it-is-border-nonoe">
          
    
    
          <div className="accordion-item" id="it-is-border-nonoe">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo" id="it-is-border-nonoe"  >
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo"
              id="single-check-section" 
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
    
    
    
    
    
    
    
    
    
    
    
    
            <div className="accordion-item" id="it-is-border-nonoe">
              <h2 className="accordion-header" id="panelsStayOpen-headingTwo" id="it-is-border-nonoe"  >
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo"
                id="single-check-section" 
                >
                course
                </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingTwo">
                <div className="accordion-body" id="it-is-border-bottom">            
    
                     
                       <input type="text" id="search-input" placeholder="Search Course"/>
                        
                        
                        <div id="overflowTest" className="my-2">
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
            <div className="accordion-item"  id="it-is-border-nonoe">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree"  id="it-is-border-nonoe">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree"
                id="single-check-section"  
                >
                course fees
                </button>
              </h2>
              <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingThree"  id="it-is-border-nonoe">
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
      <div className="mb-3 ">
        <label for="text" className="form-label">Min</label>
        <input type="text" className="form-control  " id="range-text" placeholder="₹ 0"/>
      </div>
      <div className="mb-3 mx-2 " id="dast-id">
        <label for="text" className="form-label"></label>
        <p  className="mt-2">-</p>
      </div>
      <div className="mb-3  ">
        <label for="text" className="form-label">Max</label>
        <input type="text" className="form-control " id="range-text" placeholder="₹ 15,00,000"/>
      </div>
    </div>
    </form>
    
                </div>
              </div>
            </div>
    
            <div className="accordion-item" id="it-is-border-nonoe">
              <h2 className="accordion-header" id="panelsStayOpen-headingFour" id="it-is-border-nonoe">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour"
                id="single-check-section"  
                >
                Affiliated to
                </button>
              </h2>
              <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingFour">
                <div className="accordion-body" id="it-is-border-bottom">            
    
                       
 
     <input type="text" id="search-input" placeholder="Search Affliated To"/>
    
    
                        <div id="overflowTest" className="my-2">
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
            <div className="accordion-item" id="it-is-border-nonoe">
              <h2 className="accordion-header" id="panelsStayOpen-headingFive" id="it-is-border-nonoe">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive"
                id="single-check-section"  
                >
                city / town
                </button>
              </h2>
              <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingFive">
                <div className="accordion-body" id="it-is-border-bottom">            
    
    
                         
                       <input type="text" id="search-input" placeholder="Search City Or Town"/>
                        <div id="overflowTest" className="my-2">
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
            <div className="accordion-item" id="it-is-border-nonoe">
              <h2 className="accordion-header" id="panelsStayOpen-headingFive" id="it-is-border-nonoe">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive"
                id="single-check-section" 
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
          </div>
    )
}
