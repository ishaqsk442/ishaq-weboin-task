import React from 'react';

function StatsSection({ stats }) {
  return (
    <section style={{ display: 'flex', justifyContent: 'space-between', padding: '2rem' }}>
      <div>
        <h3>Total Students</h3>
        <p>{stats.total}</p>
      </div>
      <div>
        <h3>Placed Students</h3>
        <p>{stats.placed}</p>
      </div>
      <div>
        <h3>Unplaced Students</h3>
        <p>{stats.unplaced}</p>
      </div>
    </section>
  );
}

export default StatsSection;
