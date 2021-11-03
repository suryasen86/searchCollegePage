import React from 'react'
import './BlogPage.scss'
export const BlogPage = () => {
    const renderSingleBlog=()=>{
        return(   <div className="BlogPage_Single_Blog">
        <img src="./Images/BlogPageSingleBlogs.png" alt="" />
        <div className="BlogPage_Single_BlogBottm">
        <h2>Featured Blog</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum posuere condimen sed nec purus suspendisse. </p>

        <div className="BlogPage_Single_BlogBottmReadmore">
            <p><img src="./Images/BLogSearchPageChat.svg" alt="" /> 512 </p>

            <button>
            Read more
            </button>
        </div>
        </div>
</div>)
    }
    return (
        <div>
            <div className="BlogPage_Top_NavigationBar container-fluid">
                <ul>
                    <li id="BlogPage_Top_NavigationBarActive">  All Colleges </li>
                    <li> Featured Colleges </li>
                    <li>  Top Colleges</li>
                    <li>  Nearby Colleges </li>
                    <li> Top Ranked Colleges </li>
                    <li> Engineering Colleges </li>
                </ul>
            </div> 

                <div className="hellp " > 
                
                <div className="row">
                    <div className="col-lg-3 col-sm-4  col-xs-12">
                            <div className="BLogPage_FilterConatiner_div">

                                <div className="BLogPage_Filter_Conatiner">
                                        <div className="BlogPage_Filter_Top">
                                                <h2> Filters</h2>
                                                <button> clear all</button>
                                        </div>

                                        <div class="accordion" id="accordionPanelsStayOpenExample">
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                                    <button class="accordion-button" id="BlogPage_Acordian_Button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                                    Institute Type
                                                    </button>
                                                    </h2>
                                                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                                    <div class="accordion-body">
                                                    <div class="form-check">
                                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                                                            <label class="form-check-label"  id="BlogPage_Radio_buttonLaBLE" for="flexRadioDefault1">
                                                            college
                                                            </label>
                                                            </div>
                                                            <div class="form-check">
                                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                                            <label class="form-check-label" id="BlogPage_Radio_buttonLaBLE" for="flexRadioDefault2">
                                                            school
                                                            </label>
                                                            </div>
                                                    </div>
                                                    </div>
                                                </div >
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                                                    <button class="accordion-button  " id="BlogPage_Acordian_Button"  type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                                    category
                                                    </button>
                                                    </h2>
                                                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingTwo">
                                                    <div class="accordion-body">
                                                    <div className="BlogPgae_Filter_InputBare">
                                                           <button>
                                                           <img src="./Images/BlogPageFilterInput.svg" alt="" />
                                                           </button>
                                                            <input type="text" placeholder="search course" />
                                                        </div>
                                                    <div className="BlogPage_Filter_OverFlow">

                                                   
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                        <label class="form-check-label" for="flexCheckDefault">
                                                        Diploman in Accounting and Finance
                                                        </label>
                                                        </div>
                                                        <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                        <label class="form-check-label" for="flexCheckChecked">
                                                        Bchelors of Commerce 
                                                        </label>
                                                        </div>
                                                        <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                        <label class="form-check-label" for="flexCheckChecked">
                                                        Bachelors of Computers
                                                        </label>
                                                        </div>
                                                        <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                        <label class="form-check-label" for="flexCheckChecked">
                                                        Bchelors of Commerce 
                                                        </label>
                                                        </div>
                                                        <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                        <label class="form-check-label" for="flexCheckChecked">
                                                        Bchelors of Commerce 
                                                        </label>
                                                        </div>
                                                        <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                        <label class="form-check-label" for="flexCheckChecked">
                                                        Bchelors of Commerce 
                                                        </label>
                                                        </div>
                                                        <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                        <label class="form-check-label" for="flexCheckChecked">
                                                        Bachelors of Computers
                                                        </label>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    </div>
                                                </div>
                                             
                                                </div>
                                </div>
                            </div>
                    </div>
                    <div className="col-lg-9 col-sm-8  col-xs-12">
                            <div className="BLogPage_Main_Conatiner">

                                <div className='BlogPage_Applied_Fliter'>
                                        <div className="BlogPage_Applied_FliterLeft">
                                               <h2>Applied Filters</h2> 
                                               <div className="BlogPageAplied_Filter_phone">
                                               <div className='BlogPage_Applied_FliterLeftIneer'> <h3> Bangalore</h3> 
                                                <img src="./Images/BlogPageAppliedFilterCross.svg" alt="" />
                                                </div>  
                                                <div className='BlogPage_Applied_FliterLeftIneer'> <h3> Private</h3> 
                                                <img src="./Images/BlogPageAppliedFilterCross.svg" alt="" />
                                                </div>
                                                
                                                  </div>  
                                        </div>

                                        <div className="BlogPage_Applied_FliterRight">

                                        </div>


                                </div>

                                        <div   className="BlogPage_All_Blogs">
                                             
                                                 {renderSingleBlog()}
                                                 {renderSingleBlog()}
                                                 {renderSingleBlog()}
                                                 {renderSingleBlog()}
                                                 {renderSingleBlog()}
                                                 {renderSingleBlog()}
                                                 {renderSingleBlog()}
                                                 {renderSingleBlog()}
                                                 {renderSingleBlog()}
                                                    
                                         </div>   

                            </div>
                        </div>

                </div>
                 </div>
           

        </div>
    )
}
