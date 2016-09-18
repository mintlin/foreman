import React from 'react';

const PlanPage = (props) => <div>Plan Page</div>;

export default PlanPage;

// import React, {Component, PropTypes} from 'react';
// import ReactDataGrid from 'react-data-grid';

// export default class PlanPage extends Component {
//     constructor() {
//         super();
//         this.state = {
//             rows: [],
//             columns: []
//         };
//         this.getColumns = this.getColumns.bind(this);
//         this.rowGetter = this.rowGetter.bind(this);
//         this.handleRowUpdated = this.handleRowUpdated.bind(this);
//         this.getRows = this.getRows.bind(this);
//     }

//     getColumns() {
//         //Columns definition
//         let columns = [
//             {
//                 key: 'item',
//                 name: 'Item',
//                 width: 80
//             }
//         ];

//         for (let i = 0; i < Plan.iterations.length; i++) {
//             columns.push(
//                 {
//                     key: Plan.iterations[i],
//                     name: Plan.iterations[i],
//                     editable: true
//                 }
//             );
//         }
//         return columns;
//     }

//     getRows() {
//         let rows = [];
//         for (let i = 0; i < Plan.items.length; i++) {
//             const itemObj = {
//                 'item': Plan.items[i],
//             };
//             let iterationObj = new Object();
//             for (let j = 0; j < Plan.iterations.length; j++) {
//                 iterationObj[Plan.iterations[i]] = '';
//             }
//             rows.push(Object.assign({}, itemObj, iterationObj));
//         }
//         return rows;
//     }

//     componentDidMount() {
//         const plan =
//             this.setState({ columns: this.getColumns(), rows: this.getRows() });
//     }

//     rowGetter(rowIdx) {
//         return this.state.rows[rowIdx]
//     }

//     handleRowUpdated(e) {
//         //merge updated row with current row and rerender by setting state
//         let rows = this.state.rows;
//         Object.assign(rows[e.rowIdx], e.updated);
//         this.setState({ rows: rows });
//     }

//     render() {
//         return (
//             <div className="MainBody">
//                 <h1>Web Planning</h1>
//                 <div>Start Date: <input type="date" defaultValue={Plan.startDate}/></div>
//                 <div>
//                     Frequency:
//                     <input type="text" defaultValue={Plan.frequency}/></div>
//                 <div>
//                     Scopes:
//                     <select>
//                         {Plan.scopes.map((scope) => {
//                             return <option key={scope.id} value={scope.id}>{scope.name}</option>;
//                         }) }
//                     </select>
//                 </div>

//                 <ReactDataGrid
//                     enableCellSelect={true}
//                     columns={this.state.columns}
//                     rowGetter={this.rowGetter}
//                     rowsCount={this.state.rows.length}
//                     minHeight={500}
//                     onRowUpdated={this.handleRowUpdated} />
//             </div>
//         );
//     }
// }

// PlanPage.propTypes = {
//     plan: PropTypes.object
// }