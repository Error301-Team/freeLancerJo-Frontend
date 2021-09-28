import React, { Component } from 'react'
import JobPost from "../assets/JobPost.png";
class PJobOffers extends Component {
    render() {
        return (
            <div>
                {
                    this.props.job.map(element => {
                        return (
                            <div>


                                <section class="light">
                                    <div class="container py-2">
                                        <div class="h2 text-center " id="pageHeaderTitle">Job Post</div>

                                        <article class="postcard light ">
                                            <a class="postcard__img_link" href="#">
                                                <img class="postcard__img" src={JobPost} alt="Image Title" />
                                            </a>
                                            <div class="postcard__text ">
                                                <h3 class="postcard__title">{element.name}</h3>

                                                <div class="postcard__bar"></div>
                                                <h6><p>{element.category}</p></h6>


                                                <div class="postcard__preview-txt"><p>{element.description}</p></div>

                                                <div class="gridContent">
                                                    <h6>Skills:</h6><p>{element.skills}</p>
                                                    <h6>Tools:</h6><p>{element.tools}</p>
                                                    <h6>Qualifications:</h6><p>{element.qualification}</p>

                                                    <h6>Salary:</h6><p>{`${element.salary} JOD`}</p>


                                                    <h6>Location:</h6><p>{element.location}</p>
                                                    <h6>Phone:</h6><p>{element.phononumber}</p>
                                                    <h6>Email:</h6><p>{element.email}</p>

                                                </div>
                                            </div>
                                        </article>


                                    </div>
                                </section>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default PJobOffers
