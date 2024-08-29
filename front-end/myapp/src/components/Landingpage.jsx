import car from '../assets/car.png'
import './home.css'
import Cookies from 'js-cookie'
import logo1 from '../assets/logo1.png'

const LandingPage = () => {


    const bikePage=()=>{
        window.location.href="/bike";
    }


    const name = Cookies.get('name')
    const logout=()=>{
      Cookies.remove('token');
      window.location.href="/";
    
    }
   

  return (
    <div className=" min-h-screen  flex flex-col items-center justify-center">
      <header className="w-full bg-indigo-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">
            <img className='logo' src={logo1} />
          </h1>
          <nav className='nav-items'>
            <a href="#about" className="mx-2">About</a>
            <a href="#services" className="mx-2">Services</a>
            <a href="#contact" className="mx-2">Contact</a>
            <a onClick={logout} href="#" className="mx-2">Logout</a>            
          </nav>
        </div>
      </header>
      <img src={car} />

      <main className="flex-grow container mx-auto px-4 py-16 text-center bg-indigo-600 backcolor3">
        <h1 className='nav-items text-lg'>Hey hai {name} welcome back!</h1>        
        <h2 className="text-4xl font-bold mb-4">Explore the City on Two Wheels</h2>
        <p className="nav-items mb-8">Rent a bike or car and enjoy the freedom of exploring the city at your own pace not only taking rents you can even make money my keeping your bike or car on rents.</p>
        <button  className="backcolor2 nav-items text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300"  onClick={bikePage} >
          Book Now
        </button>
      </main>

      <section id="about" className="container mx-auto px-4 py-16 text-center bg-indigo-600 backcolor3">
        <h3 className="text-3xl font-bold mb-4">About Us</h3>
        <p className="nav-items">We provide high-quality bikes and car for rent at affordable prices. Our mission is to make biking accessible and enjoyable for everyone.</p>
      </section>

      <section id="services" className="container mx-auto px-4 py-16 text-center bg-indigo-600 backcolor3">
        <h3 className="text-3xl font-bold mb-4">Our Services</h3>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-slate-500 p-6 rounded-lg shadow-lg">
              <h4 className="text-2xl font-bold mb-2">Daily Rentals</h4>
              <p className='nav-items'>Rent a bike or car for a day and explore the city.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-slate-500 p-6 rounded-lg shadow-lg">
              <h4 className="text-2xl font-bold mb-2">Weekly Rentals</h4>
              <p className='nav-items' >Need a bike or car for a longer period? Weve got you covered.</p>
              
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-slate-500 p-6 rounded-lg shadow-lg">
              <h4 className="text-2xl font-bold mb-2">Guided Tours</h4>
              <p className='nav-items'>Join our guided tours and discover hidden gems.</p>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="w-full  text-black py-4 bg-indigo-600">
        <div className="container bg-indigo-600 mx-auto text-center">
          <p className='nav-items'>Contact us at <a href="mailto:info@bikerental.com" className="underline">info@bikerental.com</a></p>
          <p className='nav-items'>© 2024 BikeRental. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;


