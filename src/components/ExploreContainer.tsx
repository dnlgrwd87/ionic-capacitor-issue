import { CapacitorUpdater } from '@capgo/capacitor-updater';
import { useIonRouter } from '@ionic/react';
import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const router = useIonRouter();
  return (
    <div className="container">
      <div
        onClick={() => {
          CapacitorUpdater.reload();
        }}
      >
        Reload app
      </div>
      <div>
        <button onClick={() => router.push('/tab2', 'forward', 'push')}>
          Go to tab 2
        </button>
      </div>
    </div>
  );
};

export default ExploreContainer;
