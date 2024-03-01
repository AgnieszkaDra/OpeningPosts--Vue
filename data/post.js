import { v4 as uuidv4 } from 'uuid';
import wild1 from '../src/assets/Forest/forest-bag.1.jpg'
import wild2 from '../src/assets/Forest/forest-bag.2.jpg'
import wild3 from '../src/assets/Forest/forest-bag.3.jpg'
import wolf1 from '../src/assets/Wolf/wolf.1.jpg'
import wolf2 from '../src/assets/Wolf/wolf.2.jpg'
import wolf3 from '../src/assets/Wolf/wolf.3.jpg'
import wolf4 from '../src/assets/Wolf/wolf.4.jpg'
import wolf5 from '../src/assets/Wolf/wolf.5.jpg'
import violet1 from '../src/assets/Violet/Violet.1.jpg'
import violet2 from '../src/assets/Violet/Violet.2.jpg'
import violet3 from '../src/assets/Violet/Violet.3.jpg'
import fairy1 from '../src/assets/Fairy/fairy.1.jpg'
import fairy2 from '../src/assets/Fairy/fairy.2.jpg'
import whale1 from '../src/assets/Whale/whale.1.jpg'
import whale2 from '../src/assets/Whale/whale.2.jpg'
import whale3 from '../src/assets/Whale/whale.3.jpg'
import whale4 from '../src/assets/Whale/whale.4.jpg'
import cherry1 from '../src/assets/Cherry/cherry.1.jpg'
import cherry2 from '../src/assets/Cherry/cherry.2.jpg'
import cherry3 from '../src/assets/Cherry/cherry.3.jpg'
import hearts1 from '../src/assets/Hearts/hearts.1.jpg'
import hearts2 from '../src/assets/Hearts/hearts.2.jpg'
import hearts3 from '../src/assets/Hearts/hearts.3.jpg'
import redBand1 from '../src/assets/RedBand/winter-band.1.jpg'
import redBand2 from '../src/assets/RedBand/winter-band.2.jpg'
import redBand3 from '../src/assets/RedBand/winter-band.3.jpg'
import band1 from '../src/assets/Bands/band.1.jpg'
import band2 from '../src/assets/Bands/band.2.jpg'
import complet1 from '../src/assets/Complet/complet.1.jpg'
import complet2 from '../src/assets/Complet/complet.2.jpg'
import complet3 from '../src/assets/Complet/complet.3.jpg'


const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Vivamus adipiscing fermentum quam volutpat aliquam. Integer et elit eget elit facilisis tristique. Vivamus dignissim tortor id quam porttitor fermentum. Nullam blandit bibendum nisi eget viverra. Sed velit urna, interdum vel, ultricies vel, faucibus at, quam. Donec elit est, consectetuer adipiscing, aliquet id, vulputate a, magna.

Nullam sapien sem, ornare ac, nonummy non, lobortis a, enim. Nunc tincidunt ante vitae massa. Duis ante orci, molestie vitae, placerat vel, aliquet ut, massa. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat, tellus eu sollicitudin consequat, felis libero efficitur arcu, non congue lorem felis eu turpis. Suspendisse viverra ligula nec semper ultricies. Sed auctor laoreet ligula, sit amet fringilla leo. Suspendisse potenti. Integer dictum auctor ipsum, non vestibulum nisi lobortis et. Etiam id aliquet metus, id bibendum urna.

Sed tempor enim et nisi finibus, quis gravida justo pulvinar. Curabitur nec mi vel arcu hendrerit faucibus at eget sapien. In hac habitasse platea dictumst. Sed eget quam vitae augue tempor egestas id in massa. Vivamus ultricies id enim in scelerisque. Phasellus vel elit varius, scelerisque lorem eu, dignissim eros. Nunc vitae leo ut est lacinia tristique. Etiam malesuada ut nulla a convallis. In vehicula, turpis sed interdum finibus, lorem nulla mattis nisi, vitae fermentum nulla odio et quam. Vivamus vitae est eget ex lacinia feugiat. Sed lobortis orci eu metus posuere congue. Sed vehicula ante nec ex vestibulum, at efficitur felis auctor. Etiam ut nunc bibendum, lacinia nisl ac, fermentum erat. Sed id metus nec mauris volutpat dapibus eget a nisl. Sed ut elit nec eros volutpat sodales.`


const postDataArray = [
  {
    title: 'Leśne zwierzęta',
    author: 'Wojtek Paul',
    body: `Hop hop! Dzisiaj wołam do Was z lasu, w którym między drzewami grasuje lis i jeż.  🦊  🌳  🦔 A może ktoś jeszcze się tu ukrył? 🧐
    Worek idealny dla przedszkolaka, ale też dla mamy, która potrzebuje osobnej torby na potrzebne rzeczy dla malucha.
    Wykonany został z bawełny, która w dotyku przypomina len. Jest bardzo trwały (u nas funkcjonuje od roku, tak się sprawdzał, że uszyłam sobie większy 👍 ). Śliczny wzór podkreśla czarna tasiemka. 
    Worek w edycji limitowanej, materiał jest już niestety niedostępny. Jego wymiary to 42x42 cm. 
    Polecam jako twórca i użytkownik 😊,`,
    bodySecond: lorem,
    background: wild1,
    images: [
      {
       image1: wild1,
       image2: wild2,
       image3: wild3,
       id:0
     }
    ],
    userId: uuidv4(),
  },
  {
    title: 'Wilk',
    author: 'Wojtek Paul',
    body: `Proszę Państwa, oto wilk. 🐺 Kiedyś bardzo się zdziwiłam jak się okazało, że wilki unikają ludzi i są bardzo płochliwe.  Nasz wilk się oswoił, ukrył w czerni i chętnie się z kimś zaprzyjaźni 😊
    Bluza wykonana z dresówki drapanej, ze ściągaczami, które "rosną" wraz z dzieckiem - wystarczy je odwinąć. 
    95% bawełna, 5% elastan.
    A może zamarzyła Ci się taka bluza w innym kolorze? 
    Zapraszam do wiadomości prywatnej! `,
    bodySecond: lorem,
    background: wolf1,
    images: [
      {
       image1: wolf1,
       image2: wolf2,
       image3: wolf3,
       image4: wolf4,
       image5: wolf5,
       id:0
     }
    ],
    userId: uuidv4(),
  },
  {
    title: 'Fiolet',
    author: 'Magdalena Paul',
    body: `Fiolet! Bardzo modny kolor tego sezonu tym razem na podstawowej bluzie w Szyte Ukryte. Połączenie z kwiatkami przypomina o zbliżającej się wiośnie  🌷 🪻 ☀️ 
    Podstawowy krój - do takiej bluzy możesz zamówić swoją wymarzoną naszywkę. Wystarczy, że do mnie napiszesz 🙂
    Legginsy ze wzmocnionym szwem, gotowe do zadań specjalnych. 
    Dresik wykonany z dresówki drapanej, 95% bawełna 5% elastan, rozmiar 98/104. Rękawy i nogawki rosną wraz z maluchem.`,
    background: violet1,
    bodySecond: lorem,
    images: [
      {
       image1: violet1,
       image2: violet2,
       image3: violet3,
       id:0
     }
    ],
    userId: uuidv4()
  },
  {
    title: 'Sukienka',
    author: 'Magdalena Paul',
    body: `Najmniejsze cudeńko w mojej kolekcji - sukieneczka w rozmiarze 68 ☺️ 
    Uszyłam ją dawno, gdy jeszcze nie miałam porządnej maszyny do robienia wykończenia rodem ze sklepu. Coś dla fanów rękodzieła i niepowtarzalności. Powstała z myślą "może kiedyś będę miała swoją pracownię? W sumie lubię szyć, może warto spróbować...?". 😏 Wtedy nie wiedziałam jeszcze, że na jej plecach naszyję swoje logo. 
    Na sukience ukryła się cała bajkowa opowieść o rudej wróżce i jej przyjaciołach. 🥀 🐿 🦌🧚‍♀️
    Zapraszam do wiadomości prywatnej 🙂 `,
    background: fairy1,
    bodySecond: lorem,
    images: [
      {
       image1: fairy1,
       image2: fairy2,
       id:0
     }
    ],
    userId: uuidv4()
  },
  {
    title: 'Wieloryby',
    author: 'Magdalena Paul',
    body: `Ktoś z Was ma ochotę zanurzyć się w głębinach oceanu z rodziną wielorybów? 🐋 🐋 🐋 
    Ostatnio trafiłam na film, w którym dwa wieloryby pływały wokół dziewczyny na desce SUP. Niesamowite! Nie mogłam się oderwać od ich gracji i spokoju 😌 
    Dresik uszyty z dresówki z baaardzo milutkim wykończeniem od środka. ☺️ 95% bawełna, 5% elastan. Dres rośnie razem z maluchem i jest dostępny w rozmiarze 104/110.
    Jeśli masz ochotę, żeby Twój Maluch śmigał w takim dresiku, napisz do mnie 😊 📧`,
    background: whale1,
    bodySecond: lorem,
    images: [
      {
       image1: whale1,
       image2: whale2,
       image3: whale3,
       image4: whale4,
        id:0
     }
    ],
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
    background: cherry1,
    bodySecond: lorem,
    images: [
      {
       image1: cherry1,
       image2: cherry2,
       image3: cherry3,
       id:0
     }
    ],
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
    background: hearts1,
    bodySecond: lorem,
    images: [
      {
       image1: hearts1,
       image2: hearts2,
       image3: hearts3,
       id:0
     }
    ],
    userId: uuidv4()
  },
  {
    title: 'Zima',
    author: 'Magdalena Paul',
    body: `Wersja zimowa wypróbowana na dworze i jako, że dzieci chore (u Was też? 🤧)- przy gotowaniu zupy. W domu zdecydowanie za ciepła ale poza domem idealna. 😉 
    Opcja idealna również na prezent. 🎁 A ku mojemu zdziwieniu Boże Narodzenie tuż tuż. 🤭🎄
    Koloru możemy poszukać specjalnie pod Twoje potrzeby, wystarczy że do mnie napiszesz. 📩`,
    background: redBand1,
    bodySecond: lorem,
    images: [
      {
       image1: redBand1,
       image2: redBand2,
       image3: redBand3,
       id:0
     }
    ],
    userId: uuidv4()
  },
  {
    title: 'Opaski',
    author: 'Magdalena Paul',
    body: `Czy Wasza mama też zawsze radziła zakrywać uszy i czoło żeby nie zmarzły? 😊 Sama dalej słyszę tą troskę przy każdym wspólnym jesiennym i zimowym wyjściu 🍂❄️ 
    Także dziewczyny, dziś coś dla Was 👱🏻‍♀️ Opaski z mięciutkiej dzianiny ściągaczowej, 95% bawełny organicznej, 5% elastan. Koloru jak zwykle możemy poszukać razem 🌈
    Niedługo pojawi się wersja ze ściągacza swetrowego w zestawie z komino szalikiem, nie lada gratka dla każdego zmarzlucha 🌬️`,
    background: band1,
    bodySecond: lorem,
    images: [
      {
       image1: band1,
       image2: band2,
       id:0
     }
    ],
    userId: uuidv4()
  },
  {
    title: 'Czapki',
    author: 'Magdalena Paul',
    body: `Przedstawiam Wam niedźwiadki, które chciały się ukryć na czapkach, ale znalazły je kolorowe nitki i nie pozwoliły zapaść w zimowy sen 🐻🪡 
    Po zamówienia na czapki zapraszam do wiadomości prywatnej, czapki i kominy szyję na wymiar z materiału, który wcześniej ustalimy. Prążek, polar, dresówka, zieleń, błękit, pomarańcz - wszystko zależy od Twoich preferencji 😊 🍂🍁`,
    background: complet1,
    bodySecond: lorem,
    images: [
      {
       image1: complet1,
       image2: complet2,
       image3: complet3,
       id:0
     }
    ],
    userId: uuidv4()
  },
  
];

export default postDataArray

