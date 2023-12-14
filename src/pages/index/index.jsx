import { View, Swiper, SwiperItem, Image } from "@tarojs/components";
import "./index.css";

const list = [
  "https://placehold.co/375x200?text=1",
  "https://placehold.co/375x200?text=2",
  "https://placehold.co/375x200?text=3",
  "https://placehold.co/375x200?text=4",
];

/**
 * 说明：
 * 编译为 H5，开启 circular 后，
 */

export default function Index() {
  const onChange = (e) => {
    const { current, source } = e.detail;
    console.log("-->", current, source);
  };

  return (
    <View className="index">
      <Swiper
        className="swiper"
        interval={1000}
        circular={true}
        autoplay={true}
        onChange={onChange}
      >
        {list.map((item, index) => {
          return (
            <SwiperItem key={index} className="swiper-item">
              <Image className="img" src={item} />
            </SwiperItem>
          );
        })}
      </Swiper>
    </View>
  );
}
