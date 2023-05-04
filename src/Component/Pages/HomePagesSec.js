import React from 'react'
import { Link } from 'react-router-dom'

const HomePagesSec = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-32 px-6">
      <div className='container max-w-5xl m-auto border bg-white dark:bg-gray-800 rounded-lg border-gray-100 dark:border-gray-700 p-6 sm:px-8'>
        <div className='wrapper m-auto border rounded border-gray-100 dark:border-gray-700 space-x-2 sm:space-x-3 w-full shadow'>
          <div className='img flex space-x-4 items-center'>
            <img className=' object-cover' src='img/music.Png' alt='image'></img>
          </div>
          <div className='py-3 pb-12 sm:py-0 sm:pb-0'>
            <h1 className='text-lg sm:text-xl font-semibold dark:text-gray-50 text-gray-900 pt-4'>Let Me Down Slowly</h1>
            <h4 className='text-xs dark:text-gray-50 text-gray-900 rounded-2xl py-1 font-medium '><i className='fas fa-user pr-1'></i>Artist: Alec Benjamin</h4>
            <h1 className='text-xs sm:text-sm font-semibold dark:text-gray-50 text-gray-900'><i className="fas fa-clock pr-1"></i>Released: 7 may, 2023 </h1>
            <h1 className='text-xs sm:text-sm font-semibold dark:text-gray-50 text-gray-900'><i className="fas fa-clock pr-1"></i>Genre: Pop </h1>
          </div>
          <div>
            <h1 className='text-bold text-xl sm:text-2xl'>Lyrics :</h1>
            <div className='text-xm my-4 mt-2'>
              <h4>This night is cold in the kingdom <br />I can feel you fade away <br /> From the kitchen to the bathroom sink and <br /> Your steps keep me awake</h4>
            </div>
            <div className='text-xm my-4'>
              <h4>Don't cut me down, throw me out, leave me here to waste <br /> I once was a man with dignity and grace <br />Now I'm slippin' through the cracks of your cold embrace <br />So please, please</h4>
            </div>
            <div className='text-xm my-4'>
              <h4>Could you find a way to let me down slowly? <br /> A little sympathy, I hope you can show me <br />If you wanna go then I'll be so lonely <br /> If you're leavin', baby, let me down slowly <br /> Let me down, down, let me down, down, let me down <br /> Let me down, down, let me down, down, let me down <br />If you wanna go then I'll be so lonely <br /> If you're leavin', baby, let me down slowly</h4>
            </div>
            <div className='text-xm my-4'>
              <h4>Cold skin, drag my feet on the tile <br /> As I'm walking down the corridor <br /> And I know we haven't talked in a while <br /> So I'm looking for an open door</h4>
            </div>
            <div className='text-xm my-4'>
              <h4>Don't cut me down, throw me out, leave me here to waste <br /> I once was a man with dignity and grace <br /> Now I'm slippin' through the cracks of your cold embrace <br /> So please, please</h4>
            </div>
            <div className='text-xm my-4'>
              <h4>Could you find a way to let me down slowly? <br /> A little sympathy, I hope you can show me <br /> If you wanna go then I'll be so lonely <br /> If you're leavin', baby, let me down slowly <br /> Let me down, down, let me down, down, let me down <br /> Let me down, down, let me down, down, let me down <br />If you wanna go then I'll be so lonely <br /> If you're leavin', baby, let me down slowly</h4>
            </div>
            <div className='text-xm my-4'>
              <h4>And I can't stop myself from fallin' (down) down <br /> And I can't stop myself from fallin' (down) down <br /> And I can't stop myself from fallin' (down) down <br /> And I can't stop myself from fallin' (down) down</h4>
            </div>
            <div className='text-xm my-4'>
              <h4>Could you find a way to let me down slowly? <br /> A little sympathy, I hope you can show me <br /> If you wanna go then I'll be so lonely <br />If you're leavin', baby, let me down slowly <br />Let me down, down, let me down, down, let me down <br /> Let me down, down, let me down, down, let me down <br /> If you wanna go then I'll be so lonely <br /> If you're leavin', baby, let me down slowly</h4>
            </div>
            <div className='text-xm my-4'>
              <h4>If you wanna go then I'll be so lonely <br />If you're leavin', baby, let me down slowly</h4>
            </div>
            <div className='text-xs'>
              <h4>Source: <Link t0='/' className='underline hover:opacity-90'>LyricFind</Link></h4>
            </div>
            <div className='text-xs my-2'>
              <h4>Songwriters: Alec Shane Benjamin / Michael Ross Pollack / Nolan Joseph Lambroza</h4>
            </div>
            <div className='text-xs mb-4'>
              <h4>Let Me Down Slowly lyrics © Warner Chappell Music, Inc</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePagesSec