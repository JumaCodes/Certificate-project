import React from 'react'
import AboutImg from "../assets/About-Us.png"
import CardImg1 from "../assets/icons/CardIcons1.png"
import CardImg2 from "../assets/icons/CardIcons2.png"
import CardImg3 from "../assets/icons/CardIcons3.png"
import User1 from "../assets/HomeUser1.png"
import User2 from "../assets/HomeUser2.png"
import User3 from "../assets/HomeUser3.png"
import User4 from "../assets/HomeUser4.png"

const About = () => {
  return (
    <section className='bg-white py-20'>
      <div className="w-full h-96 justify-start items-start gap-20 inline-flex px-20">
        <div className="justify-start items-center gap-6 flex">
          <div className="flex-col justify-start items-start gap-8 inline-flex">
            <div className="text-neutral-900 text-5xl font-bold font-['DM Sans'] leading-10">About Chatter</div>
            <div className="w-100 text-neutral-900 text-lg font-normal font-['DM Sans'] leading-relaxed">Chatter is a multi-functional platform where authors and readers can have access to their own content. It aims to be a traditional bookworm’s heaven and a blog to get access to more text based content. Our vision is to foster an inclusive and vibrant community where diversity is celebrated. We encourage open-mindedness and respect for all individuals, regardless of their backgrounds or beliefs. By promoting dialogue and understanding, we strive </div>
          </div>
        </div>
        <img className="w-96 h-90 rounded-lg" src={AboutImg} alt="About-Us" />
      </div>

      <div className="p-20 px-44">
        <div className="w-full h-44 flex-col justify-start items-center gap-6 inline-flex">
          <div className="text-neutral-900 text-5xl font-bold font-['DM Sans'] leading-10">Why you should join chatter</div>
          <div className="w-full text-neutral-900 text-lg font-normal font-['DM Sans'] leading-relaxed">Our goal is to make writers and readers see our platform as their next heaven for blogging, ensuring ease in interactions, connecting with like-minded peers, have access to favorite content based on interests and able to communicate your great ideas with people</div>
        </div>

        <div className="flex justify-center gap-8">
          <div className="w-80 h-80 px-4 py-3.5 rounded-lg border border-stone-300 flex-col justify-start items-start gap-3 inline-flex">
            <div className="w-20 h-20 relative">
              <img src={CardImg1} className="w-8 h-8 left-[30px] top-[28px] absolute" alt="Icon" />
              <div className="w-20 h-20 left-0 top-0 absolute bg-violet-300 bg-opacity-20 rounded-full" />
            </div>
            <div className="text-neutral-900 text-2xl font-medium font-['DM Sans'] leading-9">Analytics</div>
            <div className="w-64 text-zinc-600 text-lg font-normal font-['DM Sans'] leading-relaxed">Analytics to track the number of views, likes and comment and also analyze the performance of your articles over a period of time</div>
          </div>

          <div className="w-80 h-80 pl-4 pr-8 pt-5 pb-12 rounded-lg border border-stone-300 flex-col justify-start items-center inline-flex">
            <div className="self-stretch flex-col justify-start items-start gap-3 inline-flex">
              <div className="w-20 h-20 relative">
                <img src={CardImg2} className="w-8 h-8 left-[30px] top-[28px] absolute" alt="Icon" />
                <div className="w-20 h-20 left-0 top-0 absolute bg-violet-300 bg-opacity-20 rounded-full" />
              </div>
              <div className="text-neutral-900 text-2xl font-medium font-['DM Sans'] leading-9">Social interactions</div>
              <div className="w-64 text-zinc-600 text-lg font-normal font-['DM Sans'] leading-relaxed">Users on the platform can interact with posts they like, comment and engage in discussions</div>
            </div>
          </div>

          <div className="w-80 h-80 pl-5 pr-8 pt-3.5 pb-20 rounded-lg border border-stone-300 flex-col justify-start items-center inline-flex">
            <div className="self-stretch flex-col justify-start items-start gap-3 inline-flex">
              <div className="w-20 h-20 relative">
                <img src={CardImg3} className="w-8 h-8 left-[30px] top-[28px] absolute" alt="Icon" />
                <div className="w-20 h-20 left-0 top-0 absolute bg-violet-300 bg-opacity-20 rounded-full" />
              </div>
              <div className="text-neutral-900 text-2xl font-medium font-['DM Sans'] leading-9">Content creation</div>
              <div className="w-64 text-zinc-600 text-lg font-normal font-['DM Sans'] leading-relaxed">Write nice and appealing with our in-built markdown, a rich text editor</div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-96 bg-amber-100 bg-opacity-50 px-10 py-16">
        <div className="flex justify-start items-center gap-10">
          <div className="w-76 h-76  bg-zinc-300 rounded-full">
            <img className="w-full h-full object-cover rounded-full" src={User1} alt="Human" />
          </div>

          <div className="flex-col justify-start items-start gap-12 flex max-w-[1120px]">
            <div className="w-full text-neutral-900 text-lg font-normal font-['DM Sans'] leading-relaxed">"Chatter has become an integral part of my online experience. As a user of this incredible blogging platform, I have discovered a vibrant community of individuals who are passionate about sharing their ideas and engaging in thoughtful discussions.”</div>
            <div><span className="text-neutral-900 text-2xl font-medium font-['DM Sans'] leading-9">Adebobola Muhydeen</span><span className="text-black text-3xl font-medium font-['DM Sans'] leading-10">,</span><span className="text-neutral-900 text-3xl font-medium font-['DM Sans'] leading-10"> </span><span className="text-neutral-900 text-lg font-normal font-['DM Sans'] leading-relaxed">Software developer at Apple</span><span className="text-black text-2xl font-medium font-['DM Sans'] leading-9"> </span></div>
            <button className="w-40 h-14 px-4 py-2 bg-indigo-600 rounded-lg justify-center items-center gap-2 inline-flex hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer">
              <span className="text-white text-lg font-bold font-['DM Sans'] leading-relaxed">Join chatter</span>
            </button>
          </div>

        </div>

      </div>

      <section className="px-40 py-20 bg-white">
        <div className="w-full h-96 justify-start items-start gap-28 inline-flex">
          <div className="justify-start items-center gap-11 flex">
            <div className="flex-col justify-start items-start gap-24 inline-flex">
              <div className="w-40 h-40 relative">
                <div className="w-40 h-40 left-0 top-0 absolute bg-zinc-300 rounded-full">
                  <img className="w-40 h-40 left-0 top-0 absolute rounded-full" src={User2} alt="User" />
                </div>
              </div>
              <div className="w-40 h-40 relative">
                <div className="w-40 h-40 left-0 top-0 absolute bg-zinc-300 rounded-full">
                  <img className="w-40 h-40 left-0 top-0 absolute rounded-full" src={User3} alt="User" />
                </div>
              </div>
            </div>
            <div className="w-40 h-40 relative">
              <div className="w-40 h-40 left-0 top-0 absolute bg-zinc-300 rounded-full">
                <img className="w-40 h-40 left-0 top-0 absolute rounded-full" src={User4} alt="User" />
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-8 inline-flex">
            <div className="flex-col justify-start items-start gap-6 flex">
              <div className="w-full text-neutral-900 text-5xl font-bold font-['DM Sans'] leading-10">Write, read and connect with great minds on chatter</div>
              <div className="w-full text-neutral-900 text-lg font-normal font-['DM Sans'] leading-relaxed">Share people your great ideas, and also read write-ups based on your interests. connect with people of same interests and goals  </div>
            </div>
            <div className="w-40 h-14 px-4 py-2 bg-indigo-600 rounded-lg justify-center items-center gap-2 inline-flex hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer">
              <div className="text-white text-lg font-bold font-['DM Sans'] leading-relaxed ">Get started</div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default About