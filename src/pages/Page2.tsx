import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { chevronBack } from "ionicons/icons";
import { CapacitorUpdater } from "@capgo/capacitor-updater";

const Page2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/page1" icon={chevronBack} text="" />
          </IonButtons>
          <IonTitle>Page 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Page 2</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="container">
          <button
            className="content-button reload-button"
            onClick={() => {
              CapacitorUpdater.reload();
            }}
          >
            Reload App
          </button>
          <p>This is page 2</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Page2;
