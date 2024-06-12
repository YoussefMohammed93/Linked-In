import { Link } from "react-router-dom";
import AvatarImg from "/src/assets/avatar.png";
import PostPopup from "./post-popup";
import MediaPostPopup from "./post-media-popup";
import NotAvilablePopup from "./not-avilable-popup";
import OsamaElzeroImg from "/src/assets/osama-elzero.jpeg";
import PostOneImg from "/src/assets/post-1.jpeg";
import LikeIcon from "/src/assets/Like-Icon.svg";
import HeartIcon from "/src/assets/Heart-Icon.svg";
import CareIcon from "/src/assets/Care-Icon.svg";

export default function MainSide() {
  return (
    <div className="main-side-container">
      <div className="main-bg rounded-lg">
        <div className="user-post px-4 py-3">
          <div className="flex items-center">
            <div>
              <img
                src={AvatarImg}
                alt="user-avatar"
                className="rounded-full w-14 h-14"
                style={{ maxWidth: "max-content" }}
              />
            </div>
            <div className="w-full ml-4">
              <PostPopup />
            </div>
          </div>
          <div>
            <div className="user-post-btns flex items-center justify-between px-3 sm:px-5 pt-3">
              <MediaPostPopup />
              <NotAvilablePopup
                buttonText="Event"
                buttonIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#e9a53f"
                    className="size-6 sm:size-7"
                  >
                    <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                    <path
                      fillRule="evenodd"
                      d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
                buttonClass="hover:bg-[#8c8c8c26]"
              />
              <NotAvilablePopup
                buttonText="Write article"
                buttonIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#f69b81"
                    className="size-6 sm:size-7"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z"
                      clipRule="evenodd"
                    />
                    <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
                  </svg>
                }
                buttonClass="hover:bg-[#8c8c8c26]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="main-post mt-4 mb-3 sm:mb-4">
        <main className="main-bg p-3 rounded-lg">
          <div>
            <div>
              <div className="flex items-start justify-between">
                <Link to="/" className="flex items-center">
                  <img
                    src={OsamaElzeroImg}
                    alt="user-name"
                    className="user-image w-14 h-14 rounded-full"
                  />
                  <div className="ml-3">
                    <h2 className="user-name text-base font-semibold text-[#ffffffe6] transition duration-150 hover:text-[#71b7fb] hover:underline">
                      Osama Elzero
                    </h2>
                    <p className="user-followers text-[#ffffff99] text-sm">
                      250.358 followers
                    </p>
                    <p className="user-post-time flex items-center text-[#ffffff99] text-sm">
                      10h •{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-5 ml-1 mt-[2px]"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM8.547 4.505a8.25 8.25 0 1 0 11.672 8.214l-.46-.46a2.252 2.252 0 0 1-.422-.586l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.211.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.654-.261a2.25 2.25 0 0 1-1.384-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.279-2.132Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </p>
                  </div>
                </Link>
                <div className="flex items-center gap-2">
                  <button className="text-[#ffffff99] bg-transparent hover:bg-[#ffffff1d] rounded-full text-sm w-8 h-8 ms-auto inline-flex justify-center items-center transition-all duration-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-7 transition-all duration-200"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="text-[#ffffff99] bg-transparent hover:bg-[#ffffff1d] rounded-full text-sm w-8 h-8 ms-auto inline-flex justify-center items-center transition-all duration-200"
                    data-modal-hide="default-modal"
                  >
                    <svg
                      className="w-[13px] h-[13px]"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="main-post-content">
                <h2 className="text-[#dbdbdb] text-base font-medium mt-1 mb-2">
                  This repo contains a treasure trove of JavaScript articles ,
                  Link In Comments .
                </h2>
                <div>
                  <img src={PostOneImg} alt="Post" />
                </div>
                <div
                  className="w-full flex items-center justify-between mt-3 pb-2"
                  style={{ borderBottom: "1px solid #404040" }}
                >
                  <div className="flex cursor-pointer">
                    <div className="relative">
                      {" "}
                      <img src={LikeIcon} alt="react-icon" />
                    </div>
                    <div className="relative right-[6px]">
                      {" "}
                      <img src={HeartIcon} alt="react-icon" />
                    </div>
                    <div className="relative right-[12px]">
                      {" "}
                      <img src={CareIcon} alt="react-icon" />
                    </div>
                    <div>
                      <p className="post-reacts-number text-[#ffffff99] text-xs relative right-2 hover:text-[#71b7fb] hover:underline cursor-pointer">
                        412
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="post-comments">
                      <h5 className="text-[#ffffff99] text-xs font-medium hover:text-[#71b7fb] hover:underline cursor-pointer">
                        30 comments
                      </h5>
                    </div>
                    <span className="mx-1 text-[#ffffff99]">•</span>
                    <div className="post-reposts">
                      <h5 className="text-[#ffffff99] text-xs font-medium hover:text-[#71b7fb] hover:underline cursor-pointer">
                        25 reposts
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="w-full flex mt-3 gap-1 sm:gap-3">
                  <button className="like-react w-1/4 flex justify-center py-1 hover:bg-[#8c8c8c26] rounded-md transition duration-150">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#ffffff99"
                      className="size-5 sm:size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                      />
                    </svg>
                    <h6 className="text-[#ffffff99] text-sm sm:text-base font-medium ml-1">
                      Like
                    </h6>
                  </button>
                  <button className="post-comment w-1/4 flex justify-center py-1 hover:bg-[#8c8c8c26] rounded-md transition duration-150">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#ffffff99"
                      className="size-5 sm:size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                      />
                    </svg>
                    <h6 className="text-[#ffffff99] text-sm sm:text-base font-medium ml-1">
                      Comment
                    </h6>
                  </button>
                  <button className="post-repost w-1/4 flex justify-center py-1 hover:bg-[#8c8c8c26] rounded-md transition duration-150">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#ffffff99"
                      className="size-5 sm:size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"
                      />
                    </svg>
                    <h6 className="text-[#ffffff99] text-sm sm:text-base font-medium ml-1">
                      Repost
                    </h6>
                  </button>
                  <button className="post-send w-1/4 flex justify-center py-1 hover:bg-[#8c8c8c26] rounded-md transition duration-150">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#ffffff99"
                      className="size-5 sm:size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                      />
                    </svg>

                    <h6 className="text-[#ffffff99] text-sm sm:text-base font-medium ml-1">
                      Send
                    </h6>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
