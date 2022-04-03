import React from 'react'
import { useNavigate } from 'react-router-dom'


function Homepage() {
    const navigate = useNavigate()


    const onClickUser = () =>{
        navigate('./faculty/login')
    }

    const onClickUserRegister = () =>{
        navigate('./faculty/registration')
    }
    return ( 
        <div className='homepage-main'>
            <div className="container ">
                <div className='h1'>
                    Faculty Management HomePage
                </div>
                <div className='row'>
                    <div className='col-auto'>
                        <button type="button" className="btn btn-primary" onClick={onClickUser} >Log in</button>
                    </div>
                    <div className='col-auto'>
                        <button type="button" className="btn btn-info" onClick={onClickUserRegister}>Register</button>
                    </div>
                </div>

                <div className='row mt-5'>
                    <div className='h5'>
                        Sample Title
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita sequi quas sapiente maiores corrupti assumenda dolorem eos? Dolore nemo eos, dolorum optio totam, et numquam beatae quis ad asperiores temporibus cupiditate culpa itaque facilis corporis veritatis sequi laboriosam vero adipisci perferendis sit. Impedit, fugiat eos. Fugiat quasi labore a nulla, maxime unde quos molestiae optio nihil rerum quaerat odit error accusantium esse necessitatibus ipsa suscipit eum provident beatae fuga laboriosam temporibus quas! Eveniet rerum quo culpa ad perferendis facilis eius inventore, sed adipisci officia quae eaque fugiat reprehenderit totam, quidem quia autem assumenda? Ex minus, hic facere temporibus id ipsum deleniti beatae animi velit. Dolorem provident quasi velit ullam ipsum impedit voluptatem labore, ut porro, nisi, deserunt pariatur fuga obcaecati vel. Consectetur iure non, ratione sapiente quia fugiat omnis debitis reiciendis nam repellendus ad, perferendis libero, doloribus nobis totam aliquid eum necessitatibus. Molestiae error, ullam provident voluptatem eaque quasi quam ipsum laborum est doloremque molestias vel consectetur quisquam blanditiis consequuntur incidunt voluptatibus exercitationem quis beatae dicta dignissimos totam similique recusandae! Voluptates culpa ipsum aperiam ducimus perferendis facilis impedit reprehenderit, pariatur, itaque libero laboriosam nobis repudiandae earum sunt repellat, iure maxime debitis esse voluptatem minima. Molestiae reprehenderit pariatur deleniti. Labore ipsam ipsum veniam vitae animi dolorum consequatur blanditiis temporibus eligendi. Incidunt voluptas vero commodi saepe, ad fugiat ex sint culpa laboriosam nemo hic quod. Asperiores numquam, ipsam odit accusamus id ut cumque! Beatae, id illum sed laborum quis laboriosam maxime in repellendus, corrupti aperiam veritatis reiciendis expedita impedit neque, magnam quae!
                    </p>
                </div>
            </div>
        </div> 
    
    )
}

export default Homepage