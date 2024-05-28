function App() {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 grayscale-[40%] bg-[url('/dirt-min.jpg')] bg-no-repeat bg-center bg-cover z-10"
      ></div>
      <div className="absolute inset-0 bg-black opacity-50 z-20"></div>
      <div className="absolute z-40 flex-col flex items-center justify-center inset-0">
      <h1 className=" font-black text-4xl md:text-5xl lg:text-7xl text-white">
        North Fork Events
      </h1>
      <span className="text-white text-2xl mt-5">COMING SOON</span>
      </div>
    </div>
  );
}

export default App;