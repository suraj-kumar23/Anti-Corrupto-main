import React, { useState, useEffect } from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/footer';
import { useNavigate, useParams } from 'react-router-dom';
import { isLogin } from '../../../Utils/cookieSetup';
import { getOneVehicles } from '../../../Utils/API/vehicleApi';

const ViewVehicle = () => {
  const navigate = useNavigate();
  const [isLoggedd, setisLoggedd] = useState(false);
  const [myVehicle, setMyVehicle] = useState({});
  const { vehicleId } = useParams();

  const getmyvehicle = async () => {
    const myvehicles = await getOneVehicles(vehicleId);
    setMyVehicle(myvehicles);
  };

  useEffect(() => {
    const checkLoginSession = isLogin();
    if (checkLoginSession) {
      setisLoggedd(true);
      getmyvehicle();
    } else {
      setisLoggedd(false);
      navigate('/login');
    }
  }, [navigate, vehicleId]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div
        className="container mx-auto mt-10 p-6 rounded-lg shadow-xl bg-cover bg-center w-5/6 relative translate-x-12 border-l-2 border-neutral-500"
        style={{
          backgroundImage: `url("https://img.freepik.com/free-vector/seamless-white-interlaced-rounded-arc-patterned-background_53876-97975.jpg?t=st=1726463373~exp=1726466973~hmac=c49043de1b7a2ad8f527ea803fca1c9d566dbcd2376dae01fdc2f37d065b4ed1&w=996")`,
        }}
      >
        <div className="flex flex-col md:flex-row md:justify-between md:items-start h-full ">
          <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
            <div className="w-full h-[300px] md:h-[400px] relative -translate-x-16 shadow-2xl rounded-2xl shadow-slate-700">
              <img
                src="https://images.unsplash.com/photo-1505065029964-d4ea1830a456?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDd8fHxlbnwwfHx8fHw%3D"
                alt="Vehicle"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          <div className="w-full md:w-2/3 pl-6">
            <div className="flex flex-row justify-between">
              <h2 className="text-xl font-semibold mb-2">
                <svg
                  fill="#000000"
                  width="40px"
                  height="40px"
                  viewBox="0 0 512 512"
                  data-name="Layer 1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title />
                  <path d="M278.69,345.08A127.26,127.26,0,0,0,294,326.57c.13-.18.25-.36.37-.55a126,126,0,0,0,20.94-77.67,7.78,7.78,0,0,0-.11-1.73,125.85,125.85,0,0,0-12.11-45.37,8.75,8.75,0,0,0-.46-1,126.13,126.13,0,0,0-57.12-57.19,8.7,8.7,0,0,0-1.11-.53,125.94,125.94,0,0,0-45.22-12.1,7.66,7.66,0,0,0-1.78-.12,125.92,125.92,0,0,0-77.87,21l-.31.21a126,126,0,0,0-34.13,34.18l0,0a126,126,0,0,0-21.1,78,8.33,8.33,0,0,0,.11,1.79,126.16,126.16,0,0,0,12.11,45.26,7.66,7.66,0,0,0,.5,1A126.13,126.13,0,0,0,133.9,369a8,8,0,0,0,1,.49,126.13,126.13,0,0,0,45.42,12.09,9.2,9.2,0,0,0,1.26.11l.23,0c2.59.16,5.18.25,7.78.25a125.86,125.86,0,0,0,70.18-21.3l.23-.15A126.84,126.84,0,0,0,278.69,345.08ZM286,309,248.9,271.89l50.6-13.55A110,110,0,0,1,286,309Zm-2.28-109.9L233,212.66,246.62,162a110.27,110.27,0,0,1,37.09,37.13Zm-96.32-53L173.8,196.8l-37.18-37.18A110.09,110.09,0,0,1,187.39,146.1Zm-64.47,22.45,49.36,49.36a8,8,0,0,0,5.66,2.34A8.17,8.17,0,0,0,180,220a8,8,0,0,0,5.66-5.66L203.72,147A109.83,109.83,0,0,1,232,154.55L214,221.91A8,8,0,0,0,221.71,232a7.71,7.71,0,0,0,2.07-.28l67.32-18A110.17,110.17,0,0,1,298.64,242l-67.27,18a8,8,0,0,0-3.59,13.39l49.28,49.28a110.58,110.58,0,0,1-20.73,20.73l-49.28-49.28a8,8,0,0,0-13.39,3.59l-18,67.3a110.09,110.09,0,0,1-28.33-7.52l18-67.37a8,8,0,0,0-9.8-9.8L88.14,298.4a110.38,110.38,0,0,1-7.55-28.32L148,252a8,8,0,0,0,3.59-13.38l-49.37-49.36a110.24,110.24,0,0,1,20.74-20.73Zm119.71,183.8A110,110,0,0,1,192,365.9l13.56-50.65ZM93.25,203l37.19,37.19L79.71,253.75A110.12,110.12,0,0,1,93.25,203Zm2.29,110,50.77-13.61-13.59,50.74A110.17,110.17,0,0,1,95.54,313Zm94.07-26.37a30.65,30.65,0,1,0-21.68-9A30.53,30.53,0,0,0,189.61,286.62Zm-10.36-41a14.66,14.66,0,1,1,0,20.74A14.64,14.64,0,0,1,179.25,245.6Zm308.44-29.92V160.07a54.4,54.4,0,0,0-54.34-54.34H258.66A165.34,165.34,0,1,0,189.61,421.3a167.06,167.06,0,0,0,31.49-3H433.35A54.39,54.39,0,0,0,487.69,364V308.36a54.36,54.36,0,0,0-26-46.34A54.35,54.35,0,0,0,487.69,215.68Zm-16,92.68v19.8H445.74L469.27,295A38.29,38.29,0,0,1,471.69,308.36Zm-3.09,70.7-23.35-34.9h26.44V364A38.15,38.15,0,0,1,468.6,379.06Zm3.09-219v19.8H445.74l23.53-33.21A38.29,38.29,0,0,1,471.69,160.07Zm-45.55,19.8H396.31l41-57.93a38.2,38.2,0,0,1,22.46,10.41ZM346.38,328.16,385.3,270h32.58L376.7,328.16ZM388.06,254l-41.19-58.15H376.7L417.89,254ZM376.7,179.87H346.38l38.92-58.14h32.58Zm-44.52-7.54a163.65,163.65,0,0,0-14.76-21.16l19.7-29.44H366ZM368.46,254H354.81a166.28,166.28,0,0,0-1.66-21.6Zm-14.23,16H366l-15.38,23A166.07,166.07,0,0,0,354.23,270Zm-25.82,75.76,40,56.53H337.8L311.35,367.8A164.61,164.61,0,0,0,328.41,345.78Zm18.46-1.62H376.7l41.19,58.15H388.06Zm49.44,0H426l32.57,48.67a38.22,38.22,0,0,1-21.21,9.27Zm29.83-16H396.31l41-57.93a38.2,38.2,0,0,1,22.46,10.41ZM396.31,195.87H426l32.57,48.66a38.16,38.16,0,0,1-21.21,9.28Zm48.94,0h26.44v19.81a38.1,38.1,0,0,1-3.09,15.08ZM317.86,121.73,306.33,139a168.17,168.17,0,0,0-20.26-17.23ZM84,361.57c-58.22-58.21-58.22-152.93,0-211.14a149.46,149.46,0,0,1,211.14,0c58.21,58.21,58.21,152.93,0,211.14S142.25,419.78,84,361.57Zm215.84,17.57,17.76,23.17h-51A165,165,0,0,0,299.88,379.14Z" />
                </svg>
                Plate Number: <b>{myVehicle.plateNumber}</b>
              </h2>
              <p className="text-gray-600 mb-4">
                {' '}
                Mfg Year: <b>{myVehicle.year}</b>
              </p>
            </div>
            <h3 className="text-sm font-bold mb-2">Features</h3>
            <ul className="list-disc pl-6 mb-4">
              <p>
                Made In: <b>{myVehicle.make}</b>
              </p>
              <p>
                Vehicle Model: <b>{myVehicle.model}</b>
              </p>
              <p>
                Color: <b>{myVehicle.color}</b>
              </p>
            </ul>

            <p className="text-sm font-bold mb-2">Claims</p>
            <ul className="list-disc pl-6 mb-4">
              <p>Claim 1</p>
              <p>Claim 2</p>
            </ul>

            <h3 className="text-sm font-bold mb-2">Chalans</h3>
            <ul className="list-disc pl-6">
              <p>Chalan 1</p>
              <p>Chalan 2</p>
              {/* Add more chalan items as needed */}
            </ul>
          </div>
        </div>
      </div>

      <div className=" fixed bottom-0 left-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default ViewVehicle;