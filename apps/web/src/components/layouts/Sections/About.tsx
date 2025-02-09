import { Card, Section } from "@/components/ui";

export const About = () => {
  const texts1 = [
    ["+1M Users", "of users globally."],
    ["No Hassle", "results without complexity."],
    ["Up to 25x speed", "seen by Nooly users*"],
    ["Trusted by Millions", "reliable online tools."],
  ];

  const texts2 = [
    [
      "5 years experience",
      "providing the best tools that save time, increase productivity and make online tasks easier for everyone.",
    ],
    [
      "For all users",
      "The number #1 platform for video music, and image with easy and fast tools to help you transform your ideas.",
    ],
  ];

  return (
    <Section
      id="#About"
      className="w-full py-12 flex justify-center items-center select-none"
    >

    <h2 className="font-semibold min-[800px]:text-[40pt] min-[600px]:text-[7vw] text-[7vw] text-nowrap dark:text-light-2 text-dark-2 pb-6">
      Making a Difference<span className="text-rose-2">+</span>
    </h2>

      <Card className="border-none flex flex-col justify-center items-center gap-6 min-[750px]:w-[42rem] min-[330px]:w-[90vw] min-[0px]:w-[86vw] p-0">
        
        <div className="w-full grid min-[700px]:grid-cols-2 min-[700px]:grid-rows-2 grid-cols-1 grid-rows-4 gap-6">
          {texts1.map((e, i) => {
            return (
              <Card className="min-[500px]:py-6 py-4 bg-gradient-to-b dark:from-dark-3 dark:to-dark-2 from-light-3 to-light-2 text-nowrap" key={i}>
                <h3 className="gradient-text-rose min-[500px]:text-[20pt] text-[5vw] font-semibold">
                  {e[0]}
                </h3>
                <p className="min-[600px]:text-[13pt] text-[3.5vw] font-semibold dark:text-light-2 text-dark-2">{e[1]}</p>
              </Card>
            );
          })}
        </div>

        <div className="w-full gap-6 flex flex-col">
          {texts2.map((e, i) => {
            return (
              <Card className="min-[500px]:py-6 py-4 px-6  bg-gradient-to-b dark:from-dark-3 dark:to-dark-2 from-light-3 to-light-2" key={i}>
                <h3 className="text-nowrap gradient-text-rose min-[750px]:text-[22pt] min-[500px]:text-[20pt] text-[5vw] font-semibold">
                  {e[0]}
                </h3>
                <p className="min-[700px]:text-[13pt] min-[600px]:text-[10pt] text-[3vw] font-semibold dark:text-light-2 text-dark-2">{e[1]}</p>
              </Card>
            );
          })}
        </div>
      </Card>
    </Section>
  );
};
