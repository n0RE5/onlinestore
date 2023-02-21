import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Footer from './components/Footer';
import { useFetching } from './components/hooks/useFetching';
import Navbar from './components/Navbar';
import { getDevices } from './http/deviceAPI';
import { check } from './http/userAPI';
import { setDeviceList } from './store/devicesSlice';
import { setAuth, setUser } from './store/userSlice';
import './styles/App.scss'

function App() {

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const deviceList = useSelector((state: any) => state.globalList.deviceList)
  const dispatch = useDispatch();

  const [fetchDevices] = useFetching( async() => {
      const response = await getDevices(100, 1)
      return dispatch(setDeviceList(response.data?.rows))
  })

  useEffect(() => {
    if (!deviceList.length) {
      fetchDevices()
    }
    check().then(data => {
      dispatch(setUser(data))
      dispatch(setAuth(true))
    }).finally(() => setIsLoading(false))
  }, []);

  return (
      <BrowserRouter>
        <Navbar />
        {isLoading
          ? <div />
          : <div className="contain">
                <AppRouter />
            </div>  
        }
        <Footer />
      </BrowserRouter>
  );
}

export default App;
