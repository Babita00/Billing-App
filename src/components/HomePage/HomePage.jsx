import { useState } from "react";
// import { RegisterDialog } from "../../pages/RegisterDialog";
import { RegisterDialogue } from "../../pages/RegisterDialogue";
const HomePage = () => {
  const [showDialog, setShowDialog] = useState(false);

  const onRegisterClick = () => {
    setShowDialog(!showDialog);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-teal-50 to-blue-50 p-6">
      <div className="max-w-4xl flex flex-col md:flex-row items-center">
        <div className="text-center md:text-left md:mr-10">
          <p className="text-sm text-green-600">Free Forever For All Users.</p>
          <h1 className="text-4xl font-bold text-gray-900 my-4">
            Easy-to-use <br /> Point of Sale
          </h1>
          <p className="text-gray-600 mb-6">
            You may start selling in a matter of minutes and easy to use.
            Appropriate for all devices.
          </p>
          <button
            className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-blue-700"
            onClick={onRegisterClick}
          >
            Register
          </button>
          {/* {showDialog && <RegisterDialog showD={showDialog} onHide={setShowDialog}/>} */}
          {showDialog && (
            <RegisterDialogue showD={showDialog} onHide={setShowDialog} />
          )}
        </div>
        <div className="mt-8 md:mt-0 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full w-80 h-80 md:w-112 md:h-112 flex items-center justify-center">
          <img
            src="https://thememarch.com/demo/html/posing/assets/img/hero_img.png"
            alt="Point of Sale Illustration"
            className="max-w-xs md:max-w-md"
          />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
