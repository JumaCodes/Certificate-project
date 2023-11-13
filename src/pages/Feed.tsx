import React, { useState, useEffect } from 'react'
import DashboardLayout from '../layouts/DashBoardLayout'
import Pencil from "../assets/icons/pencil.png"
import TimeIcon from "../assets/icons/TimeIcon.png"
import Comments from "../assets/icons/CommentIcon.png"
import Likes from "../assets/icons/LikeIcon.png"
import Views from "../assets/icons/ViewsIcon.png"
import UserProfile from "../assets/BlackAfin.jpg"
import UserProfile2 from "../assets/userProfile2.png"
import UserProfile3 from "../assets/userProfile3.png"
import FirstPost from "../assets/FirstPost.png"
import SecondPost from "../assets/SecondPost.png"
import ThirdPost from "../assets/ThirdPost.png"
import { Post } from '../components';
import { Link } from 'react-router-dom'
import ReUseModal from '../components/ReUseableModal'
import Add from "../assets/icons/AppMedia.png"


const Feed = () => {
  const [info, setInfo] = useState({
    title: "",
    description: ""
  });

  const [empty, setEmpty] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const infoHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInfo((prevState) => ({ ...prevState, [name]: value }));
  };


  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault()
  }

  const activities = ["For you", "Featured", "Recent"];
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setActive(activities[0])
  }, [])

  return (
    <DashboardLayout>
      <ReUseModal open={open} setOpen={setOpen}>
        <form onSubmit={handleSubmit} className="w-full h-full relative rounded-lg border border-stone-300 p-10 px-20">
          <div className="w-full justify-end items-center gap-96 inline-flex p-2">
            <button type='submit' onClick={() => setOpen(false)} className={`w-36 h-14 px-4 py-2  ${!info.title || !info.description ? "cursor-not-allowed bg-indigo-600 bg-opacity-50" : "cursor-pointer bg-indigo-600 bg-opacity-90 hover:bg-indigo-700"} cursor-pointer rounded-lg justify-center items-center gap-2 flex shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`} disabled={!info.title || !info.description}>
              <span className="text-white text-base font-bold font-['DM Sans'] leading-normal">Publish</span>
            </button>
          </div>
          <div className="justify-start items-center gap-9 flex">

            <div className="w-14 h-14 relative">
              <label htmlFor='my-file' className="file__select">
                <div className="w-14 h-14 group flex justify-center items-center bg-white hover:bg-indigo-600 cursor-pointer rounded-full border border-stone-300">
                  {/* <img src={Add} className="w-9 h-10 left-[11.05px] top-[10.54px] absolute group-hover:text-white" alt="Add Media" /> */}
                  <div className="w-9 h-10 flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="40" viewBox="0 0 38 40" fill="none" className="group-hover:stroke-[#ffffff]">
                      <path d="M30.0525 21.6214H20.5788V31.3511H17.4209V21.6214H7.94727V18.3782H17.4209V8.64844H20.5788V18.3782H30.0525V21.6214Z" fill="#626262" className="group-hover:fill-[#ffffff]" />
                    </svg>
                  </div>
                </div>
                <input id="my-file" type="file"
                  accept="image/*"
                  onChange={handleImageUpload} className='file__selectInput hidden' style={{ width: '80px' }} />
              </label>
            </div>


            <div className="flex-col justify-start items-start gap-3 inline-flex w-full">
              <input value={info.title} name="title" onChange={infoHandler} className={`${!info.title ? "text-stone-300 text-5xl" : "text-black text-4xl"} font-bold font-['DM Sans'] w-full leading-10 outline-none focus:outline-none`} placeholder='Title' />
              <textarea value={info.description} name="description" onChange={infoHandler} className={`${!info.description ? "text-stone-300 text-5xl" : "text-black text-3xl"} w-full font-medium font-['DM Sans'] leading-10 outline-none focus:outline-none`} placeholder="Write a post............." />
            </div>

          </div>

          {selectedImage && (
            <div className="w-[600px] h-[350px] mt-4">
              <img src={selectedImage} className="w-full h-full object-cover" alt="Selected" />
            </div>
          )}
        </form>
      </ReUseModal>


      <div className="w-full  border-r border-l border-t border-stone-300 flex flex-col justify-center px-20 pb-80">

        <div className="justify-between items-center gap-40 inline-flex py-8">
          <div className="flex-col justify-between items-start gap-3 inline-flex">
            <h1 className="text-neutral-900 text-3xl font-medium font-['DM Sans'] leading-10">FEED</h1>
            <p className="text-zinc-600 text-lg font-normal font-['DM Sans'] leading-relaxed">Explore different content you’d love </p>
          </div>
          <button onClick={() => setOpen(true)} className="w-44 p-4 bg-indigo-600 rounded-lg justify-center items-center gap-2 flex hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer">
            <span className="w-6 h-6 relative">
              <img src={Pencil} className="w-5 h-5 left-[2.66px] top-[1.95px] absolute" alt="Post" />
            </span>
            <span className="text-white text-base font-bold font-['DM Sans'] leading-normal">Post a content</span>
          </button>
        </div>

        <div className="px-16 pt-5 rounded-lg border border-stone-300 justify-start  items-center flex">
          <div className="self-stretch justify-between items-center gap-52  flex">

            {activities.map((title, index) => (
              <div key={index} className={`text-neutral-900 text-2xl font-medium font-['DM Sans'] leading-9 pb-4 cursor-pointer ${active === title ? "border-b-8 border-indigo-600" : ""}`} onClick={() => setActive(title)}>{title}</div>
            ))}
          </div>
        </div>

        <div className="w-full h-full relative rounded-lg border-r border-l border-t border-stone-300">
          <Post
            avatar={UserProfile}
            name="Grace Ikpang"
            userInfo="Product designer"
            date=".May 25th, 2023"
            title="Starting out as a Product designer"
            timeIcon={TimeIcon}
            time="10 mins read"
            info="Embarking on a journey as a product designer can be an exhilarating and fulfilling experience. As a profession that bridges the realms of art, technology, and problem-solving, product design offers an opportunity to shape the way people interact with the world around them."
            image={FirstPost}
            commentIcon={Comments}
            comment="200"
            likeIcon={Likes}
            like="120"
            viewsIcon={Views}
            views="2980 views"
          />

          <Post
            avatar={UserProfile2}
            name="Oluwatobi Ogunniyi"
            userInfo="Software developer"
            date=".May 25th, 2023"
            title="Using CSS Selectors"
            timeIcon={TimeIcon}
            time="10 mins read"
            info="Cascading Style Sheets (CSS) is a fundamental technology that lies at the heart of modern web design. It empowers developers and designers to transform plain HTML into visually captivating and interactive web pages"
            image={SecondPost}
            commentIcon={Comments}
            comment="200"
            likeIcon={Likes}
            like="120"
            viewsIcon={Views}
            views="2980 views"
          />

          <Post
            avatar={UserProfile3}
            name="Adebobola Muhydeen"
            userInfo="Political analyst"
            date=".May 25th, 2023"
            title="The Impact of social media on Political discourse"
            timeIcon={TimeIcon}
            time="10 mins read"
            info="In the era of digital communication, social media platforms have become pervasive in our daily lives, revolutionizing the way we connect, share information, and engage with the world"
            image={ThirdPost}
            commentIcon={Comments}
            comment="200"
            likeIcon={Likes}
            like="120"
            viewsIcon={Views}
            views="2980 views"
          />
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Feed