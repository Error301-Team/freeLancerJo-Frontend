import React, { Component } from 'react'
import JobPost from "../assets/JobPost.png";

export class JobPosts extends Component {
    render() {
        return (
            <div>
                  

<section class="light">
	<div class="container py-2">
		<div class="h1 text-center " id="pageHeaderTitle">Job Post</div>

		<article class="postcard light ">
			<a class="postcard__img_link" href="#">
				<img class="postcard__img" src={JobPost} alt="Image Title" />
			</a>
			<div class="postcard__text ">
				<h1 class="postcard__title">"this.props.jobName"</h1>
		
				<div class="postcard__bar"></div>
                <h6>Category : "this.props.Category"</h6>

				
            <div class="postcard__preview-txt"><p>Job Description :"this.props.jobDescription"</p></div>
	
          <div class="gridContent">
        	<h6>Skill : "this.props.skills"</h6>
            <h6>Tools : "this.props.Tools"</h6>
			<h6>Qualifications : "this.props.Qualifications"</h6>

			<h6>Salary : "this.props.Salary"</h6>
         
            
			<h6>Location : "this.props.Location"</h6>
			<h6>Phone : "this.props.Phone"</h6>
			<h6>Email : "this.props.Email"</h6>
            
</div>
			</div>
		</article>
        

	</div>
</section>
            </div>
        )
    }
}

export default JobPosts
