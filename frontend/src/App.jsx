import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Calendar from './pages/Calendar'
import Restaurant from './pages/Restaurant'
import Faqs from './pages/Faqs'
import About from './pages/About'
import Home from './pages/Home'
import Success from './pages/Success'
import Cancel from './pages/Cancel'
import TicketPurchase from './pages/TicketPurchase'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

export default function App() {
  const fullCalendar = [
    {
      id: 1,
      artist: "The Killers",
      img:"https://res.cloudinary.com/dele4dvi9/image/upload/v1737800970/The_Bait_Shop/the_killers_razett.png",
      date: "2004-11-04",
      time: "20:00",
      price: "$25",
      blurb: "Las Vegas' rising stars, The Killers, are on the verge of taking the world by storm! Their debut album, Hot Fuss, featuring iconic singles like \"Mr. Brightside\" and \"Somebody Told Me,\" has captivated fans and critics alike. Praised by NME as \"irresistibly stylish,\" they've been making waves on shows like Late Night with Conan O'Brien and The Tonight Show with Jay Leno. Don't miss their electric energy live at The Bait Shop!",
      yt: "https://www.youtube.com/watch?v=K9FMpOduOWI"
    },
    {
      id: 2,
      artist: "Modest Mouse",
      img: "https://res.cloudinary.com/dele4dvi9/image/upload/v1737800794/The_Bait_Shop/modest_jeo6pg.png",
      date: "2005-01-06",
      time: "20:00",
      price: "$28",
      blurb: "Catch the groundbreaking indie legends Modest Mouse as they bring their unique sound to The Bait Shop! Their latest album, Good News for People Who Love Bad News, has earned them Grammy nominations and massive acclaim, with Spin calling it \"a game-changer for indie rock.\" Their breakout single \"Float On\" has been dominating the charts, and recent performances on The Late Show with David Letterman and Jimmy Kimmel Live! prove this is a band you don't want to miss.",
      yt: "https://www.youtube.com/watch?v=xAxtQmkZm7E"
    },
    {
      id: 3,
      artist: "Death Cab for Cutie",
      img: "https://res.cloudinary.com/dele4dvi9/image/upload/v1737799918/The_Bait_Shop/deathcab_f1kh5d.png",
      date: "2005-05-05",
      time: "19:30",
      price: "$40",
      blurb: "Washington's indie rock favorites, Death Cab for Cutie, bring their emotive sound to The Bait Shop! Their critically acclaimed album Transatlanticism has garnered praise from Rolling Stone and Pitchfork, with standout tracks like \"The Sound of Settling\" and \"Title and Registration\". The band recently performed on The Late Late Show with Craig Kilborn, cementing their status as a must-see act.",
      yt: "https://www.youtube.com/watch?v=R56hsle0s4A"
    },
    {
      id: 4,
      artist: "The Walkmen",
      img: "https://res.cloudinary.com/dele4dvi9/image/upload/v1737800964/The_Bait_Shop/Walkmen_wtqc6m.png",
      date: "2005-01-27",
      time: "20:00",
      price: "$25",
      blurb: "Don't miss The Walkmen, the New York-based indie rockers known for their melancholic yet powerful sound. Their album Bows + Arrows, featuring the hit single \"The Rat,\" has been lauded by critics as one of the best records of the year. Appearances on Late Night with Conan O'Brien and their feature in NME highlight their rising stardom.",
      yt: "https://www.youtube.com/watch?v=Fg8U3YG9wCA"
    },
    {
      id: 5,
      artist: "Rooney",
      img: "https://res.cloudinary.com/dele4dvi9/image/upload/v1737800965/The_Bait_Shop/rooney_e2m0fm.png",
      date: "2004-02-11",
      time: "20:00",
      price: "$20",
      blurb: "California's own Rooney are bringing their sun-soaked melodies and retro vibes to The Bait Shop! Their self-titled debut album features hits like \"Blueside\" and \"I'm Shakin'.\" With praise from Spin and appearances on Carson Daly and David Letterman, Rooney is quickly becoming a name to watch in the indie scene.",
      yt: "https://www.youtube.com/watch?v=3Rt8_iLLYOs"
    },
    {
      id: 6,
      artist: "Rachael Yamagata",
      img: "https://res.cloudinary.com/dele4dvi9/image/upload/v1737800951/The_Bait_Shop/Rachael_Yamagata2005_enhanced_y09jmu.png",
      date: "2004-12-16",
      time: "19:30",
      price: "$30",
      blurb: "Experience the soulful voice of Rachael Yamagata as she takes the stage at The Bait Shop! Her debut album Happenstance is a heartfelt journey, featuring standout tracks like \"Worn Me Down\" and \"Be Be Your Love.\" Praised by Rolling Stone for her raw and emotional performances, Rachael has also appeared on The Tonight Show with Jay Leno.",
      yt: "https://www.youtube.com/watch?v=6laFt5pmbm0"
    },
    {
      id: 7,
      artist: "Cobra Verde",
      img:"https://res.cloudinary.com/dele4dvi9/image/upload/v1737802833/The_Bait_Shop/Cobra_verde_enhanced_g79zrm.png",
      date: "2003-12-17",
      time: "20:00",
      price: "$15",
      blurb: "Cleveland rockers Cobra Verde bring their gritty, guitar-driven sound to The Bait Shop! Known for their energetic live performances, the band's latest album Easy Listening has been turning heads, with tracks like \"Riot Industry\" gaining airplay. The band has earned praise from SPIN magazine for their explosive mix of garage rock and punk influences.",
      yt: "https://www.youtube.com/watch?v=CVM5Z5ccDT4"
    },
    {
      id: 8,
      artist: "The Thrills",
      img: "https://res.cloudinary.com/dele4dvi9/image/upload/v1737800964/The_Bait_Shop/Thrills_xevn5y.png",
      date: "2004-11-11",
      time: "20:00",
      price: "$25",
      blurb: "Irish indie rockers The Thrills bring their summery vibes to The Bait Shop! Their sophomore album Let's Bottle Bohemia, featuring tracks like \"Whatever Happened to Corey Haim?\" and \"The Irish Keep Gate-Crashing,\" has solidified their place as one of the top indie acts of the moment. With glowing reviews in Q Magazine and a performance on The Late Show with David Letterman, this is a show not to miss.",
      yt: "https://www.youtube.com/watch?v=mtk8Aoj80fE"
    },
    {
      id: 9,
      artist: "Tom Vek",
      img: "https://res.cloudinary.com/dele4dvi9/image/upload/v1737803158/The_Bait_Shop/Tomvekoc_enhanced_ymbuuy.png",
      date: "2005-04-07",
      time: "20:00",
      price: "$18",
      blurb: "Catch London's genre-bending sensation Tom Vek at The Bait Shop! His debut album We Have Sound features innovative tracks like \"C-C (You Set the Fire in Me)\" and \"If You Want.\" Hailed by NME as \"the future of indie music,\" Tom's dynamic live performances have also made waves on BBC's Later... with Jools Holland.",
      yt: "https://www.youtube.com/watch?v=SwDLu9D-YVU"
    },
    {
      id: 10,
      artist: "The Subways",
      img: "https://res.cloudinary.com/dele4dvi9/image/upload/v1737803159/The_Bait_Shop/Subwaysoc_enhanced_zg7c0w.png",
      date: "2005-11-17",
      time: "20:00",
      price: "$20",
      blurb: "British rock trio The Subways are ready to light up The Bait Shop! Their debut album Young for Eternity features infectious anthems like \"Rock & Roll Queen\" and \"Oh Yeah.\" With rave reviews from NME and a recent appearance on Top of the Pops, The Subways are quickly making their mark on the international music scene.",
      yt: "https://www.youtube.com/watch?v=UmLRkpKlgPQ"
    }
  ];


  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar
          events={fullCalendar}
          fullCalendar={fullCalendar}
        />
        <main className="container mx-auto px-4">
          <Routes>
            <Route path="/" element={<Home fullCalendar={fullCalendar} />} />
            <Route path="/calendar" element={<Calendar fullCalendar={fullCalendar} />} />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/about" element={<About />} />
            <Route path="/success" element={<Success />} />
            <Route path="/cancel" element={<Cancel />} />
            <Route path="/ticket-purchase" element={<TicketPurchase />} />
          </Routes>
        </main>
        <Newsletter />
        <Footer />
      </div>
    </Router>
  )
}
