

import { memo } from 'react'

import {waitSync} from  './functions'



 export const InfoMemo = memo(function Info({click}){

    waitSync(1000)
    return(
        <p className='p-4 bg-secondary' onClick={click} >    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, sequi iusto. Earum exercitationem, voluptatibus tempora quasi excepturi voluptatum fuga dicta eius est debitis velit? Iusto alias officiis enim rem assumenda deleniti, magni dolore accusamus eius fuga, voluptate animi exercitationem odit harum natus esse voluptatem. Dolor a provident esse dignissimos optio ut blanditiis facere temporibus. Porro eveniet possimus voluptas earum repudiandae voluptates, voluptatibus itaque sapiente iure error odio aperiam in at quae eaque assumenda illo ducimus eligendi voluptatum. Aspernatur nobis aperiam explicabo assumenda officiis impedit quo facilis. Aliquid consequatur minima voluptate culpa voluptatibus, qui necessitatibus suscipit modi provident explicabo et in!</p>
    )
})

