const MusicItem = () => {
  // const items=[
  //   {id:1,author:}
  // ]
  return (
    <>
      <div className="music-items">
        <header>
          <h1>Popular artists</h1>
          <span>Show all</span>
        </header>
        <ul className="items">
          <li>
            <img src="https://via.placeholder.com/150" alt="music-img" />
            <div className="item-info">
              <h3>Artist Name</h3>
              <span>Song Name</span>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MusicItem;
