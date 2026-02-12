


interface IPropsInfoCard {
    label: string;
    value: string;
}
const InfoCard = ({ label, value }: IPropsInfoCard) => {
    return (
        <div className="bg-slate-800 rounded-lg p-3">
            <p className="text-slate-400 text-xs uppercase tracking-wide">
                {label}
            </p>
            <p className="font-semibold text-white">{value}</p>
        </div>
    );
};

export default InfoCard;