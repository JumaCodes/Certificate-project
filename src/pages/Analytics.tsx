import React from 'react'
import DashboardLayout from '../layouts/DashBoardLayout'
import { Post } from '../components'
import UserProfile from "../assets/BlackAfin.jpg"
import TimeIcon from "../assets/icons/TimeIcon.png"
import FirstPost from "../assets/FirstPost.png"
import Comments from "../assets/icons/CommentIcon.png"
import Likes from "../assets/icons/LikeIcon.png"
import Views from "../assets/icons/ViewsIcon.png"

interface AnalyticsProp {
  avatar: string;
  name: string;
  userInfo: string;
  date: string;
  title: string;
  timeIcon: string;
  time: string;
  info?: string;
  image?: string;
  commentIcon?: string;
  comment: string;
  likeIcon?: string;
  like?: string; // Assuming 'like' is a string, adjust as needed
  viewsIcon?: string;
  views?: string;
}

const Analytics = ({ avatar, name, userInfo, date, title, timeIcon, time, info, image, commentIcon, comment, likeIcon, like, viewsIcon, views }: AnalyticsProp) => {
  return (
    <DashboardLayout>
      <div className="flex justify-start flex-col gap-3 p-10">
        <div className="w-full flex-col justify-start items-start gap-3 inline-flex">
          <div className="flex-col justify-start items-start gap-6 flex">
            <div className="text-neutral-900 text-3xl font-medium font-['DM Sans'] leading-10">Posts analytics</div>
            <div><span className="text-neutral-900 text-2xl font-medium font-['DM Sans'] leading-9">May 2023</span><span className="text-black text-3xl font-medium font-['DM Sans'] leading-10">, </span><span className="text-zinc-600 text-lg font-normal font-['DM Sans'] leading-relaxed">25days so far</span></div>
          </div>
          <div className="w-full h-1 bg-indigo-500" />
        </div>

        <div className="w-full flex-col justify-start items-start gap-3 inline-flex">
          <div className="flex-col justify-start items-start gap-3 flex">
            <div className="text-neutral-900 text-2xl font-medium font-['DM Sans'] leading-9">Posts highlights</div>
            <div className="justify-start items-center gap-3 inline-flex">
              <div className="text-neutral-900 text-3xl font-medium font-['DM Sans'] leading-10">Top posts</div>
              <div className="text-zinc-600 text-lg font-normal font-['DM Sans'] leading-relaxed">earned 2980 impressions</div>
            </div>
          </div>
        </div>

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

        <button className="w-44 h-14 px-4 py-4 bg-indigo-600 rounded-lg justify-center items-center gap-2 inline-flex mt-6">
          <span className="text-white text-base font-bold font-['DM Sans'] leading-normal">View post activity</span>
        </button>

        <div className="w-full flex-col justify-start items-start gap-10 inline-flex mt-12">
          <div className="flex-col justify-start items-start gap-6 flex">
            <div className="flex-col justify-start items-start gap-3 flex">
              <div className="flex-col justify-center items-start gap-3 flex">
                <div className="text-neutral-900 text-2xl font-medium font-['DM Sans'] leading-9">Posts summary</div>
                <div className="text-zinc-600 text-lg font-normal font-['DM Sans'] leading-relaxed">May 2023 summary</div>
              </div>
              <div className="w-[1250px] h-1 bg-indigo-500" />
            </div>
            <div className="justify-start items-start gap-28 inline-flex">
              <div className="flex-col justify-start items-center inline-flex">
                <div className="text-zinc-600 text-2xl font-medium font-['DM Sans'] leading-9">Posts</div>
                <div className="text-neutral-900 text-2xl font-medium font-['DM Sans'] leading-9">3</div>
              </div>
              <div className="flex-col justify-start items-center inline-flex">
                <div className="text-zinc-600 text-2xl font-medium font-['DM Sans'] leading-9">Posts Impressions</div>
                <div className="text-neutral-900 text-2xl font-medium font-['DM Sans'] leading-9">2.98k views</div>
              </div>
            </div>
          </div>
          <div className="justify-start items-start gap-11 inline-flex">
            <div className="flex-col justify-start items-center inline-flex">
              <div className="text-zinc-600 text-2xl font-medium font-['DM Sans'] leading-9">Profile visits</div>
              <div className="text-neutral-900 text-2xl font-medium font-['DM Sans'] leading-9">300</div>
            </div>
            <div className="flex-col justify-start items-center inline-flex">
              <div className="text-zinc-600 text-2xl font-medium font-['DM Sans'] leading-9">New followers</div>
              <div className="text-neutral-900 text-2xl font-medium font-['DM Sans'] leading-9">300</div>
            </div>
          </div>
        </div>


      </div>
    </DashboardLayout>
  )
}

export default Analytics