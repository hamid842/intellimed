import Corn from "react-js-cron";
import 'antd/dist/antd.css';

const StepTwo = ({value, onChangeCron}) => {
    return (
        <>
            <Corn
                value={value}
                setValue={onChangeCron}
                clearButton={false}
                className={'my-project-cron'}
            />
        </>
    )
}

export default StepTwo;
