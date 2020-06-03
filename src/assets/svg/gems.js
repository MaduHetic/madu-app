import React from "react";
import { Defs, G, Path, Stop, LinearGradient } from "react-native-svg";

export default {
  AdventureBronze: {
    svg: (
      <G fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M32 0L62.4338 22.1115L50.8091 57.8885H13.1909L1.56619 22.1115L32 0Z"
          fill="#F5F5FA"
        />
        <Path
          d="M32 3L59.5806 23.0385L49.0458 55.4615H14.9542L4.41936 23.0385L32 3Z"
          fill="url(#paint0_linear)"
        />
        <Path
          d="M32 7L55.7764 24.2746L46.6946 52.2254H17.3054L8.22359 24.2746L32 7Z"
          fill="#9C5221"
        />
        <Path
          d="M32 7L55.7764 24.2746L46.6946 52.2254H17.3054L8.22359 24.2746L32 7Z"
          fill="url(#paint1_linear)"
        />
        <G filter="url(#filter0_i)">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 33C20 26.3811 25.3811 21 32 21C38.6189 21 44 26.3811 44 33C44 39.6189 38.6189 45 32 45C25.3811 45 20 39.6189 20 33ZM35.2842 35.1221L38.1642 28.5032C38.6189 27.4421 37.5579 26.3811 36.4968 26.8358L29.8779 29.7158C29.3726 29.9432 28.9432 30.3474 28.7158 30.8779L25.8611 37.5221C25.3811 38.5579 26.4674 39.6189 27.5032 39.1642L34.1221 36.2842C34.6274 36.0568 35.0568 35.6526 35.2842 35.1221ZM33.6421 33C33.6421 33.9069 32.9069 34.6421 32 34.6421C31.0931 34.6421 30.3579 33.9069 30.3579 33C30.3579 32.0931 31.0931 31.3579 32 31.3579C32.9069 31.3579 33.6421 32.0931 33.6421 33Z"
            fill="url(#paint2_linear)"
          />
        </G>
        <Defs>
          <LinearGradient
            id="paint0_linear"
            x1="45.5"
            y1="54"
            x2="19"
            y2="9"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#9C5221" />
            <Stop offset="0.437158" stopColor="#9C5221" stopOpacity="0.868853" />
            <Stop offset="0.489948" stopColor="#9C5221" stopOpacity="0.05" />
            <Stop offset="0.533109" stopColor="#9C5221" stopOpacity="0.840067" />
            <Stop offset="1" stopColor="#9C5221" stopOpacity="0.7" />
          </LinearGradient>
          <LinearGradient
            id="paint1_linear"
            x1="32"
            y1="7"
            x2="32"
            y2="57"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="white" />
            <Stop offset="1" stopColor="white" stopOpacity="0" />
          </LinearGradient>
          <LinearGradient
            id="paint2_linear"
            x1="39"
            y1="42.5"
            x2="22"
            y2="22.5"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#9C5221" />
            <Stop offset="1" stopColor="#9C5221" stopOpacity="0" />
          </LinearGradient>
        </Defs>
      </G>
    ),
    viewBox: "0 0 64 64",
  },
  DailyBronze: {
    svg: (
      <G fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M32 0L52.5692 7.48658L63.5138 26.4433L59.7128 48L42.9446 62.0702H21.0554L4.28719 48L0.486153 26.4433L11.4308 7.48658L32 0Z"
          fill="#F5F5FA"
        />
        <Path
          d="M32 3L50.6408 9.78471L60.5594 26.9642L57.1147 46.5L41.9186 59.2511H22.0814L6.88526 46.5L3.44057 26.9642L13.3592 9.78471L32 3Z"
          fill="url(#paint0_linear)"
        />
        <Path
          d="M32 7L48.0697 12.8489L56.6202 27.6588L53.6506 44.5L40.5505 55.4923H23.4495L10.3494 44.5L7.37981 27.6588L15.9303 12.8489L32 7Z"
          fill="#9C5221"
        />
        <Path
          d="M32 7L48.0697 12.8489L56.6202 27.6588L53.6506 44.5L40.5505 55.4923H23.4495L10.3494 44.5L7.37981 27.6588L15.9303 12.8489L32 7Z"
          fill="url(#paint1_linear)"
        />
        <G filter="url(#filter0_i)">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M36.9018 32.8543C40.4646 31.111 42.9305 27.459 42.9305 23.2318C42.9305 22.8616 42.6313 22.5625 42.2611 22.5625H38.9125V21.8374C38.9116 21.3754 38.5371 21 38.0751 21H26.3554C25.8934 21 25.5189 21.3754 25.5189 21.8374V22.5633H22.1694C21.7983 22.5633 21.5 22.8633 21.5 23.2327C21.5 27.4598 23.9658 31.1118 27.5287 32.8552C28.1398 33.9856 28.948 34.9164 29.9843 35.4838C29.9843 35.4932 29.9825 35.5018 29.9825 35.5112C29.9825 36.3349 30.4334 37.0471 31.0985 37.4345V38.8607L28.3078 43.3253H28.0292C27.5673 43.3253 27.1919 43.7007 27.1919 44.1626C27.1919 44.6246 27.5673 45 28.0292 45H36.4012C36.8632 45 37.2386 44.6246 37.2386 44.1626C37.2386 43.6998 36.8632 43.3253 36.4012 43.3253H36.1227L33.332 38.8607V37.4345C33.9962 37.0471 34.4479 36.3358 34.4479 35.5112C34.4479 35.5018 34.4462 35.4932 34.4462 35.4838C35.4824 34.9156 36.2907 33.9848 36.9018 32.8543ZM22.8628 23.9021H25.5266C25.5591 24.9546 25.7331 27.9844 26.6451 30.7613C24.5092 29.1766 23.0616 26.7107 22.8628 23.9021ZM38.9039 23.9021H41.5677C41.3689 26.7107 39.9213 29.1757 37.7854 30.7613C38.6973 27.9844 38.8713 24.9546 38.9039 23.9021ZM34.4471 32.1618C36.0627 29.0154 36.0644 24.412 36.0644 24.412V23.2318H37.458C37.3672 25.0746 36.894 30.0371 34.4471 32.1618Z"
            fill="url(#paint2_linear)"
          />
        </G>
        <Defs>
          <LinearGradient
            id="paint0_linear"
            x1="45.5"
            y1="54"
            x2="19"
            y2="9"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#9C5221" />
            <Stop offset="0.437158" stopColor="#9C5221" stopOpacity="0.868853" />
            <Stop offset="0.489948" stopColor="#9C5221" stopOpacity="0.05" />
            <Stop offset="0.533109" stopColor="#9C5221" stopOpacity="0.840067" />
            <Stop offset="1" stopColor="#9C5221" stopOpacity="0.7" />
          </LinearGradient>
          <LinearGradient
            id="paint1_linear"
            x1="32"
            y1="7"
            x2="32"
            y2="57"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="white" />
            <Stop offset="1" stopColor="white" stopOpacity="0" />
          </LinearGradient>
          <LinearGradient
            id="paint2_linear"
            x1="42.927"
            y1="43.2841"
            x2="19.7858"
            y2="19.7144"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#9C5221" />
            <Stop offset="1" stopColor="#9C5221" stopOpacity="0" />
          </LinearGradient>
        </Defs>
      </G>
    ),
    viewBox: "0 0 64 64",
  },
  OmniscientBronze: {
    svg: (
      <G fill="none">
        <Path
          d="M32 0L54.6274 9.37258L64 32L54.6274 54.6274L32 64L9.37258 54.6274L0 32L9.37258 9.37258L32 0Z"
          fill="#F5F5FA"
        />
        <Path
          d="M32 3L52.5061 11.4939L61 32L52.5061 52.5061L32 61L11.4939 52.5061L3 32L11.4939 11.4939L32 3Z"
          fill="url(#paint0_linear)"
        />
        <Path
          d="M32 7L49.6777 14.3223L57 32L49.6777 49.6777L32 57L14.3223 49.6777L7 32L14.3223 14.3223L32 7Z"
          fill="#9C5221"
        />
        <Path
          d="M32 7L49.6777 14.3223L57 32L49.6777 49.6777L32 57L14.3223 49.6777L7 32L14.3223 14.3223L32 7Z"
          fill="url(#paint1_linear)"
        />
        <G filter="url(#filter0_i)">
          <Path
            d="M32.9892 20.5801C35.7832 20.5801 37.9612 21.1301 39.5232 22.2301C41.1072 23.3301 41.8992 24.7601 41.8992 26.5201C41.8992 27.3561 41.7892 28.1151 41.5692 28.7971C41.3492 29.4571 40.9972 30.0511 40.5132 30.5791C40.0292 31.1071 39.6002 31.5251 39.2262 31.8331C38.8742 32.1191 38.3572 32.4931 37.6752 32.9551C36.2452 33.9451 35.3322 34.7371 34.9362 35.3311C34.1662 36.4971 33.3302 37.0801 32.4282 37.0801H30.2502C29.7222 37.0801 29.2822 36.8931 28.9302 36.5191C28.5782 36.1451 28.4792 35.7161 28.6332 35.2321C28.8312 34.5281 29.1832 33.8461 29.6892 33.1861C30.1952 32.5041 30.6462 31.9871 31.0422 31.6351C31.4602 31.2611 32.0102 30.8101 32.6922 30.2821C33.2202 29.8641 33.6162 29.5451 33.8802 29.3251C34.1442 29.0831 34.3862 28.7971 34.6062 28.4671C34.8482 28.1371 34.9692 27.8181 34.9692 27.5101C34.9692 26.3001 33.9792 25.6951 31.9992 25.6951C30.3932 25.6951 28.4682 25.9701 26.2242 26.5201C25.7842 26.6301 25.3662 26.5421 24.9702 26.2561C24.5962 25.9701 24.4092 25.5961 24.4092 25.1341V23.4511C24.4092 22.9011 24.5742 22.4171 24.9042 21.9991C25.2562 21.5591 25.7072 21.2951 26.2572 21.2071C28.5892 20.7891 30.8332 20.5801 32.9892 20.5801ZM32.7582 39.7201C33.2642 39.7201 33.7042 39.9071 34.0782 40.2811C34.4522 40.6551 34.6392 41.0951 34.6392 41.6011V43.1191C34.6392 43.6251 34.4522 44.0651 34.0782 44.4391C33.7042 44.8131 33.2642 45.0001 32.7582 45.0001H29.9202C29.4142 45.0001 28.9742 44.8131 28.6002 44.4391C28.2262 44.0651 28.0392 43.6251 28.0392 43.1191V41.6011C28.0392 41.0951 28.2262 40.6551 28.6002 40.2811C28.9742 39.9071 29.4142 39.7201 29.9202 39.7201H32.7582Z"
            fill="url(#paint2_linear)"
          />
        </G>
        <Defs>
          <LinearGradient
            id="paint0_linear"
            x1="45.5"
            y1="54"
            x2="19"
            y2="9"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#9C5221" />
            <Stop offset="0.437158" stopColor="#9C5221" stopOpacity="0.868853" />
            <Stop offset="0.489948" stopColor="#9C5221" stopOpacity="0.05" />
            <Stop offset="0.533109" stopColor="#9C5221" stopOpacity="0.840067" />
            <Stop offset="1" stopColor="#9C5221" stopOpacity="0.7" />
          </LinearGradient>
          <LinearGradient
            id="paint1_linear"
            x1="32"
            y1="7"
            x2="32"
            y2="57"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="white" />
            <Stop offset="1" stopColor="white" stopOpacity="0" />
          </LinearGradient>
          <LinearGradient
            id="paint2_linear"
            x1="36.5"
            y1="39"
            x2="23"
            y2="19.5"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#9C5221" />
            <Stop offset="1" stopColor="#9C5221" stopOpacity="0" />
          </LinearGradient>
        </Defs>
      </G>
    ),
    viewBox: "0 0 64 64",
  },
  ShortCircusBronze: {
    svg: (
      <G fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M32 0L64 32L32 64L0 32L32 0Z" fill="#F5F5FA" />
        <Path d="M32 3L61 32L32 61L3 32L32 3Z" fill="url(#paint0_linear)" />
        <Path d="M32 7L57 32L32 57L7 32L32 7Z" fill="#9C5221" />
        <Path d="M32 7L57 32L32 57L7 32L32 7Z" fill="url(#paint1_linear)" />
        <G filter="url(#filter0_i)">
          <Path
            d="M40.3766 23.7599C43.6722 25.4736 44.9534 29.5365 43.24 32.8296C40.7611 37.5949 36.8214 41.4392 32.0005 43.8035C27.1765 41.4392 23.2374 37.5949 20.7586 32.8296C19.2715 29.9687 20.0236 26.4545 22.552 24.4535C25.4631 22.1479 29.694 22.6404 32.0002 25.5514C34.0015 23.023 37.5151 22.271 40.3766 23.7599ZM28.9164 37.7913H31.4275V35.2392H27.4297C27.2136 35.2392 26.9999 35.1957 26.8029 35.114L27.9632 37.2293C28.1535 37.5752 28.521 37.7913 28.9164 37.7913ZM26.3859 32.8947C26.0078 33.4911 26.1825 34.282 26.7792 34.6604C26.9759 34.7857 27.203 34.855 27.4385 34.8589L28.1924 34.8766L29.1693 33.1844L29.7201 33.5345L28.7152 31.4165L26.4592 31.4621L27.0121 31.812L26.3859 32.8947ZM29.3204 27.8142L28.065 29.9878L30.2776 31.2651L32.2768 27.8029C32.3826 27.6151 32.5248 27.4531 32.6984 27.3211L30.2843 27.2692C29.8888 27.261 29.5195 27.4704 29.3204 27.8142ZM34.8268 28.0692C34.4985 27.4446 33.7291 27.2023 33.1021 27.5291C32.8948 27.637 32.7197 27.7993 32.6011 27.9978L32.2075 28.644L33.1847 30.3359L32.6054 30.6383L34.9438 30.8286L36.0308 28.8513L35.4514 29.1538L34.8268 28.0692ZM37.7594 33.1537L36.5056 30.9779L34.2954 32.2548L36.2919 35.7167C36.3998 35.9027 36.4688 36.1104 36.4992 36.3244L37.7482 34.2604C37.9537 33.9212 37.9579 33.4975 37.7594 33.1537ZM34.7857 37.7913C35.4903 37.8217 36.0864 37.2752 36.1168 36.5684C36.1274 36.3371 36.0733 36.1061 35.9612 35.8985L35.5985 35.2395H33.6446L33.6708 34.5847L32.3373 36.5165L33.5063 38.4463L33.5343 37.7916H34.7857V37.7913Z"
            fill="url(#paint2_linear)"
          />
        </G>
        <Defs>
          <LinearGradient
            id="paint0_linear"
            x1="45.5"
            y1="54"
            x2="19"
            y2="9"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#9C5221" />
            <Stop offset="0.437158" stopColor="#9C5221" stopOpacity="0.868853" />
            <Stop offset="0.489948" stopColor="#9C5221" stopOpacity="0.05" />
            <Stop offset="0.533109" stopColor="#9C5221" stopOpacity="0.840067" />
            <Stop offset="1" stopColor="#9C5221" stopOpacity="0.7" />
          </LinearGradient>
          <LinearGradient
            id="paint1_linear"
            x1="32"
            y1="7"
            x2="32"
            y2="57"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="white" />
            <Stop offset="1" stopColor="white" stopOpacity="0" />
          </LinearGradient>
          <LinearGradient
            id="paint2_linear"
            x1="38.8917"
            y1="38.3017"
            x2="21"
            y2="25.5"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#9C5221" />
            <Stop offset="1" stopColor="#9C5221" stopOpacity="0" />
          </LinearGradient>
        </Defs>
      </G>
    ),
    viewBox: "0 0 64 64",
  },
  WalkerBronze: {
    svg: (
      <G
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path d="M32 0L59.7128 16V48L32 64L4.28719 48V16L32 0Z" fill="#F5F5FA" />
        <Path
          d="M32 3L57.1147 17.5V46.5L32 61L6.88526 46.5V17.5L32 3Z"
          fill="url(#paint0_linear)"
        />
        <Path d="M32 7L53.6506 19.5V44.5L32 57L10.3494 44.5V19.5L32 7Z" fill="#9C5221" />
        <Path
          d="M32 7L53.6506 19.5V44.5L32 57L10.3494 44.5V19.5L32 7Z"
          fill="url(#paint1_linear)"
        />
        <G filter="url(#filter0_i)">
          <Path
            d="M36.7511 38.5711C36.5763 38.1924 36.4597 37.8137 36.4014 37.4349L36.0809 35.4248C36.0809 35.4248 36.0517 35.4539 36.0226 35.4831C35.8769 35.6287 34.857 36.6192 33.8662 37.5806C33.6913 37.7554 33.4873 37.9593 33.3125 38.105C33.4291 38.7459 33.6039 39.3286 33.8662 39.9112L36.314 45.0968C36.5763 45.6503 37.13 45.9999 37.7419 45.9999C37.975 45.9999 38.179 45.9416 38.4122 45.8543C39.199 45.4755 39.5195 44.5433 39.1698 43.7858L36.7511 38.5711Z"
            fill="url(#paint2_linear)"
          />
        </G>
        <G filter="url(#filter1_i)">
          <Path
            d="M39.8987 30.8511L39.2576 29.6858C38.2668 27.8795 36.7806 26.3938 34.9739 25.4033C33.9539 24.8498 33.4877 24.7041 33.0214 24.7041L30.865 24.8498C30.2239 24.8789 29.7577 25.1702 27.8926 27.5591C27.339 28.2583 26.6979 28.8701 25.9402 29.3653L24.5997 30.2393C23.9878 30.6471 23.8129 31.4337 24.2209 32.0455C24.6289 32.6573 25.4157 32.8321 26.0276 32.4242L27.3681 31.5502C28.3006 30.9385 29.1457 30.181 29.8451 29.307L30.8942 34.2887L28.8543 36.2697C28.0383 37.0854 27.4555 38.0759 27.1933 39.2121L25.9985 44.0481C25.7945 44.8929 26.319 45.7378 27.1641 45.9417C27.2807 45.9709 27.4264 46 27.5429 46C28.2423 46 28.8834 45.5047 29.0583 44.8055L30.2239 39.9404C30.3696 39.3869 30.6319 38.9208 31.0399 38.5129C31.0399 38.5129 34.8282 34.8131 35.1196 34.5218C35.9647 33.7061 35.6733 32.7738 35.5276 31.4628C35.4693 30.8219 35.3236 29.744 35.2361 28.8118C35.9064 29.4236 36.4892 30.1228 36.9555 30.9385L37.5966 32.1038C37.8297 32.5408 38.2959 32.7738 38.7331 32.7738C38.937 32.7738 39.1702 32.7155 39.345 32.6282C39.9861 32.2786 40.2192 31.492 39.8987 30.8511Z"
            fill="url(#paint3_linear)"
          />
        </G>
        <G filter="url(#filter2_i)">
          <Path
            d="M31.8457 24.0462C33.4297 23.8738 34.5739 22.4505 34.4015 20.867C34.2291 19.2835 32.8054 18.1396 31.2214 18.312C29.6375 18.4843 28.4933 19.9077 28.6657 21.4911C28.8381 23.0746 30.2618 24.2185 31.8457 24.0462Z"
            fill="url(#paint4_linear)"
          />
        </G>
        <Defs>
          <LinearGradient
            id="paint0_linear"
            x1="45.5"
            y1="54"
            x2="19"
            y2="9"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#9C5221" />
            <Stop offset="0.437158" stopColor="#9C5221" stopOpacity="0.868853" />
            <Stop offset="0.489948" stopColor="#9C5221" stopOpacity="0.05" />
            <Stop offset="0.533109" stopColor="#9C5221" stopOpacity="0.840067" />
            <Stop offset="1" stopColor="#9C5221" stopOpacity="0.7" />
          </LinearGradient>
          <LinearGradient
            id="paint1_linear"
            x1="32"
            y1="7"
            x2="32"
            y2="57"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="white" />
            <Stop offset="1" stopColor="white" stopOpacity="0" />
          </LinearGradient>
          <LinearGradient
            id="paint2_linear"
            x1="36.3115"
            y1="35.4248"
            x2="36.3115"
            y2="45.9999"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#9C5221" />
            <Stop offset="1" stopColor="#9C5221" stopOpacity="0" />
          </LinearGradient>
          <LinearGradient
            id="paint3_linear"
            x1="32.0208"
            y1="24.7041"
            x2="32.0208"
            y2="46"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#9C5221" />
            <Stop offset="1" stopColor="#9C5221" stopOpacity="0" />
          </LinearGradient>
          <LinearGradient
            id="paint4_linear"
            x1="31.2214"
            y1="18.312"
            x2="31.8454"
            y2="24.0462"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#9C5221" />
            <Stop offset="1" stopColor="#9C5221" stopOpacity="0" />
          </LinearGradient>
        </Defs>
      </G>
    ),
    viewBox: "0 0 64 64",
  },
  AdventurePlaceHolder: {
    svg: (
      <G fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M31 0L61.4338 22.1115L49.8091 57.8885H12.1909L0.566191 22.1115L31 0Z"
          fill="#F5F5FA"
        />
      </G>
    ),
    viewBox: "0 0 62 58",
  },
  DailyPlaceHolder: {
    svg: (
      <G fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M32 0L52.5692 7.48658L63.5138 26.4433L59.7128 48L42.9446 62.0702H21.0554L4.28719 48L0.486153 26.4433L11.4308 7.48658L32 0Z"
          fill="#F5F5FA"
        />
      </G>
    ),
    viewBox: "0 0 64 63",
  },
  OmniscientPlaceHolder: {
    svg: (
      <G fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M32 0L54.6274 9.37258L64 32L54.6274 54.6274L32 64L9.37258 54.6274L0 32L9.37258 9.37258L32 0Z"
          fill="#F5F5FA"
        />
      </G>
    ),
    viewBox: "0 0 64 64",
  },
  ShortCircusPlaceHolder: {
    svg: (
      <G fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M32 0L64 32L32 64L0 32L32 0Z" fill="#F5F5FA" />
      </G>
    ),
    viewBox: "0 0 64 64",
  },
  WalkerPlaceHolder: {
    svg: (
      <G fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M28 0L55.7128 16V48L28 64L0.287188 48V16L28 0Z" fill="#F5F5FA" />
      </G>
    ),
    viewBox: "0 0 56 64",
  },
  VeganPlaceHolder: {
    svg: (
      <G fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M32 0L57.0186 12.0483L63.1977 39.1207L45.8843 60.831H18.1157L0.802307 39.1207L6.98139 12.0483L32 0Z"
          fill="#F5F5FA"
        />
      </G>
    ),
    viewBox: "0 0 64 64",
  },
  VeganBronze: {
    svg: (
      <G fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M32 0L57.0186 12.0483L63.1977 39.1207L45.8843 60.831H18.1157L0.802307 39.1207L6.98139 12.0483L32 0Z"
          fill="#F5F5FA"
        />
        <Path
          d="M32 3L54.6731 13.9188L60.2729 38.4531L44.5826 58.1281H19.4174L3.72709 38.4531L9.32689 13.9188L32 3Z"
          fill="url(#paint0_linear)"
        />
        <Path
          d="M32 7L51.5458 16.4128L56.3732 37.563L42.8471 54.5242H21.1529L7.6268 37.563L12.4542 16.4128L32 7Z"
          fill="#9C5221"
        />
        <Path
          d="M32 7L51.5458 16.4128L56.3732 37.563L42.8471 54.5242H21.1529L7.6268 37.563L12.4542 16.4128L32 7Z"
          fill="url(#paint1_linear)"
        />
        <G filter="url(#filter0_i)">
          <Path
            d="M25.3462 43.5535C25.3462 43.8004 25.5459 43.9998 25.7927 43.9998H38.0306C38.2774 43.9998 38.4768 43.8004 38.4768 43.5535L40.17 34.665H23.6533L25.3462 43.5535Z"
            fill="url(#paint2_linear)"
          />
          <Path
            d="M39.8179 33.4147H32.1495C32.5738 21.0406 22 20 22 20C28.6029 23.3478 30.8714 29.9876 31.6219 33.4147H24.0064C23.7598 33.4147 23.5595 33.6148 23.5595 33.8622L23.6193 34.1742H31.7747H32.1099H40.2044L40.2641 33.8622C40.2644 33.6148 40.0644 33.4147 39.8179 33.4147Z"
            fill="url(#paint3_linear)"
          />
          <Path
            d="M38.9898 22.8319C35.0003 26.1779 33.5846 31.069 33.5846 31.069C40.0193 26.0497 42.5944 20 42.5944 20C31.3326 21.1589 32.6834 32.227 32.6834 32.227C35.0645 24.1839 38.9898 22.8319 38.9898 22.8319Z"
            fill="url(#paint4_linear)"
          />
        </G>
        <Defs>
          <LinearGradient
            id="paint0_linear"
            x1="50.5"
            y1="51.5"
            x2="16.5"
            y2="10.5"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#9C5221" />
            <Stop offset="0.437158" stopColor="#9C5221" stopOpacity="0.868853" />
            <Stop offset="0.489948" stopColor="#9C5221" stopOpacity="0.05" />
            <Stop offset="0.533109" stopColor="#9C5221" stopOpacity="0.840067" />
            <Stop offset="1" stopColor="#9C5221" stopOpacity="0.7" />
          </LinearGradient>
          <LinearGradient
            id="paint1_linear"
            x1="32"
            y1="7"
            x2="32"
            y2="57"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="white" />
            <Stop offset="1" stopColor="white" stopOpacity="0" />
          </LinearGradient>
          <LinearGradient
            id="paint2_linear"
            x1="36.4995"
            y1="42"
            x2="22.4995"
            y2="33.5"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#9C5221" />
            <Stop offset="1" stopColor="#9C5221" stopOpacity="0" />
          </LinearGradient>
          <LinearGradient
            id="paint3_linear"
            x1="35.5"
            y1="34"
            x2="22"
            y2="20"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#9C5221" />
            <Stop offset="1" stopColor="#9C5221" stopOpacity="0" />
          </LinearGradient>
          <LinearGradient
            id="paint4_linear"
            x1="39.0005"
            y1="25"
            x2="35.0005"
            y2="22"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#9C5221" />
            <Stop offset="1" stopColor="#9C5221" stopOpacity="0" />
          </LinearGradient>
        </Defs>
      </G>
    ),
    viewBox: "0 0 64 64",
  },
  VeganSilver: {
    svg: (
      <G fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M32 0L57.0186 12.0483L63.1977 39.1207L45.8843 60.831H18.1157L0.802307 39.1207L6.98139 12.0483L32 0Z"
          fill="#F5F5FA"
        />
        <Path
          d="M32 3L54.6731 13.9188L60.2729 38.4531L44.5826 58.1281H19.4174L3.72709 38.4531L9.32689 13.9188L32 3Z"
          fill="url(#paint0_linear)"
        />
        <Path
          d="M32 7L51.5458 16.4128L56.3732 37.563L42.8471 54.5242H21.1529L7.6268 37.563L12.4542 16.4128L32 7Z"
          fill="#C0C0C0"
        />
        <Path
          d="M32 7L51.5458 16.4128L56.3732 37.563L42.8471 54.5242H21.1529L7.6268 37.563L12.4542 16.4128L32 7Z"
          fill="url(#paint1_linear)"
        />
        <G filter="url(#filter0_i)">
          <Path
            d="M25.3466 43.5535C25.3466 43.8004 25.5463 43.9998 25.7932 43.9998H38.031C38.2779 43.9998 38.4773 43.8004 38.4773 43.5535L40.1704 34.665H23.6538L25.3466 43.5535Z"
            fill="url(#paint2_linear)"
          />
          <Path
            d="M39.8179 33.4147H32.1495C32.5738 21.0406 22 20 22 20C28.6029 23.3478 30.8714 29.9876 31.6219 33.4147H24.0064C23.7598 33.4147 23.5595 33.6148 23.5595 33.8622L23.6193 34.1742H31.7747H32.1099H40.2044L40.2641 33.8622C40.2644 33.6148 40.0644 33.4147 39.8179 33.4147Z"
            fill="url(#paint3_linear)"
          />
          <Path
            d="M38.9894 22.8319C34.9998 26.1779 33.5841 31.069 33.5841 31.069C40.0188 26.0497 42.5939 20 42.5939 20C31.3321 21.1589 32.6829 32.227 32.6829 32.227C35.064 24.1839 38.9894 22.8319 38.9894 22.8319Z"
            fill="url(#paint4_linear)"
          />
        </G>
        <Defs>
          <LinearGradient
            id="paint0_linear"
            x1="50.5"
            y1="51.5"
            x2="16.5"
            y2="10.5"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#C0C0C0" />
            <Stop offset="0.437158" stopColor="#C0C0C0" stopOpacity="0.868853" />
            <Stop offset="0.489948" stopColor="#C0C0C0" stopOpacity="0.05" />
            <Stop offset="0.533109" stopColor="#C0C0C0" stopOpacity="0.840067" />
            <Stop offset="1" stopColor="#C0C0C0" stopOpacity="0.7" />
          </LinearGradient>
          <LinearGradient
            id="paint1_linear"
            x1="32"
            y1="7"
            x2="32"
            y2="57"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="white" />
            <Stop offset="1" stopColor="white" stopOpacity="0" />
          </LinearGradient>
          <LinearGradient
            id="paint2_linear"
            x1="36.5"
            y1="42"
            x2="22.5"
            y2="33.5"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#C0C0C0" />
            <Stop offset="1" stopColor="#C0C0C0" stopOpacity="0" />
          </LinearGradient>
          <LinearGradient
            id="paint3_linear"
            x1="35.5"
            y1="34"
            x2="22"
            y2="20"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#C0C0C0" />
            <Stop offset="1" stopColor="#C0C0C0" stopOpacity="0" />
          </LinearGradient>
          <LinearGradient
            id="paint4_linear"
            x1="39"
            y1="25"
            x2="35"
            y2="22"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#C0C0C0" />
            <Stop offset="1" stopColor="#C0C0C0" stopOpacity="0" />
          </LinearGradient>
        </Defs>
      </G>
    ),
    viewBox: "0 0 64 64",
  },
  VeganGold: {
    svg: (
      <G fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M32 0L57.0186 12.0483L63.1977 39.1207L45.8843 60.831H18.1157L0.802307 39.1207L6.98139 12.0483L32 0Z"
          fill="#F5F5FA"
        />
        <Path
          d="M32 3L54.6731 13.9188L60.2729 38.4531L44.5826 58.1281H19.4174L3.72709 38.4531L9.32689 13.9188L32 3Z"
          fill="url(#paint0_linear)"
        />
        <Path
          d="M32 7L51.5458 16.4128L56.3732 37.563L42.8471 54.5242H21.1529L7.6268 37.563L12.4542 16.4128L32 7Z"
          fill="#E3AD42"
        />
        <Path
          d="M32 7L51.5458 16.4128L56.3732 37.563L42.8471 54.5242H21.1529L7.6268 37.563L12.4542 16.4128L32 7Z"
          fill="url(#paint1_linear)"
        />
        <G filter="url(#filter0_i)">
          <Path
            d="M25.3466 43.5535C25.3466 43.8004 25.5463 43.9998 25.7932 43.9998H38.031C38.2779 43.9998 38.4773 43.8004 38.4773 43.5535L40.1704 34.665H23.6538L25.3466 43.5535Z"
            fill="url(#paint2_linear)"
          />
          <Path
            d="M39.8179 33.4147H32.1495C32.5738 21.0406 22 20 22 20C28.6029 23.3478 30.8714 29.9876 31.6219 33.4147H24.0064C23.7598 33.4147 23.5595 33.6148 23.5595 33.8622L23.6193 34.1742H31.7747H32.1099H40.2044L40.2641 33.8622C40.2644 33.6148 40.0644 33.4147 39.8179 33.4147Z"
            fill="url(#paint3_linear)"
          />
          <Path
            d="M38.9894 22.8319C34.9998 26.1779 33.5841 31.069 33.5841 31.069C40.0188 26.0497 42.5939 20 42.5939 20C31.3321 21.1589 32.6829 32.227 32.6829 32.227C35.064 24.1839 38.9894 22.8319 38.9894 22.8319Z"
            fill="url(#paint4_linear)"
          />
        </G>
        <Defs>
          <LinearGradient
            id="paint0_linear"
            x1="50.5"
            y1="51.5"
            x2="16.5"
            y2="10.5"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#BC7F09" />
            <Stop offset="0.437158" stopColor="#BC7F09" stopOpacity="0.868853" />
            <Stop offset="0.489948" stopColor="#BC7F09" stopOpacity="0.05" />
            <Stop offset="0.533109" stopColor="#BC7F09" stopOpacity="0.840067" />
            <Stop offset="1" stopColor="#BC7F09" stopOpacity="0.7" />
          </LinearGradient>
          <LinearGradient
            id="paint1_linear"
            x1="32"
            y1="7"
            x2="32"
            y2="57"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="white" />
            <Stop offset="1" stopColor="white" stopOpacity="0" />
          </LinearGradient>
          <LinearGradient
            id="paint2_linear"
            x1="36.5"
            y1="42"
            x2="22.5"
            y2="33.5"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#BC7F09" />
            <Stop offset="1" stopColor="#BC7F09" stopOpacity="0" />
          </LinearGradient>
          <LinearGradient
            id="paint3_linear"
            x1="35.5"
            y1="34"
            x2="22"
            y2="20"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#BC7F09" />
            <Stop offset="1" stopColor="#BC7F09" stopOpacity="0" />
          </LinearGradient>
          <LinearGradient
            id="paint4_linear"
            x1="39"
            y1="25"
            x2="35"
            y2="22"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#BC7F09" />
            <Stop offset="1" stopColor="#BC7F09" stopOpacity="0" />
          </LinearGradient>
        </Defs>
      </G>
    ),
    viewBox: "0 0 64 64",
  },
  VeganPlatine: {
    svg: (
      <G
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M32 0L57.0186 12.0483L63.1977 39.1207L45.8843 60.831H18.1157L0.802307 39.1207L6.98139 12.0483L32 0Z"
          fill="#F5F5FA"
        />
        <Path
          d="M32 3L54.6731 13.9188L60.2729 38.4531L44.5826 58.1281H19.4174L3.72709 38.4531L9.32689 13.9188L32 3Z"
          fill="url(#paint0_linear)"
        />
        <Path
          d="M32 3L54.6731 13.9188L60.2729 38.4531L44.5826 58.1281H19.4174L3.72709 38.4531L9.32689 13.9188L32 3Z"
          fill="url(#paint1_linear)"
        />
        <G filter="url(#filter0_i)">
          <Path
            d="M32 7L51.5458 16.4128L56.3732 37.563L42.8471 54.5242H21.1529L7.6268 37.563L12.4542 16.4128L32 7Z"
            fill="url(#paint2_linear)"
          />
          <Path
            d="M32 7L51.5458 16.4128L56.3732 37.563L42.8471 54.5242H21.1529L7.6268 37.563L12.4542 16.4128L32 7Z"
            fill="url(#paint3_linear)"
            fill-opacity="0.5"
          />
        </G>
        <G filter="url(#filter1_i)">
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M39.8179 32.4147H32.1495C32.5738 20.0406 22 19 22 19C28.6029 22.3478 30.8714 28.9876 31.6219 32.4147H24.0064C23.7598 32.4147 23.5595 32.6148 23.5595 32.8622L23.6193 33.1742H31.7747H32.1099H40.2044L40.2641 32.8622C40.2644 32.6148 40.0644 32.4147 39.8179 32.4147ZM25.3466 42.5536C25.3466 42.8004 25.5463 42.9998 25.7932 42.9998H38.031C38.2779 42.9998 38.4773 42.8004 38.4773 42.5536L40.1704 33.665H23.6538L25.3466 42.5536ZM33.5841 30.069C33.5841 30.069 34.9998 25.1779 38.9894 21.8319C38.9894 21.8319 35.064 23.1839 32.6829 31.227C32.6829 31.227 31.3321 20.1589 42.5939 19C42.5939 19 40.0188 25.0497 33.5841 30.069Z"
            fill="url(#paint4_linear)"
          />
        </G>
        <Defs>
          <LinearGradient
            id="paint0_linear"
            x1="50.5"
            y1="51.5"
            x2="16.5"
            y2="10.5"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#B9AFAA" />
            <Stop offset="0.437158" stopColor="#B9AFAA" stopOpacity="0.868853" />
            <Stop offset="0.489948" stopColor="#B9AFAA" stopOpacity="0.05" />
            <Stop offset="0.533109" stopColor="#B9AFAA" stopOpacity="0.53" />
            <Stop offset="1" stopColor="#B9AFAA" stopOpacity="0.7" />
          </LinearGradient>
          <LinearGradient
            id="paint1_linear"
            x1="15.18"
            y1="9.38"
            x2="52.88"
            y2="54.04"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#FF7575" />
            <Stop offset="0.25" stopColor="#FFFF75" />
            <Stop offset="0.446205" stopColor="#ADFF75" />
            <Stop offset="0.491057" stopColor="#A5FF75" stopOpacity="0.2" />
            <Stop offset="0.539185" stopColor="#A0FF75" />
            <Stop offset="0.776042" stopColor="#5075FF" />
            <Stop offset="1" stopColor="#A075FF" />
          </LinearGradient>
          <LinearGradient
            id="paint2_linear"
            x1="17.5"
            y1="12.5"
            x2="50"
            y2="51"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#FF7575" stopOpacity="0.8" />
            <Stop offset="0.25" stopColor="#FFFF75" stopOpacity="0.8" />
            <Stop offset="0.505208" stopColor="#A0FF75" stopOpacity="0.8" />
            <Stop offset="0.776042" stopColor="#5075FF" stopOpacity="0.8" />
            <Stop offset="1" stopColor="#A075FF" stopOpacity="0.8" />
          </LinearGradient>
          <LinearGradient
            id="paint3_linear"
            x1="8"
            y1="6.5"
            x2="43"
            y2="45"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="white" stopOpacity="0.5" />
            <Stop offset="1" stopColor="white" stopOpacity="0" />
          </LinearGradient>
          <LinearGradient
            id="paint4_linear"
            x1="23.5"
            y1="21.5"
            x2="39"
            y2="43.5"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#D67365" />
            <Stop offset="0.255208" stopColor="#C8BA7C" />
            <Stop offset="0.494792" stopColor="#9BCC77" />
            <Stop offset="0.713542" stopColor="#618DA3" />
            <Stop offset="0.994792" stopColor="#5D5AC2" />
          </LinearGradient>
        </Defs>
      </G>
    ),
    viewBox: "0 0 64 64",
  },
};
