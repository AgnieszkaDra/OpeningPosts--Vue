import { v4 as uuidv4 } from 'uuid';

const postDataArray = [
  {
    title: 'Leśne zwierzęta',
    author: 'Magdalena Paul',
    body: `Hop hop! Dzisiaj wołam do Was z lasu, w którym między drzewami grasuje lis i jeż.  🦊  🌳  🦔 A może ktoś jeszcze się tu ukrył? 🧐
    Worek idealny dla przedszkolaka, ale też dla mamy, która potrzebuje osobnej torby na potrzebne rzeczy dla malucha.
    Wykonany został z bawełny, która w dotyku przypomina len. Jest bardzo trwały (u nas funkcjonuje od roku, tak się sprawdzał, że uszyłam sobie większy 👍 ). Śliczny wzór podkreśla czarna tasiemka. 
    Worek w edycji limitowanej, materiał jest już niestety niedostępny. Jego wymiary to 42x42 cm. 
    Polecam jako twórca i użytkownik 😊`,
    userId: uuidv4()
  },
  {
    title: 'Wilk',
    author: 'Magdalena Paul',
    body: `Proszę Państwa, oto wilk. 🐺 Kiedyś bardzo się zdziwiłam jak się okazało, że wilki unikają ludzi i są bardzo płochliwe.  Nasz wilk się oswoił, ukrył w czerni i chętnie się z kimś zaprzyjaźni 😊
    Bluza wykonana z dresówki drapanej, ze ściągaczami, które "rosną" wraz z dzieckiem - wystarczy je odwinąć. 
    95% bawełna, 5% elastan.
    A może zamarzyła Ci się taka bluza w innym kolorze? 
    Zapraszam do wiadomości prywatnej! `,
    userId: uuidv4()
  },
  {
    title: 'Fiolet',
    author: 'Magadalena Paul',
    body: `Fiolet! Bardzo modny kolor tego sezonu tym razem na podstawowej bluzie w Szyte Ukryte. Połączenie z kwiatkami przypomina o zbliżającej się wiośnie  🌷 🪻 ☀️ 
    Podstawowy krój - do takiej bluzy możesz zamówić swoją wymarzoną naszywkę. Wystarczy, że do mnie napiszesz 🙂
    Legginsy ze wzmocnionym szwem, gotowe do zadań specjalnych. 
    Dresik wykonany z dresówki drapanej, 95% bawełna 5% elastan, rozmiar 98/104. Rękawy i nogawki rosną wraz z maluchem.`,
    userId: uuidv4()
  },
  {
    title: 'Sukienka',
    author: 'Magdalena Paul',
    body: `Najmniejsze cudeńko w mojej kolekcji - sukieneczka w rozmiarze 68 ☺️ 
    Uszyłam ją dawno, gdy jeszcze nie miałam porządnej maszyny do robienia wykończenia rodem ze sklepu. Coś dla fanów rękodzieła i niepowtarzalności. Powstała z myślą "może kiedyś będę miała swoją pracownię? W sumie lubię szyć, może warto spróbować...?". 😏 Wtedy nie wiedziałam jeszcze, że na jej plecach naszyję swoje logo. 
    Na sukience ukryła się cała bajkowa opowieść o rudej wróżce i jej przyjaciołach. 🥀 🐿 🦌🧚‍♀️
    Zapraszam do wiadomości prywatnej 🙂 `,
    userId: uuidv4()
  },
  {
    title: 'Wieloryby',
    author: 'Magdalena Paul',
    body: `Ktoś z Was ma ochotę zanurzyć się w głębinach oceanu z rodziną wielorybów? 🐋 🐋 🐋 
    Ostatnio trafiłam na film, w którym dwa wieloryby pływały wokół dziewczyny na desce SUP. Niesamowite! Nie mogłam się oderwać od ich gracji i spokoju 😌 
    Dresik uszyty z dresówki z baaardzo milutkim wykończeniem od środka. ☺️ 95% bawełna, 5% elastan. Dres rośnie razem z maluchem i jest dostępny w rozmiarze 104/110.
    Jeśli masz ochotę, żeby Twój Maluch śmigał w takim dresiku, napisz do mnie 😊 📧`,
    userId: uuidv4()
  },
  {
    title: 'Czereśnie',
    author: 'Magdalena Paul',
    body: `Czasem trafię na taki materiał, że od razu wiem co chciałabym z niego uszyć ☺️ 
    Przed Wami śliczna trzyletnia Helenka w spódniczce z połowy koła. Bardzo lubię patrzeć jak ubrania ożywają na Waszych maluchach 🥰
    Czereśniowy wzór podkreśla czarna koronka. 🍒🍒🍒 
    Spódniczka wykonana z bawełny, dostępna w rozmiarze 98 cm. 
    Jeśli interesuje Cię inny rozmiar, napisz! 📧`,
    userId: uuidv4()
  },
  {
    title: 'Na Walentynki',
    author: 'Magdalena Paul',
    body: `Słodkie spotkanie różu i czerwieni. Na plecach miękkiej sztruksowej sukienki ukryło się małe serduszko ❤️ 
    Już niedługo wspomina się św. Walentego, który potajemnie błogosławił śluby młodych legionistów, zakazane w tamtych czasach. Ciekawe, prawda? 🤔 
    Przed Wami sukienka, która powstała pod wpływem inspiracji popularnymi Walentynkami 🥰 Będzie się ślicznie prezentować na dwulatce z białą koszulką i rajstopkami. 
    Dostępna od ręki w rozmiarze 92 cm, inne rozmiary na zamówienie. 
    Materiał to 100% bawełna.`,
    userId: uuidv4()
  },
  {
    title: 'Pinokio',
    author: 'Magdalena Paul',
    body: `Wersja zimowa wypróbowana na dworze i jako, że dzieci chore (u Was też? 🤧)- przy gotowaniu zupy. W domu zdecydowanie za ciepła ale poza domem idealna. 😉 
    Opcja idealna również na prezent. 🎁 A ku mojemu zdziwieniu Boże Narodzenie tuż tuż. 🤭🎄
    Koloru możemy poszukać specjalnie pod Twoje potrzeby, wystarczy że do mnie napiszesz. 📩`,
    userId: uuidv4()
  },
  {
    title: 'Opaski',
    author: 'Magdalena Paul',
    body: `Czy Wasza mama też zawsze radziła zakrywać uszy i czoło żeby nie zmarzły? 😊 Sama dalej słyszę tą troskę przy każdym wspólnym jesiennym i zimowym wyjściu 🍂❄️ 
    Także dziewczyny, dziś coś dla Was 👱🏻‍♀️ Opaski z mięciutkiej dzianiny ściągaczowej, 95% bawełny organicznej, 5% elastan. Koloru jak zwykle możemy poszukać razem 🌈
    Niedługo pojawi się wersja ze ściągacza swetrowego w zestawie z komino szalikiem, nie lada gratka dla każdego zmarzlucha 🌬️`,
    userId: uuidv4()
  },
  {
    title: 'Czapki',
    author: 'Magdalena Paul',
    body: `Przedstawiam Wam niedźwiadki, które chciały się ukryć na czapkach, ale znalazły je kolorowe nitki i nie pozwoliły zapaść w zimowy sen 🐻🪡 
    Po zamówienia na czapki zapraszam do wiadomości prywatnej, czapki i kominy szyję na wymiar z materiału, który wcześniej ustalimy. Prążek, polar, dresówka, zieleń, błękit, pomarańcz - wszystko zależy od Twoich preferencji 😊 🍂🍁`,
    userId: uuidv4()
  },
  
];

export default postDataArray

