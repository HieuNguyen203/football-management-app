import Carousel from 'react-bootstrap/Carousel';

function CarouselFade() {
  return (
    <Carousel fade={true} slide>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://i.guim.co.uk/img/media/2e4d375786300ae56ebe74b3cb3a44080744b81f/0_319_5405_3243/master/5405.jpg?width=700&dpr=1&s=none"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Wayne Rooney trờ thành HLV chính thức CLB ở giải VDQG Hà Lan</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltd2459dafe53b48ac/6571d8a2a136780406ca1386/GOAL_-_Multiple_Images_-_2_Split_-_Facebook_-_2023-12-07T143658.708.png?auto=webp&format=pjpg&width=640&quality=60"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Wayne Rooney loại John Rice ra khỏi đội hình chính thức</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt2d49ec54ad4f16c7/6579fed906127a040ad4457c/Kylian-Mbappe.jpeg?auto=webp&format=pjpg&width=640&quality=60"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Kylian-Mbappe trờ thành vua phá lưới 2023</h3>
          <p>
            Kylian-Mbappe đã ghi 50 bàn trong năm 2023 tính trên mọi đấu trường
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;