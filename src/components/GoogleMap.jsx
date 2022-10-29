import React from 'react'

const GoogleMap = () => {
  return (
    <div className='w-full h-full'>
      <div class="w-full h-full">
        <div class="gmap_canvas">
            <iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=puthia&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
           </div>
        </div>
    </div>
  )
}

export default GoogleMap
