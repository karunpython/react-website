import React, { Component } from 'react'

export default class TableDemo extends Component {
    render() {
        return (
            <div className="container">
                <div className="table-responsive">
                <table className="table table-striped table-bordered table-hover table-sm">
                    <caption className="text-center">List of Users</caption>
                     <thead className="thead-light">
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Gender</th>
                        </tr>
                     </thead>

                     <tbody>
                         <tr>
                             <th>1</th>
                             <td className="text-danger">Karun</td>
                             <td>Kumar</td>
                             <td>karun@gmail.com</td>
                             <td>9879797878</td>
                             <td>Male</td>
                         </tr>

                         <tr>
                             <th>2</th>
                             <td>Simiran</td>
                             <td>Singh</td>
                             <td className="text-capitalize">simgp@gmail.com</td>
                             <td>899888776</td>
                             <td className="bg-primary">Male</td>
                         </tr>

                         <tr>
                             <th>3</th>
                             <td>Geeta</td>
                             <td>Devi</td>
                             <td>gita@gmail.com</td>
                             <td>99987777888</td>
                             <td>Female</td>
                         </tr>

                         <tr>
                             <th>4</th>
                             <td>Pravesh</td>
                             <td>Singh</td>
                             <td>pravesh@gmail.com</td>
                             <td>99888788</td>
                             <td>Male</td>
                         </tr>
                     </tbody>

                </table>
                </div>
            </div>
        )
    }
}
