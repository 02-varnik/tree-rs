import Header from "../components/Header";
import Login from "../components/Login";

export default function LoginPage() {
  return (
    <>
      <div className="flex justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <Header
            heading="Login to your account"
            paragraph="Don't have an account yet? "
            linkName="Signup"
            linkUrl="/signup"
          />
          <Login />
        </div>
      </div>
    </>
  );
}
