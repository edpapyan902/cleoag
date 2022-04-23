import Assets from "../assets/assets";

const Home = () => {
  return (
    <>
      <div className="ml-4 md:ml-16 lg:ml-25">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-5 flex flex-col">
            <h2 className="md:mt-24 font-mont-regular text-3xl md:text-5xl leading-normal">
              Wir stehen für <br/> Effizienz, Qualität und <br/>Fachwissen.
            </h2>
            <p className="mt-10 pl-20">
              Die CLEO AG unterstützt Unternehmen professionell und effizient bei der Konzeption und Umsetzung von ICT-Projekten, ohne dass sie eigene Ressourcen einbinden müssen. 
            </p>
            <p className="mt-5 pl-20">
              Dafür stellen wir erfahrene Experten und Expertenteams zur Seite, die über ein breit gefächertes Know-how in der Banking-, Versicherungs-, Logistik- und Automotivebranche, der öffentlichen Verwaltung und im Transportwesen verfügen. Zu unseren Spezialisten gehören ICT-Berater, Projektleiter, Businessanalysten und Entwickler.
            </p>
          </div>
          <div className="col-span-12 md:col-span-7">
            <img className="w-full" src={Assets.images.homeIntro} alt="Home Intro" />
          </div>
        </div>

        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-5 flex flex-col">
            <h1 className="mt-24 font-mont-semibold text-5xl leading-normal">
              Branchen und Technologien
            </h1>
            <p className="mt-10 pl-20">
              Kein Unternehmen kommt um skalierbare IT-Lösungen herum. Das rasante Tempo der modernen Geschäftsprozesse macht weder vor dem Start-up, dem Mittelständler oder dem Konzern halt.
            </p>
            <p className="mt-5 pl-20">
              Wir kennen die Herausforderungen, vor denen Unternehmen heute stehen. Eine Kombination aus langjähriger Erfahrung,  persönlichen Skills und ausserorderdentlicher Begeisterung für die Herausforderung bieten wir ein breites Beratungsspektrum an. 
            </p>
            <p className="mt-5 pl-20">
              Wir stellen Ihnen von Softwareentwicklern bis zu Projektleiter die perfekten Unterstützer zur Seite, damit Sie Ihr Projekt schnell und effizient umsetzen können. Unsere Spezialisten beherrschen den aktuellen TeckStack bei den Programmiersprachen, Frameworks und den anderen Technologien, die im täglichen Job verlangt werden.
            </p>
          </div>
        </div>
      </div>
      <div className="py-12 bg-gray-200">
        <div className="grid grid-cols-3 md:grid-cols-5 gap-x-0.5">
          <div className="">
            <img src={Assets.images.imgProfile1} alt="Profile1"/>
          </div>
          <div className="">
            <img src={Assets.images.imgProfile2} alt="Profile2"/>
          </div>
          <div className="">
            <img src={Assets.images.imgProfile3} alt="Profile3"/>
          </div>
          <div className="">
            <img src={Assets.images.imgProfile4} alt="Profile4"/>
          </div>
          <div className="">
            <img src={Assets.images.imgProfile5} alt="Profile5"/>
          </div>
        </div>
      </div>
      <div className="px-4 md:px-16 lg:px-25 py-8 md:py-16 gradient-bg-1">
        <div className="flex items-center">
          <img className="inline-block mr-4 w-11 md:w-16"
            src={Assets.images.svgLogo2}
            alt="Nu Logo"
          />
          <span className="font-mont-semibold text-2xl md:text-3xl text-white">nu.</span>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-5">
            <h6 className="mt-12 font-mont-semibold text-lg text-white">Was ist nu.?</h6>
            <p className="mt-5 text-white leading-relaxed">
              Chancengleichheit und Individualität im Bildungsbereich definieren die zwei Hauptziele des Bildungsprojektes nuLXP.
            </p>
            <p className="mt-5 text-white leading-relaxed">
              Die CLEO AG setzt sich mit ausgewählten Schweizer Hochschulen aktiv für die Weiterentwicklung des Bildungssystems ein. Die CLEO AG spendet aus jedem Projektertrag einen Teil in das Projekt nu LXP. So wird jeder Gewinn für die CLEO AG zum Gewinn für die Bildung. Jeder Einsatz unserer Spezialisten trägt automatisch zur Weiterentwicklung dieses Projekts bei. Ihr Benefit: Sie investieren nicht nur in die Weiterentwicklung Ihres Unternehmens, somdern gleichzeitig in ein Projekt, das für Chancengleichheit im Bildungssystem sorgt. Mehr zu unseren Pilotschulen und Meilensteinen erfahren sie hier.
            </p>
          </div>
          <div className="md:hidden mt-5 col-span-12 h-72 relative">
            <img className="absolute w-full" src={Assets.images.homeIntro2} alt="Home Intro2" />
          </div>
        </div>
      </div>
      <div className="hidden md:block px-4 md:px-16 lg:px-25">
        <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-start-6 md:col-span-7 md:relative md:h-12 lg:h-24 md:px-4">
              <img className="md:absolute bottom-0 w-full" src={Assets.images.homeIntro2} alt="Home Intro2" />
            </div>
          </div>
      </div>
      <div className="h-96 md:hidden">

      </div>
    </>
  );
};

export default Home;

