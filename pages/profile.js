export default function Profile() {
  return (
    <div className="container">
      <div className="app">
        <img src="/zeit.svg"></img>
        <div className="bio">
          <div className="profile-picture">
            <img src="https://res.cloudinary.com/demo/image/upload/w_120,h_120,c_thumb,g_face/smiling_man.png"></img>
          </div>
          <div className="name">Teslin Jacob</div>
          <div className="designation">Assistant Professor</div>
        </div>
        <div className="info"></div>
      </div>

      <style jsx>{`
        .container {
          text-align: center;
        }

        .bio {
          display: grid;
          grid-template:  [img] "img   name" 				100px [name]
                          [img] "img   designation" 50px  [designation]
                          /      150px  auto;
          
        }

        .bio > .profile-picture {
          grid-area: img;
          padding: 10%;
        }

        .bio > .name {
          grid-area: name;
          text-align: left;
          font-size: 40px;
          padding: 3% 0% 0% 1%;
        }

        .bio > .designation {
          grid-area: designation;
          text-align: left;
          font-style: italic;
          padding: 1%;
        }
      `}</style>
    </div>
  );
}
