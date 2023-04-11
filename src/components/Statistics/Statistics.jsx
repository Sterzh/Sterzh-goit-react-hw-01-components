import css from './Statistics.module.css';

const Statistics = ({ title = '', stats = [] }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => (
          <Stat key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
};

export default Statistics;

const Stat = ({ label, percentage }) => {
  const color = randColor();
  return (
    <li
      className={css.item}
      style={{
        backgroundColor: color,
      }}
    >
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}</span>
    </li>
  );
};

const randColor = () => {
  return (
    '#' +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')
      .toUpperCase()
  );
};
