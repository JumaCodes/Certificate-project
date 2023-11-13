import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Register, NotFound, SignIn, VerifyEmail, Feed, Analytics } from './pages';
import UserProfile from "./assets/users.png"
import TimeIcon from "./assets/icons/TimeIcon.png"
import FirstPost from "./assets/FirstPost.png"
import Comments from "./assets/icons/CommentIcon.png"
import Likes from "./assets/icons/LikeIcon.png"
import Views from "./assets/icons/ViewsIcon.png"
import ProtectedRoute from './ProtectedRoute';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register/verify-email" element={<VerifyEmail />} />
        {/* <Route path="/post" element={<Post />} /> */}
        <Route path="/analytics" element={<Analytics
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
        />} />
        <Route path="/" element={<Home />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard/feed"
          element={
            <ProtectedRoute>
              <Feed />
            </ProtectedRoute>
          }
        />

        {/* Broken Link */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
