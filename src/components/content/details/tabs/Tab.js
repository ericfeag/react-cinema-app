import React, { useState} from 'react'
import PropTypes from 'prop-types'

const Tab = props => {
    const { activeTab, label, onClick} = props;
    const [className, SetClassName] = useState('tab-list-item');

    useEffect(() => {
        if(acive === label) {
            SetClassName((prev)=>(prev += ' tab-list-active'))
        } else {
            SetClassName('tab-list-item');
        }
    }, [activeTab, label])

    const onTabClick =() => {
        onClick(label);
    }
    return (
    <>
       <li className={className} onClick= {onTabClick}>
        {label}
       </li> 
    </>
  )
};

Tab.propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onclick: PropTypes.func.isRequired
}

export default Tab