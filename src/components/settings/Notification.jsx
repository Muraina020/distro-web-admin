import Switch from "../ui/Switch";

const Notification = () => {
  return (
    <div>
      <p className="text-[#707070] md:text-[1.125rem] text-base py-4 border-b px-6">
        Select the kind of notification you get about activities
      </p>

      <div className="px-5 space-y-3">
        <div className="flex items-center gap-x-3">
          <div>
            <h1 className="md:text-[1.3125rem] text-base font-medium text-primary-black">
              Email notifications
            </h1>
            <p className="md:text-[0.8125rem] text-xs  w-[19rem] text-graylight leading-[1.3125rem;]">
              Get email to find out what’s going on when you’re not online.
            </p>
          </div>
          <Switch />
        </div>
        <div className="flex items-center gap-x-3">
          <div>
            <h1 className="md:text-[1.3125rem] text-base font-medium text-primary-black">
              Reminders
            </h1>
            <p className="md:text-[0.8125rem] text-xs w-[19rem] text-graylight leading-[1.3125rem;]">
              These are notifications to inform you of new updates done in any
              section{" "}
            </p>
          </div>
          <Switch isDefaultCheck={true} />
        </div>
        <div className="flex items-center gap-x-3">
          <div>
            <h1 className="md:text-[1.3125rem] text-base font-medium text-primary-black">
              Reviews
            </h1>
            <p className="md:text-[0.8125rem] text-xs w-[19rem] text-graylight leading-[1.3125rem;]">
              This notification informs you of new review
            </p>
          </div>
          <Switch isDefaultCheck={true} />
        </div>
      </div>
    </div>
  );
};
export default Notification;
