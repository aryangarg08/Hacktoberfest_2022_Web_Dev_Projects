import ImageSlider from "./ImageSlider";
const App = () => {
  const slides = [
    { url: "http://localhost:3000/img1.jpg", title: "Wallpaper1"},
    { url: "http://localhost:3000/img2.jpg", title: "Wallpaper2" },
    { url: "http://localhost:3000/img3.jpg", title: "Wallpaper3" },
    { url: "http://localhost:3000/img4.jpg", title: "Wallpaper4" },
    { url: "http://localhost:3000/img5.jpg", title: "Wallpaper5" },
    { url: "http://localhost:3000/img6.jpeg", title: "Wallpaper6" },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <div>
      <h1>Image Slider</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default App;