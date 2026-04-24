import { Outlet , useLocation} from 'react-router-dom';

const AuthLayout = () => {
  const imageLocation = useLocation();

  //both personal artworks
  const loginImg = "https://ik.imagekit.io/ytwzizvepv/RotomPC/Klefki-LogIn.png?updatedAt=1775751142800";
  const signupImg = "https://ik.imagekit.io/ytwzizvepv/RotomPC/RotomPC-SignUp.png?updatedAt=1775751231924";

  const isSignup = location.pathname.includes('signup');
  const currentImage = isSignup ? signupImg : loginImg;

  return (
    <section className="min-h-screen bg-zinc-100 text-zinc-900">
      <div className="grid min-h-screen w-full lg:grid-cols-[1fr_0.95fr]">

       {/* Left/Top Half: Now entirely filled by the image */}
      <div className="relative h-full w-full overflow-hidden border-zinc-300 lg:border-r-2 bg-zinc-200">
        <img 
         src={currentImage}
         alt={isSignup ? "Sign Up Graphic" : "Klefki Login"}
        className="h-full w-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"/>
        {/* Optional: Subtle Overlay to keep it "Techy" */}
        <div className="absolute inset-0 bg-zinc-900/5 pointer-events-none" />
      </div>

        <main className="flex items-center bg-zinc-50 px-6 py-10 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-md">
            <Outlet />
          </div>
        </main>
      </div>
    </section>
  );
};

export default AuthLayout;