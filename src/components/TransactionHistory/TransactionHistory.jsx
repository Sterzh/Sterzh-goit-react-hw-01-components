import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(e => (
          <tr key={e.id}>
            <td>{e.type}</td>
            <td>{e.amount}</td>
            <td>{e.currency}</td>
          </tr>
          // <Transaction
          //   key={e.id}
          //   type={e.type}
          //   amount={e.amount}
          //   currency={e.currency}
          // />
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
  // type: PropTypes.string.isRequired,
  // amount: PropTypes.number,
  // currency: PropTypes.string.isRequired,
};

export default TransactionHistory;

// const Transaction = ({ type, amount, currency }) => {
//   return (
//     <tr>
//       <td>{type}</td>
//       <td>{amount}</td>
//       <td>{currency}</td>
//     </tr>
//   );
// };
