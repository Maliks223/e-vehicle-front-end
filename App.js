import { AuthProvider } from "./Context/authContext";
import AppNav from "./Navigation/appNav";
import { Provider as PaperProvider } from 'react-native-paper';
import FlashMessage from "react-native-flash-message";


export default function App() {
  return (
    <AuthProvider>
      <PaperProvider>
      <AppNav />
      <FlashMessage position="top" />
      </PaperProvider >
    </AuthProvider>
  );
}
