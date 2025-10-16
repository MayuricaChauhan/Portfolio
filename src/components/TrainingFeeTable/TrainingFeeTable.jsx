import React from "react";

export default function SkillEnhancementSection() {
  const rows = [
    {
      type: "Communication Skills",
      individual: "₹6,000 / month",
      group: "₹5,000 per head / month",
    },
    {
      type: "Soft Skills",
      individual: "₹5,500 / month",
      group: "₹4,500 per head / month",
    },
  ];

  return (
    <section className="skill-section" role="region" aria-labelledby="skill-heading" id="skill-enhancement"> 
      <style>{`
        .skill-section {
          max-width: 900px;
          margin: 50px auto;
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          padding: 40px 30px;
          font-family: 'Poppins', 'Segoe UI', Roboto, Arial, sans-serif;
          color: #4b2354;
          line-height: 1.6;
        }

        .skill-heading {
          font-size: 26px;
          font-weight: 600;
          text-align: center;
          color: #4b2354;
          margin-bottom: 8px;
        }

        .skill-quote {
          font-size: 14px;
          font-style: italic;
          color: #6b556f;
          text-align: center;
          margin-bottom: 25px;
        }

        .skill-about {
          font-size: 15px;
          text-align: center;
          color: #444;
          margin-bottom: 35px;
        }

        .table-wrapper {
          overflow-x: auto;
        }

        table.skill-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 15px;
        }

        table.skill-table thead th {
          background: #f3e9f7;
          color: #4b2354;
          font-weight: 700;
          padding: 12px;
          border: 1px solid #e9e0f0;
          text-align: center;
        }

        table.skill-table tbody td {
          border: 1px solid #f0e9f7;
          text-align: center;
          padding: 12px;
        }

        table.skill-table tbody tr:nth-child(odd) td {
          background: #ffffff;
        }

        table.skill-table tbody tr:nth-child(even) td {
          background: #fbf7fc;
        }

        .programs-list {
          margin-top: 25px;
          font-size: 15px;
        }

        .programs-list ul {
          list-style: none;
          padding: 0;
          text-align: center;
        }

        .programs-list li {
          display: inline-block;
          margin: 6px 12px;
          padding: 6px 12px;
          background: #f9f4fb;
          border-radius: 6px;
          border: 1px solid #e4d5f0;
        }

        @media (max-width: 600px) {
          .skill-section {
            padding: 25px 15px;
          }
          .skill-heading {
            font-size: 22px;
          }
          .skill-about {
            text-align: left;
          }
          table.skill-table {
            font-size: 14px;
          }
        }
      `}</style>

      <h2 id="skill-heading" className="skill-heading">
        Skill Enhancement
      </h2>
      <p className="skill-quote">
        "Knowledge expands with sharing." — <strong>Paromita Dutta</strong>
      </p>

      <p className="skill-about">
        Led by <strong>Paromita Dutta</strong>, with 22 years of experience,
        this program helps individuals and professionals enhance their communication and
        soft skills through personalized and group training. Paromita brings years of
        experience, having trained executives from top organizations like
        <em> Indian Oil Corporation, Taj Hotels, Walmart, Genpact, and Bank of America.</em>
      </p>

      <div className="table-wrapper">
        <table className="skill-table">
          <thead>
            <tr>
              <th>Training Type</th>
              <th>Individual Session</th>
              <th>Group Session (4+ Trainees)</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i}>
                <td><strong>{r.type}</strong></td>
                <td>{r.individual}</td>
                <td>{r.group}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
