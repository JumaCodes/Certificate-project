import React from 'react'
import { PostProps } from '../types/component-types'



const Post = ({ avatar, name, userInfo, date, title, timeIcon, time, info, image, commentIcon, comment, likeIcon, like, viewsIcon, views }: PostProps) => {
  return (
    <div className="wrapper border-b border-stone-300 py-8 px-16 pt-10">
      <div className="flex flex-col gap-6">
        <div className="flex py-2 gap-4">
          <div className="w-24 h-24 rounded-full">
            <img className="w-full h-full object-cover rounded-full" src={avatar} alt='User' />
          </div>

          <div className="w-72 h-16 flex-col justify-start items-start gap-2 inline-flex">
            <h2 className="text-neutral-900 text-2xl font-medium font-['DM Sans'] leading-9">{name}</h2>
            <div className="justify-start items-start gap-2 inline-flex">
              <span className="text-zinc-600 text-lg font-normal font-['DM Sans'] leading-relaxed">{userInfo}</span>
              <span className="text-zinc-600 text-lg font-normal font-['DM Sans'] leading-relaxed">{date}</span>
            </div>
          </div>
        </div>

        <div className="w-full flex-col justify-start items-start gap-2 inline-flex">
          <h1 className="w-full text-neutral-900 text-bold text-3xl font-medium font-['DM Sans'] leading-10">{title}</h1>
          <div className="justify-start items-start gap-2 inline-flex">
            <img src={timeIcon} className="w-6 h-6 relative" alt="Time" />
            <div className="text-zinc-600 text-base font-normal font-['DM Sans'] leading-normal">{time}</div>
          </div>
        </div>

        <div className="w-full text-zinc-600 text-lg font-normal font-['DM Sans'] leading-relaxed max-w-[750px]">{info}</div>

        <div className="flex flex-col gap-2 max-w-[850px]">
          <div className="w-[850px] h-[350px]">
            <img className="rounded-lg flex-shrink-0 w-full h-full object-cover" src={image} alt="" />
          </div>

          <div className="w-full flex justify-between items-center">
            <p className="flex items-center gap-2 cursor-pointer">
              <img src={commentIcon} alt="Comment" />
              <span>{comment}</span>
            </p>

            <p className="flex items-center gap-2 cursor-pointer">
              <img src={likeIcon} alt="Comment" />
              <span>{like}</span>
            </p>

            <p className="flex items-center gap-2 cursor-pointer">
              <img src={viewsIcon} alt="Comment" />
              <span>{views}</span>
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Post

