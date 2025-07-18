import profile from "../assets/images/profile.jpeg";

const Profile = () => {
  return (
    <div className=" flex flex-col items-center ">
      <img
        src={profile}
        alt="profile-image"
        className="rounded-full object-cover w-32 h-32 mb-4 "
      />
      <p className="text-white text-4xl font-bold">Jessica Randall</p>
      <p className="text-2xl tracking-tighter text-lime-400 font-semibold">
        London, United Kingdom
      </p>
      <p className="text-lg text-gray-400 mt-7">
        "Front-end developer and avid reader."
      </p>
    </div>
  );
};

export default Profile;
