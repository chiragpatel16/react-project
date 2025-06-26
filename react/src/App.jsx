import Navbar from './Nav';
import Footer from './Footer';

function App() {
  return (
    <>
      <Navbar />  
      <div className="container">
        <div className="banner_2" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width:'70%'
        }}>
          <div className="banner_2_left">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwo-ZOAUhVizbUOAT7-7M7gKqXXLr-ZociEGTvUR3uRNN7KL-XUjThSA_7UpHpVhO1eA4&usqp=CAU"alt="Plant"
              style={{
                height: '270px',
                marginTop: '30px',
                marginRight: '150px',
                marginLeft: '350px',
                width:'40%'
              }} />
          </div>

          <div style={{
            height: '400px',
            marginTop:'20px',
            width: '2px',
            backgroundColor: 'black',
          }}></div>

          <div className="banner_2_right" style={{
            height: '300px',
            width:'40%',
            marginLeft:'1%'
          }}>
            <h1 style={{
              padding: '20px',
              fontSize: '20px',
              paddingBottom: '0px',
            }}>CLASSIC PEACE LILY</h1>
            <h6 style={{
              paddingLeft: '20px',
            }}>POPULAR HOUSE PLANT</h6>
            <p style={{
              fontSize: '25px',
              padding: '20px',
            }}>$18</p>
            <p style={{
              padding: '20px',
              paddingTop: '0px',
              lineHeight: '1.5',
            }}>
              Classic Peace Lily is a spathiphyllum floor plant arranged in a bamboo planter with a blue & red ribbon and butterfly pick.
            </p>
            <button className="btn1" style={{
             backgroundcolor: 'transparent',
              color: 'grey',
              padding: '10px 30px',
              border: '1px solid grey',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
              marginLeft: '20px',
              marginRight: '10px',
            }}>Add to Cart</button>
            <button className="btn2" style={{
              backgroundColor: 'transparent',
              color: 'grey',
              padding: '10px 20px',
              border: '1px solid grey',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
            }}>WISHLIST</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;