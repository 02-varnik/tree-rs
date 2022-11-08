import Header from "../components/Header";
import Signup from "../components/Signup";

export default function SignupPage() {
  return (
    <>
      <div className="flex justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <Header
            heading="Signup to create an account"
            paragraph="Already have an account? "
            linkName="Login"
            linkUrl="/login"
          />
          <Signup />
        </div>
      </div>
    </>
  );
}
