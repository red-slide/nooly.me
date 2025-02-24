import { Card, Section } from "@/components/ui";
import { useTranslations } from "next-intl";

export const About = () => {
  const label1 = [
    ["+1M Users", "of users globally."],
    ["No Hassle", "results without complexity."],
    ["Up to 25x speed", "seen by Nooly users*"],
    ["Trusted by Millions", "reliable online tools."],
  ];

  const label2 = [
    [
      "5 years experience",
      "providing the best tools that save time, increase productivity and make online tasks easier for everyone.",
    ],
    [
      "For all users",
      "The number #1 platform for video music, and image with easy and fast tools to help you transform your ideas.",
    ],
  ];

  const t = useTranslations("Navegate");

  return (
    <Section
      id={t.raw("OnPage")[1]}
      className="flex scroll-mt-14 items-center justify-center gap-4 pb-4 pt-10 min-[600px]:gap-6"
    >
      <h2 className="dark:text-light-2 text-dark-2 text-nowrap pb-6 text-[7vw] font-semibold min-[600px]:text-[7vw] min-[800px]:text-[40pt]">
        Making a Difference<span className="text-rose-2">+</span>
      </h2>

      <div>
        <div className="flex w-[86vw] flex-col items-center justify-center gap-6 min-[330px]:w-[88vw] min-[750px]:w-[42rem]">
          <div className="grid w-full grid-cols-1 grid-rows-4 gap-6 min-[750px]:grid-cols-2 min-[750px]:grid-rows-2">
            {label1.map((e, i) => {
              return (
                <Card
                  className="dark:bg-dark-3 bg-light-3 text-nowrap px-6 py-4 min-[500px]:py-6"
                  key={i}
                >
                  <h3 className="gradient-text-rose text-[5vw] font-semibold min-[500px]:text-[20pt]">
                    {e[0]}
                  </h3>
                  <p className="dark:text-light-2 text-dark-2 text-[3.5vw] font-semibold min-[600px]:text-[13pt]">
                    {e[1]}
                  </p>
                </Card>
              );
            })}
          </div>

          <div className="flex w-full flex-col gap-6">
            {label2.map((e, i) => {
              return (
                <Card
                  className="dark:bg-dark-3 bg-light-3 px-6 py-4 min-[500px]:py-6"
                  key={i}
                >
                  <h3 className="gradient-text-rose text-nowrap text-[5vw] font-semibold min-[500px]:text-[20pt] min-[750px]:text-[22pt]">
                    {e[0]}
                  </h3>
                  <p className="dark:text-light-2 text-dark-2 text-[3vw] font-semibold min-[600px]:text-[10pt] min-[700px]:text-[13pt]">
                    {e[1]}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
};
