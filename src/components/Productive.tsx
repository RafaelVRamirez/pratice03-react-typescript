const Productive = () => {
  return (
    <div className="my-40 max-w-240 mx-auto md:grid md:grid-cols-2 md:gap-4 md:items-center ">
      <img
        className="mb-12 md:w-95"
        src="/public/images/illustration-stay-productive.png"
        alt="MoreInformation"
      />

      <div className="grid grid-cols-1">
        <h2 className="font-bold mb-4">Stay productive, wherever you are</h2>

        <p className="text-sm mb-4">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>

        <p className="text-sm mb-4">
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>

        <a href="#" className="text-Teal-200 flex items-center gap-2">
          <p>See how Fylo works</p>
          <img src="/public/images/icon-arrow.svg" alt="icon" />
        </a>
      </div>
    </div>
  );
};

export default Productive;
