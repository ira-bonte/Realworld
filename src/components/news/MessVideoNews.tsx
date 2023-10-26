import React, { useEffect } from 'react'
import messiVideos from '../../assets/video/sport/Top 10 Goals of Lionel Messi _ Best Goals of Messi.mp4'
//start
const MessVideoNews = () => {
    useEffect(() => {
        document.title= "Top 10 Goals of Lionel Messi _ Best Goals of Messi"
    })
  return (
    <section className=' pt-20 px-2 w-[746px] py-2'>
      <div>
        {/* header */}
        <div>
          <h2 className=' text-amber-700 text-4xl font-bold font-serif '>
              Top 10 Goals of Lionel Messi  Best Goals 🫢🫢 Videos
          </h2>
          <p className=' text-lg font-medium '>
            Lionel Messi has been in Inter Miami CF for only a few months, but he has already made a significant impact on the team. He has scored **11 goals** in 14 matches across all competitions ⁴. Here are some of his best goals in Inter Miami CF: <br />
          </p>
        </div>
        <div>
            <video src={messiVideos} controls  className=' h-[420px] w-[746px] rounded-md '></video>
            <div>
              <p>
               
               1. **Messi vs Cruz Azul**: Messi scored his first goal for Inter Miami in the Leagues Cup quarterfinals against Cruz Azul. He received a pass from Gonzalo Higuaín and dribbled past two defenders before slotting the ball into the bottom corner of the net . <br />
               2. **Messi vs LAFC**: In his second MLS game, Messi scored two goals and provided two assists to help Inter Miami beat LAFC 4-2. His first goal was a stunning free-kick that curled into the top corner of the net . <br />
               3. **Messi vs Orlando City**: Messi scored his first MLS goal against Orlando City in August 2023. He received a perfectly weighted pass from Robert Taylor and finished with ease to cap off a great team goal for Inter Miami . <br />
               4. **Messi vs Charlotte FC**: In October 2023, Messi scored a stunning goal against Charlotte FC that was unfortunately ruled out for offside ¹. <br />
               5. **Messi vs FC Cincinnati**: In the Leagues Cup semifinals, Messi scored two goals to help Inter Miami come from behind and beat FC Cincinnati 3-2 . <br />

              </p>

            <div>

            </div>
            
            </div>
        </div>
      </div>
    </section>
  )
}

export default MessVideoNews
