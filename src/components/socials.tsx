const Socials = () => {
  const socials = [
    { name: "Github", url: "https://github.com" },
    { name: "Frontend Mentor", url: "https://www.frontendmentor.io" },
    { name: "LinkedIn", url: "https://www.linkedin.com" },
    { name: "Twitter", url: "https://twitter.com" },
    { name: "Instagram", url: "https://www.instagram.com" },
  ];
  return (
    <div className="flex flex-col justify-center items-center space-y-4 mt-6">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.url}
          className="text-white text-lg hover:bg-lime-400 hover:text-black transition-colors flex justify-center bg-neutral-700 rounded-lg py-2 w-full max-w-xs px-20 "
          target="_blank"
          rel="noopener noreferrer"
        >
          {social.name}
        </a>
      ))}
    </div>
  );
};

export default Socials;
