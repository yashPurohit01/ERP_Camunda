import React from 'react'

interface IProps{
    iconName:string,

}
const iconMap = {
    
}
function TabularIcon({iconName , ...props}:IProps) {
  const iconConfig = iconMap[iconName];
    if (!iconConfig) return null;

    const [iconStyle, iconName] = iconConfig;
    const icon: IconDefinition = { prefix: iconStyle, iconName: iconName };

    return <FontAwesomeIcon icon={icon} {...props} />;
}

export default TabularIcon