import { AuthProvider } from "./Context/authContext";
import AppNav from "./Navigation/appNav";

export default function App() {
  
  return (
    <AuthProvider>
      <AppNav/>
    </AuthProvider>
  );
}
