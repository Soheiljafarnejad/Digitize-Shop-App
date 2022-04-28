const productList = document.querySelector("#productList");

const data = [
  {
    title: "آیفون 13 مدل 128GB",
    price: "۲۴,۵۶۰,۰۰۰",
    img: "../../assets/img/Home/1.png",
    id: 1,
  },
  {
    title: "آیفون 13 مدل 128GB",
    price: "۲۴,۵۶۰,۰۰۰",
    img: "../../assets/img/Home/2.png",
    id: 2,
  },
  {
    title: "آیفون 12 مدل 128GB",
    price: "۲۴,۵۶۰,۰۰۰",
    img: "../../assets/img/Home/3.png",
    id: 3,
  },
  {
    title: "آیفون 13 مدل 128GB",
    price: "۲۴,۵۶۰,۰۰۰",
    img: "../../assets/img/Home/4.png",
    id: 4,
  },
  {
    title: "آیفون 13 مدل 128GB",
    price: "۲۴,۵۶۰,۰۰۰",
    img: "../../assets/img/Home/5.png",
    id: 5,
  },
  {
    title: "آیفون 13 مدل 128GB",
    price: "۲۴,۵۶۰,۰۰۰",
    img: "../../assets/img/Home/1.png",
    id: 6,
  },
  {
    title: "آیفون 13 مدل 128GB",
    price: "۲۴,۵۶۰,۰۰۰",
    img: "../../assets/img/Home/2.png",
    id: 7,
  },
  {
    title: "آیفون 12 مدل 128GB",
    price: "۲۴,۵۶۰,۰۰۰",
    img: "../../assets/img/Home/3.png",
    id: 8,
  },
  {
    title: "آیفون 13 مدل 128GB",
    price: "۲۴,۵۶۰,۰۰۰",
    img: "../../assets/img/Home/4.png",
    id: 9,
  },
  {
    title: "آیفون 13 مدل 128GB",
    price: "۲۴,۵۶۰,۰۰۰",
    img: "../../assets/img/Home/5.png",
    id: 10,
  },
];

let html = "";

data.forEach((item) => {
  html += ` <div x-data="{color:'blue'}"
    class="bg-white p-4 sm:p-2 flex flex-col items-center justify-center rounded-xl shadow-lg"
  >
    <div class="bg-gray-200 rounded-xl w-full p-2 mb-3">
      <img src=${item.img} />
    </div>
    <div class="flex items-center justify-between w-full mb-4">
      <p class="font-medium text-xs md:text-sm text-gray-300">تلفن همراه</p>
      <div class="flex items-center">
        <div
        @click="color='blue'"
        :class="color==='blue' ? 'ring-1 ring-sky-500 ' : '' "
          class="w-6 h-6 md:w-7 md:h-7 rounded-full bg-sky-500 border-2 -ml-1 border-white flex items-center justify-center cursor-pointer"
        >
          <svg
          x-show="color==='blue'"
            xmlns="http://www.w3.org/2000/svg"
            class="w-3 h-3 md:w-4 md:h-4 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div
        @click="color='red'"
        :class="color==='red' ? 'ring-1 ring-red-500 ' : '' "
          class="w-6 h-6 md:w-7 md:h-7 rounded-full bg-red-500 border-2 border-white -ml-1 flex items-center justify-center cursor-pointer"
        >
          <svg
          x-show="color==='red'"
            xmlns="http://www.w3.org/2000/svg"
            class="w-3 h-3 md:w-4 md:h-4 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div
        @click="color='orange'"
        :class="color==='orange' ? 'ring-1 ring-orange-500 ' : '' "
          class="w-6 h-6 md:w-7 md:h-7 rounded-full bg-orange-500 border-2 border-white flex items-center justify-center cursor-pointer"
        >
          <svg
          x-show="color==='orange'"
            xmlns="http://www.w3.org/2000/svg"
            class="w-3 h-3 md:w-4 md:h-4 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        
      </div>
    </div>
    <h3
      class="font-medium self-start mb-2"
    >
      ${item.title}
    </h3>
    <p
      class="md:text-lg text-orange-500 self-end"
    >
      ${item.price} تومان
    </p>
    <button
      class="text-orange-600 font-bold mt-4 py-2 border-t border-gray-300 w-full"
    >
      مشاهده و سفارش
    </button>
  </div>`;
});

productList.innerHTML = html;
