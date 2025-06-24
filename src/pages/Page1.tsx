import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import { CapacitorUpdater } from "@capgo/capacitor-updater";
import "./Page1.css";

const Page1: React.FC = () => {
  const router = useIonRouter();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="container">
          <h1 className="page-title">Welcome</h1>
          <button
            className="content-button reload-button"
            onClick={() => {
              CapacitorUpdater.reload();
            }}
          >
            Reload App
          </button>
          <button
            className="content-button"
            onClick={() => router.push("/page2", "forward", "push")}
          >
            Go to Page 2
          </button>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Page1;
