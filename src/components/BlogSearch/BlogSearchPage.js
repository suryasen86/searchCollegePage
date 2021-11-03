import React,{useEffect ,useState} from 'react'
import './BlogSearchPage.scss'
 
  
export const BlogSearchPage = () => {
    const screenList = {
		sm: "sm",
		lg: "lg",
	};
	const [currentScreen, setCurrentScreen] = useState(screenList.sm);

	const updateDimensions = () => {
		if (window.innerWidth < 768) {
			setCurrentScreen(screenList.sm);
		}
		if (window.innerWidth >= 768) {
			setCurrentScreen(screenList.lg);
		}
	};

	useEffect(() => {
		updateDimensions();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		window.addEventListener("resize", updateDimensions);
		return () => window.removeEventListener("resize", updateDimensions);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

const renderBigBlogForMobile=()=>{
    return(<div className="BLogSearchPage_Small_SingleBlog">
    <div className="BLogSearchPage_Small_SingleBlogUpper">
              <img src='/Images/BlogSearchPage_BigBLogsMobile.svg' alt="" />
    </div>
    <div className="BLogSearchPage_Small_SingleBlogLower">
                      <h3>Featured Blog</h3>      
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum posuere condimen sed nec purus suspendisse. </p>
                      <div className="BLogSearchPage_Small_SingleBlogLowerReadMore">
                          <p> <img src='./Images/BLogSearchPageChat.svg' alt="" /> 512</p>
                           <button> Read more</button>
                          </div>        
    </div>
</div>)
}

    const renderBlogSearchpage=()=>{
        return (
            <div className="BlogSearchPage_All_Blogs">
            <div className="row BlogSerachPage_Single_Section">
                <div className="col-lg-6 BlogSerachPage_SmallBLogs_Container">
                    {renderSingleSmallBlog()}
                    {renderSingleSmallBlog()}
                
                </div>

                <div className="col-lg-6
                BlogSerachPage_BigBLogs_Container">



                    {currentScreen==='sm'? renderBigBlogForMobile():renderSingleBigBlogFOrPC()}

 
                </div>
            </div>
            <div className="row BlogSerachPage_Single_Section">
              

                <div className="col-lg-6
                BlogSerachPage_BigBLogs_Container">
                    {currentScreen==='sm'? renderBigBlogForMobile():renderSingleBigBlogFOrPC()}
                </div>
                <div className="col-lg-6 BlogSerachPage_SmallBLogs_Container">
                    {renderSingleSmallBlog()}
                    {renderSingleSmallBlog()}
                
                </div>
            </div>
</div>
        )
    }


    const renderSingleSmallBlog=()=>{
        return (
            <div className="BLogSearchPage_Small_SingleBlog">
            <div className="BLogSearchPage_Small_SingleBlogUpper">
                      <img src='./Images/BlogSearchPageSmallBlogImg.png' alt="" />
            </div>
            <div className="BLogSearchPage_Small_SingleBlogLower">
                              <h3>Featured Blog</h3>      
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum posuere condimen sed nec purus suspendisse. </p>
                              <div className="BLogSearchPage_Small_SingleBlogLowerReadMore">
                                  <p> <img src='./Images/BLogSearchPageChat.svg'alt="" /> 512</p>
                                   <button> Read more</button>
                                  </div>        
            </div>
  </div>
        )
    }

    const renderSingleBigBlogFOrPC=()=>{
   return(     <div className="BlogSearchPage_Single_BigBlogs">
   <img src='./Images/BLogPageBigBlogForpC.jpg' alt="" />
   <div className='BlogSearchPage_Single_BigBlogsRight'>
                   <h2>Featured Blog </h2>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum posuere condimen sed nec purus suspendisse Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl tempus sollicitudin mauris tempus semper. Pulvinar molestie sapien, dui libero nisi, platea amet pellentesque. Nibh sed facilisi ut at egestas augue sem. Vitae vitae aliquet commodo viverra arcu fringilla. Eu vitae turpis suscipit id augue tempus.</p>    
                   <div className="BLogSearchPage_Small_SingleBlogLowerReadMore">
                   <p> <img src='./Images/BLogSearchPageChat.svg'alt="" /> 512</p>
                    <button> Read more</button>
                   </div>                        
   </div>

</div>  ) 
    }
    return (
        <div>
            <div className="BlogSearchPage_Top_NavigationBar container-fluid">
                    <ul>
                        <li>  All Colleges </li>
                        <li> Featured Colleges </li>
                        <li>  Top Colleges</li>
                        <li>  Nearby Colleges </li>
                        <li> Top Ranked Colleges </li>
                        <li> Engineering Colleges </li>
                    </ul>
            </div>

            <div className="BlogSearchPage_Top_SeatchBar container">
                    <input type="text"  placeholder='Course, Institute, Location ...'/>
                <button><img src="./Images/BlogSearchPageTopBarINput.svg" alt="" /></button>
            </div>

            <div className="BlogSearchPage_Main_BlogResults container">
                <h2>Blogs of the week</h2>
                    {renderBlogSearchpage()}

                <div style={{height:'280px'}}></div>

                <h2>Globally Featured Blogs</h2>  
                {renderBlogSearchpage()}
            </div>
            
        </div>
    )
}
