import React from 'react'
import './service.css'
import {BsFillPatchCheckFill} from 'react-icons/bs';

const Service = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Android Development</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BsFillPatchCheckFill className='service_list-icon'/>
              <p>Lorem ipsum dolor .</p>
            </li>

            <li>
              <BsFillPatchCheckFill className='service_list-icon'/>
              <p>Lorem ipsum dolor .</p>
            </li>

            <li>
              <BsFillPatchCheckFill className='service_list-icon'/>
              <p>Lorem ipsum dolor .</p>
            </li>

            <li>
              <BsFillPatchCheckFill className='service_list-icon'/>
              <p>Lorem ipsum dolor .</p>
            </li>

            <li>
              <BsFillPatchCheckFill className='service_list-icon'/>
              <p>Lorem ipsum dolor .</p>
            </li>

            <li>
              <BsFillPatchCheckFill className='service_list-icon'/>
              <p>Lorem ipsum dolor .</p>
            </li> 
          </ul>
        </article>
        {/* End of android Development */}

        <article className='service'>
          <div className="service__head">
            <h3> UI/ UX</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BsFillPatchCheckFill className='service_list-icon'/>
              <p>Lorem ipsum dolor elit.</p>
            </li>

            <li>
              <BsFillPatchCheckFill className='service_list-icon'/>
              <p>Lorem ipsum dolor elit.</p>
            </li>

            <li>
              <BsFillPatchCheckFill className='service_list-icon'/>
              <p>Lorem ipsum dolor elit.</p>
            </li>

            <li>
              <BsFillPatchCheckFill className='service_list-icon'/>
              <p>Lorem ipsum dolor elit.</p>
            </li>

            <li>
              <BsFillPatchCheckFill className='service_list-icon'/>
              <p>Lorem ipsum dolor elit.</p>
            </li>

            <li>
              <BsFillPatchCheckFill className='service_list-icon'/>
              <p>Lorem ipsum dolor elit.</p>
            </li> 
          </ul>
        </article>

        {/* end of web development*/}

        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BsFillPatchCheckFill className='service_list-icon'/>
              <p>Lorem ipsum dolor elit.</p>
            </li>

            <li>
              <BsFillPatchCheckFill className='service_list-icon'/>
              <p>Lorem ipsum dolor elit.</p>
            </li>

            <li>
              <BsFillPatchCheckFill className='service_list-icon'/>
              <p>Lorem ipsum dolor elit.</p>
            </li>

            <li>
              <BsFillPatchCheckFill className='service_list-icon'/>
              <p>Lorem ipsum dolor elit.</p>
            </li>

            <li>
              <BsFillPatchCheckFill className='service_list-icon'/>
              <p>Lorem ipsum dolor elit.</p>
            </li>

            <li>
              <BsFillPatchCheckFill className='service_list-icon'/>
              <p>Lorem ipsum dolor elit.</p>
            </li> 
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Service