import Image from "next/image";
import Card from "./../components/card/Card";

export default function Home() {
  return (
    <div className="w-full">
      <div className="background-animation"></div>
      <hr className="bg-firstColor mt-1 h-2" />

      <div
        className={`text-secondColor flex items-center container justify-around w-fit hero mx-10 sm:mx-auto flex-col-reverse sm:flex-row`}
      >
        <div className="w-full sm:w-1/2">
          <h1 className="text-5xl mb-5">Chef Restorant</h1>
          <p className="text-xl mb-5">
            Lokantamıza hoş geldiniz! Lezzet Noktası, lezzetin ve keyfin
            buluştuğu bir nokta. Sizi yaratıcı ve enfes tatlarla dolu bir
            yolculuğa çıkarmaya davet ediyoruz. Burada her bir tabak, tutkuyla
            hazırlanmış ve size özel bir deneyim sunmak için bekliyor. Bizimle
            birlikte keyifli bir zaman geçirmek için masa ayırtmayı unutmayın!
          </p>
        </div>
        <div>
          <Image src="/logo.png" alt="logo" width={300} height={300} />
        </div>
      </div>

      <div className="flex items-center justify-between gap-2 flex-col sm:flex-row mt-20">
        <Image
          src="https://i.pinimg.com/564x/a2/45/24/a24524c60d6ea16adf8cf6aad6b45e77.jpg"
          alt=""
          width={400}
          height={50}
          className="w-full sm:w-1/2 h-1/2 border-t-10  border-firstColor border-r-8"
        />
        <div className="mx-8 my-4 sm:my-0">
          <h1 className="text-5xl mb-5">Lezzet Noktası</h1>
          <p className="text-xl mb-5">
            Lezzet Noktasında her damak tadına uygun bir seçenek bulabilirsiniz.
            Usta şeflerimizin özenle hazırladığı yemeklerimizle sizleri memnun
            etmek için buradayız. Menümüzdeki her bir lezzeti keşfetmek için
            lütfen aşağıya göz atın.
          </p>
        </div>
      </div>
      <div className="text-center my-10">
        <h1 className="text-6xl">Yemek Tavsiyeleri</h1>
        <div className="m-20 flex items-center flex-wrap justify-between gap-5">
          {/*cards*/}
          <Card type="food" />
          <Card type="food" />
          <Card type="food" />
          <Card type="food" />
        </div>
      </div>
    </div>
  );
}
