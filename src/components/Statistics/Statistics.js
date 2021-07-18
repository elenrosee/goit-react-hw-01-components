import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.scss';

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title.toUpperCase()}</h2>}

    <ul className={styles.statsList}>
      {stats.map(({ id, label, percentage }) => {
        const randomBackgroundColor =
          '#' + Math.random().toString(16).substring(2, 8).toUpperCase();

        return (
          <li
            key={id}
            className={styles.item}
            style={{ backgroundColor: randomBackgroundColor }}
          >
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}> {percentage}%</span>
          </li>
        );
      })}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
