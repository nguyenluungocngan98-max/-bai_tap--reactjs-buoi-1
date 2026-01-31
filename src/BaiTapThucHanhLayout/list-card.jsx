import Card from "./card";
function ListCard(){
    return (
        <div className="grid grid-cols-4 gap-4 p-4">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}
export default ListCard;