import { Link } from "react-router-dom";
import Logo from "../assets/Dashboard-Logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Trending from "../assets/svg/trending.svg"
import SeeAll from "../assets/icons/SeeAll.png"



const styles = {
  active:
    "bg-[#D9E2FF] h-[49px] w-[250px] rounded-[8px]  px-5 gap-[10px]  flex items-center text-info  text-sm  cursor-pointer  ",
  inactive:
    "flex items-center hover:bg-[#EAF2FD] py-3 px-5 gap-[10px] text-sm text-secondary  hover:text-info cursor-pointer w-[250px] rounded-[8px]  ",
  activeB:
    " h-[49px] w-[250px] rounded-[8px]   px-5 gap-[10px]  flex items-center text-info  text-sm  cursor-pointer  ",
  inactiveB:
    "flex items-center  py-3 px-5 gap-[10px] text-sm text-secondary  hover:text-info cursor-pointer w-[250px] rounded-[8px]  ",
};

const Sidebar = ({ current }: any) => {
  const navigate = useNavigate();
  const [openActivities, setOpenActivities] = useState(false);

  // fixed top - 0 left - 0 bottom - 0
  return (
    <div className="w-full h-screen flex-1 flex flex-col max-w-[350px] fixed top-0 left-0 bg-white overflow-y-scroll overflow-x-hidden border-r border-[#D0D0D0] pb-20">
      <Link to="/" className="w-full flex justify-center mt-10 mb-10">
        <img src={Logo} alt="logo" />
      </Link>
      <div className="flex flex-col pl-16">
        <div className="text-neutral-900 text-lg font-normal font-['DM Sans'] leading-relaxed text-[#626262]">Overview</div>
        <div className="flex flex-col gap-1 mt-4">

          <div
            className={`${current === 1 ? styles.active : styles.inactive} group`}
            onClick={() => navigate("/dashboard/feed")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="group-hover:stroke-[#543EE0]" viewBox="0 0 24 24" fill="#626262">
              <path d="M21 2H9C8.4 2 8 2.4 8 3V6C8 6.6 8.4 7 9 7H21C21.6 7 22 6.6 22 6V3C22 2.4 21.6 2 21 2ZM12 17H7V22H12V17ZM7 9.5H2V14.5H7V9.5ZM18 9.6H9.5V14.3H18V9.6Z" stroke="#626262" className="group-hover:stroke-[#543EE0]" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p>Feed</p>
          </div>

          <div
            className={` ${current === 2 ? styles.active : styles.inactive} group`}
            onClick={() => navigate("/")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="group-hover:stroke-[#543EE0]">
              <path d="M16.5 7V22.2417L10.197 19.5404L10 19.456L9.80304 19.5404L3.5 22.2417V7C3.5 6.58379 3.64248 6.23962 3.94155 5.94055C4.24061 5.6415 4.58424 5.4995 4.99939 5.5H5H15C15.4162 5.5 15.7604 5.64248 16.0594 5.94155C16.3585 6.24061 16.5005 6.58424 16.5 6.99939V7ZM5 5H15C15.55 5 16.021 5.196 16.413 5.588C16.805 5.98 17.0007 6.45067 17 7L5 5ZM4.5 19.95V20.7093L5.19751 20.4093L10 18.3443L14.8025 20.4093L15.5 20.7093V19.95V7V6.5H15H5H4.5V7V19.95ZM20.5 3V19.5H19.5V3V2.5H19H6.5V1.5H19C19.4162 1.5 19.7604 1.64248 20.0594 1.94155C20.3585 2.24061 20.5005 2.58424 20.5 2.99939V3Z" fill="#626262" stroke="#626262" className="group-hover:stroke-[#543EE0]" />
            </svg>
            <p>BookMarks</p>
          </div>

          <Link
            to="/"
            className={`${current === 3 ? styles.active : styles.inactive} group`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="group-hover:stroke-[#543EE0]">
              <path d="M19.3172 16.404C18.7306 15.8169 18.0451 15.3377 17.2922 14.9883C18.354 14.1282 19.0313 12.8157 19.0313 11.3438C19.0313 8.74694 16.8657 6.61647 14.2688 6.65631C11.7118 6.69616 9.65162 8.77975 9.65162 11.3438C9.65162 12.8157 10.3313 14.1282 11.3907 14.9883C10.6377 15.3374 9.95214 15.8166 9.36568 16.404C8.086 17.686 7.35943 19.3782 7.31256 21.1829C7.31193 21.2079 7.31632 21.2328 7.32546 21.2561C7.33461 21.2794 7.34832 21.3006 7.36579 21.3185C7.38326 21.3364 7.40415 21.3506 7.42721 21.3604C7.45027 21.3701 7.47504 21.3751 7.50006 21.3751H8.81256C8.91334 21.3751 8.99771 21.2954 9.00006 21.1946C9.04459 19.8352 9.59537 18.5626 10.5633 17.5969C11.0587 17.099 11.6478 16.7042 12.2968 16.4355C12.9457 16.1667 13.6414 16.0294 14.3438 16.0313C15.7712 16.0313 17.1141 16.5868 18.1243 17.5969C19.0899 18.5626 19.6407 19.8352 19.6876 21.1946C19.6899 21.2954 19.7743 21.3751 19.8751 21.3751H21.1876C21.2126 21.3751 21.2374 21.3701 21.2604 21.3604C21.2835 21.3506 21.3044 21.3364 21.3218 21.3185C21.3393 21.3006 21.353 21.2794 21.3622 21.2561C21.3713 21.2328 21.3757 21.2079 21.3751 21.1829C21.3282 19.3782 20.6016 17.686 19.3172 16.404ZM14.3438 14.3438C13.5422 14.3438 12.7876 14.0321 12.2227 13.4649C11.9392 13.1837 11.7153 12.8482 11.5643 12.4786C11.4133 12.1089 11.3383 11.7126 11.3438 11.3133C11.3508 10.5446 11.6579 9.80162 12.1946 9.25084C12.7571 8.67428 13.5094 8.35319 14.3133 8.34381C15.1079 8.33678 15.879 8.64616 16.4462 9.20162C17.0274 9.77116 17.3462 10.5329 17.3462 11.3438C17.3462 12.1454 17.0344 12.8977 16.4672 13.4649C16.189 13.7445 15.858 13.9661 15.4935 14.117C15.1291 14.2679 14.7383 14.345 14.3438 14.3438ZM8.47271 11.9626C8.45162 11.7587 8.4399 11.5524 8.4399 11.3438C8.4399 10.9712 8.47506 10.6079 8.54068 10.254C8.55709 10.1696 8.51256 10.0829 8.43521 10.0477C8.11646 9.90475 7.8235 9.70787 7.57037 9.45944C7.2721 9.17024 7.0374 8.82203 6.88123 8.43705C6.72505 8.05207 6.65085 7.63876 6.66334 7.2235C6.68443 6.47116 6.98678 5.75631 7.51412 5.21725C8.09303 4.62428 8.87115 4.30084 9.6985 4.31022C10.4462 4.31725 11.168 4.60553 11.7141 5.11647C11.8993 5.28991 12.0587 5.48209 12.1922 5.68834C12.2391 5.761 12.3305 5.79147 12.4102 5.76334C12.8227 5.62037 13.2587 5.51959 13.7063 5.47272C13.8376 5.45866 13.9126 5.31803 13.854 5.20084C13.0922 3.69381 11.536 2.65319 9.736 2.62506C7.13678 2.58522 4.97115 4.71569 4.97115 7.31022C4.97115 8.78209 5.6485 10.0946 6.71021 10.9547C5.9649 11.2993 5.27818 11.7751 4.68287 12.3704C3.3985 13.6524 2.67193 15.3446 2.62506 17.1516C2.62443 17.1766 2.62882 17.2015 2.63796 17.2248C2.64711 17.2481 2.66082 17.2693 2.67829 17.2872C2.69576 17.3052 2.71665 17.3194 2.73971 17.3291C2.76277 17.3388 2.78754 17.3438 2.81256 17.3438H4.1274C4.22818 17.3438 4.31256 17.2641 4.3149 17.1633C4.35943 15.804 4.91021 14.5313 5.87818 13.5657C6.56725 12.8766 7.411 12.3985 8.33209 12.1665C8.4235 12.143 8.48443 12.0563 8.47271 11.9626Z" fill="#626262" className="group-hover:stroke-[#543EE0]" />
            </svg>
            <p>Team blogs</p>
          </Link>

          <div
            className={`${current === 4 ? styles.active : styles.inactive} group`}
            onClick={() => navigate("/")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="group-hover:stroke-[#543EE0]">
              <path d="M12 1L21.05 6.4C21.35 6.58333 21.5833 6.83333 21.75 7.15C21.9167 7.46667 22 7.8 22 8.15V19C22 19.55 21.804 20.021 21.412 20.413C21.02 20.805 20.5493 21.0007 20 21H4C3.45 21 2.979 20.804 2.587 20.412C2.195 20.02 1.99934 19.5493 2 19V8.15C2 7.8 2.08334 7.46667 2.25 7.15C2.41667 6.83333 2.65 6.58333 2.95 6.4L12 1ZM12 12.65L19.8 8L12 3.35L4.2 8L12 12.65ZM12 15L4 10.2V19H20V10.2L12 15ZM12 19H20H4H12Z" fill="#626262" className="group-hover:stroke-[#543EE0]" />
            </svg>
            <p>Draft</p>
          </div>

          <div
            className={`${current === 5 ? styles.active : styles.inactive} group`}
            onClick={() => navigate("/analytics")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="group-hover:stroke-[#543EE0]" >
              <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" fill="#626262" />
              <path d="M7 12H9V17H7V12ZM15 7H17V17H15V7ZM11 14H13V17H11V14ZM11 10H13V12H11V10Z" fill="#626262" className="group-hover:stroke-[#543EE0]" />
            </svg>
            <p>Analytics</p>
          </div>




          {/* <Link
            to={
              "https://app.powerbi.com/view?r=eyJrIjoiYzMxMzNmOWQtMTRjYS00YTM3LWFiZGEtNjI1YWU3MDNlNmZlIiwidCI6Ijc0Y2NkNjY2LWZiYTctNDBhNi1hYmVjLWUyYTBmM2EwYzI2NiJ9&pageName=ReportSection"
            }
            className={current === 5 ? styles.active : styles.inactive}
          >
            <AnalyticsIcon />
            <p>Analytics</p>
          </Link> */}

        </div>
        <div className="text-neutral-900 text-lg font-normal font-['DM Sans'] leading-relaxed flex items-center gap-3 mt-4 text-[#626262]"><span>Trending Tags</span>
          <img src={Trending} alt="Icon" />
        </div>
        <div className="flex flex-col gap-1 mt-4">

          <div
            className={` ${current === 6 ? styles.active : styles.inactive} group`}
            onClick={() => navigate("/")}
          >
            <p>Programming</p>
          </div>

          <div
            className={` ${current === 6 ? styles.active : styles.inactive} group`}
            onClick={() => navigate("/")}
          >
            <p>Data science</p>
          </div>

          <div
            className={` ${current === 6 ? styles.active : styles.inactive} group`}
            onClick={() => navigate("/")}
          >
            <p>Technology</p>
          </div>

          <div
            className={` ${current === 6 ? styles.active : styles.inactive} group`}
            onClick={() => navigate("/")}
          >
            <p>Machine learning</p>
          </div>

          <div
            className={` ${current === 6 ? styles.active : styles.inactive} group`}
            onClick={() => navigate("/")}
          >
            <p>Politics</p>
          </div>

          {
            openActivities && (
              <div>
                <div
                  className={` ${current === 6 ? styles.active : styles.inactive} group`}
                  onClick={() => navigate("/")}
                >
                  <p className="text-sm text-secondary ">Project</p>
                </div>
                <div
                  className={` ${current === 8 ? styles.active : styles.inactive} group`}
                  onClick={() => navigate("/")}
                >
                  <p className="text-sm text-secondary ">Task</p>
                </div>
              </div>
            )
          }

          <div className="w-full flex flex-col">
            <div
              className="flex items-center justify-between pr-4 cursor-pointer "
              onClick={() => setOpenActivities(!openActivities)}
            >
              <div className={current === 5 ? styles.activeB : styles.inactiveB}>

                <p className={openActivities ? "text-[#543EE0] font-bold" : "text-[#626262] font-bold"}>See All</p>
                <span className={`${openActivities ? "rotate-90" : "rotate-180"} transition-rotate duration-3000`}>
                  <img src={SeeAll} alt="See All" />
                </span>
              </div>
            </div>
          </div>



        </div>

        <div className="text-neutral-900 text-lg font-normal font-['DM Sans'] leading-relaxed text-[#626262]">Personal</div>
        <div className="flex flex-col gap-1 mt-4">

          <div
            className={`${current === 1 ? styles.active : styles.inactive} group`}
            onClick={() => navigate("/")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="group-hover:stroke-[#543EE0]">
              <path d="M12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93913 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12C10.9391 12 9.92172 11.5786 9.17157 10.8284C8.42143 10.0783 8 9.06087 8 8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4ZM12 6C11.4696 6 10.9609 6.21071 10.5858 6.58579C10.2107 6.96086 10 7.46957 10 8C10 8.53043 10.2107 9.03914 10.5858 9.41421C10.9609 9.78929 11.4696 10 12 10C12.5304 10 13.0391 9.78929 13.4142 9.41421C13.7893 9.03914 14 8.53043 14 8C14 7.46957 13.7893 6.96086 13.4142 6.58579C13.0391 6.21071 12.5304 6 12 6ZM12 13C14.67 13 20 14.33 20 17V20H4V17C4 14.33 9.33 13 12 13ZM12 14.9C9.03 14.9 5.9 16.36 5.9 17V18.1H18.1V17C18.1 16.36 14.97 14.9 12 14.9Z" fill="#626262" className="group-hover:stroke-[#543EE0]" />
            </svg>
            <p>Account</p>
          </div>

          <div
            className={`${current === 1 ? styles.active : styles.inactive} group`}
            onClick={() => navigate("/")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="group-hover:stroke-[#543EE0]">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9996 3C12.9996 2.73478 12.8943 2.48043 12.7067 2.29289C12.5192 2.10536 12.2648 2 11.9996 2C11.7344 2 11.48 2.10536 11.2925 2.29289C11.105 2.48043 10.9996 2.73478 10.9996 3V3.75H10.4426C9.37065 3.74993 8.33894 4.15839 7.55754 4.89224C6.77613 5.62608 6.30377 6.63014 6.23661 7.7L6.01561 11.234C5.93134 12.5814 5.47891 13.8799 4.70761 14.988C4.54825 15.2171 4.45087 15.4835 4.42496 15.7613C4.39904 16.0392 4.44547 16.319 4.55973 16.5736C4.67398 16.8281 4.85218 17.0488 5.07698 17.2142C5.30179 17.3795 5.56555 17.4838 5.84261 17.517L9.24961 17.925V19C9.24961 19.7293 9.53935 20.4288 10.0551 20.9445C10.5708 21.4603 11.2703 21.75 11.9996 21.75C12.729 21.75 13.4284 21.4603 13.9442 20.9445C14.4599 20.4288 14.7496 19.7293 14.7496 19V17.925L18.1566 17.516C18.4335 17.4827 18.6971 17.3784 18.9218 17.2131C19.1464 17.0478 19.3245 16.8273 19.4388 16.5729C19.553 16.3184 19.5995 16.0388 19.5737 15.7611C19.5479 15.4834 19.4507 15.2171 19.2916 14.988C18.5203 13.88 18.0678 12.5815 17.9836 11.234L17.7626 7.701C17.6957 6.63096 17.2234 5.62665 16.442 4.8926C15.6606 4.15855 14.6287 3.74995 13.5566 3.75H12.9996V3ZM10.4426 5.25C9.75219 5.24992 9.08769 5.51297 8.58439 5.98561C8.0811 6.45825 7.77686 7.10493 7.73361 7.794L7.51361 11.328C7.41196 12.949 6.86753 14.511 5.93961 15.844C5.92808 15.8606 5.92103 15.8798 5.91915 15.8999C5.91727 15.92 5.92062 15.9403 5.92887 15.9587C5.93712 15.9771 5.95 15.9931 5.96625 16.005C5.9825 16.017 6.00158 16.0246 6.02161 16.027L9.75861 16.476C11.2476 16.654 12.7516 16.654 14.2406 16.476L17.9776 16.027C17.9977 16.0246 18.0167 16.017 18.033 16.005C18.0492 15.9931 18.0621 15.9771 18.0704 15.9587C18.0786 15.9403 18.082 15.92 18.0801 15.8999C18.0782 15.8798 18.0711 15.8606 18.0596 15.844C17.1321 14.5109 16.588 12.9489 16.4866 11.328L16.2656 7.794C16.2224 7.10493 15.9181 6.45825 15.4148 5.98561C14.9115 5.51297 14.247 5.24992 13.5566 5.25H10.4426ZM11.9996 20.25C11.3096 20.25 10.7496 19.69 10.7496 19V18.25H13.2496V19C13.2496 19.69 12.6896 20.25 11.9996 20.25Z" fill="#626262" className="group-hover:stroke-[#543EE0]" />
            </svg>
            <p>Notifications</p>
          </div>
        </div>

        <div className={current === 7 ? styles.active : styles.inactive}>
          <p className="text-red-700">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
