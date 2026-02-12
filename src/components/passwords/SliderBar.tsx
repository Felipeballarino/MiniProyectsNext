
interface IPropsSlideBar {
    value: number;
    changeValue: (value: number) => void
}

const SliderBar = ({value, changeValue}: IPropsSlideBar) => {
    return (
        <div>
            <input 
            className="w-full" 
            value={value} 
            onChange={e =>changeValue(Number(e.target.value))} 
            min={5}
            max={30}
            type="range" 
            />
        </div>
    );
};

export default SliderBar;