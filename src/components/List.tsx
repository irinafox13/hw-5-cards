import Card from './Card'

const List = () => {
    return (
        <div className="list">
            <Card image='https://s0.rbk.ru/v6_top_pics/resized/640xH/media/img/9/16/756619467602169.webp'>
                <div className="card-body">
                    <h5 className="card-title">Card title that wraps to a new line</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </Card>
            <Card>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </Card>
            <Card image='https://s0.rbk.ru/v6_top_pics/resized/640xH/media/img/9/16/756619467602169.webp'>
                <div className="card-body">
                    <h5 className="card-title">Card title that wraps to a new line</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </Card>
            <Card image='https://s0.rbk.ru/v6_top_pics/resized/640xH/media/img/9/16/756619467602169.webp'>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </Card>
        </div>
    )
}

export default List;