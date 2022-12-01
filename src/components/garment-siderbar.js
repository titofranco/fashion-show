import { SelectGarmentSidebar, OptionButton } from './lib';
import styles from '../shared.module.css'

export default function GarmentSidebar({ sidebarOptions, option, setOption }) {
  const activeGarment = (garment) => option === garment ? ` ${styles.activeGarment}` : ''

  return (
    <SelectGarmentSidebar>
      {Object.entries(sidebarOptions).map(([sidebarOption, image], index) => (
        <OptionButton
          key={index}
          backgroundImage={image}
          className={activeGarment(sidebarOption)}
          onClick={() => setOption(sidebarOption)}
        ></OptionButton>
      ))}
    </SelectGarmentSidebar>
  );
}

