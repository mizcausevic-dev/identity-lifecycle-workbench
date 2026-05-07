import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { lifecycleRisk, lifecycleTrend, metrics, queueItems, spotlights, stageBacklog } from './data';

const stageColors = ['#67e8f9', '#fbbf24', '#f97316', '#a78bfa'];

export default function App() {
  return (
    <div className="shell">
      <header className="hero">
        <div className="heroCopy">
          <p className="eyebrow">Identity Lifecycle Workbench</p>
          <h1>Joiners, movers, leavers, certifications, and orphaned-account cleanup in one identity operations workspace.</h1>
          <p className="lede">
            A recruiter-ready frontend built to show how access lifecycle work becomes faster, safer, and more accountable when provisioning,
            transition pressure, certification debt, and termination cleanup are treated like one operating system.
          </p>
        </div>
        <aside className="heroPanel">
          <span className="heroLabel">Lifecycle posture</span>
          <strong>Stable for onboarding, strained for movers</strong>
          <p>Transfer-driven role conflicts and termination cleanup are carrying the most governance pressure this week.</p>
        </aside>
      </header>

      <section className="metricGrid">
        {metrics.map((metric) => (
          <article key={metric.label} className={`metricCard tone-${metric.tone}`}>
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
            <p>{metric.delta}</p>
          </article>
        ))}
      </section>

      <section className="panelGrid">
        <article className="panel panel-large">
          <div className="panelHeader">
            <div>
              <p className="panelLabel">Lifecycle volume</p>
              <h2>Joiner, mover, and leaver workload trend</h2>
            </div>
            <span className="tag">Monthly flow</span>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={lifecycleTrend}>
              <defs>
                <linearGradient id="joiners" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#67e8f9" stopOpacity={0.85} />
                  <stop offset="95%" stopColor="#67e8f9" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="movers" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f97316" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="#2b3047" vertical={false} />
              <XAxis dataKey="period" stroke="#a4adca" />
              <YAxis stroke="#a4adca" />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="joiners" stroke="#67e8f9" fill="url(#joiners)" />
              <Area type="monotone" dataKey="movers" stroke="#f97316" fill="url(#movers)" />
              <Area type="monotone" dataKey="leavers" stroke="#fbbf24" fill="none" />
            </AreaChart>
          </ResponsiveContainer>
        </article>

        <article className="panel">
          <div className="panelHeader">
            <div>
              <p className="panelLabel">Executive spotlight</p>
              <h2>Where lifecycle risk is clustering</h2>
            </div>
          </div>
          <div className="spotlightStack">
            {spotlights.map((spotlight) => (
              <div key={spotlight.title} className="spotlightCard">
                <span>{spotlight.tag}</span>
                <strong>{spotlight.title}</strong>
                <p>{spotlight.body}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="panelGrid">
        <article className="panel panel-large">
          <div className="panelHeader">
            <div>
              <p className="panelLabel">Action queue</p>
              <h2>Priority lifecycle workflows</h2>
            </div>
            <span className="tag">Manager-aware</span>
          </div>
          <div className="tableWrap">
            <table>
              <thead>
                <tr>
                  <th>Workflow</th>
                  <th>Owner</th>
                  <th>Status</th>
                  <th>Due</th>
                  <th>Pressure</th>
                  <th>Next action</th>
                </tr>
              </thead>
              <tbody>
                {queueItems.map((item) => (
                  <tr key={item.subject}>
                    <td>{item.subject}</td>
                    <td>{item.owner}</td>
                    <td>{item.status}</td>
                    <td>{item.due}</td>
                    <td>{item.pressure}</td>
                    <td>{item.nextAction}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <article className="panel">
          <div className="panelHeader">
            <div>
              <p className="panelLabel">Stage pressure</p>
              <h2>Backlog by workflow lane</h2>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={270}>
            <PieChart>
              <Pie data={stageBacklog} dataKey="count" nameKey="stage" innerRadius={62} outerRadius={105}>
                {stageBacklog.map((stage, index) => (
                  <Cell key={stage.stage} fill={stageColors[index % stageColors.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <ul className="legendList">
            {stageBacklog.map((stage) => (
              <li key={stage.stage}>
                <span>{stage.stage}</span>
                <strong>{stage.count}</strong>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="panel">
        <div className="panelHeader">
          <div>
            <p className="panelLabel">Domain pressure</p>
            <h2>Certification debt and orphaned-account exposure</h2>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={lifecycleRisk}>
            <CartesianGrid stroke="#2b3047" vertical={false} />
            <XAxis dataKey="domain" stroke="#a4adca" />
            <YAxis stroke="#a4adca" />
            <Tooltip />
            <Legend />
            <Bar dataKey="overdueReviews" fill="#8b5cf6" radius={[10, 10, 0, 0]} />
            <Bar dataKey="orphanedAccounts" fill="#ef4444" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </section>
    </div>
  );
}
