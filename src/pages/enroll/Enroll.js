

const Enroll = () => {
    return (
        <div class="container mt-5">
            <div class="row">
                <div class="col-sm">
                    <form id="form_main">
                        <div class="form-group" >
                            <label for="exampleInputEmail1">Full Name</label>
                            <input type="email" class="form-control" id="Name" placeholder="Enter Name" /> {/*Input of name*/}
                        </div>
                        <div class="form-group mt-3">
                            <label for="exampleInputPassword1">Email</label>
                            <input type="gmail" class="form-control" id="Email" placeholder="Email" /> {/*Input of Email*/}
                        </div>
                        <div class="form-group mt-3">
                            <label for="exampleInputPassword1">Phone</label>
                            <input type="tel" class="form-control" id="Phone" placeholder="Phone" /> {/*Input of phone*/}
                        </div>
                        <div class="text-center">
                            <button style={{ width: "200px" }} type="submit" class="btn btn-primary mt-3">Submit</button> {/*Submit button*/}
                        </div>
                    </form>
                </div>
                <div class="col-sm">
                    <form class="form-inline d-flex">
                        <input style={{ width: '100%' }} class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0 " style={{ marginLeft: "5px" }} type="submit">Search</button>
                    </form>
                    <div class="mt-3" id="form_main">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col" class="text-center">Name</th>
                                    <th scope="col" class="text-center">Email</th>
                                    <th scope="col" class="text-center">ID CARD</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row" class="text-center" >1</th>
                                    <td class="text-center">Mark</td>
                                    <td class="text-center">Otto</td>
                                </tr>
                                <tr>
                                    <th scope="row" class="text-center">2</th>
                                    <td class="text-center">Jacob</td>
                                    <td class="text-center">Thornton</td>
                                </tr>
                                <tr>
                                    <th scope="row" class="text-center">3</th>
                                    <td class="text-center">Larry</td>
                                    <td class="text-center">the Bird</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Enroll