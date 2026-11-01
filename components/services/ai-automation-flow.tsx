import { AI_FLOW, AI_JOBS } from "@/lib/ai-automation-page";

export function AiAutomationFlow() {
  return (
    <div className="orbit-ai-board" aria-hidden="true">
      <div className="orbit-ai-flow">
        {AI_FLOW.map((item, i) => (
          <div key={item.step} className="orbit-ai-node">
            <span>{item.step}</span>
            <strong>{item.title}</strong>
            <p>{item.body}</p>
            {i < AI_FLOW.length - 1 ? <i className="orbit-ai-wire" /> : null}
          </div>
        ))}
      </div>

      <div className="orbit-ai-console">
        <div className="orbit-ai-console-top">
          <span className="orbit-ai-console-dots">
            <i />
            <i />
            <i />
          </span>
          <p>Orbit Automations · live</p>
          <em>United States</em>
        </div>
        <div className="orbit-ai-kpis">
          <article>
            <p>Jobs today</p>
            <b>186</b>
          </article>
          <article>
            <p>Auto-closed</p>
            <b>91%</b>
          </article>
          <article>
            <p>In review</p>
            <b>14</b>
          </article>
        </div>
        <table className="orbit-ai-table">
          <thead>
            <tr>
              <th>Job</th>
              <th>Source</th>
              <th>Task</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {AI_JOBS.map((job) => (
              <tr key={job.id}>
                <td>{job.id}</td>
                <td>{job.source}</td>
                <td>{job.task}</td>
                <td>
                  <span className={`orbit-ai-pill is-${job.status.toLowerCase()}`}>{job.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
