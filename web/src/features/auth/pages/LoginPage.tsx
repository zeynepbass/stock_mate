import { LoginForm } from "../components/LoginForm";
import { LoginDesign } from "../components/LoginDesign";
export default function LoginPage() {
  return (
    <main className="min-h-screen grid grid-cols-1 md:grid-cols-12">
      <LoginDesign />

      <LoginForm />
    </main>
  );
}
