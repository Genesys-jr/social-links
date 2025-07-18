import profile from "../assets/images/profile.jpeg";

const Profile = () => {
  return (
    <div className=" flex flex-col items-center p-8">
      <img
        src={profile}
        alt="profile-image"
        className="rounded-full object-contain w-40 h-40 mb-4"
      />
      <p className="text-white text-4xl font-bold">Jessica Randall</p>
      <p className="text-2xl tracking-tighter text-lime-400">
        London, United Kingdom
      </p>
      <p className="text-lg text-gray-400 mt-7">
        {" "}
        "Front-end developer and avid reader."
      </p>
    </div>
  );
};

export default Profile;
