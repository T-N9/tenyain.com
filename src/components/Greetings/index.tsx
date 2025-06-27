'use client'
import React from "react";

const Greetings = () => {
  const date = new Date();
  const day = date.getDay();
  let titleText = "";
  let dayText = "";

  switch (day) {
    case 0:
      titleText = "God bless...";
      dayText = "Have a beautiful Sunday.";
      break;
    case 1:
      titleText = "Stay sharp!";
      dayText = "Have a great Monday.";
      break;
    case 2:
      titleText = "Be positive.";
      dayText = "Have a fantastic Tuesday.";
      break;
    case 3:
      titleText = "Stay fresh.";
      dayText = "Have a winning Wednesday.";

      break;
    case 4:
      titleText = "Brave and bold.";
      dayText = "Have an awesome Thursday.";
      break;
    case 5:
      titleText = "TGIF!!!";
      dayText = "Have an amazing weekend.";
      break;
    case 6:
      titleText = "Be happy.";
      dayText = "Have a super Saturday.";
      break;
    default:
      break;
  }

  return (
    <>
      <div className=" mt-5">
        <p className="">
          <span className={`text-4xl font-extrabold uppercase`}>{titleText}</span><br/>
          <span className="text-2xl text-primary-600 dark:text-accent-600">{dayText}</span>
        </p>
      </div>
    </>
  );
};

export default Greetings;
