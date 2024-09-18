// import imageSrc from "/app/img/image.svg";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center h-52">
        <h1 className="text-center text-8xl font-bold">GIVENCHY</h1>
      </div>
      <div className="">
        <div className="flex gap-20 flex-col m-[97px]">
          <div className="w-[638px] text-4xl font-medium ">
            COUTURE MAKEUP. Рассыпчатая пудра и скользящая помада с
            ультра-тонкой текстурой придают коже естественный цвет, при этом
            матируя и подсвечивая её.
          </div>
          <button className="bg-[#600027] w-[344px] h-[85px] rounded-[52px] text-3xl">
            Купить от 29 000 ₽
          </button>
        </div>
        <div className="">{/* <img src={imageSrc} alt="" /> */}</div>
      </div>
    </>
  );
}
