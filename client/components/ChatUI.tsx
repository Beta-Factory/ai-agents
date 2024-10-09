"use client";
import Image from "next/image";
import Chat from "./ui/Chat";
import AskQuestions from "./ui/AskQuestions";

const ChatUI = () => {
  return (
    <div className="w-[70%]  h-full">
      <section className="w-full flex justify-center items-center  flex-col mt-5  ">
        <div className="">
          <p className="lg:text-[14px] sm:text-[12px] font-bold ">
            Some more content here
          </p>
        </div>
        <div className="w-full flex ">
          {/* Agent in Use Section */}
          <div className="lg:w-3/4 xs:w-full flex justify-end items-center gap-4 mx-auto  ">
            <span className="lg:text-[14px] sm:text-[12px] xs:text-[10px]">
              Agent in Use:
            </span>
            <div className="flex border rounded-full gap-2 p-2 justify-center items-center">
              <Image
                height={20}
                width={20}
                src={"/path/to/image"}
                alt="Agent Profile Picture"
                className="rounded-full border"
              />
              <span className="lg:text-[14px] sm:text-[12px] xs:text-[10px]">
                Sanjay Gawai
              </span>
              <button aria-label="Add Agent">
                <svg
                  width="9"
                  height="5"
                  viewBox="0 0 9 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.46191 0.962382L4.71191 4.71238C4.65966 4.76482 4.59756 4.80643 4.52919 4.83482C4.46081 4.86321 4.38751 4.87783 4.31348 4.87783C4.23944 4.87783 4.16614 4.86321 4.09776 4.83482C4.02939 4.80643 3.9673 4.76482 3.91504 4.71238L0.165038 0.962382C0.0593661 0.85671 -1.57464e-09 0.713387 0 0.563944C1.57464e-09 0.414501 0.0593661 0.271179 0.165038 0.165507C0.27071 0.0598348 0.414033 0.000468852 0.563476 0.00046885C0.712919 0.000468849 0.856241 0.0598348 0.961913 0.165507L4.31394 3.51754L7.66598 0.165038C7.77165 0.0593663 7.91497 0 8.06441 0C8.21386 0 8.35718 0.0593663 8.46285 0.165038C8.56852 0.270711 8.62789 0.414033 8.62789 0.563476C8.62789 0.712919 8.56852 0.856241 8.46285 0.961913L8.46191 0.962382Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* export or share Section */}
          <div className="w-2/4 flex justify-end items-center gap-4 px-4">
            <div className="flex border rounded-full gap-2 p-2 justify-end items-center">
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.7">
                  <path
                    d="M13.75 7.5V13.5C13.75 13.8315 13.6183 14.1495 13.3839 14.3839C13.1495 14.6183 12.8315 14.75 12.5 14.75H3.5C3.16848 14.75 2.85054 14.6183 2.61612 14.3839C2.3817 14.1495 2.25 13.8315 2.25 13.5V7.5C2.25 7.16848 2.3817 6.85054 2.61612 6.61612C2.85054 6.3817 3.16848 6.25 3.5 6.25H4.75C4.94891 6.25 5.13968 6.32902 5.28033 6.46967C5.42098 6.61032 5.5 6.80109 5.5 7C5.5 7.19891 5.42098 7.38968 5.28033 7.53033C5.13968 7.67098 4.94891 7.75 4.75 7.75H3.75V13.25H12.25V7.75H11.25C11.0511 7.75 10.8603 7.67098 10.7197 7.53033C10.579 7.38968 10.5 7.19891 10.5 7C10.5 6.80109 10.579 6.61032 10.7197 6.46967C10.8603 6.32902 11.0511 6.25 11.25 6.25H12.5C12.8315 6.25 13.1495 6.3817 13.3839 6.61612C13.6183 6.85054 13.75 7.16848 13.75 7.5ZM6.03062 5.03062L7.25 3.8125V9C7.25 9.19891 7.32902 9.38968 7.46967 9.53033C7.61032 9.67098 7.80109 9.75 8 9.75C8.19891 9.75 8.38968 9.67098 8.53033 9.53033C8.67098 9.38968 8.75 9.19891 8.75 9V3.8125L9.96937 5.0325C10.0391 5.10226 10.122 5.15761 10.2131 5.19536C10.3043 5.23312 10.402 5.25255 10.5006 5.25255C10.5993 5.25255 10.697 5.23312 10.7881 5.19536C10.8793 5.15761 10.9621 5.10226 11.0319 5.0325C11.1016 4.96273 11.157 4.87991 11.1947 4.78876C11.2325 4.69761 11.2519 4.59991 11.2519 4.50125C11.2519 4.40259 11.2325 4.30489 11.1947 4.21374C11.157 4.12259 11.1016 4.03977 11.0319 3.97L8.53187 1.47C8.4622 1.40008 8.3794 1.3446 8.28824 1.30675C8.19707 1.26889 8.09934 1.24941 8.00062 1.24941C7.90191 1.24941 7.80417 1.26889 7.71301 1.30675C7.62185 1.3446 7.53905 1.40008 7.46938 1.47L4.96938 3.97C4.89961 4.03977 4.84427 4.12259 4.80651 4.21374C4.76876 4.30489 4.74932 4.40259 4.74932 4.50125C4.74932 4.70051 4.82848 4.8916 4.96938 5.0325C5.11027 5.1734 5.30137 5.25255 5.50063 5.25255C5.69988 5.25255 5.89098 5.1734 6.03188 5.0325L6.03062 5.03062Z"
                    fill="black"
                  />
                </g>
              </svg>

              <span className="lg:text-[14px] sm:text-[12px] xs:text-[10px]">
                共有
              </span>
            </div>
          </div>
        </div>
      </section>
      <Chat />
      {/* search */}
      <AskQuestions />
    </div>
  );
};

export default ChatUI;