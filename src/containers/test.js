render(){
    return (
    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
    <div className="card">
        <h5 className="card-header">Basic Table</h5>
        <div className="card-body">
        <div className="table-responsive">
        {this.props.todos.length !== 0 ? (
            <table className="table table-striped table-bordered first">
            <thead>
                <tr>
                <th>Todos</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>{this.props.todos.map(todo => ()
                </tbody>
                </table>
            </div>
         </div>
    </div>
    </div>

    )

