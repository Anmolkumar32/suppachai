import React from 'react';
import Head from 'next/head';

const LandingPage = () => {
  return (
    <div>
      <head>
        <title>Suppachai - Landing Page</title>
        <meta name="description" content="Welcome to Suppachai - your one-stop solution for services" />
      </head>
      <nav>
        <h1>Suppachai</h1>
        <ul>
          <li><a href="#home"></a></li>
          <li><a href="#services">Feed</a></li>
          <li><a href="#support">support</a></li>
          <li><a href="#feed">Feed</a></li>
          <li><a href="#about">About Us</a></li>
          <button className="button-login">Login</button>
          <button className="button-signup">Signup</button>

        </ul>
      </nav>



      <header>
        
      </header>
      <main>


        <section id="home">
        
      <h2>A committed Supporter,
         Boundless Significance.
         Accept and send donations instantly.</h2>
          <div>
            <input type="text" placeholder="SuppaChai/your Name" />
            <button>Claim your page</button>
          </div>
          <div className="photo-container">
            <img src="\spaceship.png" alt="Image" />
          </div>
        </section>




        <section id="services">
          <h2>Easily manage your donations <br/>without any <span class="highlight">hassle</span></h2>
          <p>Effortlessly streamline your donations with our seamless platform. Manage your contributions hassle-free and make<br/> a  lasting impact effortlessly. Join DonateEase today and simplify your giving experience.</p>
          <p>Effortlessly streamline your donations with our seamless platform. Manage your contributions hassle-free and make<br/> a  lasting impact effortlessly. Join DonateEase today and simplify your giving experience.</p>

          <p>Effortlessly streamline your donations with our seamless platform. Manage your contributions hassle-free and make<br/> a  lasting impact effortlessly. Join DonateEase today and simplify your giving experience.</p>

          <p>Effortlessly streamline your donations with our seamless platform. Manage your contributions hassle-free and make<br/> a  lasting impact effortlessly. Join DonateEase today and simplify your giving experience.</p>


          <p>Effortlessly streamline your donations with our seamless platform. Manage your contributions hassle-free and make<br/> a  lasting impact effortlessly. Join DonateEase today and simplify your giving experience.</p>

        </section>

        <section id="support">
          <h2>Support Your favourite <br/><span class="highlight1">Creator</span></h2>
          <p>Discover the ultimate donation experience with our platform,<br/> where supporting your favorite creators is made effortless.<br/> Enjoy seamless giving and make a significant impact while <br/>effortlessly supporting those you admire. Experience the best-<br/>in-class donation support with us today.</p>
          <button>open an account</button>
        </section>


        <section id="feed">
  <h2>Why Choose Us</h2>
  <div class="ball-container">
    <div class="ball"></div>
    <div class="ball"></div>
    <div class="ball"></div>
  </div>
  <div class="ball-line"></div>
  <div class="ball-names">
    <p>Faster</p>
    <p>Easier</p>
    <p>Affordable</p>
  </div>
  <p>Unlock the simplicity of giving beyond your expectations. It's easier than you think to make a difference. Experience a hassle-free donation process and discover the joy of effortlessly supporting causes close to your heart. Start today and see how easy it truly is.</p>
  <div>
    <button>Learn more</button>
  </div>
</section>



        <section id="about">
          <h2>About <span class="highlight1">Us</span></h2>
          <p>Join us at Suppachai, where we believe in serving up equality like a perfectly sliced pie! Our platform, a brilliant concoction crafted by ingenious minds hailing from esteemed institutions such as IIT, MIT, and Symbiosis, harmoniously blends exceptional expertise and knowledge.
 
 Together, we're stirring up a synergy that showcases the immense power of collaboration. So hop on board and let's create a delectable feast of shared success!</p>
 <h2>Made in <span class="highlight1">India</span></h2>

        </section>


      </main>
      
    </div>
  );
};

export default LandingPage;
